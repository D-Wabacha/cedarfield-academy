import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Honour a PORT provided by the host environment; Vite's default otherwise.
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
})
