import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: '/tmp/vite-cache',
  server: {
    port: Number(process.env.PORT) || 3000,
    host: '127.0.0.1',
  },
})
