import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// ✅ Configuración optimizada para Vercel + React + Tailwind + TypeScript
export default defineConfig({
  root: '.',
  base: './', //
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist', // <-- Aseguramos que el output se llame dist
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
