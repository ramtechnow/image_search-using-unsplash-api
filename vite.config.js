import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/image_search%20using%20unsplash%20api/',
  plugins: [react()],
})
