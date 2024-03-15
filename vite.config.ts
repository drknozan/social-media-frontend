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
      '@src/types': path.resolve(__dirname, './src/types'),
      '@api': path.resolve(__dirname, './src/api'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@store': path.resolve(__dirname, './src/store'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [react()],
});
