import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Ignore the resume PDFs — they can be locked by a PDF viewer on Windows
    // and cause an EBUSY crash in the file watcher.
    watch: {
      ignored: ['**/*.pdf'],
    },
  },
})
