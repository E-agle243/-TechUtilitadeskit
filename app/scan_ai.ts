type OCRLine = {
    text: string;
    score: number;
    box: { xmin: number; ymin: number; xmax: number; ymax: number };
};

type ScanWorkerMessage =
    | { type: 'PROGRESS'; message: string; progress?: number; indeterminate?: boolean }
    | { type: 'READY' }
    | { type: 'SUCCESS'; text: string; lines: OCRLine[]; confidence: number }
    | { type: 'ERROR'; message: string };

function inicializarOCR(): void {
    const inputImagen = document.getElementById('subir-imagen') as HTMLInputElement | null;
    const textoEstado = document.getElementById('progreso-texto');
    const barraProgreso = document.getElementById('barra-progreso') as HTMLProgressElement | null;
    const resultadoTexto = document.getElementById('resultado-texto') as HTMLTextAreaElement | null;
    const confianzaResultado = document.getElementById('confianza-resultado');
    const botonCopiar = document.getElementById('copiar-texto') as HTMLButtonElement | null;
    const botonDescargar = document.getElementById('descargar-texto') as HTMLAnchorElement | null;

    if (!inputImagen || !textoEstado || !barraProgreso || !resultadoTexto || !botonCopiar || !botonDescargar) {
        console.error('No se encontraron los elementos necesarios para iniciar el OCR.');
        return;
    }

    const worker = new Worker(new URL('../worker/scan.worker.js', import.meta.url), {
        type: 'module',
        name: 'ocr-worker',
    });
    let modeloListo = false;
    let procesando = false;
    let archivoPendiente: File | null = null;
    let urlDescarga: string | null = null;

    const mostrarProgreso = (mensaje: string, progreso?: number, indeterminado = false): void => {
        textoEstado.textContent = mensaje;
        barraProgreso.hidden = false;
        barraProgreso.toggleAttribute('value', !indeterminado);

        if (typeof progreso === 'number' && !indeterminado) {
            barraProgreso.value = Math.min(100, Math.max(0, progreso));
        } else if (indeterminado) {
            barraProgreso.removeAttribute('value');
        }
    };

    const mostrarError = (mensaje: string): void => {
        textoEstado.textContent = mensaje;
        barraProgreso.hidden = true;
    };

    const iniciarLectura = (archivo: File): void => {
        procesando = true;
        inputImagen.disabled = true;
        resultadoTexto.value = '';
      
        if (confianzaResultado) confianzaResultado.textContent = '';
        botonCopiar.disabled = true;
        botonDescargar.hidden = true;
        if (urlDescarga) {
            URL.revokeObjectURL(urlDescarga);
            urlDescarga = null;
        }
        mostrarProgreso('Leyendo texto…', undefined, true);
        worker.postMessage({ type: 'PROCESS', payload: archivo });
    };

    worker.addEventListener('message', (event: MessageEvent<ScanWorkerMessage>) => {
        const data = event.data;

        if (data.type === 'PROGRESS') {
            mostrarProgreso(data.message, data.progress, data.indeterminate);
            return;
        }

        if (data.type === 'READY') {
            modeloListo = true;
            mostrarProgreso('OCR listo. Selecciona una imagen.', 100);
            barraProgreso.hidden = true;
            if (archivoPendiente) {
                const archivo = archivoPendiente;
                archivoPendiente = null;
                iniciarLectura(archivo);
            }
            return;
        }

        if (data.type === 'SUCCESS') {
            procesando = false;
            inputImagen.disabled = false;
            resultadoTexto.value = data.text;
            botonCopiar.disabled = data.text.length === 0;
            botonDescargar.hidden = data.text.length === 0;

            if (urlDescarga) URL.revokeObjectURL(urlDescarga);
            urlDescarga = URL.createObjectURL(new Blob([data.text], { type: 'text/plain;charset=utf-8' }));
            botonDescargar.href = urlDescarga;

            const fragmento = document.createDocumentFragment();
            for (const linea of data.lines) {
                const elemento = document.createElement('li');
                const porcentaje = Math.round(Math.min(1, Math.max(0, linea.score)) * 100);
                elemento.textContent = `${linea.text} (${porcentaje}%)`;
                fragmento.append(elemento);
            }
         

            if (confianzaResultado) {
                const confianza = Math.round(Math.min(1, Math.max(0, data.confidence)) * 100);
                confianzaResultado.textContent = data.lines.length
                    ? `Confianza promedio: ${confianza}%`
                    : 'No se detectó texto en la imagen.';
            }
            textoEstado.textContent = data.lines.length
                ? `Lectura completada: ${data.lines.length} ${data.lines.length === 1 ? 'línea' : 'líneas'}.`
                : 'No se pudo reconocer texto. Recorta la zona con texto o prueba una imagen con más resolución.';
            barraProgreso.value = 100;
            barraProgreso.hidden = true;
            return;
        }

        if (data.type === 'ERROR') {
            procesando = false;
            archivoPendiente = null;
            inputImagen.disabled = !modeloListo;
            mostrarError(data.message);
        }
    });

    worker.addEventListener('error', (event: ErrorEvent) => {
        console.error('Error inesperado en el worker OCR:', event.message);
        modeloListo = false;
        procesando = false;
        archivoPendiente = null;
        inputImagen.disabled = true;
        mostrarError('No se pudo iniciar el OCR. Recarga la página e inténtalo de nuevo.');
    });

    inputImagen.addEventListener('change', () => {
        const archivo = inputImagen.files?.[0];
        inputImagen.value = '';
        if (!archivo || procesando) return;

        if (!archivo.type.startsWith('image/')) {
            mostrarError('Selecciona un archivo de imagen válido.');
            return;
        }

        if (modeloListo) {
            iniciarLectura(archivo);
        } else {
            archivoPendiente = archivo;
            mostrarProgreso('Imagen lista. Terminando de preparar el OCR…', undefined, true);
        }
    });

    botonCopiar.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(resultadoTexto.value);
            textoEstado.textContent = 'Texto copiado al portapapeles.';
        } catch (error) {
            console.error('No se pudo copiar el texto:', error);
            textoEstado.textContent = 'No se pudo copiar. Selecciona el texto y cópialo manualmente.';
        }
    });

    mostrarProgreso('Preparando el OCR ligero para este navegador…', 0);
    worker.postMessage({ type: 'INIT' });

    window.addEventListener('beforeunload', () => {
        worker.terminate();
        if (urlDescarga) URL.revokeObjectURL(urlDescarga);
    }, { once: true });
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', inicializarOCR, { once: true });
} else {
    inicializarOCR();
}
