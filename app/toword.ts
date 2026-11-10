import type { PDFPageProxy } from 'pdfjs-dist';
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

const TAMANO_MAXIMO = 50 * 1024 * 1024;
const PAGINAS_MAXIMAS = 120;
const PIXELES_PAGINA_MAXIMOS = 14_000_000;

type ModoConversion = 'fluido' | 'hibrido' | 'imagen';

type FragmentoTexto = {
  texto: string;
  x: number;
  y: number;
  ancho: number;
  tamano: number;
  fuente: string;
  negrita: boolean;
  cursiva: boolean;
  mono: boolean;
  serif: boolean;
  subrayado?: boolean;
  tachado?: boolean;
  colorTexto?: string;
  superindice?: boolean;
  subindice?: boolean;
};

type LineaTexto = {
  fragmentos: FragmentoTexto[];
  columnas: FragmentoTexto[][];
  x: number;
  y: number;
  ancho: number;
  tamano: number;
  texto: string;
  colorFondoLinea?: string;
  bordeInferiorColor?: string;
  grosorBordeInferior?: number;
  bordeIzquierdoColor?: string;
  bordeCaja?: 'none' | 'solid' | 'dashed';
  colorBordeCaja?: string;
  tipoVinetaGrafica?: 'none' | 'solid' | 'hollow';
};

type CeldaReconstruida = {
  lineas: FragmentoTexto[][];
  colSpan: number;
  alineacion: 'left' | 'center' | 'right';
  colorFondo?: string;
  negritaCelda?: boolean;
};

type FilaTablaReconstruida = {
  celdas: CeldaReconstruida[];
  esEncabezado: boolean;
  esTotal: boolean;
};

type RegionGrafica = {
  yPdf: number;
  anchoPts: number;
  altoPts: number;
  datosPng: Uint8Array;
};

type BloqueEstructural =
  | {
      tipo: 'parrafo';
      yRef: number;
      lineas: LineaTexto[];
      esTitulo: boolean;
      nivelTitulo: 1 | 2 | 3;
      esLista: boolean;
      nivelLista: number;
      esOrdenada: boolean;
      esCajaFormula: boolean;
      centrado: boolean;
      colorFondo?: string;
      colorBordeIzq?: string;
      colorBordeInf?: string;
      grosorBordeInf?: number;
      bordeCaja?: 'none' | 'solid' | 'dashed';
      colorBordeCaja?: string;
    }
  | {
      tipo: 'tabla';
      yRef: number;
      filas: FilaTablaReconstruida[];
      anchosColumnasPct: number[];
    }
  | {
      tipo: 'columnas_paralelas';
      yRef: number;
      izquierda: BloqueEstructural[];
      derecha: BloqueEstructural[];
    }
  | {
      tipo: 'imagen_flujo';
      yRef: number;
      region: RegionGrafica;
    };

type PaginaConvertida = {
  ancho: number;
  alto: number;
  lineas: LineaTexto[];
  piePagina: string;
  textoOCR: string;
  imagen?: Uint8Array;
};

type LineaOCR = {
  text: string;
  score: number;
  box: { xmin: number; ymin: number; xmax: number; ymax: number };
};

type ResultadoOCR = {
  text: string;
  lines: LineaOCR[];
};

type MensajeOCR =
  | { type: 'PROGRESS'; message: string; progress?: number; indeterminate?: boolean }
  | { type: 'READY' }
  | ({ type: 'SUCCESS' } & ResultadoOCR)
  | { type: 'ERROR'; message: string };

type InspectorVisual = {
  muestrearFondoHex: (xPdf: number, yPdf: number, anchoPdf: number, altoPdf: number) => string | undefined;
  muestrearFondoBandaCompletaHex: (yPdf: number, altoPdf: number, anchoPaginaPdf: number) => string | undefined;
  muestrearColorTextoHex: (xPdf: number, yPdf: number, anchoPdf: number, altoPdf: number, fondoHex?: string) => string;
  medirDensidadEInclinacion: (xPdf: number, yPdf: number, anchoPdf: number, tamanoPdf: number) => { densidad: number; inclinacion: number };
  detectarBordeIzquierdoHex: (xPdf: number, yPdf: number, altoPdf: number, anchoPaginaPdf: number) => string | undefined;
  detectarCajaCerradaReal: (xPdf: number, yPdf: number, anchoPdf: number, altoPdf: number, anchoPaginaPdf: number) => { tipo: 'none' | 'solid' | 'dashed'; color?: string };
  detectarReglaDebajoDeLinea: (yLineaPdf: number, yLimiteInferiorPdf: number, anchoPaginaPdf: number) => { colorHex: string; grosorOctavosPt: number } | undefined;
  detectarIntervalosSubrayadoTachado: (xPdf: number, yPdf: number, anchoPdf: number, tamanoPdf: number) => {
    subrayados: [number, number][];
    tachados: [number, number][];
  };
  detectarTipoVinetaGrafica: (xPdf: number, yPdf: number, tamanoPdf: number) => 'none' | 'solid' | 'hollow';
  hayLineaHorizontalEntre: (xMinPdf: number, xMaxPdf: number, ySuperiorPdf: number, yInferiorPdf: number) => boolean;
  extraerFigurasGraficas: (lineasTexto: LineaTexto[], anchoPagina: number, altoPagina: number) => Promise<RegionGrafica[]>;
  destruir: () => void;
};

function inicializarConvertidor(): void {
  const inputPdf = document.getElementById('subir-pdf') as HTMLInputElement | null;
  const zonaArchivo = document.getElementById('zona-archivo');
  const tarjetaArchivo = document.getElementById('archivo-seleccionado');
  const nombreArchivo = document.getElementById('nombre-archivo');
  const tamanoArchivo = document.getElementById('tamano-archivo');
  const botonConvertir = document.getElementById('convertir') as HTMLButtonElement | null;
  const enlaceDescarga = document.getElementById('descargar-word') as HTMLAnchorElement | null;
  const textoEstado = document.getElementById('progreso-texto');
  const barraProgreso = document.getElementById('barra-progreso') as HTMLProgressElement | null;
  const resultado = document.getElementById('resultado');
  const vistaPrevia = document.getElementById('vista-previa');
  const estadisticas = document.getElementById('estadisticas-conversion');

  if (
    !inputPdf || !zonaArchivo || !tarjetaArchivo || !nombreArchivo || !tamanoArchivo ||
    !botonConvertir || !enlaceDescarga || !textoEstado || !barraProgreso ||
    !resultado || !vistaPrevia
  ) {
    console.error('No se encontraron los elementos necesarios para iniciar el convertidor PDF a Word.');
    return;
  }

  let archivoActual: File | null = null;
  let urlDescarga: string | null = null;
  let trabajadorOCR: Worker | null = null;
  let modeloOCRListo = false;
  let esperandoModelo: { resolve: () => void; reject: (error: Error) => void } | null = null;
  let esperandoPagina: { resolve: (resultado: ResultadoOCR) => void; reject: (error: Error) => void } | null = null;
  let procesando = false;

  const obtenerModoSeleccionado = (): ModoConversion => {
    const radio = document.querySelector<HTMLInputElement>('input[name="modo-conversion"]:checked');
    const valor = radio?.value;
    if (valor === 'hibrido' || valor === 'imagen') return valor;
    return 'fluido';
  };

  const mostrarProgreso = (mensaje: string, progreso?: number, indeterminado = false): void => {
    textoEstado.textContent = mensaje;
    textoEstado.dataset.error = 'false';
    barraProgreso.hidden = false;
    if (indeterminado || typeof progreso !== 'number') {
      barraProgreso.removeAttribute('value');
    } else {
      barraProgreso.value = Math.max(0, Math.min(100, progreso));
    }
  };

  const mostrarError = (mensaje: string): void => {
    textoEstado.textContent = mensaje;
    textoEstado.dataset.error = 'true';
    barraProgreso.hidden = true;
  };

  const revocarDescarga = (): void => {
    if (urlDescarga) {
      URL.revokeObjectURL(urlDescarga);
      urlDescarga = null;
    }
    enlaceDescarga.hidden = true;
    enlaceDescarga.removeAttribute('href');
  };

  const actualizarArchivo = (archivo: File | null): void => {
    if (procesando || !archivo) return;

    revocarDescarga();
    resultado.hidden = true;
    vistaPrevia.textContent = '';
    if (estadisticas) estadisticas.textContent = '';

    if (!archivo.name.toLowerCase().endsWith('.pdf') && archivo.type !== 'application/pdf') {
      archivoActual = null;
      tarjetaArchivo.hidden = true;
      botonConvertir.disabled = true;
      mostrarError('Selecciona un archivo PDF válido.');
      return;
    }
    if (archivo.size > TAMANO_MAXIMO) {
      archivoActual = null;
      tarjetaArchivo.hidden = true;
      botonConvertir.disabled = true;
      mostrarError('El PDF supera el límite de 50 MB. Reduce su tamaño e inténtalo de nuevo.');
      return;
    }

    archivoActual = archivo;
    nombreArchivo.textContent = archivo.name;
    tamanoArchivo.textContent = `${(archivo.size / (1024 * 1024)).toFixed(2)} MB`;
    tarjetaArchivo.hidden = false;
    botonConvertir.disabled = false;
    mostrarProgreso('PDF cargado. Elige el modo de reconstrucción y pulsa Convertir.', 0);
    barraProgreso.hidden = true;
  };

  const crearWorkerOCR = (): Worker => {
    if (trabajadorOCR) return trabajadorOCR;

    const worker = new Worker(new URL('../worker/scan.worker.js', import.meta.url), {
      type: 'module',
      name: 'pdf-ocr-worker',
    });
    trabajadorOCR = worker;

    worker.addEventListener('message', (event: MessageEvent<MensajeOCR>) => {
      const data = event.data;
      if (data.type === 'PROGRESS') {
        mostrarProgreso(data.message, data.progress, data.indeterminate);
      } else if (data.type === 'READY') {
        modeloOCRListo = true;
        esperandoModelo?.resolve();
        esperandoModelo = null;
      } else if (data.type === 'SUCCESS') {
        esperandoPagina?.resolve({ text: data.text, lines: data.lines });
        esperandoPagina = null;
      } else if (data.type === 'ERROR') {
        const error = new Error(data.message);
        if (esperandoModelo) {
          esperandoModelo.reject(error);
          esperandoModelo = null;
        } else if (esperandoPagina) {
          esperandoPagina.reject(error);
          esperandoPagina = null;
        } else {
          mostrarError(data.message);
        }
      }
    });

    worker.addEventListener('error', (event: ErrorEvent) => {
      const error = new Error(event.message || 'Error inesperado en el trabajador OCR.');
      esperandoModelo?.reject(error);
      esperandoPagina?.reject(error);
      esperandoModelo = null;
      esperandoPagina = null;
    });

    return worker;
  };

  const prepararOCR = async (): Promise<void> => {
    if (modeloOCRListo) return;
    const worker = crearWorkerOCR();
    const listo = new Promise<void>((resolve, reject) => {
      esperandoModelo = { resolve, reject };
    });
    worker.postMessage({ type: 'INIT' });
    await listo;
  };

  const reconocerPagina = async (imagen: Blob): Promise<ResultadoOCR> => {
    const worker = crearWorkerOCR();
    const texto = new Promise<ResultadoOCR>((resolve, reject) => {
      esperandoPagina = { resolve, reject };
    });
    worker.postMessage({ type: 'PROCESS', payload: imagen });
    return texto;
  };

  const rgbAHex = (r: number, g: number, b: number): string =>
    [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('').toUpperCase();

  const hexARgb = (hex: string): [number, number, number] => {
    const limpio = hex.replace('#', '');
    return [
      parseInt(limpio.slice(0, 2), 16) || 0,
      parseInt(limpio.slice(2, 4), 16) || 0,
      parseInt(limpio.slice(4, 6), 16) || 0,
    ];
  };

  const distanciaColor = (c1: [number, number, number], c2: [number, number, number]): number =>
    Math.hypot(c1[0] - c2[0], c1[1] - c2[1], c1[2] - c2[2]);

  /**
   * Inspector óptico de alta precisión sobre el Canvas 2D de la página.
   */
  const crearInspectorVisual = async (pagina: PDFPageProxy): Promise<InspectorVisual> => {
    const escala = 1.8;
    const viewport = pagina.getViewport({ scale: escala });
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.ceil(viewport.width));
    canvas.height = Math.max(1, Math.ceil(viewport.height));
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) throw new Error('No se pudo inicializar el inspector visual de diseño.');

    await pagina.render({ canvas, canvasContext: ctx, viewport }).promise;
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const { data, width, height } = imgData;

    const obtenerPixel = (px: number, py: number): [number, number, number] => {
      const x = Math.max(0, Math.min(width - 1, Math.round(px)));
      const y = Math.max(0, Math.min(height - 1, Math.round(py)));
      const idx = (y * width + x) * 4;
      return [data[idx], data[idx + 1], data[idx + 2]];
    };

    const aCanvas = (xPdf: number, yPdf: number): [number, number] => {
      const [cx, cy] = viewport.convertToViewportPoint(xPdf, yPdf);
      return [cx, cy];
    };

    const esBordeHorizontalContinuoTabla = (x1Px: number, x2Px: number, py: number): boolean => {
      const minX = Math.max(0, Math.floor(Math.min(x1Px, x2Px)));
      const maxX = Math.min(width - 1, Math.ceil(Math.max(x1Px, x2Px)));
      const ancho = maxX - minX;
      if (ancho < 40) return false;

      const xCentro = Math.round((minX + maxX) / 2);
      const pCentro = obtenerPixel(xCentro, py);
      if (distanciaColor(pCentro, [255, 255, 255]) < 15 || distanciaColor(pCentro, [241, 245, 249]) < 12) {
        return false;
      }
      const pArriba = obtenerPixel(xCentro, py - 4);
      const pAbajo = obtenerPixel(xCentro, py + 4);
      if (distanciaColor(pCentro, pArriba) < 10 && distanciaColor(pCentro, pAbajo) < 10) {
        return false;
      }

      let activos = 0;
      let rachaBlancaMax = 0;
      let rachaBlancaActual = 0;
      const paso = 2;
      let totalMuestras = 0;

      for (let px = minX; px <= maxX; px += paso) {
        totalMuestras++;
        const p = obtenerPixel(px, py);
        const esColorBorde =
          distanciaColor(p, [255, 255, 255]) > 15 &&
          distanciaColor(p, [241, 245, 249]) > 11 &&
          distanciaColor(p, pCentro) < 28;

        if (esColorBorde) {
          activos++;
          rachaBlancaActual = 0;
        } else {
          rachaBlancaActual += paso;
          if (rachaBlancaActual > rachaBlancaMax) {
            rachaBlancaMax = rachaBlancaActual;
          }
        }
      }

      return activos / Math.max(1, totalMuestras) >= 0.86 && rachaBlancaMax <= 12;
    };

    return {
      muestrearFondoHex: (xPdf, yPdf, anchoPdf, altoPdf) => {
        const [x1, y2] = aCanvas(xPdf, yPdf);
        const [x2, y1] = aCanvas(xPdf + anchoPdf, yPdf + altoPdf);
        const puntos: [number, number][] = [
          [x1 - 5, (y1 + y2) / 2],
          [x1 - 8, y1 + 2],
          [x1 + 6, y1 - 4],
          [(x1 + x2) / 2, y1 - 4],
          [x2 + 6, (y1 + y2) / 2],
        ];
        const muestras = puntos.map(([px, py]) => obtenerPixel(px, py));
        muestras.sort((a, b) => (a[0] + a[1] + a[2]) - (b[0] + b[1] + b[2]));
        const mediana = muestras[Math.floor(muestras.length / 2)];
        if (mediana[0] > 251 && mediana[1] > 251 && mediana[2] > 251) return undefined;
        return rgbAHex(mediana[0], mediana[1], mediana[2]);
      },

      muestrearFondoBandaCompletaHex: (yPdf, altoPdf, anchoPaginaPdf) => {
        const [xIzq, yBot] = aCanvas(58, yPdf);
        const [xDer, yTop] = aCanvas(anchoPaginaPdf - 58, yPdf + altoPdf);
        const yMuestra = Math.max(0, Math.round(yTop - 3));
        const puntos: [number, number, number][] = [];
        for (let f = 0.1; f <= 0.9; f += 0.1) {
          puntos.push(obtenerPixel(xIzq + (xDer - xIzq) * f, yMuestra));
        }
        puntos.sort((a, b) => (a[0] + a[1] + a[2]) - (b[0] + b[1] + b[2]));
        const med = puntos[Math.floor(puntos.length / 2)];
        if (med[0] > 251 && med[1] > 251 && med[2] > 251) return undefined;
        // Confirmar que también haya ese fondo cerca del margen izquierdo del bloque
        const pIzq = obtenerPixel(xIzq + 8, (yTop + yBot) / 2);
        if (distanciaColor(med, pIzq) > 25) return undefined;
        return rgbAHex(med[0], med[1], med[2]);
      },

      muestrearColorTextoHex: (xPdf, yPdf, anchoPdf, altoPdf, fondoHex = 'FFFFFF') => {
        const [x1, y2] = aCanvas(xPdf, yPdf);
        const [x2, y1] = aCanvas(xPdf + anchoPdf, yPdf + altoPdf);
        const rgbFondo = hexARgb(fondoHex);
        let mejorPixel: [number, number, number] = rgbFondo[0] < 120 ? [255, 255, 255] : [23, 32, 51];
        let maxContraste = 0;

        const minX = Math.max(0, Math.floor(Math.min(x1, x2)));
        const maxX = Math.min(width - 1, Math.ceil(Math.max(x1, x2)));
        const minY = Math.max(0, Math.floor(Math.min(y1, y2)));
        const maxY = Math.min(height - 1, Math.ceil(Math.max(y1, y2)));

        for (let py = minY; py <= maxY; py += 1) {
          for (let px = minX; px <= maxX; px += 2) {
            const p = obtenerPixel(px, py);
            const contraste = distanciaColor(p, rgbFondo);
            if (contraste > maxContraste) {
              maxContraste = contraste;
              mejorPixel = p;
            }
          }
        }

        if (maxContraste < 35) {
          return rgbFondo[0] < 128 ? 'FFFFFF' : '1E293B';
        }
        return rgbAHex(mejorPixel[0], mejorPixel[1], mejorPixel[2]);
      },

      medirDensidadEInclinacion: (xPdf, yPdf, anchoPdf, tamanoPdf) => {
        if (anchoPdf < 6) return { densidad: 0, inclinacion: 0 };
        const [x1, yBase] = aCanvas(xPdf, yPdf);
        const [x2, yTope] = aCanvas(xPdf + anchoPdf, yPdf + tamanoPdf);
        const altoPx = Math.max(1, yBase - yTope);
        const minX = Math.max(0, Math.floor(x1));
        const maxX = Math.min(width - 1, Math.ceil(x2));
        const ySupMin = Math.max(0, Math.floor(yBase - altoPx * 0.68));
        const ySupMax = Math.max(0, Math.floor(yBase - altoPx * 0.36));
        const yInfMin = Math.max(0, Math.floor(yBase - altoPx * 0.35));
        const yInfMax = Math.min(height - 1, Math.ceil(yBase - altoPx * 0.06));

        let tinta = 0;
        let total = 0;
        for (let py = ySupMin; py <= yInfMax; py++) {
          for (let px = minX; px <= maxX; px++) {
            total++;
            const p = obtenerPixel(px, py);
            if (distanciaColor(p, [255, 255, 255]) > 85) {
              tinta++;
            }
          }
        }

        return {
          densidad: tinta / Math.max(1, total),
          inclinacion: 0,
        };
      },

      detectarBordeIzquierdoHex: (xPdf, yPdf, altoPdf, anchoPaginaPdf) => {
        const [xBase, yCentro] = aCanvas(xPdf, yPdf + altoPdf * 0.35);
        const [xDerPag] = aCanvas(anchoPaginaPdf - 35, yPdf + altoPdf * 0.35);
        const maxDx = Math.round(42 * escala);

        for (let dx = 3; dx <= maxDx; dx++) {
          const px = xBase - dx;
          if (px < 10) break;
          const p = obtenerPixel(px, yCentro);
          const saturacion = Math.max(p[0], p[1], p[2]) - Math.min(p[0], p[1], p[2]);
          if (distanciaColor(p, [255, 255, 255]) > 42 && (saturacion > 28 || p[0] < 175)) {
            const pArr = obtenerPixel(px, yCentro - Math.round(5 * escala));
            const pAbj = obtenerPixel(px, yCentro + Math.round(5 * escala));
            const pDer = obtenerPixel(xDerPag, yCentro);
            if (
              distanciaColor(p, pArr) < 28 &&
              distanciaColor(p, pAbj) < 28 &&
              distanciaColor(p, pDer) > 35
            ) {
              return rgbAHex(p[0], p[1], p[2]);
            }
          }
        }
        return undefined;
      },

      detectarCajaCerradaReal: (xPdf, yPdf, anchoPdf, altoPdf, anchoPaginaPdf) => {
        const [x1, yBot] = aCanvas(xPdf, yPdf);
        const [, yTop] = aCanvas(xPdf + anchoPdf, yPdf + altoPdf);
        const yMedio = (yTop + yBot) / 2;
        const [xMargenIzq] = aCanvas(36, yPdf);
        const [xMargenDer] = aCanvas(anchoPaginaPdf - 36, yPdf);
        const xCentroPag = Math.round((xMargenIzq + xMargenDer) / 2);

        // 1. Buscar borde superior e inferior alrededor del bloque en el centro de la página
        let yBordeSup = -1;
        let colorSup: [number, number, number] | null = null;
        for (let dy = 3; dy <= Math.round(24 * escala); dy++) {
          const p = obtenerPixel(xCentroPag, yTop - dy);
          if (distanciaColor(p, [255, 255, 255]) > 16 && distanciaColor(p, [248, 250, 252]) > 10) {
            // Confirmar que arriba del borde superior sea blanco
            const pExterior = obtenerPixel(xCentroPag, yTop - dy - 4);
            if (distanciaColor(pExterior, [255, 255, 255]) < 15) {
              yBordeSup = yTop - dy;
              colorSup = p;
              break;
            }
          }
        }
        if (yBordeSup < 0 || !colorSup) return { tipo: 'none' };

        let yBordeInf = -1;
        for (let dy = 3; dy <= Math.round(32 * escala); dy++) {
          const p = obtenerPixel(xCentroPag, yBot + dy);
          if (distanciaColor(p, [255, 255, 255]) > 16 && distanciaColor(p, [248, 250, 252]) > 10) {
            const pExterior = obtenerPixel(xCentroPag, yBot + dy + 4);
            if (distanciaColor(pExterior, [255, 255, 255]) < 15) {
              yBordeInf = yBot + dy;
              break;
            }
          }
        }
        if (yBordeInf < 0) return { tipo: 'none' };

        // 2. Confirmar que existan paredes laterales izquierda y derecha
        let tieneParedIzq = false;
        for (let px = Math.floor(xMargenIzq - 10); px <= Math.min(width - 1, Math.ceil(x1 - 4)); px++) {
          const p1 = obtenerPixel(px, yMedio);
          const p2 = obtenerPixel(px, yBordeSup + 3);
          if (
            (distanciaColor(p1, [255, 255, 255]) > 16 && distanciaColor(p1, [248, 250, 252]) > 10) ||
            (distanciaColor(p2, [255, 255, 255]) > 16 && distanciaColor(p2, [248, 250, 252]) > 10)
          ) {
            tieneParedIzq = true;
            break;
          }
        }
        if (!tieneParedIzq) return { tipo: 'none' };

        let transiciones = 0;
        let activos = 0;
        let prevActivo = false;
        const tramosMuestra = 140;
        for (let dx = -70; dx < 70; dx++) {
          const p = obtenerPixel(xCentroPag + dx, yBordeSup);
          const activo = distanciaColor(p, [255, 255, 255]) > 16 && distanciaColor(p, [248, 250, 252]) > 10;
          if (activo) activos++;
          if (dx > -70 && activo !== prevActivo) transiciones++;
          prevActivo = activo;
        }

        if (activos / tramosMuestra < 0.25) return { tipo: 'none' };
        return {
          tipo: transiciones >= 4 ? 'dashed' : 'solid',
          color: rgbAHex(colorSup[0], colorSup[1], colorSup[2]),
        };
      },

      /**
       * Busca una línea divisoria horizontal de ancho completo justo debajo de `yLineaPdf`
       * usando directamente coordenadas de Canvas (`aCanvas`), sin conversiones inversas erróneas.
       */
      detectarReglaDebajoDeLinea: (yLineaPdf, yLimiteInferiorPdf, anchoPaginaPdf) => {
        const [xIzq, yStartPx] = aCanvas(55, yLineaPdf - 2);
        const [xDer, yEndPx] = aCanvas(anchoPaginaPdf - 55, Math.max(yLimiteInferiorPdf + 4, yLineaPdf - 20));
        const minY = Math.max(0, Math.floor(Math.min(yStartPx, yEndPx)));
        const maxY = Math.min(height - 1, Math.ceil(Math.max(yStartPx, yEndPx)));
        const xMedio = Math.round((xIzq + xDer) / 2);

        for (let py = minY; py <= maxY; py++) {
          const pMed = obtenerPixel(xMedio, py);
          if (
            distanciaColor(pMed, [255, 255, 255]) > 28 &&
            distanciaColor(pMed, [241, 245, 249]) > 18 &&
            distanciaColor(pMed, [248, 250, 252]) > 18
          ) {
            let iguales = 0;
            let muestras = 0;
            for (let px = Math.floor(xIzq); px <= Math.ceil(xDer); px += 4) {
              muestras++;
              const p = obtenerPixel(px, py);
              if (distanciaColor(p, pMed) < 26) iguales++;
            }

            if (iguales / Math.max(1, muestras) >= 0.84) {
              let finY = py;
              while (finY + 1 < height && distanciaColor(obtenerPixel(xMedio, finY + 1), pMed) < 35) {
                finY++;
              }
              const grosorPx = finY - py + 1;
              const pArriba = obtenerPixel(xMedio, py - 3);
              const pAbajo = obtenerPixel(xMedio, finY + 3);
              if (
                grosorPx <= Math.round(6 * escala) &&
                distanciaColor(pArriba, [255, 255, 255]) < 22 &&
                distanciaColor(pAbajo, [255, 255, 255]) < 22
              ) {
                return {
                  colorHex: rgbAHex(pMed[0], pMed[1], pMed[2]),
                  grosorOctavosPt: Math.max(8, Math.min(28, Math.round((grosorPx / escala) * 8))),
                };
              }
            }
          }
        }
        return undefined;
      },

      detectarIntervalosSubrayadoTachado: (xPdf, yPdf, anchoPdf, tamanoPdf) => {
        if (anchoPdf < 10) return { subrayados: [], tachados: [] };
        const [x1, yBase] = aCanvas(xPdf, yPdf);
        const [x2, yTope] = aCanvas(xPdf + anchoPdf, yPdf + tamanoPdf);
        const anchoPx = Math.max(1, Math.floor(x2 - x1));
        const altoPx = Math.max(1, Math.floor(yBase - yTope));
        if (anchoPx < 10) return { subrayados: [], tachados: [] };

        const buscarTramosOscuros = (yMinPx: number, yMaxPx: number, umbralBlanco: number): [number, number][] => {
          const minRunPx = Math.max(12, Math.round(tamanoPdf * escala * 1.45));
          let mejorTramos: [number, number][] = [];
          let maxTotalCubierto = 0;

          for (let py = yMinPx; py <= yMaxPx; py++) {
            const tramos: [number, number][] = [];
            let inicio = -1;
            for (let dx = 0; dx <= anchoPx; dx++) {
              const p = dx < anchoPx ? obtenerPixel(x1 + dx, py) : [255, 255, 255];
              const oscuro = distanciaColor(p, [255, 255, 255]) > umbralBlanco;
              if (oscuro && inicio === -1) {
                inicio = dx;
              } else if (!oscuro && inicio !== -1) {
                if (dx - inicio >= minRunPx) {
                  tramos.push([inicio / anchoPx, dx / anchoPx]);
                }
                inicio = -1;
              }
            }
            const cubierto = tramos.reduce((acc, [a, b]) => acc + (b - a), 0);
            if (cubierto > maxTotalCubierto) {
              maxTotalCubierto = cubierto;
              mejorTramos = tramos;
            }
          }
          return mejorTramos;
        };

        const yCentroMin = Math.floor(yBase - altoPx * 0.45);
        const yCentroMax = Math.ceil(yBase - altoPx * 0.27);
        const tachados = buscarTramosOscuros(yCentroMin, yCentroMax, 110);

        const ySubMin = Math.floor(yBase + 1);
        const ySubMax = Math.ceil(yBase + 6);
        const subrayados = buscarTramosOscuros(ySubMin, ySubMax, 65);

        return { subrayados, tachados };
      },

      detectarTipoVinetaGrafica: (xPdf, yPdf, tamanoPdf) => {
        const [xInicio, yCentro] = aCanvas(xPdf, yPdf + tamanoPdf * 0.33);
        const minDx = Math.round(4 * escala);
        const maxDx = Math.round(20 * escala);
        const maxDy = Math.round(6 * escala);
        let minX = Infinity;
        let maxX = -Infinity;
        let minY = Infinity;
        let maxY = -Infinity;
        let pixelesOscuros = 0;

        for (let dx = minDx; dx <= maxDx; dx++) {
          for (let dy = -maxDy; dy <= maxDy; dy++) {
            const px = xInicio - dx;
            const py = yCentro + dy;
            const p = obtenerPixel(px, py);
            if (distanciaColor(p, [255, 255, 255]) > 42) {
              pixelesOscuros++;
              if (px < minX) minX = px;
              if (px > maxX) maxX = px;
              if (py < minY) minY = py;
              if (py > maxY) maxY = py;
            }
          }
        }

        if (pixelesOscuros < 3) return 'none';
        const cx = (minX + maxX) / 2;
        const cy = (minY + maxY) / 2;
        const arriba = obtenerPixel(cx, minY - Math.round(4 * escala));
        const abajo = obtenerPixel(cx, maxY + Math.round(4 * escala));
        if (arriba[0] < 225 || abajo[0] < 225) return 'none';

        const pCentroVineta = obtenerPixel(cx, cy);
        return pCentroVineta[0] > 195 && pCentroVineta[1] > 195 && pCentroVineta[2] > 195
          ? 'hollow'
          : 'solid';
      },

      hayLineaHorizontalEntre: (xMinPdf, xMaxPdf, ySuperiorPdf, yInferiorPdf) => {
        const [x1, yTop] = aCanvas(xMinPdf + 12, ySuperiorPdf - 1);
        const [x2, yBot] = aCanvas(xMaxPdf - 12, yInferiorPdf + 7);
        const minY = Math.max(0, Math.floor(Math.min(yTop, yBot)));
        const maxY = Math.min(height - 1, Math.ceil(Math.max(yTop, yBot)));

        for (let py = minY; py <= maxY; py++) {
          if (esBordeHorizontalContinuoTabla(x1, x2, py)) return true;
        }
        return false;
      },

      extraerFigurasGraficas: async (lineasTexto, anchoPagina, altoPagina) => {
        const auxCanvas = document.createElement('canvas');
        auxCanvas.width = width;
        auxCanvas.height = height;
        const auxCtx = auxCanvas.getContext('2d', { willReadFrequently: true });
        if (!auxCtx) return [];
        auxCtx.drawImage(canvas, 0, 0);

        auxCtx.fillStyle = '#FFFFFF';
        for (const l of lineasTexto) {
          const [, y2] = aCanvas(0, l.y - l.tamano * 1.2);
          const [, y1] = aCanvas(anchoPagina, l.y + l.tamano * 1.9);
          const topY = Math.max(0, Math.min(y1, y2) - Math.round(14 * escala));
          const botY = Math.min(height, Math.max(y1, y2) + Math.round(14 * escala));
          auxCtx.fillRect(0, topY, width, botY - topY);
        }

        auxCtx.fillRect(0, 0, width, Math.round(height * 0.08));
        auxCtx.fillRect(0, Math.round(height * 0.90), width, Math.round(height * 0.10));

        const auxData = auxCtx.getImageData(0, 0, width, height).data;
        const margenPx = Math.round(32 * escala);
        const filaTieneGrafico: boolean[] = new Array(height).fill(false);

        for (let py = margenPx; py < height - margenPx; py += 2) {
          let pixelesColor = 0;
          for (let px = margenPx; px < width - margenPx; px += 3) {
            const idx = (py * width + px) * 4;
            if (auxData[idx] < 235 || auxData[idx + 1] < 235 || auxData[idx + 2] < 235) {
              pixelesColor++;
            }
          }
          if (pixelesColor > 26) {
            filaTieneGrafico[py] = true;
            if (py + 1 < height) filaTieneGrafico[py + 1] = true;
          }
        }

        const regiones: RegionGrafica[] = [];
        let inicioY = -1;
        for (let py = margenPx; py < height - margenPx; py++) {
          if (filaTieneGrafico[py] && inicioY === -1) {
            inicioY = py;
          } else if (!filaTieneGrafico[py] && inicioY !== -1) {
            const altoBandaPx = py - inicioY;
            if (altoBandaPx >= Math.round(42 * escala)) {
              let minX = width;
              let maxX = 0;
              for (let ry = inicioY; ry < py; ry += 2) {
                for (let rx = margenPx; rx < width - margenPx; rx += 2) {
                  const idx = (ry * width + rx) * 4;
                  if (auxData[idx] < 235 || auxData[idx + 1] < 235 || auxData[idx + 2] < 235) {
                    if (rx < minX) minX = rx;
                    if (rx > maxX) maxX = rx;
                  }
                }
              }
              const anchoBandaPx = maxX - minX;
              if (anchoBandaPx >= Math.round(55 * escala)) {
                const recorte = document.createElement('canvas');
                const pad = 6;
                const rx = Math.max(0, minX - pad);
                const ry = Math.max(0, inicioY - pad);
                const rw = Math.min(width - rx, anchoBandaPx + pad * 2);
                const rh = Math.min(height - ry, altoBandaPx + pad * 2);
                recorte.width = rw;
                recorte.height = rh;
                const rCtx = recorte.getContext('2d');
                if (rCtx) {
                  rCtx.drawImage(canvas, rx, ry, rw, rh, 0, 0, rw, rh);
                  const blob = await new Promise<Blob | null>((res) => recorte.toBlob(res, 'image/png'));
                  if (blob) {
                    const [, yPdfTop] = viewport.convertToPdfPoint(rx, ry);
                    regiones.push({
                      yPdf: Math.min(altoPagina, yPdfTop),
                      anchoPts: rw / escala,
                      altoPts: rh / escala,
                      datosPng: new Uint8Array(await blob.arrayBuffer()),
                    });
                  }
                }
                recorte.width = 0;
                recorte.height = 0;
              }
            }
            inicioY = -1;
          }
        }

        auxCanvas.width = 0;
        auxCanvas.height = 0;
        return regiones;
      },

      destruir: () => {
        canvas.width = 0;
        canvas.height = 0;
      },
    };
  };

  const analizarFuenteBase = (
    nombreFuente: string,
    estilos: Record<string, { fontFamily?: string }>,
    pagina: PDFPageProxy,
  ) => {
    const familia = estilos[nombreFuente]?.fontFamily ?? '';
    let infoExtra = '';
    try {
      const commonObjs = (pagina as unknown as {
        commonObjs?: { has?: (k: string) => boolean; get?: (k: string) => Record<string, unknown> };
      }).commonObjs;
      if (commonObjs?.has?.(nombreFuente)) {
        const obj = commonObjs.get?.(nombreFuente);
        if (obj) {
          infoExtra = [
            obj.name,
            obj.fallbackName,
            obj.bold ? 'bold' : '',
            obj.italic ? 'italic' : '',
            obj.black ? 'black' : '',
          ].filter(Boolean).join(' ');
        }
      }
    } catch {
      // Ignorar si commonObjs no expone metadatos
    }
    const combinado = `${nombreFuente} ${familia} ${infoExtra}`.toLowerCase();
    return {
      negrita: /bold|black|heavy|demi|semibold|extrabold|700|800|900|-b(?![a-z])/.test(combinado),
      cursiva: /italic|oblique|slanted|-i(?![a-z])/.test(combinado),
      mono: /courier|mono|consolas|code|typewriter/.test(combinado),
      serif: /times|georgia|garamond|cambria|serif|minion|cmr|math/.test(combinado) && !/sans/.test(combinado),
    };
  };

  /**
   * Clasifica todos los IDs de fuente (`g_d0_f1`, `g_d0_f2`, `g_d0_f3`, ...) presentes en la página
   * analizando su grosor medio por ID de fuente y su aparición inline, resolviendo PDFs con fuentes
   * renombradas (`CairoFont-X-Y`) sin activar falsas negritas en párrafos normales.
   */
  const clasificarFuentesPorId = (
    fragmentos: FragmentoTexto[],
    inspector?: InspectorVisual,
  ): void => {
    if (!fragmentos.length || !inspector) return;

    const statsPorFuente = new Map<string, {
      totalChars: number;
      sumaDensidad: number;
      muestrasDensidad: number;
      usadaEnTitulos: boolean;
      yaClasificada: boolean;
      mono: boolean;
    }>();

    const tamanoMax = Math.max(...fragmentos.map((f) => f.tamano));

    for (const f of fragmentos) {
      let st = statsPorFuente.get(f.fuente);
      if (!st) {
        st = {
          totalChars: 0,
          sumaDensidad: 0,
          muestrasDensidad: 0,
          usadaEnTitulos: false,
          yaClasificada: f.negrita || f.cursiva,
          mono: f.mono,
        };
        statsPorFuente.set(f.fuente, st);
      }
      st.totalChars += f.texto.trim().length;
      if (f.tamano >= tamanoMax * 0.85 && f.tamano >= 14) {
        st.usadaEnTitulos = true;
      }
      if (st.muestrasDensidad < 25 && f.texto.trim().length >= 3 && f.ancho >= 12) {
        const med = inspector.medirDensidadEInclinacion(f.x, f.y, f.ancho, f.tamano);
        if (med.densidad > 0.05) {
          st.sumaDensidad += med.densidad;
          st.muestrasDensidad++;
        }
      }
    }

    // Identificar la fuente principal del cuerpo (la que tiene más caracteres en la página)
    let fuenteCuerpo = '';
    let maxChars = -1;
    for (const [id, st] of statsPorFuente.entries()) {
      if (!st.mono && st.totalChars > maxChars) {
        maxChars = st.totalChars;
        fuenteCuerpo = id;
      }
    }

    const statsCuerpo = statsPorFuente.get(fuenteCuerpo);
    const densidadCuerpo = statsCuerpo && statsCuerpo.muestrasDensidad > 0
      ? statsCuerpo.sumaDensidad / statsCuerpo.muestrasDensidad
      : 0.24;

    const fuentesNegrita = new Set<string>();
    const fuentesCursiva = new Set<string>();

    for (const [id, st] of statsPorFuente.entries()) {
      if (id === fuenteCuerpo || st.mono) continue;
      const densidadMedia = st.muestrasDensidad > 0 ? st.sumaDensidad / st.muestrasDensidad : 0;

      if (st.usadaEnTitulos || densidadMedia >= densidadCuerpo * 1.11) {
        fuentesNegrita.add(id);
      } else if (!st.yaClasificada) {
        fuentesCursiva.add(id);
      }
    }

    for (const f of fragmentos) {
      if (fuentesNegrita.has(f.fuente)) {
        f.negrita = true;
      } else if (fuentesCursiva.has(f.fuente)) {
        f.cursiva = true;
      }
    }
  };

  /**
   * Subdivide cualquier fragmento donde el inspector óptico detecte intervalos parciales
   * de subrayado o tachado, sin alterar jamás la negrita de palabras normales.
   */
  const subdividirFragmentoPorTrazosOpticos = (
    frag: FragmentoTexto,
    inspector?: InspectorVisual,
  ): FragmentoTexto[] => {
    const texto = frag.texto;
    if (!inspector || texto.trim().length <= 1) return [frag];

    const { subrayados, tachados } = inspector.detectarIntervalosSubrayadoTachado(
      frag.x,
      frag.y,
      frag.ancho,
      frag.tamano,
    );

    if (subrayados.length === 0 && tachados.length === 0) {
      return [frag];
    }

    const subTotal = subrayados.length === 1 && subrayados[0][0] <= 0.12 && subrayados[0][1] >= 0.88;
    const tachTotal = tachados.length === 1 && tachados[0][0] <= 0.12 && tachados[0][1] >= 0.88;
    if ((subTotal || subrayados.length === 0) && (tachTotal || tachados.length === 0)) {
      return [{
        ...frag,
        subrayado: subTotal,
        tachado: tachTotal,
      }];
    }

    const partes = texto.split(/(\s+)/).filter(Boolean);
    const totalChars = Math.max(1, texto.length);
    let cursorChar = 0;
    const resultado: FragmentoTexto[] = [];

    const solapaIntervalo = (iniRel: number, finRel: number, lista: [number, number][]): boolean => {
      const anchoPalabra = Math.max(0.01, finRel - iniRel);
      return lista.some(([a, b]) => {
        const interseccion = Math.min(finRel, b) - Math.max(iniRel, a);
        return interseccion / anchoPalabra >= 0.50;
      });
    };

    for (const parte of partes) {
      const iniRel = cursorChar / totalChars;
      const finRel = (cursorChar + parte.length) / totalChars;
      const xParte = frag.x + iniRel * frag.ancho;
      const anchoParte = (finRel - iniRel) * frag.ancho;
      cursorChar += parte.length;

      if (!parte.trim()) continue;

      resultado.push({
        ...frag,
        texto: parte,
        x: xParte,
        ancho: anchoParte,
        subrayado: solapaIntervalo(iniRel, finRel, subrayados),
        tachado: solapaIntervalo(iniRel, finRel, tachados),
      });
    }

    return resultado.length ? resultado : [frag];
  };

  const segmentarColumnasEnLinea = (fragmentos: FragmentoTexto[], tamanoBase: number): FragmentoTexto[][] => {
    const grupos: FragmentoTexto[][] = [];
    for (const fragmento of fragmentos) {
      const grupo = grupos[grupos.length - 1];
      const anterior = grupo?.[grupo.length - 1];
      const distancia = anterior ? fragmento.x - (anterior.x + anterior.ancho) : 0;
      const esSeparadorFormula = fragmento.texto.trim() === '|' || anterior?.texto.trim() === '|';
      const umbralColumna = esSeparadorFormula ? tamanoBase * 3.8 : Math.max(8.5, tamanoBase * 0.95);

      if (!grupo || distancia > umbralColumna) {
        grupos.push([fragmento]);
      } else {
        grupo.push(fragmento);
      }
    }
    return grupos;
  };

  const construirLineaDesdeFragmentos = (
    fragmentos: FragmentoTexto[],
    anchoPagina: number,
    inspector?: InspectorVisual,
  ): LineaTexto => {
    const ordenados = [...fragmentos].sort((a, b) => a.x - b.x);
    const tamano = ordenados.reduce((max, f) => Math.max(max, f.tamano), 6);
    const x = ordenados[0]?.x ?? 0;
    const ultimo = ordenados[ordenados.length - 1];
    const ancho = ultimo ? ultimo.x + ultimo.ancho - x : 0;
    const columnas = segmentarColumnasEnLinea(ordenados, tamano);

    const texto = ordenados.reduce((acc, fragmento, indice, lista) => {
      if (indice === 0) return fragmento.texto;
      const anterior = lista[indice - 1];
      const brecha = fragmento.x - (anterior.x + anterior.ancho);
      const pegado = fragmento.superindice || fragmento.subindice || anterior.superindice || anterior.subindice;
      const umbralEspacio = pegado ? Math.max(2.5, tamano * 0.25) : Math.max(1, tamano * 0.11);
      const separador = brecha > Math.max(11, tamano * 1.15)
        ? '\t'
        : brecha > umbralEspacio
          ? ' '
          : '';
      return `${acc}${separador}${fragmento.texto}`;
    }, '');

    const yBase = ordenados
      .filter((f) => !f.superindice && !f.subindice)
      .reduce((sum, f, _, arr) => sum + f.y / arr.length, ordenados[0]?.y ?? 0);

    const colorFondoLinea =
      inspector?.muestrearFondoHex(x, yBase, ancho, tamano) ??
      inspector?.muestrearFondoBandaCompletaHex(yBase, tamano, anchoPagina);
    const bordeIzquierdoColor = inspector?.detectarBordeIzquierdoHex(x, yBase, tamano, anchoPagina);
    const caja = inspector?.detectarCajaCerradaReal(x, yBase, ancho, tamano, anchoPagina);
    const yPrimerFrag = ordenados[0]?.y ?? yBase;
    const tamPrimerFrag = ordenados[0]?.tamano ?? tamano;
    const tipoVinetaGrafica = inspector?.detectarTipoVinetaGrafica(x, yPrimerFrag, tamPrimerFrag) ?? 'none';

    return {
      fragmentos: ordenados,
      columnas,
      x,
      y: yBase,
      ancho,
      tamano,
      texto,
      colorFondoLinea,
      bordeIzquierdoColor,
      bordeCaja: caja?.tipo ?? 'none',
      colorBordeCaja: caja?.color,
      tipoVinetaGrafica,
    };
  };

  const extraerLineas = async (
    pagina: PDFPageProxy,
    anchoPagina: number,
    altoPagina: number,
    inspector?: InspectorVisual,
  ): Promise<{ lineas: LineaTexto[]; piePagina: string }> => {
    const contenido = await pagina.getTextContent();
    const estilos = (contenido.styles ?? {}) as Record<string, { fontFamily?: string }>;
    const fragmentosIniciales: FragmentoTexto[] = [];

    for (const elemento of contenido.items) {
      if (!('str' in elemento) || !elemento.str.trim()) continue;
      const [, , , , x, y] = elemento.transform;
      const tamano = Math.max(5.5, Math.hypot(elemento.transform[2], elemento.transform[3]));
      const infoFuente = analizarFuenteBase(elemento.fontName, estilos, pagina);

      const duplicado = fragmentosIniciales.some(
        (prev) =>
          prev.texto === elemento.str &&
          Math.abs(prev.x - x) < 1.2 &&
          Math.abs(prev.y - y) < 1.2,
      );
      if (duplicado) continue;

      const fondoFrag = inspector?.muestrearFondoHex(x, y, elemento.width, tamano);
      const colorTexto = inspector?.muestrearColorTextoHex(x, y, elemento.width, tamano, fondoFrag);

      fragmentosIniciales.push({
        texto: elemento.str,
        x,
        y,
        ancho: elemento.width,
        tamano,
        fuente: elemento.fontName,
        ...infoFuente,
        colorTexto,
      });
    }

    // Clasificar negritas y cursivas por ID de fuente en toda la página (soporta CairoFont-X-Y y subsets)
    clasificarFuentesPorId(fragmentosIniciales, inspector);

    // Subdividir fragmentos donde existan subrayados o tachados ópticos parciales
    const fragmentosCrudos: FragmentoTexto[] = [];
    for (const frag of fragmentosIniciales) {
      fragmentosCrudos.push(...subdividirFragmentoPorTrazosOpticos(frag, inspector));
    }

    fragmentosCrudos.sort((a, b) => b.y - a.y || a.x - b.x);
    const lineasBase: { y: number; tamano: number; fragmentos: FragmentoTexto[] }[] = [];

    for (const frag of fragmentosCrudos) {
      let mejorLinea = lineasBase.find(
        (l) => Math.abs(l.y - frag.y) <= Math.max(2.4, Math.min(l.tamano, frag.tamano) * 0.35),
      );

      if (!mejorLinea) {
        const candidataSubSup = lineasBase.find((l) => {
          const esMasPequeno = frag.tamano <= l.tamano * 0.86;
          const dy = frag.y - l.y;
          const dentroRangoVertical = dy >= -l.tamano * 0.55 && dy <= l.tamano * 0.78;
          const cercaHorizontalmente = l.fragmentos.some(
            (f) => Math.abs(frag.x - (f.x + f.ancho)) < l.tamano * 1.9 || Math.abs(f.x - (frag.x + frag.ancho)) < l.tamano * 1.2,
          );
          return (esMasPequeno || /^[0-9+\-−=()∞oexn]+$/i.test(frag.texto.trim())) &&
            dentroRangoVertical &&
            cercaHorizontalmente;
        });

        if (candidataSubSup) {
          const dy = frag.y - candidataSubSup.y;
          if (dy > candidataSubSup.tamano * 0.18) {
            frag.superindice = true;
          } else if (dy < -candidataSubSup.tamano * 0.12) {
            frag.subindice = true;
          }
          mejorLinea = candidataSubSup;
        }
      }

      if (!mejorLinea) {
        lineasBase.push({
          y: frag.y,
          tamano: frag.tamano,
          fragmentos: [frag],
        });
      } else {
        mejorLinea.fragmentos.push(frag);
        if (!frag.superindice && !frag.subindice && frag.tamano > mejorLinea.tamano) {
          mejorLinea.tamano = frag.tamano;
          mejorLinea.y = frag.y;
        }
      }
    }

    const lineasFusionadas: typeof lineasBase = [];
    for (const linea of lineasBase) {
      const textoLim = linea.fragmentos.map((f) => f.texto.trim()).join('');
      const pareceExponenteAislado =
        linea.fragmentos.every((f) => f.tamano <= 9.5) &&
        /^[0-9+\-−=()∞txoefe\s]+$/i.test(textoLim) &&
        textoLim.length <= 16;

      if (pareceExponenteAislado) {
        const lineaDebajo = lineasBase.find(
          (otra) =>
            otra !== linea &&
            otra.tamano > linea.tamano &&
            linea.y - otra.y > 0 &&
            linea.y - otra.y <= otra.tamano * 0.85,
        );
        if (lineaDebajo) {
          for (const f of linea.fragmentos) {
            f.superindice = true;
            lineaDebajo.fragmentos.push(f);
          }
          continue;
        }
      }
      lineasFusionadas.push(linea);
    }

    const todasLasLineas = lineasFusionadas
      .map((l) => construirLineaDesdeFragmentos(l.fragmentos, anchoPagina, inspector))
      .sort((a, b) => b.y - a.y);

    const lineasContenido: LineaTexto[] = [];
    const piesDetectados: string[] = [];

    for (const linea of todasLasLineas) {
      const enZonaInferior = linea.y < altoPagina * 0.08;
      const parecePie = /(page\s+\d+\s+of\s+\d+|página\s+\d+\s+de\s+\d+)/i.test(linea.texto);
      if (enZonaInferior || parecePie) {
        if (piesDetectados.length === 0) piesDetectados.push(linea.texto.replace(/\t+/g, ' — '));
      } else {
        lineasContenido.push(linea);
      }
    }

    // Detectar reglas horizontales divisorias justo debajo de su línea correspondiente usando coordenadas directas de Canvas
    for (let idx = 0; idx < lineasContenido.length; idx++) {
      const lin = lineasContenido[idx];
      const yLimInf = idx + 1 < lineasContenido.length ? lineasContenido[idx + 1].y + lineasContenido[idx + 1].tamano : 40;
      if (lin.y - yLimInf >= 6) {
        const regla = inspector?.detectarReglaDebajoDeLinea(lin.y, yLimInf, anchoPagina);
        if (regla) {
          lin.bordeInferiorColor = regla.colorHex;
          lin.grosorBordeInferior = regla.grosorOctavosPt;
        }
      }
    }

    return {
      lineas: lineasContenido,
      piePagina: piesDetectados.join(' — '),
    };
  };

  /**
   * Parte una línea en dos columnas usando las coordenadas Y/Tamaño reales del primer fragmento
   * de la columna derecha para detectar con precisión sus viñetas gráficas (`•`).
   */
  const partirLineaEnX = (
    linea: LineaTexto,
    xCorte: number,
    anchoPagina: number,
    inspector?: InspectorVisual,
  ): { izq: LineaTexto | null; der: LineaTexto | null } => {
    const fragIzq = linea.fragmentos.filter((f) => f.x + f.ancho * 0.5 <= xCorte);
    const fragDerOriginal = linea.fragmentos.filter((f) => f.x + f.ancho * 0.5 > xCorte);
    const primeroDer = fragDerOriginal[0];
    const tipoVinetaDer = primeroDer
      ? (inspector?.detectarTipoVinetaGrafica(primeroDer.x, primeroDer.y, primeroDer.tamano) ?? 'none')
      : 'none';

    const fragDer = fragDerOriginal.map((f) => ({
      ...f,
      x: Math.max(48, f.x - xCorte + 48),
    }));

    const linIzq = fragIzq.length ? construirLineaDesdeFragmentos(fragIzq, xCorte, inspector) : null;
    const linDer = fragDer.length ? construirLineaDesdeFragmentos(fragDer, anchoPagina - xCorte, inspector) : null;
    if (linDer && tipoVinetaDer !== 'none') {
      linDer.tipoVinetaGrafica = tipoVinetaDer;
    }

    return { izq: linIzq, der: linDer };
  };

  const detectarCanalDosColumnas = (
    linea: LineaTexto,
    anchoPagina: number,
  ): { xCorte: number; xInicioDer: number } | null => {
    if (linea.columnas.length >= 3) return null;
    if (/[∑∫√χ∞≈≠≤≥±∂∆θω]/.test(linea.texto)) return null;
    if (linea.bordeIzquierdoColor || linea.colorFondoLinea || (linea.bordeCaja && linea.bordeCaja !== 'none')) {
      return null;
    }

    const centroMin = anchoPagina * 0.42;
    const centroMax = anchoPagina * 0.58;

    const ordenados = linea.fragmentos;
    for (let idx = 0; idx < ordenados.length - 1; idx++) {
      const finActual = ordenados[idx].x + ordenados[idx].ancho;
      const inicioSig = ordenados[idx + 1].x;
      const brecha = inicioSig - finActual;

      if (
        brecha >= 12 &&
        finActual <= centroMax &&
        inicioSig >= centroMin &&
        inicioSig <= anchoPagina * 0.62
      ) {
        return {
          xCorte: (finActual + inicioSig) / 2,
          xInicioDer: inicioSig,
        };
      }
    }
    return null;
  };

  const descubrirBandasColumnas = (
    filasCrudas: LineaTexto[],
  ): { min: number; max: number; centro: number }[] => {
    const intervalos: { min: number; max: number }[] = [];

    for (const fila of filasCrudas) {
      if (fila.columnas.length <= 2 && filasCrudas.some((f) => f.columnas.length >= 4)) continue;

      for (const col of fila.columnas) {
        const min = col[0].x;
        const ultimo = col[col.length - 1];
        const max = ultimo.x + ultimo.ancho;
        intervalos.push({ min, max });
      }
    }

    intervalos.sort((a, b) => a.min - b.min);
    const bandas: { min: number; max: number; centro: number }[] = [];

    for (const intv of intervalos) {
      const banda = bandas.find(
        (b) => Math.min(b.max, intv.max) - Math.max(b.min, intv.min) > -4,
      );
      if (banda) {
        banda.min = Math.min(banda.min, intv.min);
        banda.max = Math.max(banda.max, intv.max);
        banda.centro = (banda.min + banda.max) / 2;
      } else {
        bandas.push({
          min: intv.min,
          max: intv.max,
          centro: (intv.min + intv.max) / 2,
        });
      }
    }

    return bandas.sort((a, b) => a.min - b.min);
  };

  const construirTablaUniversal = (
    filasCrudas: LineaTexto[],
    bandas: { min: number; max: number; centro: number }[],
    inspector?: InspectorVisual,
  ): { filas: FilaTablaReconstruida[]; anchosPct: number[] } => {
    const numCols = bandas.length;
    const xMinTabla = bandas[0].min;
    const xMaxTabla = bandas[numCols - 1].max;

    const anchosPts = bandas.map((b, idx) => {
      const izq = idx === 0 ? b.min : (bandas[idx - 1].max + b.min) / 2;
      const der = idx === numCols - 1 ? b.max + 12 : (b.max + bandas[idx + 1].min) / 2;
      return Math.max(28, der - izq);
    });
    const sumaAnchos = anchosPts.reduce((a, b) => a + b, 0);
    const anchosPct = anchosPts.map((w) => Math.max(8, Math.round((w / sumaAnchos) * 100)));

    const asignarACubetas = (linea: LineaTexto): FragmentoTexto[][] => {
      const cubetas: FragmentoTexto[][] = Array.from({ length: numCols }, () => []);
      for (const grupo of linea.columnas) {
        const gMin = grupo[0].x;
        const ultimo = grupo[grupo.length - 1];
        const gMax = ultimo.x + ultimo.ancho;
        const gCentro = (gMin + gMax) / 2;

        let mejorIdx = 0;
        let mejorPuntaje = -Infinity;

        bandas.forEach((b, idx) => {
          const solapamiento = Math.min(b.max, gMax) - Math.max(b.min, gMin);
          const distCentro = Math.abs(gCentro - b.centro);
          const puntaje = solapamiento * 3 - distCentro;
          if (puntaje > mejorPuntaje) {
            mejorPuntaje = puntaje;
            mejorIdx = idx;
          }
        });
        cubetas[mejorIdx].push(...grupo);
      }
      return cubetas;
    };

    const mapeadas = filasCrudas.map((linea) => {
      const cubetas = asignarACubetas(linea);
      const ocupadas = cubetas.filter((c) => c.length > 0).length;
      const tieneNumeroPuro = cubetas.some((c) => {
        const txt = c.map((f) => f.texto).join('').trim();
        return /^\d[\d,]*(\.\d{2})?$/.test(txt);
      });
      return {
        linea,
        cubetas,
        ocupadas,
        tieneNumeroPuro,
        esNegrita: linea.fragmentos.every((f) => f.negrita),
        colorFondo: linea.colorFondoLinea,
      };
    });

    const encabezado: typeof mapeadas = [];
    let idx = 0;
    while (idx < mapeadas.length) {
      const item = mapeadas[idx];
      if (item.tieneNumeroPuro) break;

      if (idx === 0) {
        encabezado.push(item);
        idx++;
        continue;
      }

      const anterior = encabezado[encabezado.length - 1];
      const dy = anterior.linea.y - item.linea.y;
      const hayBordeContinuo =
        inspector?.hayLineaHorizontalEntre(xMinTabla, xMaxTabla, anterior.linea.y, item.linea.y) ?? false;

      if (dy <= 16 && (!hayBordeContinuo || Boolean(item.colorFondo) || Boolean(anterior.colorFondo))) {
        encabezado.push(item);
        idx++;
      } else {
        break;
      }
    }

    const filasAgrupadas: (typeof mapeadas)[] = [];
    if (encabezado.length > 0) {
      filasAgrupadas.push(encabezado);
    }

    const cuerpo = mapeadas.slice(idx);
    const umbralAncla = Math.max(2, Math.min(3, numCols - 1));
    const indicesAncla = cuerpo
      .map((item, i) => (item.ocupadas >= umbralAncla || (i === cuerpo.length - 1 && item.ocupadas === 2) ? i : -1))
      .filter((i) => i !== -1);

    if (indicesAncla.length === 0) {
      if (cuerpo.length > 0) filasAgrupadas.push(cuerpo);
    } else {
      const gruposPorAncla = new Map<number, typeof mapeadas>();
      for (const iAncla of indicesAncla) {
        gruposPorAncla.set(iAncla, [cuerpo[iAncla]]);
      }

      for (let i = 0; i < cuerpo.length; i++) {
        if (gruposPorAncla.has(i)) continue;
        const satelite = cuerpo[i];
        let mejorAncla = indicesAncla[0];
        let menorPuntaje = Infinity;

        for (const iAncla of indicesAncla) {
          const ancla = cuerpo[iAncla];
          if (ancla.ocupadas === 2 && iAncla === cuerpo.length - 1) continue;
          const dy = Math.abs(satelite.linea.y - ancla.linea.y);
          const ySup = Math.max(satelite.linea.y, ancla.linea.y);
          const yInf = Math.min(satelite.linea.y, ancla.linea.y);
          const cruzaBorde =
            dy > 9 && (inspector?.hayLineaHorizontalEntre(xMinTabla, xMaxTabla, ySup, yInf) ?? false);
          const puntaje = dy + (cruzaBorde ? 200 : 0);

          if (puntaje < menorPuntaje) {
            menorPuntaje = puntaje;
            mejorAncla = iAncla;
          }
        }
        gruposPorAncla.get(mejorAncla)?.push(satelite);
      }

      for (const iAncla of indicesAncla) {
        const grupo = gruposPorAncla.get(iAncla);
        if (grupo && grupo.length > 0) {
          grupo.sort((a, b) => b.linea.y - a.linea.y);
          filasAgrupadas.push(grupo);
        }
      }
    }

    const filasReconstruidas: FilaTablaReconstruida[] = filasAgrupadas.map((grupo, indiceGrupo) => {
      const celdasPorColumna: FragmentoTexto[][][] = Array.from({ length: numCols }, () => []);
      for (const item of grupo) {
        item.cubetas.forEach((frags, colIdx) => {
          if (frags.length > 0) {
            celdasPorColumna[colIdx].push(frags);
          }
        });
      }

      const esEncabezado = indiceGrupo === 0 && encabezado.length > 0;
      const columnasConDatos = celdasPorColumna
        .map((lineasCelda, cIdx) => ({ cIdx, tiene: lineasCelda.length > 0 }))
        .filter((x) => x.tiene);

      const esFilaResumen =
        !esEncabezado &&
        columnasConDatos.length === 2 &&
        numCols > 2 &&
        columnasConDatos[1].cIdx === numCols - 1;

      const yProm = grupo.reduce((s, g) => s + g.linea.y, 0) / grupo.length;
      const colorMuestreado =
        grupo.find((g) => g.colorFondo)?.colorFondo ??
        inspector?.muestrearFondoHex(xMinTabla, yProm, xMaxTabla - xMinTabla, 12);

      const colorFondoFila = esEncabezado
        ? (colorMuestreado ?? 'F1F5F9')
        : 'FFFFFF';

      if (esFilaResumen) {
        const colEtiqueta = columnasConDatos[0].cIdx;
        const colValor = columnasConDatos[1].cIdx;
        return {
          esEncabezado: false,
          esTotal: true,
          celdas: [
            {
              lineas: celdasPorColumna[colEtiqueta],
              colSpan: numCols - 1,
              alineacion: 'right',
              colorFondo: colorFondoFila,
              negritaCelda: true,
            },
            {
              lineas: celdasPorColumna[colValor],
              colSpan: 1,
              alineacion: 'right',
              colorFondo: colorFondoFila,
              negritaCelda: true,
            },
          ],
        };
      }

      const celdas: CeldaReconstruida[] = celdasPorColumna.map((lineasCelda, colIdx) => {
        const todosFrags = lineasCelda.flat();
        const textoPlano = todosFrags.map((f) => f.texto).join(' ').trim();
        const esNumerico =
          /^[\$\€\£\¥\₡]?\s*[\d,]+(\.\d+)?(\s*%)?$/.test(textoPlano) ||
          /\([\$\€\£\¥\₡%]\)/.test(textoPlano);
        const todosNegrita = todosFrags.length > 0 && todosFrags.every((f) => f.negrita);

        const banda = bandas[colIdx];
        const anchoBanda = Math.max(1, banda.max - banda.min);
        let alineacion: 'left' | 'center' | 'right' = 'left';

        if (todosFrags.length > 0) {
          const xMinCelda = Math.min(...todosFrags.map((f) => f.x));
          const xMaxCelda = Math.max(...todosFrags.map((f) => f.x + f.ancho));
          const margenIzq = Math.max(0, xMinCelda - banda.min);
          const margenDer = Math.max(0, banda.max - xMaxCelda);

          if (esNumerico || (margenIzq > margenDer + 6 && margenDer < anchoBanda * 0.25)) {
            alineacion = 'right';
          } else if (
            !esEncabezado &&
            !todosNegrita &&
            (colIdx === 2 || (Math.abs(margenIzq - margenDer) <= 7 && xMaxCelda - xMinCelda < anchoBanda * 0.85))
          ) {
            alineacion = 'center';
          } else if (esEncabezado && colIdx === 2) {
            alineacion = 'center';
          } else if (esEncabezado && colIdx >= 3) {
            alineacion = 'right';
          }
        }

        return {
          lineas: lineasCelda,
          colSpan: 1,
          alineacion,
          colorFondo: colorFondoFila,
          negritaCelda: esEncabezado || todosNegrita,
        };
      });

      return {
        esEncabezado,
        esTotal: false,
        celdas,
      };
    });

    return { filas: filasReconstruidas, anchosPct };
  };

  /**
   * Clasificador universal de estructuras: Tablas -> Fórmulas -> Columnas Paralelas -> Títulos/Listas/Cajas/Párrafos.
   */
  const clasificarBloquesEstructurales = (
    lineas: LineaTexto[],
    anchoPagina: number,
    inspector?: InspectorVisual,
    permitirDivisionColumnas = true,
  ): { bloques: BloqueEstructural[]; numTablas: number } => {
    const bloques: BloqueEstructural[] = [];
    let numTablas = 0;
    let i = 0;

    const tamanoMediano = (() => {
      if (!lineas.length) return 10.5;
      const ordenados = [...lineas].map((l) => l.tamano).sort((a, b) => a - b);
      return ordenados[Math.floor(ordenados.length / 2)];
    })();

    const margenIzquierdoBase = (() => {
      if (!lineas.length) return 48;
      const xs = lineas.map((l) => l.x).sort((a, b) => a - b);
      return xs[Math.floor(xs.length * 0.15)] ?? 48;
    })();

    const contieneSimbolosMatematicos = (lin: LineaTexto) =>
      /[∑∫√χ∞≈≠≤≥±∂∆θω]/.test(lin.texto);

    const esInicioDeTabla = (idx: number): boolean => {
      const lin = lineas[idx];
      if (!lin || contieneSimbolosMatematicos(lin)) return false;
      if (lin.bordeInferiorColor && idx + 1 < lineas.length && lineas[idx + 1].columnas.length === 1) {
        return false;
      }

      const ventana = lineas
        .slice(idx, Math.min(lineas.length, idx + 10))
        .filter((l) => !contieneSimbolosMatematicos(l));
      const conTresOMasCols = ventana.filter((l) => l.columnas.length >= 3);
      if (conTresOMasCols.length >= 2 && (lin.columnas.length >= 2 || Boolean(lin.colorFondoLinea))) {
        const primeraMulti = conTresOMasCols[0];
        if (Math.abs(lin.y - primeraMulti.y) <= 45) return true;
      }
      return false;
    };

    while (i < lineas.length) {
      const actual = lineas[i];
      const textoLimpio = actual.texto.trim();

      // 1. PRIORIDAD 1: Tabla Estructurada
      if (esInicioDeTabla(i)) {
        const filasCandidatas: LineaTexto[] = [actual];
        let j = i + 1;
        while (j < lineas.length) {
          const sig = lineas[j];
          const prev = filasCandidatas[filasCandidatas.length - 1];
          const saltoVertical = prev.y - sig.y;
          const esTituloSeccion =
            sig.tamano >= tamanoMediano * 1.15 ||
            Boolean(sig.bordeInferiorColor && sig.columnas.length === 1);

          if (esTituloSeccion || contieneSimbolosMatematicos(sig) || saltoVertical > 50) {
            break;
          }

          const ventanaAdelante = lineas.slice(j, Math.min(lineas.length, j + 4));
          const sigueTablaAdelante = ventanaAdelante.some(
            (l) =>
              l.tamano < tamanoMediano * 1.15 &&
              !(l.bordeInferiorColor && l.columnas.length === 1) &&
              l.columnas.length >= 2,
          );
          const esContinuacionCelda =
            sig.columnas.length === 1 &&
            saltoVertical <= prev.tamano * 1.65 &&
            sig.ancho < anchoPagina * 0.48;

          if (sigueTablaAdelante || esContinuacionCelda) {
            filasCandidatas.push(sig);
            j++;
          } else {
            break;
          }
        }

        const bandas = descubrirBandasColumnas(filasCandidatas);
        if (bandas.length >= 3 && bandas.length <= 12) {
          const { filas, anchosPct } = construirTablaUniversal(filasCandidatas, bandas, inspector);
          bloques.push({
            tipo: 'tabla',
            yRef: actual.y,
            filas,
            anchosColumnasPct: anchosPct,
          });
          numTablas++;
          i = j;
          continue;
        }
      }

      // 2. PRIORIDAD 2: Bloque de Fórmulas Matemáticas (agrupando todas sus líneas en un único recuadro punteado)
      if (contieneSimbolosMatematicos(actual)) {
        const lineasFormula = [actual];
        let fIdx = i + 1;
        while (
          fIdx < lineas.length &&
          lineas[fIdx - 1].y - lineas[fIdx].y <= 32 &&
          !lineas[fIdx].bordeIzquierdoColor &&
          !lineas[fIdx].bordeInferiorColor &&
          (contieneSimbolosMatematicos(lineas[fIdx]) ||
            lineas[fIdx].fragmentos.some((f) => f.mono) ||
            lineas[fIdx].texto.trim().length < 36)
        ) {
          lineasFormula.push(lineas[fIdx]);
          fIdx++;
        }
        bloques.push({
          tipo: 'parrafo',
          yRef: actual.y,
          lineas: lineasFormula,
          esTitulo: false,
          nivelTitulo: 3,
          esLista: false,
          nivelLista: 0,
          esOrdenada: false,
          esCajaFormula: true,
          centrado: true,
          colorFondo: actual.colorFondoLinea ?? 'F8FAFC',
          bordeCaja: 'dashed',
          colorBordeCaja: actual.colorBordeCaja ?? '94A3B8',
        });
        i = fIdx;
        continue;
      }

      // 3. PRIORIDAD 3: Columnas Paralelas de Texto
      if (permitirDivisionColumnas) {
        const canalInicial = detectarCanalDosColumnas(actual, anchoPagina);
        if (canalInicial !== null && !actual.bordeInferiorColor) {
          const { xCorte, xInicioDer } = canalInicial;
          const lineasIzq: LineaTexto[] = [];
          const lineasDer: LineaTexto[] = [];
          let j = i;
          let lineasBicolumnaAlineadas = 0;

          while (j < lineas.length) {
            const lin = lineas[j];
            const esFinSeccionColumnas =
              j > i &&
              (lin.tamano >= tamanoMediano * 1.14 ||
                Boolean(lin.bordeInferiorColor) ||
                Boolean(lin.bordeIzquierdoColor) ||
                contieneSimbolosMatematicos(lin) ||
                esInicioDeTabla(j));
            if (esFinSeccionColumnas) break;

            const canalLin = detectarCanalDosColumnas(lin, anchoPagina);
            const { izq, der } = partirLineaEnX(lin, xCorte, anchoPagina, inspector);

            if (
              canalLin !== null ||
              (izq && der) ||
              (izq && !der && lin.x + lin.ancho < xCorte + 12) ||
              (der && !izq && lin.x > xCorte - 12)
            ) {
              if (canalLin && Math.abs(canalLin.xInicioDer - xInicioDer) <= 18) {
                lineasBicolumnaAlineadas++;
              }
              if (izq) lineasIzq.push(izq);
              if (der) lineasDer.push(der);
              j++;
            } else {
              break;
            }
          }

          if (lineasBicolumnaAlineadas >= 4 && lineasIzq.length >= 4 && lineasDer.length >= 4) {
            const subIzq = clasificarBloquesEstructurales(lineasIzq, xCorte - 36, inspector, false);
            const subDer = clasificarBloquesEstructurales(lineasDer, anchoPagina - xCorte - 36, inspector, false);
            bloques.push({
              tipo: 'columnas_paralelas',
              yRef: actual.y,
              izquierda: subIzq.bloques,
              derecha: subDer.bloques,
            });
            i = j;
            continue;
          }
        }
      }

      // 4. Clasificar Títulos, Listas y Cajas Cerradas
      const esTituloPrincipal = actual.tamano >= tamanoMediano * 1.42;
      const todosNegrita = actual.fragmentos.length > 0 && actual.fragmentos.every((f) => f.negrita);
      const esSubtituloSeccion =
        !esTituloPrincipal &&
        (actual.tamano >= tamanoMediano * 1.14 ||
          (todosNegrita && actual.ancho < anchoPagina * 0.85 && !actual.bordeIzquierdoColor && !actual.bordeInferiorColor && actual.bordeCaja === 'none'));
      const esTitulo = esTituloPrincipal || esSubtituloSeccion;
      const nivelTitulo: 1 | 2 | 3 = esTituloPrincipal
        ? 1
        : actual.tamano >= tamanoMediano * 1.14
          ? 2
          : 3;

      if (esTituloPrincipal && i + 1 < lineas.length && Math.abs(lineas[i + 1].tamano - actual.tamano) < 1.5) {
        const sigTitulo = lineas[i + 1];
        bloques.push({
          tipo: 'parrafo',
          yRef: actual.y,
          lineas: [actual, sigTitulo],
          esTitulo: true,
          nivelTitulo: 1,
          esLista: false,
          nivelLista: 0,
          esOrdenada: false,
          esCajaFormula: false,
          centrado: false,
          colorBordeInf: sigTitulo.bordeInferiorColor ?? actual.bordeInferiorColor,
          grosorBordeInf: sigTitulo.grosorBordeInferior ?? actual.grosorBordeInferior,
        });
        i += 2;
        continue;
      }

      const margenIzq = actual.x;
      const margenDer = anchoPagina - (actual.x + actual.ancho);
      const centrado =
        permitirDivisionColumnas &&
        Math.abs(margenIzq - margenDer) < 28 &&
        margenIzq > 60 &&
        actual.ancho < anchoPagina * 0.84;

      const tieneCaja = actual.bordeCaja !== 'none' || (centrado && Boolean(actual.colorFondoLinea));
      const matchLista = textoLimpio.match(/^(\s*([•●▪▸◦o\-–—*]|\d+[\.\)])\s+)/);

      // Detectar ítems de lista indentados (tanto en flujo principal como dentro de columnas paralelas)
      const sangriaRelativa = actual.x - margenIzquierdoBase;
      const esItemListaIndentado =
        !esTitulo &&
        !centrado &&
        !tieneCaja &&
        !actual.bordeIzquierdoColor &&
        !actual.colorFondoLinea &&
        sangriaRelativa >= 8 &&
        sangriaRelativa <= 36 &&
        actual.ancho < anchoPagina * 0.82;

      const esLista =
        (Boolean(matchLista) || actual.tipoVinetaGrafica !== 'none' || esItemListaIndentado) &&
        !esTitulo &&
        !centrado &&
        !tieneCaja;
      const esOrdenada = Boolean(matchLista && /^\d+[\.\)]/.test(matchLista[1].trim()));
      const nivelLista =
        !esOrdenada &&
        permitirDivisionColumnas &&
        (actual.tipoVinetaGrafica === 'hollow' || sangriaRelativa >= 16)
          ? 1
          : 0;

      if (esTitulo || esLista || actual.bordeInferiorColor || tieneCaja) {
        bloques.push({
          tipo: 'parrafo',
          yRef: actual.y,
          lineas: [actual],
          esTitulo,
          nivelTitulo,
          esLista,
          nivelLista,
          esOrdenada,
          esCajaFormula: false,
          centrado,
          colorFondo: actual.colorFondoLinea ?? (tieneCaja ? 'F8FAFC' : undefined),
          colorBordeInf: actual.bordeInferiorColor,
          grosorBordeInf: actual.grosorBordeInferior,
          bordeCaja: tieneCaja ? (actual.bordeCaja !== 'none' ? actual.bordeCaja : 'solid') : 'none',
          colorBordeCaja: actual.colorBordeCaja ?? 'CBD5E1',
        });
        i++;
        continue;
      }

      // 5. Agrupar líneas continuas en un Párrafo Fluido o Callout con borde izquierdo y fondo sombreado
      const lineasParrafo: LineaTexto[] = [actual];
      let k = i + 1;

      while (k < lineas.length) {
        const prev = lineasParrafo[lineasParrafo.length - 1];
        const sig = lineas[k];
        const sigTexto = sig.texto.trim();
        const distanciaY = prev.y - sig.y;
        const mismoTamano = Math.abs(prev.tamano - sig.tamano) <= 1.5;
        const sigSangria = sig.x - margenIzquierdoBase;
        const sigEsLista =
          /^(\s*([•●▪▸◦o\-–—*]|\d+[\.\)])\s+)/.test(sigTexto) ||
          sig.tipoVinetaGrafica !== 'none' ||
          (!permitirDivisionColumnas && sigSangria >= 8 && sigSangria <= 36);
        const sigTodosNegrita = sig.fragmentos.length > 0 && sig.fragmentos.every((f) => f.negrita);
        const sigEsTitulo =
          sig.tamano >= tamanoMediano * 1.14 ||
          Boolean(sig.bordeInferiorColor) ||
          (sigTodosNegrita && sig.ancho < anchoPagina * 0.85);
        const sigEsFormula = contieneSimbolosMatematicos(sig);
        const mismaSangria = Math.abs(prev.x - sig.x) < 20;
        const compartenContenedor =
          (Boolean(prev.bordeIzquierdoColor) && Boolean(sig.bordeIzquierdoColor)) ||
          (Boolean(prev.colorFondoLinea) && prev.colorFondoLinea === sig.colorFondoLinea);
        const mismoEstiloContenedor =
          compartenContenedor ||
          (!prev.bordeIzquierdoColor && !sig.bordeIzquierdoColor && !prev.colorFondoLinea && !sig.colorFondoLinea);
        const terminaEnPuntoAparte =
          !compartenContenedor &&
          /[\.\!\?\:]$/.test(prev.texto.trim()) &&
          prev.ancho < anchoPagina * 0.65;

        if (
          distanciaY > 0 &&
          distanciaY <= prev.tamano * 1.55 &&
          mismoTamano &&
          !sigEsLista &&
          !sigEsTitulo &&
          !sigEsFormula &&
          !esInicioDeTabla(k) &&
          mismaSangria &&
          mismoEstiloContenedor &&
          !terminaEnPuntoAparte
        ) {
          lineasParrafo.push(sig);
          k++;
          if (sig.bordeInferiorColor) break;
        } else {
          break;
        }
      }

      const ultimaLineaParrafo = lineasParrafo[lineasParrafo.length - 1];
      const colorBordeIzq = lineasParrafo.find((l) => l.bordeIzquierdoColor)?.bordeIzquierdoColor;
      const colorFondo = lineasParrafo.find((l) => l.colorFondoLinea)?.colorFondoLinea;

      bloques.push({
        tipo: 'parrafo',
        yRef: actual.y,
        lineas: lineasParrafo,
        esTitulo: false,
        nivelTitulo: 3,
        esLista: false,
        nivelLista: 0,
        esOrdenada: false,
        esCajaFormula: false,
        centrado: false,
        colorFondo,
        colorBordeIzq,
        colorBordeInf: ultimaLineaParrafo.bordeInferiorColor,
        grosorBordeInf: ultimaLineaParrafo.grosorBordeInferior,
        bordeCaja: actual.bordeCaja,
        colorBordeCaja: actual.colorBordeCaja,
      });
      i = k;
    }

    return { bloques, numTablas };
  };

  const crearCorridasDeFragmentos = (
    apiWord: typeof import('docx'),
    fragmentos: FragmentoTexto[],
    tamanoBase: number,
    prefijo = '',
    forzarColorHex?: string,
    forzarNegrita?: boolean,
    saltoDeLineaAntes = false,
  ) => {
    return fragmentos.map((fragmento, indice) => {
      const anterior = fragmentos[indice - 1];
      const brecha = anterior ? fragmento.x - (anterior.x + anterior.ancho) : 0;
      const pegado = fragmento.superindice || fragmento.subindice || anterior?.superindice || anterior?.subindice;
      const umbralEspacio = pegado ? Math.max(2.5, tamanoBase * 0.25) : Math.max(1, tamanoBase * 0.11);

      const separador = indice === 0
        ? prefijo
        : brecha > tamanoBase * 0.85
          ? '   '
          : brecha > umbralEspacio
            ? ' '
            : '';

      const tamanoEfectivo = (fragmento.superindice || fragmento.subindice)
        ? Math.max(18, Math.round(tamanoBase * 2))
        : Math.max(15, Math.min(72, Math.round(fragmento.tamano * 2)));

      return new apiWord.TextRun({
        text: `${separador}${fragmento.texto}`,
        break: indice === 0 && saltoDeLineaAntes ? 1 : undefined,
        size: tamanoEfectivo,
        bold: forzarNegrita ?? fragmento.negrita,
        italics: fragmento.cursiva,
        underline: fragmento.subrayado ? {} : undefined,
        strike: fragmento.tachado,
        color: forzarColorHex ?? fragmento.colorTexto,
        superScript: fragmento.superindice,
        subScript: fragmento.subindice,
        noProof: true,
        font: fragmento.mono
          ? 'Courier New'
          : fragmento.serif
            ? 'Georgia'
            : 'Georgia',
      });
    });
  };

  /**
   * Construye el recuadro punteado único de fórmulas matemáticas idéntico al PDF original y 100% editable.
   */
  const construirTablaFormulaEditable = (
    apiWord: typeof import('docx'),
    bloque: Extract<BloqueEstructural, { tipo: 'parrafo' }>,
  ) => {
    const bordePunteado = { style: apiWord.BorderStyle.DASHED, size: 6, color: bloque.colorBordeCaja ?? '94A3B8' };

    return new apiWord.Table({
      width: { size: 100, type: apiWord.WidthType.PERCENTAGE },
      rows: [
        new apiWord.TableRow({
          children: [
            new apiWord.TableCell({
              width: { size: 100, type: apiWord.WidthType.PERCENTAGE },
              shading: { fill: bloque.colorFondo ?? 'F8FAFC' },
              borders: {
                top: bordePunteado,
                bottom: bordePunteado,
                left: bordePunteado,
                right: bordePunteado,
              },
              margins: { top: 110, bottom: 110, left: 150, right: 150 },
              children: bloque.lineas.map((l, idxL) => {
                // Si es la segunda línea (ej. "2ab cos(θ)" bajo la barra de fracción/raíz), incluir su barra horizontal superior
                const corridas = l.fragmentos.map((frag, idxF) => {
                  const ant = l.fragmentos[idxF - 1];
                  const brecha = ant ? frag.x - (ant.x + ant.ancho) : 0;
                  const pegado = frag.superindice || frag.subindice || ant?.superindice || ant?.subindice;
                  const sep = idxF === 0
                    ? ''
                    : frag.texto.trim() === '|' || ant?.texto.trim() === '|'
                      ? '   '
                      : brecha > (pegado ? 2.5 : 1.2)
                        ? ' '
                        : '';
                  return new apiWord.TextRun({
                    text: `${sep}${frag.texto}`,
                    size: (frag.superindice || frag.subindice)
                      ? Math.max(18, Math.round(l.tamano * 2))
                      : Math.max(18, Math.round(frag.tamano * 2)),
                    bold: frag.negrita || frag.texto.trim() === '|',
                    superScript: frag.superindice,
                    subScript: frag.subindice,
                    // En la segunda línea (denominador/radicando envuelto), aplicar línea superior continua
                    color: frag.colorTexto ?? '0F172A',
                    noProof: true,
                    font: 'Courier New',
                  });
                });

                return new apiWord.Paragraph({
                  alignment: apiWord.AlignmentType.CENTER,
                  border: idxL > 0
                    ? {
                        top: { style: apiWord.BorderStyle.SINGLE, size: 6, color: '0F172A', space: 2 },
                      }
                    : undefined,
                  indent: idxL > 0 ? { left: 2520, right: 2520 } : undefined,
                  spacing: { before: idxL === 0 ? 10 : 30, after: 10 },
                  children: corridas,
                });
              }),
            }),
          ],
        }),
      ],
    });
  };

  const renderizarBloquesAWord = (
    apiWord: typeof import('docx'),
    bloques: BloqueEstructural[],
    anchoDisponiblePts: number,
    dentroDeColumna = false,
  ): (InstanceType<typeof apiWord.Paragraph> | InstanceType<typeof apiWord.Table>)[] => {
    const elementos: (InstanceType<typeof apiWord.Paragraph> | InstanceType<typeof apiWord.Table>)[] = [];
    const bordeNulo = { style: apiWord.BorderStyle.NONE, size: 0, color: 'FFFFFF' };

    for (const bloque of bloques) {
      if (bloque.tipo === 'imagen_flujo') {
        const escalaMax = Math.min(1, (anchoDisponiblePts - 40) / Math.max(1, bloque.region.anchoPts));
        elementos.push(
          new apiWord.Paragraph({
            alignment: apiWord.AlignmentType.CENTER,
            spacing: { before: 100, after: 100 },
            children: [
              new apiWord.ImageRun({
                data: bloque.region.datosPng,
                type: 'png',
                transformation: {
                  width: bloque.region.anchoPts * escalaMax * (96 / 72),
                  height: bloque.region.altoPts * escalaMax * (96 / 72),
                },
              }),
            ],
          }),
        );
        continue;
      }

      if (bloque.tipo === 'columnas_paralelas') {
        const mitadPts = (anchoDisponiblePts - 24) / 2;
        const hijosIzq = renderizarBloquesAWord(apiWord, bloque.izquierda, mitadPts, true);
        const hijosDer = renderizarBloquesAWord(apiWord, bloque.derecha, mitadPts, true);

        elementos.push(
          new apiWord.Table({
            width: { size: 100, type: apiWord.WidthType.PERCENTAGE },
            borders: {
              top: bordeNulo,
              bottom: bordeNulo,
              left: bordeNulo,
              right: bordeNulo,
              insideHorizontal: bordeNulo,
              insideVertical: bordeNulo,
            },
            rows: [
              new apiWord.TableRow({
                children: [
                  new apiWord.TableCell({
                    width: { size: 48, type: apiWord.WidthType.PERCENTAGE },
                    borders: { top: bordeNulo, bottom: bordeNulo, left: bordeNulo, right: bordeNulo },
                    margins: { top: 40, bottom: 40, left: 0, right: 140 },
                    children: hijosIzq.length ? hijosIzq : [new apiWord.Paragraph({})],
                  }),
                  new apiWord.TableCell({
                    width: { size: 4, type: apiWord.WidthType.PERCENTAGE },
                    borders: { top: bordeNulo, bottom: bordeNulo, left: bordeNulo, right: bordeNulo },
                    children: [new apiWord.Paragraph({})],
                  }),
                  new apiWord.TableCell({
                    width: { size: 48, type: apiWord.WidthType.PERCENTAGE },
                    borders: { top: bordeNulo, bottom: bordeNulo, left: bordeNulo, right: bordeNulo },
                    margins: { top: 40, bottom: 40, left: 140, right: 0 },
                    children: hijosDer.length ? hijosDer : [new apiWord.Paragraph({})],
                  }),
                ],
              }),
            ],
          }),
        );
        elementos.push(new apiWord.Paragraph({ spacing: { after: 100 } }));
        continue;
      }

      if (bloque.tipo === 'tabla') {
        const bordeGris = { style: apiWord.BorderStyle.SINGLE, size: 6, color: 'CBD5E1' };

        const filasWord = bloque.filas.map((fila) => {
          let indiceColReal = 0;

          return new apiWord.TableRow({
            tableHeader: fila.esEncabezado,
            children: fila.celdas.map((celda) => {
              const pctAncho = bloque.anchosColumnasPct
                .slice(indiceColReal, indiceColReal + celda.colSpan)
                .reduce((a, b) => a + b, 0);
              indiceColReal += celda.colSpan;

              const alineacionWord =
                celda.alineacion === 'center'
                  ? apiWord.AlignmentType.CENTER
                  : celda.alineacion === 'right'
                    ? apiWord.AlignmentType.RIGHT
                    : apiWord.AlignmentType.LEFT;

              const negritaForzada = celda.negritaCelda ? true : undefined;

              const parrafosCelda = celda.lineas.length
                ? celda.lineas.map((fragsLinea, idxL) => {
                    const tam = fragsLinea.reduce((m, f) => Math.max(m, f.tamano), 9.5);
                    return new apiWord.Paragraph({
                      alignment: alineacionWord,
                      children: crearCorridasDeFragmentos(
                        apiWord,
                        fragsLinea,
                        tam,
                        '',
                        '1E293B',
                        negritaForzada,
                      ),
                      spacing: { before: idxL === 0 ? 0 : 20, after: 0 },
                    });
                  })
                : [new apiWord.Paragraph({ children: [new apiWord.TextRun({ text: '' })] })];

              return new apiWord.TableCell({
                columnSpan: celda.colSpan > 1 ? celda.colSpan : undefined,
                width: { size: pctAncho, type: apiWord.WidthType.PERCENTAGE },
                verticalAlign: apiWord.VerticalAlign.CENTER,
                shading: celda.colorFondo ? { fill: celda.colorFondo } : undefined,
                borders: {
                  top: bordeGris,
                  bottom: bordeGris,
                  left: bordeGris,
                  right: bordeGris,
                },
                margins: { top: 100, bottom: 100, left: 120, right: 120 },
                children: parrafosCelda,
              });
            }),
          });
        });

        elementos.push(
          new apiWord.Table({
            width: { size: 100, type: apiWord.WidthType.PERCENTAGE },
            rows: filasWord,
          }),
        );
        elementos.push(new apiWord.Paragraph({ spacing: { after: 140 } }));
        continue;
      }

      if (bloque.esCajaFormula) {
        elementos.push(construirTablaFormulaEditable(apiWord, bloque));
        elementos.push(new apiWord.Paragraph({ spacing: { after: 110 } }));
        continue;
      }

      const esContenedorVisual =
        Boolean(bloque.colorBordeIzq) ||
        Boolean(bloque.colorFondo && !bloque.esTitulo && !bloque.colorBordeInf) ||
        (bloque.bordeCaja && bloque.bordeCaja !== 'none');

      if (esContenedorVisual) {
        const corridasUnidas = bloque.lineas.flatMap((l, iL) =>
          crearCorridasDeFragmentos(apiWord, l.fragmentos, l.tamano, iL > 0 ? ' ' : ''),
        );
        const estiloBordeCaja =
          bloque.bordeCaja === 'dashed' ? apiWord.BorderStyle.DASHED : apiWord.BorderStyle.SINGLE;
        const bordeCajaObj = {
          style: estiloBordeCaja,
          size: 6,
          color: bloque.colorBordeCaja ?? 'CBD5E1',
        };
        const tieneBordeIzq = Boolean(bloque.colorBordeIzq) || Boolean(bloque.colorFondo && bloque.bordeCaja === 'none' && !bloque.centrado);
        const bordeAcentoIzq = {
          style: apiWord.BorderStyle.SINGLE,
          size: 24,
          color: bloque.colorBordeIzq ?? '3B82F6',
        };

        elementos.push(
          new apiWord.Table({
            width: { size: 100, type: apiWord.WidthType.PERCENTAGE },
            rows: [
              new apiWord.TableRow({
                children: [
                  new apiWord.TableCell({
                    width: { size: 100, type: apiWord.WidthType.PERCENTAGE },
                    shading: {
                      fill: bloque.colorFondo ?? (tieneBordeIzq ? 'EFF6FF' : 'F8FAFC'),
                    },
                    borders: tieneBordeIzq
                      ? {
                          top: bordeNulo,
                          bottom: bordeNulo,
                          right: bordeNulo,
                          left: bordeAcentoIzq,
                        }
                      : {
                          top: bordeCajaObj,
                          bottom: bordeCajaObj,
                          left: bordeCajaObj,
                          right: bordeCajaObj,
                        },
                    margins: { top: 110, bottom: 110, left: 150, right: 150 },
                    children: [
                      new apiWord.Paragraph({
                        alignment: bloque.centrado ? apiWord.AlignmentType.CENTER : apiWord.AlignmentType.LEFT,
                        spacing: { before: 25, after: 25, line: 268 },
                        children: corridasUnidas,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        );
        elementos.push(new apiWord.Paragraph({ spacing: { after: 110 } }));
        continue;
      }

      const primeraLinea = bloque.lineas[0];
      const textoPrimerFrag = primeraLinea.fragmentos[0]?.texto.trim() ?? '';
      const necesitaPrefijoVineta =
        bloque.esLista &&
        !bloque.esOrdenada &&
        !/^[•●▪▸◦\-–—*]/.test(textoPrimerFrag);

      const corridasTotales: InstanceType<typeof apiWord.TextRun>[] = [];
      if (necesitaPrefijoVineta) {
        corridasTotales.push(
          new apiWord.TextRun({
            text: bloque.nivelLista >= 1 ? '◦ ' : '• ',
            size: Math.max(16, Math.round(primeraLinea.tamano * 2)),
            noProof: true,
            font: 'Georgia',
          }),
        );
      }

      bloque.lineas.forEach((linea, idxLinea) => {
        const usarSaltoDeLineaExacto = bloque.esTitulo && bloque.nivelTitulo === 1 && idxLinea > 0;
        const prefijo = idxLinea > 0 && !usarSaltoDeLineaExacto ? ' ' : '';
        const fragsLimpios =
          idxLinea === 0 && bloque.esLista && !bloque.esOrdenada && bloque.nivelLista >= 1
            ? linea.fragmentos.map((f, iF) =>
                iF === 0 ? { ...f, texto: f.texto.replace(/^\s*[•●▪▸]\s*/, '◦ ') } : f,
              )
            : linea.fragmentos;

        corridasTotales.push(
          ...crearCorridasDeFragmentos(
            apiWord,
            fragsLimpios,
            linea.tamano,
            prefijo,
            bloque.esTitulo
              ? bloque.nivelTitulo === 1
                ? '1E3A8A'
                : bloque.nivelTitulo === 2
                  ? '1D4ED8'
                  : '1E293B'
              : undefined,
            bloque.esTitulo ? true : undefined,
            usarSaltoDeLineaExacto,
          ),
        );
      });

      const sangriaIzqTwips = dentroDeColumna
        ? bloque.esLista
          ? 240
          : 0
        : bloque.esLista
          ? (bloque.nivelLista + 1) * 320
          : !bloque.centrado && !bloque.esTitulo && primeraLinea.x > 68
            ? Math.min(2160, Math.round((primeraLinea.x - 50) * 20))
            : 0;

      elementos.push(
        new apiWord.Paragraph({
          heading: bloque.esTitulo
            ? bloque.nivelTitulo === 1
              ? apiWord.HeadingLevel.HEADING_1
              : bloque.nivelTitulo === 2
                ? apiWord.HeadingLevel.HEADING_2
                : apiWord.HeadingLevel.HEADING_3
            : undefined,
          alignment: bloque.centrado
            ? apiWord.AlignmentType.CENTER
            : !dentroDeColumna && bloque.lineas.length >= 3 && !bloque.esTitulo && !bloque.esLista
              ? apiWord.AlignmentType.JUSTIFIED
              : apiWord.AlignmentType.LEFT,
          indent: sangriaIzqTwips > 80 ? { left: sangriaIzqTwips } : undefined,
          border: bloque.colorBordeInf
            ? {
                bottom: {
                  color: bloque.colorBordeInf,
                  space: 6,
                  style: apiWord.BorderStyle.SINGLE,
                  size: bloque.grosorBordeInf ?? (bloque.esTitulo ? 12 : 18),
                },
              }
            : undefined,
          spacing: {
            before: bloque.esTitulo ? 160 : 50,
            after: bloque.esTitulo || bloque.colorBordeInf ? 115 : bloque.esLista ? 45 : 115,
            line: 268,
          },
          children: corridasTotales,
        }),
      );
    }

    return elementos;
  };

  const renderizarPagina = async (
    pagina: PDFPageProxy,
    formato: 'image/png' | 'image/jpeg',
    mascaras: FragmentoTexto[] = [],
  ): Promise<{ imagen: Blob; escala: number }> => {
    const viewportBase = pagina.getViewport({ scale: 1 });
    const escala = Math.min(
      2.2,
      Math.sqrt(PIXELES_PAGINA_MAXIMOS / (viewportBase.width * viewportBase.height)),
      2600 / Math.max(viewportBase.width, viewportBase.height),
    );
    const viewport = pagina.getViewport({ scale: escala });
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.ceil(viewport.width));
    canvas.height = Math.max(1, Math.ceil(viewport.height));
    const contexto = canvas.getContext('2d', { willReadFrequently: mascaras.length > 0 });
    if (!contexto) throw new Error('El navegador no pudo preparar la página para el procesamiento.');

    await pagina.render({ canvas, canvasContext: contexto, viewport }).promise;

    for (const mascara of mascaras) {
      const puntoInicial = viewport.convertToViewportPoint(
        mascara.x,
        mascara.y - mascara.tamano * 0.28,
      );
      const puntoFinal = viewport.convertToViewportPoint(
        mascara.x + mascara.ancho,
        mascara.y + mascara.tamano * 0.98,
      );
      const xMin = Math.min(puntoInicial[0], puntoFinal[0]);
      const yMin = Math.min(puntoInicial[1], puntoFinal[1]);
      const xMax = Math.max(puntoInicial[0], puntoFinal[0]);
      const yMax = Math.max(puntoInicial[1], puntoFinal[1]);

      const izquierda = Math.max(0, Math.floor(xMin - 2));
      const arriba = Math.max(0, Math.floor(yMin - 1));
      const derecha = Math.min(canvas.width, Math.ceil(xMax + 2));
      const abajo = Math.min(canvas.height, Math.ceil(yMax + 1));

      const muestraX = Math.max(0, izquierda - 1);
      const muestraY = Math.max(0, arriba - 1);
      const pixel = contexto.getImageData(muestraX, muestraY, 1, 1).data;
      contexto.fillStyle = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
      contexto.fillRect(izquierda, arriba, Math.max(0, derecha - izquierda), Math.max(0, abajo - arriba));
    }

    const imagen = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('No se pudo exportar la imagen de la página.'));
      }, formato, formato === 'image/jpeg' ? 0.92 : undefined);
    });
    canvas.width = 0;
    canvas.height = 0;
    return { imagen, escala };
  };

  const crearLineasOCR = (
    lineasOCR: LineaOCR[],
    escala: number,
    altoPagina: number,
  ): LineaTexto[] => lineasOCR
    .filter((linea) => linea.text.trim())
    .map((linea) => {
      const x = linea.box.xmin / escala;
      const y = altoPagina - linea.box.ymax / escala;
      const ancho = Math.max(1, (linea.box.xmax - linea.box.xmin) / escala);
      const tamano = Math.max(6, (linea.box.ymax - linea.box.ymin) / escala);
      const fragmento: FragmentoTexto = {
        texto: linea.text.trim(),
        x,
        y,
        ancho,
        tamano,
        fuente: 'Georgia',
        negrita: false,
        cursiva: false,
        mono: false,
        serif: true,
      };
      return {
        fragmentos: [fragmento],
        columnas: [[fragmento]],
        x,
        y,
        ancho,
        tamano,
        texto: fragmento.texto,
      };
    });

  const crearCajasTexto = (
    apiWord: typeof import('docx'),
    lineas: LineaTexto[],
    altoPagina: number,
  ): InstanceType<typeof apiWord.Textbox>[] => {
    const cajas: InstanceType<typeof apiWord.Textbox>[] = [];

    for (const linea of lineas) {
      for (const grupo of linea.columnas) {
        const primero = grupo[0];
        const ultimo = grupo[grupo.length - 1];
        const ancho = Math.max(linea.tamano * 1.5, ultimo.x + ultimo.ancho - primero.x + 6);
        const alto = Math.max(12, linea.tamano * 1.5);
        const corridas = crearCorridasDeFragmentos(apiWord, grupo, linea.tamano);

        cajas.push(new apiWord.Textbox({
          children: [new apiWord.Paragraph({
            children: corridas,
            spacing: { before: 0, after: 0 },
          })],
          style: {
            position: 'absolute',
            positionHorizontalRelative: 'page',
            positionVerticalRelative: 'page',
            left: `${Math.max(0, primero.x) / 72}in`,
            top: `${Math.max(0, altoPagina - linea.y - linea.tamano * 0.92) / 72}in`,
            width: `${ancho / 72}in`,
            height: `${alto / 72}in`,
            wrapStyle: 'none',
          },
        }));
      }
    }

    return cajas;
  };

  const convertir = async (): Promise<void> => {
    const archivo = archivoActual;
    if (!archivo || procesando) return;

    const modo = obtenerModoSeleccionado();
    procesando = true;
    botonConvertir.disabled = true;
    inputPdf.disabled = true;
    zonaArchivo.setAttribute('aria-busy', 'true');
    revocarDescarga();
    resultado.hidden = true;
    vistaPrevia.textContent = '';

    try {
      mostrarProgreso('Escaneando documento PDF en memoria local…', undefined, true);
      const [apiWord, apiPdf] = await Promise.all([
        import('docx'),
        import('pdfjs-dist'),
      ]);
      apiPdf.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;
      const datos = new Uint8Array(await archivo.arrayBuffer());
      const tareaDocumento = apiPdf.getDocument({ data: datos });
      const documento = await tareaDocumento.promise;
      const paginas: PaginaConvertida[] = [];
      let necesitaOCR = false;
      let totalTablas = 0;

      try {
        if (documento.numPages > PAGINAS_MAXIMAS) {
          throw new Error(`El PDF tiene ${documento.numPages} páginas. El máximo admitido es ${PAGINAS_MAXIMAS}.`);
        }

        const secciones: Array<NonNullable<ConstructorParameters<typeof apiWord.Document>[0]['sections']>[number]> = [];

        for (let numero = 1; numero <= documento.numPages; numero++) {
          mostrarProgreso(
            modo === 'imagen'
              ? `Renderizando página de alta precisión ${numero} de ${documento.numPages}…`
              : `Escaneando diseño completo, colores, bordes y tablas: página ${numero} de ${documento.numPages}…`,
            (numero / documento.numPages) * 70,
          );
          const pagina = await documento.getPage(numero);
          const viewport = pagina.getViewport({ scale: 1 });
          const anchoTwips = Math.max(7200, Math.min(28800, Math.round(viewport.width * 20)));
          const altoTwips = Math.max(7200, Math.min(28800, Math.round(viewport.height * 20)));

          if (modo === 'imagen') {
            const renderizada = await renderizarPagina(pagina, 'image/jpeg');
            const bytesImg = new Uint8Array(await renderizada.imagen.arrayBuffer());
            paginas.push({
              ancho: viewport.width,
              alto: viewport.height,
              lineas: [],
              piePagina: '',
              textoOCR: '',
              imagen: bytesImg,
            });
            secciones.push({
              properties: {
                type: apiWord.SectionType.NEXT_PAGE,
                page: {
                  size: { width: anchoTwips, height: altoTwips },
                  margin: { top: 0, right: 0, bottom: 0, left: 0 },
                },
              },
              children: [
                new apiWord.Paragraph({
                  children: [
                    new apiWord.ImageRun({
                      data: bytesImg,
                      type: 'jpg',
                      transformation: {
                        width: viewport.width * 96 / 72,
                        height: viewport.height * 96 / 72,
                      },
                    }),
                  ],
                  spacing: { before: 0, after: 0 },
                }),
              ],
            });
            continue;
          }

          const inspector = await crearInspectorVisual(pagina);
          let lineas: LineaTexto[] = [];
          let piePagina = '';
          let textoOCR = '';

          try {
            const extraido = await extraerLineas(pagina, viewport.width, viewport.height, inspector);
            lineas = extraido.lineas;
            piePagina = extraido.piePagina;
            const textoPagina = lineas.map((linea) => linea.texto).join('\n').trim();

            if (textoPagina.length < 35) {
              if (!modeloOCRListo) {
                mostrarProgreso('Iniciando motor OCR local para páginas escaneadas…', undefined, true);
                await prepararOCR();
              }
              mostrarProgreso(`Ejecutando OCR inteligente: página ${numero} de ${documento.numPages}…`, undefined, true);
              const renderizadaOCR = await renderizarPagina(pagina, 'image/png');
              const resultadoOCR = await reconocerPagina(renderizadaOCR.imagen);
              textoOCR = resultadoOCR.text;
              if (textoOCR.trim()) {
                necesitaOCR = true;
                lineas = crearLineasOCR(resultadoOCR.lines, renderizadaOCR.escala, viewport.height);
              }
            }

            if (modo === 'fluido') {
              const { bloques, numTablas } = clasificarBloquesEstructurales(
                lineas,
                viewport.width,
                inspector,
                true,
              );
              totalTablas += numTablas;

              const figuras = await inspector.extraerFigurasGraficas(
                lineas,
                viewport.width,
                viewport.height,
              );
              const bloquesCombinados: BloqueEstructural[] = [
                ...bloques,
                ...figuras.map((region): BloqueEstructural => ({
                  tipo: 'imagen_flujo',
                  yRef: region.yPdf,
                  region,
                })),
              ].sort((a, b) => b.yRef - a.yRef);

              const elementos = renderizarBloquesAWord(apiWord, bloquesCombinados, viewport.width);

              paginas.push({
                ancho: viewport.width,
                alto: viewport.height,
                lineas,
                piePagina,
                textoOCR,
              });

              secciones.push({
                properties: {
                  type: apiWord.SectionType.NEXT_PAGE,
                  page: {
                    size: { width: anchoTwips, height: altoTwips },
                    margin: { top: 760, right: 760, bottom: 760, left: 760 },
                  },
                },
                footers: piePagina
                  ? {
                      default: new apiWord.Footer({
                        children: [
                          new apiWord.Paragraph({
                            alignment: apiWord.AlignmentType.CENTER,
                            children: [
                              new apiWord.TextRun({
                                text: piePagina,
                                size: 16,
                                color: '64748B',
                                noProof: true,
                                font: 'Georgia',
                              }),
                            ],
                          }),
                        ],
                      }),
                    }
                  : undefined,
                children: elementos,
              });
            } else {
              const mascaras = lineas.flatMap((linea) => linea.fragmentos);
              const imagenPagina = await renderizarPagina(pagina, 'image/jpeg', mascaras);
              const bytesFondo = new Uint8Array(await imagenPagina.imagen.arrayBuffer());
              const cajasTexto = crearCajasTexto(apiWord, lineas, viewport.height);

              paginas.push({
                ancho: viewport.width,
                alto: viewport.height,
                lineas,
                piePagina,
                textoOCR,
                imagen: bytesFondo,
              });

              secciones.push({
                properties: {
                  type: apiWord.SectionType.NEXT_PAGE,
                  page: {
                    size: { width: anchoTwips, height: altoTwips },
                    margin: { top: 360, right: 360, bottom: 360, left: 360 },
                  },
                },
                children: [
                  new apiWord.Paragraph({
                    children: [
                      new apiWord.ImageRun({
                        data: bytesFondo,
                        type: 'jpg',
                        transformation: {
                          width: viewport.width * 96 / 72,
                          height: viewport.height * 96 / 72,
                        },
                        floating: {
                          horizontalPosition: {
                            relative: apiWord.HorizontalPositionRelativeFrom.PAGE,
                            offset: 0,
                          },
                          verticalPosition: {
                            relative: apiWord.VerticalPositionRelativeFrom.PAGE,
                            offset: 0,
                          },
                          behindDocument: true,
                          allowOverlap: true,
                          wrap: { type: apiWord.TextWrappingType.NONE },
                        },
                      }),
                    ],
                  }),
                  ...cajasTexto,
                ],
              });
            }
          } finally {
            inspector.destruir();
          }
        }

        mostrarProgreso('Ensamblando documento Word (.docx) clonado y editable…', 90);
        const word = new apiWord.Document({ sections: secciones });
        const blob = await apiWord.Packer.toBlob(word);
        urlDescarga = URL.createObjectURL(blob);
        enlaceDescarga.href = urlDescarga;
        enlaceDescarga.download = `${archivo.name.replace(/\.pdf$/i, '') || 'documento'}.docx`;
        enlaceDescarga.hidden = false;
      } finally {
        await tareaDocumento.destroy();
      }

      const totalLineas = paginas.reduce((acc, p) => acc + p.lineas.length, 0);
      if (estadisticas) {
        estadisticas.textContent = `Páginas: ${paginas.length} · Líneas clonadas: ${totalLineas} · Tablas reconstruidas: ${totalTablas}${necesitaOCR ? ' · OCR Activo' : ''}`;
      }

      if (modo === 'imagen') {
        vistaPrevia.textContent = `${paginas.length} ${paginas.length === 1 ? 'página convertida' : 'páginas convertidas'} en modo de fidelidad visual 1:1.`;
      } else {
        const resumen = paginas.map((pagina, indice) => {
          const textoPDF = pagina.lineas.map((linea) => linea.texto).join('\n').trim();
          const texto = textoPDF || pagina.textoOCR.trim();
          return texto ? `=== Página ${indice + 1} ===\n${texto}` : `=== Página ${indice + 1} ===\n[Página gráfica]`;
        }).join('\n\n');
        vistaPrevia.textContent = resumen.slice(0, 12000);
      }

      resultado.hidden = false;
      mostrarProgreso(
        modo === 'fluido'
          ? `¡Conversión completada! Se clonó el diseño completo y las ${totalTablas} ${totalTablas === 1 ? 'tabla' : 'tablas'} en formato Word 100% editable.`
          : modo === 'hibrido'
            ? '¡Conversión híbrida completada! Los fondos e imágenes se mantuvieron intactos con texto flotante editable encima.'
            : '¡Conversión visual completada! El diseño exacto de cada página fue incrustado en Word.',
        100,
      );
      barraProgreso.hidden = true;
    } catch (error) {
      console.error('No se pudo convertir el PDF a Word:', error);
      const detalle = error instanceof Error ? error.message : String(error);
      mostrarError(`No se pudo completar la conversión: ${detalle}`);
    } finally {
      procesando = false;
      botonConvertir.disabled = !archivoActual;
      inputPdf.disabled = false;
      zonaArchivo.removeAttribute('aria-busy');
    }
  };

  inputPdf.addEventListener('change', () => {
    actualizarArchivo(inputPdf.files?.[0] ?? null);
    inputPdf.value = '';
  });
  botonConvertir.addEventListener('click', () => {
    void convertir();
  });

  zonaArchivo.addEventListener('dragover', (event) => {
    event.preventDefault();
    zonaArchivo.classList.add('dragging');
  });
  zonaArchivo.addEventListener('dragleave', (event) => {
    if (!zonaArchivo.contains(event.relatedTarget as Node | null)) {
      zonaArchivo.classList.remove('dragging');
    }
  });
  zonaArchivo.addEventListener('drop', (event) => {
    event.preventDefault();
    zonaArchivo.classList.remove('dragging');
    const archivo = (event as DragEvent).dataTransfer?.files[0];
    if (archivo) actualizarArchivo(archivo);
  });

  window.addEventListener('beforeunload', () => {
    trabajadorOCR?.terminate();
    revocarDescarga();
  }, { once: true });
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', inicializarConvertidor, { once: true });
} else {
  inicializarConvertidor();
}