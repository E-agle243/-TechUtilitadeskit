import { defineConfig, transformWithOxc } from 'vite';

const runonwebTypescriptPlugin = {
  name: 'transpile-runonweb-typescript',
  enforce: 'pre' as const,
  transform(code: string, id: string) {
    if (!/node_modules[\\/]+runonweb[\\/]+src[\\/].+\.ts(?:\?.*)?$/.test(id)) return null;
    return transformWithOxc(code, id, { lang: 'ts', target: 'esnext' });
  },
};


export default defineConfig({
  // CAMBIA ESTO: Pon el nombre exacto de tu repositorio de GitHub entre las barras diagonales
  base: '/-TechUtilitadeskit/', 
  
  plugins: [runonwebTypescriptPlugin],
  optimizeDeps: {
    exclude: ['runonweb'],
  },
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  preview: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  build: {
    rollupOptions: {
      input: {
        remover: 'remover.html',
        ocr: 'orc.html',
        transcribe: 'transcribe.html',
        toword: 'toword.html',
      },
    },
  },
});

