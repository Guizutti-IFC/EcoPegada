import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Troque 'ecopegada' pelo nome exato do repositório no GitHub
export default defineConfig({
  plugins: [react()],
  base: '/ecopegada/',
})