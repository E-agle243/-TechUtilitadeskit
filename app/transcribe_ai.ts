type TranscribeWorkerMessage =
    | { type: 'PROGRESS'; message: string; progress?: number; indeterminate?: boolean }
    | { type: 'READY' }
    | { type: 'SUCCESS'; text: string }
    | { type: 'ERROR'; phase: 'load' | 'transcribe'; message: string };

const SAMPLE_RATE = 16_000;
const MAX_FILE_SIZE = 200 * 1024 * 1024;
const SUPPORTED_EXTENSIONS = /\.(wav|mp3|m4a|mp4|aac|ogg|oga|opus|webm|flac)$/i;

function inicializarTranscripcion(): void {
    const inputAudio = document.getElementById('subir-audio') as HTMLInputElement | null;
    const selectorIdioma = document.getElementById('idioma-audio') as HTMLSelectElement | null;
    const textoEstado = document.getElementById('progreso-texto');
    const barraProgreso = document.getElementById('barra-progreso') as HTMLProgressElement | null;
    const resultadoTexto = document.getElementById('resultado-texto') as HTMLTextAreaElement | null;
    const botonCopiar = document.getElementById('copiar-texto') as HTMLButtonElement | null;
    const botonDescargar = document.getElementById('descargar-texto') as HTMLAnchorElement | null;
    const botonReintentar = document.getElementById('reintentar-modelo') as HTMLButtonElement | null;

    if (!inputAudio || !selectorIdioma || !textoEstado || !barraProgreso ||
        !resultadoTexto || !botonCopiar || !botonDescargar || !botonReintentar) {
        console.error('No se encontraron los elementos necesarios para iniciar la transcripción.');
        return;
    }

    const worker = new Worker(new URL('../worker/transcribe.worker.js', import.meta.url), {
        type: 'module',
        name: 'transcripcion-worker',
    });
    let modeloListo = false;
    let procesando = false;
    let modeloCargando = false;
    let archivoPendiente: File | null = null;
    let urlDescarga: string | null = null;

    const mostrarProgreso = (mensaje: string, progreso?: number, indeterminado = false): void => {
        textoEstado.textContent = mensaje;
        barraProgreso.hidden = false;
        if (indeterminado || typeof progreso !== 'number') {
            barraProgreso.removeAttribute('value');
        } else {
            barraProgreso.value = Math.min(100, Math.max(0, progreso));
        }
    };

    const iniciarCargaModelo = (): void => {
        if (modeloCargando || modeloListo) return;
        modeloCargando = true;
        botonReintentar.hidden = true;
        mostrarProgreso('Preparando el modelo de voz para el navegador…', 0);
        worker.postMessage({ type: 'INIT' });
    };

    const iniciarTranscripcion = async (archivo: File): Promise<void> => {
        if (procesando) return;
        procesando = true;
        inputAudio.disabled = true;
        selectorIdioma.disabled = true;
        botonCopiar.disabled = true;
        botonDescargar.hidden = true;
        resultadoTexto.value = '';
        if (urlDescarga) {
            URL.revokeObjectURL(urlDescarga);
            urlDescarga = null;
        }

        mostrarProgreso('Decodificando y preparando el audio…', undefined, true);
        let contexto: AudioContext | null = null;
        try {
            const duracion = await consultarDuracion(archivo);
            if (duracion !== null && duracion > 60 * 60) {
                throw new Error('El audio supera el límite de 60 minutos. Divide el archivo e inténtalo de nuevo.');
            }

            contexto = new AudioContext();
            const audioBuffer = await contexto.decodeAudioData(await archivo.arrayBuffer());
            if (audioBuffer.duration > 60 * 60) {
                throw new Error('El audio supera el límite de 60 minutos. Divide el archivo e inténtalo de nuevo.');
            }

            const muestras = await convertirAMono16k(audioBuffer);
            await contexto.close();
            contexto = null;

            mostrarProgreso('Transcribiendo en el navegador…', undefined, true);
            worker.postMessage({
                type: 'TRANSCRIBE',
                payload: muestras.buffer,
                language: selectorIdioma.value,
            }, [muestras.buffer]);
        } catch (error) {
            if (contexto && contexto.state !== 'closed') await contexto.close();
            procesando = false;
            inputAudio.disabled = false;
            selectorIdioma.disabled = false;
            const detalle = error instanceof Error ? error.message : String(error);
            console.error('No se pudo preparar el audio para transcribir:', error);
            textoEstado.textContent = detalle.includes('límite de 60 minutos')
                ? detalle
                : `No se pudo abrir el audio. Verifica que el formato sea compatible con este navegador. ${detalle}`;
            barraProgreso.hidden = true;
        }
    };

    worker.addEventListener('message', (event: MessageEvent<TranscribeWorkerMessage>) => {
        const data = event.data;

        if (data.type === 'PROGRESS') {
            mostrarProgreso(data.message, data.progress, data.indeterminate);
            return;
        }

        if (data.type === 'READY') {
            modeloCargando = false;
            modeloListo = true;
            botonReintentar.hidden = true;
            if (archivoPendiente) {
                const archivo = archivoPendiente;
                archivoPendiente = null;
                void iniciarTranscripcion(archivo);
            } else {
                textoEstado.textContent = 'Modelo listo. Selecciona un audio para transcribir.';
                barraProgreso.hidden = true;
            }
            return;
        }

        if (data.type === 'SUCCESS') {
            procesando = false;
            inputAudio.disabled = false;
            selectorIdioma.disabled = false;
            resultadoTexto.value = data.text;
            botonCopiar.disabled = data.text.length === 0;
            botonDescargar.hidden = data.text.length === 0;

            if (urlDescarga) URL.revokeObjectURL(urlDescarga);
            urlDescarga = URL.createObjectURL(new Blob([data.text], { type: 'text/plain;charset=utf-8' }));
            botonDescargar.href = urlDescarga;

            textoEstado.textContent = data.text
                ? 'Transcripción completada.'
                : 'No se detectó voz. Comprueba el audio o selecciona otro idioma.';
            barraProgreso.hidden = true;
            return;
        }

        if (data.type === 'ERROR') {
            if (data.phase === 'load') {
                modeloCargando = false;
                modeloListo = false;
                botonReintentar.hidden = false;
                textoEstado.textContent = data.message;
                barraProgreso.hidden = true;
                return;
            }

            archivoPendiente = null;
            procesando = false;
            inputAudio.disabled = false;
            selectorIdioma.disabled = false;
            textoEstado.textContent = data.message;
            barraProgreso.hidden = true;
        }
    });

    worker.addEventListener('error', (event: ErrorEvent) => {
        console.error('Error inesperado en el worker de transcripción:', event.message);
        modeloCargando = false;
        modeloListo = false;
        procesando = false;
        archivoPendiente = null;
        inputAudio.disabled = false;
        selectorIdioma.disabled = false;
        botonReintentar.hidden = false;
        textoEstado.textContent = 'El worker de transcripción falló. Recarga la página e inténtalo de nuevo.';
        barraProgreso.hidden = true;
    });

    inputAudio.addEventListener('change', () => {
        const archivo = inputAudio.files?.[0];
        inputAudio.value = '';
        if (!archivo || procesando) return;

        if (archivo.size > MAX_FILE_SIZE) {
            textoEstado.textContent = 'El archivo supera el límite de 200 MB.';
            barraProgreso.hidden = true;
            return;
        }
        if (!archivo.type.startsWith('audio/') && !SUPPORTED_EXTENSIONS.test(archivo.name)) {
            textoEstado.textContent = 'Selecciona un archivo de audio compatible (WAV, MP3, M4A, OGG, WebM o FLAC).';
            barraProgreso.hidden = true;
            return;
        }

        if (modeloListo) {
            void iniciarTranscripcion(archivo);
        } else {
            archivoPendiente = archivo;
            iniciarCargaModelo();
            mostrarProgreso('Audio seleccionado. Esperando a que el modelo esté listo…', undefined, true);
        }
    });

    botonReintentar.addEventListener('click', iniciarCargaModelo);

    botonCopiar.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(resultadoTexto.value);
            textoEstado.textContent = 'Transcripción copiada al portapapeles.';
        } catch (error) {
            console.error('No se pudo copiar la transcripción:', error);
            textoEstado.textContent = 'No se pudo copiar. Selecciona el texto y cópialo manualmente.';
        }
    });

    iniciarCargaModelo();
    window.addEventListener('beforeunload', () => {
        worker.terminate();
        if (urlDescarga) URL.revokeObjectURL(urlDescarga);
    }, { once: true });
}

async function convertirAMono16k(audio: AudioBuffer): Promise<Float32Array> {
    const cantidadMuestras = Math.max(1, Math.ceil(audio.duration * SAMPLE_RATE));
    const contextoOffline = new OfflineAudioContext(1, cantidadMuestras, SAMPLE_RATE);
    const fuente = contextoOffline.createBufferSource();
    fuente.buffer = audio;
    fuente.connect(contextoOffline.destination);
    fuente.start();
    const resampleado = await contextoOffline.startRendering();
    return new Float32Array(resampleado.getChannelData(0));
}

function consultarDuracion(archivo: File): Promise<number | null> {
    return new Promise((resolve) => {
        const url = URL.createObjectURL(archivo);
        const reproductor = document.createElement('audio');
        let temporizador: number | null = null;
        let finalizado = false;
        const finalizar = (duracion: number | null): void => {
            if (finalizado) return;
            finalizado = true;
            if (temporizador !== null) window.clearTimeout(temporizador);
            reproductor.removeAttribute('src');
            reproductor.load();
            URL.revokeObjectURL(url);
            resolve(duracion);
        };

        reproductor.preload = 'metadata';
        temporizador = window.setTimeout(() => finalizar(null), 10_000);
        reproductor.addEventListener('loadedmetadata', () => {
            finalizar(Number.isFinite(reproductor.duration) ? reproductor.duration : null);
        }, { once: true });
        reproductor.addEventListener('error', () => finalizar(null), { once: true });
        reproductor.src = url;
        reproductor.load();
    });
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', inicializarTranscripcion, { once: true });
} else {
    inicializarTranscripcion();
}
