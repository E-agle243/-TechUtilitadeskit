import { RemoveBackground } from 'runonweb/remove-bg';

let remover = null;
let inicializando = false;
let procesando = false;

function mensajeError(error, mensajePredeterminado) {
  console.error(mensajePredeterminado, error);
  const detalle = error instanceof Error ? error.message : String(error);
  self.postMessage({ type: 'ERROR', message: `${mensajePredeterminado} ${detalle}` });
}

function informarProgreso(info) {
  if (info.status === 'processing') return;

  const valor = typeof info.progress === 'number' ? info.progress : undefined;
  const porcentaje = valor === undefined
    ? undefined
    : Math.min(100, Math.max(0, Math.round(valor > 1 ? valor : valor * 100)));
  const mensaje = porcentaje === undefined
    ? 'Preparando…'
    : `Dejando todo listo: ${porcentaje}%`;

  self.postMessage({
    type: 'PROGRESS',
    message: mensaje,
    progress: porcentaje,
  });
}

function crearRemovedor(device) {
  return new RemoveBackground({ device, onProgress: informarProgreso });
}

self.addEventListener('message', async (event) => {
  const { type, payload } = event.data ?? {};

  if (type === 'INIT') {
    if (remover || inicializando) return;
    inicializando = true;

    try {
      remover = crearRemovedor('wasm');
      await remover.load();
      self.postMessage({ type: 'READY' });
    } catch (error) {
      remover?.dispose();
      remover = null;
      mensajeError(error, 'Error al cargar.');
    } finally {
      inicializando = false;
    }
    return;
  }

  if (type === 'PROCESS') {
    if (!remover) {
      self.postMessage({
        type: 'ERROR',
        message: 'Ha ocurrido un error. Recarga la página e inténtalo de nuevo.',
      });
      return;
    }
    if (procesando) return;
    if (!(payload instanceof Blob) || !payload.type.startsWith('image/')) {
      self.postMessage({ type: 'ERROR', message: 'El archivo seleccionado no es una imagen válida.' });
      return;
    }

    procesando = true;
    self.postMessage({
      type: 'PROGRESS',
      message: 'Procesando imagen…',
      indeterminate: true,
    });

    const imageUrl = URL.createObjectURL(payload);
    try {
      const pngBlob = await remover.remove(imageUrl);
      self.postMessage({ type: 'SUCCESS', result: pngBlob });
    } catch (error) {
      mensajeError(error, 'Error al procesar la imagen.');
    } finally {
      URL.revokeObjectURL(imageUrl);
      procesando = false;
    }
  }
});
