import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    base: 'ABDUL_RIYAS_KHAN_Portfolio',
  ],
  //base: '/ABDUL_RIYAS_KHAN_Portfolio/',
})
