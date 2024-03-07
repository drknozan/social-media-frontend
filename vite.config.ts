import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@layout': path.resolve(__dirname, './src/components/Layout'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
  plugins: [react()],
});
