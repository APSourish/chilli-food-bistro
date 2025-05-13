import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '/' : '/chilli-food-bistro/', 
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
