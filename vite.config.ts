import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({

  base:"/childcare/",
  plugins: [
    tailwindcss(),
  ],
})