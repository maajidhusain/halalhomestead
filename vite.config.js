import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from '@unocss/vite'

export default defineConfig({
  base: '/halalhomestead/', // Add this line!
  plugins: [
    react(),
    Unocss(),
  ],
})
