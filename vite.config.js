import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path is needed for GitHub Pages.
  // Use '/' for Vercel or a custom domain, and '/<repo-name>/' for GitHub Pages
  // (example: base: '/my-portfolio/').
  base: '/',
})
