import { OCR } from 'runonweb/ocr';

let ocr = null;
let inicializacion = null;
let procesando = false;

function enviarProgreso(info, size = 'tiny') {
  const progreso = typeof info.progress === 'number'
    ? Math.min(100, Math.max(0, Math.round(info.progress)))
    : undefined;
  const etiquetaModelo = size === 'small' ? 'preciso' : 'rápido';
  const mensajes = {
    loading: `Preparando el modelo OCR ${etiquetaModelo}…`,
    progress: progreso === undefined
      ? 'Descargando el modelo OCR…'
      : `Descargando modelo OCR: ${progreso}%`,
    ready: 'Modelo OCR listo.',
    recognizing: 'Reconociendo texto…',
    done: 'Lectura completada.',
  };

  self.postMessage({
    type: 'PROGRESS',
    message: mensajes[info.status] ?? 'Preparando OCR…',
    progress: progreso,
    indeterminate: info.status === 'recognizing',
  });
}

function crearOCR(size) {
  return new OCR({
    size,
    device: 'auto',
    onProgress: (info) => enviarProgreso(info, size),
  });
}

async function inicializar() {
  if (ocr) return;
  if (inicializacion) return inicializacion;

  inicializacion = (async () => {
    const instancia = crearOCR('tiny');

    try {
      await instancia.load();
      ocr = instancia;
    } catch (error) {
      await instancia.dispose();
      throw error;
    }
  })();

  try {
    await inicializacion;
  } finally {
    inicializacion = null;
  }
}

async function cambiarAModeloPreciso() {
  const modeloActual = ocr;
  ocr = null;
  await modeloActual?.dispose();

  const instancia = crearOCR('small');
  try {
    await instancia.load();
    ocr = instancia;
  } catch (error) {
    await instancia.dispose();
    throw error;
  }
}

function describirError(error, prefijo) {
  console.error(prefijo, error);
  const detalle = error instanceof Error ? error.message : String(error);
  self.postMessage({ type: 'ERROR', message: `${prefijo} ${detalle}` });
}

async function convertirAPixeles(imagen) {
  const bitmap = await createImageBitmap(imagen);
  try {
    const escala = Math.min(1, Math.sqrt(12000000 / (bitmap.width * bitmap.height)));
    const ancho = Math.max(1, Math.round(bitmap.width * escala));
    const alto = Math.max(1, Math.round(bitmap.height * escala));
    const canvas = new OffscreenCanvas(ancho, alto);
    const contexto = canvas.getContext('2d', { willReadFrequently: true });
    if (!contexto) throw new Error('El navegador no pudo preparar los píxeles de la imagen.');
    contexto.drawImage(bitmap, 0, 0, ancho, alto);
    return contexto.getImageData(0, 0, ancho, alto);
  } finally {
    bitmap.close();
  }
}

function mejorarPixeles(imagen, metodo) {
  const { width, height, data } = imagen;
  const cantidad = width * height;
  const grises = new Uint8Array(cantidad);
  const histograma = new Uint32Array(256);

  for (let i = 0; i < cantidad; i++) {
    const offset = i * 4;
    const gris = Math.round(
      data[offset] * 0.299 +
      data[offset + 1] * 0.587 +
      data[offset + 2] * 0.114,
    );
    grises[i] = gris;
    histograma[gris]++;
  }

  const percentil = (fraccion) => {
    const objetivo = Math.floor(cantidad * fraccion);
    let acumulado = 0;
    for (let nivel = 0; nivel < histograma.length; nivel++) {
      acumulado += histograma[nivel];
      if (acumulado >= objetivo) return nivel;
    }
    return 255;
  };
  const negro = percentil(0.02);
  const blanco = Math.max(negro + 1, percentil(0.98));
  const rango = blanco - negro;
  const contraste = new Uint8Array(cantidad);

  for (let i = 0; i < cantidad; i++) {
    contraste[i] = Math.max(0, Math.min(255, Math.round(((grises[i] - negro) * 255) / rango)));
  }

  const salida = new Uint8ClampedArray(cantidad * 4);
  if (metodo === 'nitidez') {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const indice = y * width + x;
        const centro = contraste[indice] * 5;
        const arriba = y > 0 ? contraste[indice - width] : contraste[indice];
        const abajo = y + 1 < height ? contraste[indice + width] : contraste[indice];
        const izquierda = x > 0 ? contraste[indice - 1] : contraste[indice];
        const derecha = x + 1 < width ? contraste[indice + 1] : contraste[indice];
        const valor = Math.max(0, Math.min(255, centro - arriba - abajo - izquierda - derecha));
        const offset = indice * 4;
        salida[offset] = valor;
        salida[offset + 1] = valor;
        salida[offset + 2] = valor;
        salida[offset + 3] = 255;
      }
    }
  } else {
    const integral = new Uint32Array((width + 1) * (height + 1));
    for (let y = 1; y <= height; y++) {
      let sumaFila = 0;
      for (let x = 1; x <= width; x++) {
        sumaFila += contraste[(y - 1) * width + x - 1];
        integral[y * (width + 1) + x] = integral[(y - 1) * (width + 1) + x] + sumaFila;
      }
    }

    const radio = Math.max(8, Math.min(18, Math.round(Math.min(width, height) * 0.025)));
    for (let y = 0; y < height; y++) {
      const arriba = Math.max(0, y - radio);
      const abajo = Math.min(height, y + radio + 1);
      for (let x = 0; x < width; x++) {
        const izquierda = Math.max(0, x - radio);
        const derecha = Math.min(width, x + radio + 1);
        const anchoVentana = derecha - izquierda;
        const altoVentana = abajo - arriba;
        const suma =
          integral[abajo * (width + 1) + derecha] -
          integral[arriba * (width + 1) + derecha] -
          integral[abajo * (width + 1) + izquierda] +
          integral[arriba * (width + 1) + izquierda];
        const media = suma / (anchoVentana * altoVentana);
        const indice = y * width + x;
        const valor = contraste[indice] < media - 7 ? 0 : 255;
        const offset = indice * 4;
        salida[offset] = valor;
        salida[offset + 1] = valor;
        salida[offset + 2] = valor;
        salida[offset + 3] = 255;
      }
    }
  }

  return new ImageData(salida, width, height);
}

function puntuacion(resultado) {
  const texto = resultado.text.trim();
  return (texto.length + resultado.lines.length * 10) * resultado.confidence;
}

function lecturaSuficiente(resultado) {
  return resultado.text.trim().length >= 12 && resultado.confidence >= 0.78;
}

self.addEventListener('message', async (event) => {
  const { type, payload } = event.data ?? {};

  if (type === 'INIT') {
    try {
      await inicializar();
      self.postMessage({ type: 'READY' });
    } catch (error) {
      describirError(error, 'No se pudo cargar el modelo OCR.');
    }
    return;
  }

  if (type !== 'PROCESS') return;

  if (!ocr) {
    self.postMessage({
      type: 'ERROR',
      message: 'El modelo OCR aún no está listo. Espera un momento e inténtalo de nuevo.',
    });
    return;
  }
  if (procesando) return;
  if (!(payload instanceof Blob) || !payload.type.startsWith('image/')) {
    self.postMessage({ type: 'ERROR', message: 'El archivo seleccionado no es una imagen válida.' });
    return;
  }

  procesando = true;
  try {
    const pixeles = await convertirAPixeles(payload);
    let mejorResultado = await ocr.read(pixeles);
    let mejorPuntuacion = puntuacion(mejorResultado);

    if (!lecturaSuficiente(mejorResultado)) {
      self.postMessage({
        type: 'PROGRESS',
        message: 'Mejorando la lectura con un modelo más preciso…',
        indeterminate: true,
      });
      await cambiarAModeloPreciso();

      const originalPreciso = await ocr.read(pixeles);
      const puntuacionOriginal = puntuacion(originalPreciso);
      if (puntuacionOriginal > mejorPuntuacion) {
        mejorResultado = originalPreciso;
        mejorPuntuacion = puntuacionOriginal;
      }

      if (!lecturaSuficiente(mejorResultado)) {
        for (const [metodo, mensaje] of [
          ['nitidez', 'Aumentando el contraste y la nitidez…'],
          ['adaptativo', 'Probando una mejora de contraste local…'],
        ]) {
          self.postMessage({ type: 'PROGRESS', message, indeterminate: true });
          const versionMejorada = mejorarPixeles(pixeles, metodo);
          const resultado = await ocr.read(versionMejorada);
          const puntuacionResultado = puntuacion(resultado);
          if (puntuacionResultado > mejorPuntuacion) {
            mejorResultado = resultado;
            mejorPuntuacion = puntuacionResultado;
          }
          if (lecturaSuficiente(mejorResultado)) break;
        }
      }
    }

    self.postMessage({
      type: 'SUCCESS',
      text: mejorResultado.text,
      lines: mejorResultado.lines,
      confidence: mejorResultado.confidence,
    });
  } catch (error) {
    describirError(error, 'No se pudo leer el texto de la imagen.');
  } finally {
    procesando = false;
  }
});