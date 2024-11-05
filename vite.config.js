import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: 'src',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
  plugins: [react()],
});
