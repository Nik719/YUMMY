import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    // Use relative base path in development, absolute in production
    base: command === 'serve' ? '/' : '/YUMMY/',
    plugins: [react()],
    build: {
      outDir: 'dist',
      sourcemap: true,
    },
    server: {
      port: 5173,
      strictPort: true,
    },
    
    preview: {
      port: 4173,
      strictPort: true,
    },
  };
})
