import { SpeechToText } from 'runonweb/stt';

const MODEL = 'onnx-community/whisper-tiny';
let transcriptor = null;
let cargaPendiente = null;
let transcribiendo = false;
let archivosModelo = new Map();

function normalizarPorcentaje(valor) {
  if (typeof valor !== 'number' || !Number.isFinite(valor)) return undefined;
  const porcentaje = valor >= 0 && valor <= 1 ? valor * 100 : valor;
  return Math.min(100, Math.max(0, porcentaje));
}

function calcularProgreso(info) {
  if (info.status === 'ready') return 100;

  if (info.status === 'progress_total' &&
      typeof info.loaded === 'number' &&
      typeof info.total === 'number' &&
      info.total > 0) {
    return normalizarPorcentaje((info.loaded / info.total) * 100);
  }

  const nombreArchivo = info.file || 'modelo';
  const actual = archivosModelo.get(nombreArchivo) ?? {};
  if (typeof info.loaded === 'number') actual.loaded = info.loaded;
  if (typeof info.total === 'number' && info.total > 0) actual.total = info.total;

  if (info.status === 'done') {
    actual.progress = 100;
  } else {
    const recibido = normalizarPorcentaje(info.progress);
    if (recibido !== undefined) actual.progress = recibido;
    if (actual.total && typeof actual.loaded === 'number') {
      actual.progress = normalizarPorcentaje((actual.loaded / actual.total) * 100);
    }
  }
  archivosModelo.set(nombreArchivo, actual);

  const elementos = [...archivosModelo.values()];
  if (elementos.length === 0) return undefined;

  const todosConTamanos = elementos.every((elemento) =>
    typeof elemento.loaded === 'number' && typeof elemento.total === 'number' && elemento.total > 0,
  );
  if (todosConTamanos) {
    const recibido = elementos.reduce((suma, elemento) => suma + elemento.loaded, 0);
    const total = elementos.reduce((suma, elemento) => suma + elemento.total, 0);
    if (total > 0) return normalizarPorcentaje((recibido / total) * 100);
  }

  const porcentajes = elementos
    .map((elemento) => elemento.progress)
    .filter((porcentaje) => typeof porcentaje === 'number');
  if (porcentajes.length === 0) return undefined;
  return porcentajes.reduce((suma, porcentaje) => suma + porcentaje, 0) / porcentajes.length;
}

function enviarProgreso(info) {
  const valorProgreso = calcularProgreso(info);
  const progreso = typeof valorProgreso === 'number'
    ? Math.round(valorProgreso)
    : undefined;

  const mensaje = info.status === 'loading'
    ? 'Preparando el modelo multilingüe…'
    : ['initiate', 'download', 'progress', 'progress_total', 'done'].includes(info.status)
      ? progreso === undefined
        ? 'Descargando el modelo de voz…'
        : `Descargando modelo: ${progreso}%`
      : info.status === 'transcribing'
        ? 'Reconociendo voz…'
        : info.status === 'ready'
          ? 'Modelo de voz listo.'
          : 'Preparando el modelo de voz…';

  self.postMessage({
    type: 'PROGRESS',
    message: mensaje,
    progress: progreso,
    indeterminate: info.status === 'transcribing' || (
      ['initiate', 'download', 'progress', 'progress_total', 'done'].includes(info.status) &&
      progreso === undefined
    ),
  });
}

async function cargarModelo() {
  if (transcriptor) return;
  if (cargaPendiente) return cargaPendiente;

  cargaPendiente = (async () => {
    archivosModelo = new Map();
    const instancia = new SpeechToText({
      model: MODEL,
      device: 'auto',
      onProgress: enviarProgreso,
    });

    try {
      await instancia.load();
      transcriptor = instancia;
    } catch (error) {
      instancia.dispose();
      throw error;
    }
  })();

  try {
    await cargaPendiente;
  } finally {
    cargaPendiente = null;
  }
}

function enviarError(error, phase) {
  console.error(phase === 'load' ? 'No se pudo cargar Whisper:' : 'No se pudo transcribir el audio:', error);
  const detalle = error instanceof Error ? error.message : String(error);
  const prefijo = phase === 'load'
    ? 'No se pudo descargar o iniciar el modelo de transcripción.'
    : 'No se pudo completar la transcripción.';
  self.postMessage({ type: 'ERROR', phase, message: `${prefijo} ${detalle}` });
}

self.addEventListener('message', async (event) => {
  const { type, payload, language } = event.data ?? {};

  if (type === 'INIT') {
    try {
      await cargarModelo();
      self.postMessage({ type: 'READY' });
    } catch (error) {
      enviarError(error, 'load');
    }
    return;
  }

  if (type !== 'TRANSCRIBE') return;

  if (!transcriptor) {
    self.postMessage({
      type: 'ERROR',
      phase: 'transcribe',
      message: 'El modelo todavía no está listo. Espera un momento e inténtalo de nuevo.',
    });
    return;
  }
  if (transcribiendo) return;
  if (!(payload instanceof ArrayBuffer) || payload.byteLength === 0 || payload.byteLength % 4 !== 0) {
    self.postMessage({
      type: 'ERROR',
      phase: 'transcribe',
      message: 'No se pudo preparar el audio. Selecciona de nuevo un archivo de audio válido.',
    });
    return;
  }

  transcribiendo = true;
  try {
    const audio = new Float32Array(payload);
    const opciones = {};
    if (language && language !== 'auto') opciones.language = language;
    const resultado = await transcriptor.transcribe(audio, opciones);
    self.postMessage({ type: 'SUCCESS', text: resultado.text });
  } catch (error) {
    enviarError(error, 'transcribe');
  } finally {
    transcribiendo = false;
  }
});