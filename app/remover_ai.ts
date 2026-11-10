type WorkerMessage =
    | { type: 'PROGRESS'; message: string; progress?: number; indeterminate?: boolean }
    | { type: 'READY' }
    | { type: 'SUCCESS'; result: Blob }
    | { type: 'ERROR'; message: string };

function inicializarRemovedor(): void {
    const inputElement = document.getElementById('subir-imagen') as HTMLInputElement | null;
    const imgResultado = document.getElementById('resultado-ia') as HTMLImageElement | null;
    const textoProgreso = document.getElementById('progreso-texto');
    const barraProgreso = document.getElementById('barra-progreso') as HTMLProgressElement | null;
    const placeholderTexto = document.getElementById('placeholder-texto');
    const descargarResultado = document.getElementById('descargar-resultado') as HTMLAnchorElement | null;

    if (!inputElement || !imgResultado || !textoProgreso || !barraProgreso) {
        console.error('No se encontraron los elementos requeridos para remover el fondo.');
        return;
    }

    const worker = new Worker(new URL('/worker/remover.worker.js', import.meta.url), { type: 'module' });
    let modeloListo = false;
    let procesando = false;
    let urlResultado: string | null = null;
    let inicioProcesamiento: number | null = null;
    let temporizadorProcesamiento: number | null = null;

    const mostrarProgreso = (
        mensaje: string,
        progreso?: number,
        indeterminado = false,
    ): void => {
        textoProgreso.textContent = mensaje;
        barraProgreso.hidden = false;
        barraProgreso.toggleAttribute('value', !indeterminado);

        if (!indeterminado) {
            barraProgreso.value = Math.min(100, Math.max(0, progreso ?? 0));
            barraProgreso.setAttribute('aria-valuenow', String(Math.round(barraProgreso.value)));
        } else {
            barraProgreso.removeAttribute('aria-valuenow');
        }
    };

    const mostrarError = (mensaje: string): void => {
        textoProgreso.textContent = mensaje;
        barraProgreso.hidden = true;
    };

    const detenerTemporizadorProcesamiento = (): void => {
        if (temporizadorProcesamiento !== null) {
            window.clearInterval(temporizadorProcesamiento);
            temporizadorProcesamiento = null;
        }
        inicioProcesamiento = null;
    };

    const actualizarEstadoProcesamiento = (): void => {
        if (inicioProcesamiento === null) return;
        const segundos = Math.floor((Date.now() - inicioProcesamiento) / 1000);
        const minutosTranscurridos = Math.floor(segundos / 60);
        const segundosRestantes = String(segundos % 60).padStart(2, '0');
        const tiempo = `${minutosTranscurridos}:${segundosRestantes}`;
        const nota = segundos >= 30 ? ' Las imágenes grandes pueden tardar varios minutos.' : '';
        textoProgreso.textContent = `Procesando imagen con IA local… ${tiempo}.${nota}`;
    };

    worker.addEventListener('message', (event: MessageEvent<WorkerMessage>) => {
        const data = event.data;

        if (data.type === 'PROGRESS') {
            mostrarProgreso(data.message, data.progress, data.indeterminate);
            return;
        }

        if (data.type === 'READY') {
            modeloListo = true;
            inputElement.disabled = false;
            mostrarProgreso('Selecciona una imagen.', 100);
            barraProgreso.hidden = true;
            return;
        }

        if (data.type === 'SUCCESS') {
            detenerTemporizadorProcesamiento();
            if (urlResultado) URL.revokeObjectURL(urlResultado);
            urlResultado = URL.createObjectURL(data.result);
            imgResultado.src = urlResultado;
            imgResultado.style.display = 'inline-block';
            if (placeholderTexto) placeholderTexto.style.display = 'none';
            if (descargarResultado) {
                descargarResultado.href = urlResultado;
                descargarResultado.hidden = false;
            }
            inputElement.disabled = false;
            procesando = false;
            barraProgreso.value = 100;
            barraProgreso.setAttribute('aria-valuenow', '100');
            textoProgreso.textContent = '¡Fondo removido con éxito!';
            return;
        }

        if (data.type === 'ERROR') {
            detenerTemporizadorProcesamiento();
            inputElement.disabled = !modeloListo;
            procesando = false;
            mostrarError(data.message);
        }
    });

    worker.addEventListener('error', (event: ErrorEvent) => {
        detenerTemporizadorProcesamiento();
        console.error('Error inesperado en el worker:', event.message);
        modeloListo = false;
        procesando = false;
        inputElement.disabled = true;
        mostrarError('No se pudo iniciar. Recarga la página e inténtalo de nuevo.');
    });

    inputElement.disabled = true;
    mostrarProgreso('Iniciando...', 0);
    worker.postMessage({ type: 'INIT' });

    inputElement.addEventListener('change', () => {
        const imageFile = inputElement.files?.[0];
        if (!imageFile || procesando) return;

        if (!imageFile.type.startsWith('image/')) {
            mostrarError('Selecciona un archivo de imagen válido.');
            inputElement.value = '';
            return;
        }

        if (!modeloListo) {
            mostrarError('Se está cargando todo para iniciar. Espera un momento.');
            return;
        }

        procesando = true;
        inputElement.disabled = true;
        if (urlResultado) {
            URL.revokeObjectURL(urlResultado);
            urlResultado = null;
        }
        imgResultado.removeAttribute('src');
        imgResultado.style.display = 'none';
        if (descargarResultado) descargarResultado.hidden = true;
        if (placeholderTexto) placeholderTexto.style.display = 'block';
        mostrarProgreso('Procesando imagen', undefined, true);
        inicioProcesamiento = Date.now();
        actualizarEstadoProcesamiento();
        temporizadorProcesamiento = window.setInterval(actualizarEstadoProcesamiento, 1000);
        worker.postMessage({ type: 'PROCESS', payload: imageFile });
        inputElement.value = '';
    });

    window.addEventListener('beforeunload', () => {
        worker.terminate();
        detenerTemporizadorProcesamiento();
        if (urlResultado) URL.revokeObjectURL(urlResultado);
    }, { once: true });
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', inicializarRemovedor, { once: true });
} else {
    inicializarRemovedor();
}
