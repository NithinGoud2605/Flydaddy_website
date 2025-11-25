import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  // Change this to '/' if using a custom domain
  base: process.env.NODE_ENV === 'production' ? '/Flydaddy_website/' : '/',
})
