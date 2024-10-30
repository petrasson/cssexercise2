import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  resolve: {
    alias: [
      {
        '@mui/styled-engine': '@mui/styled-engine-sc',
      },
      {
        find: 'src',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
  plugins: [react()],
});
