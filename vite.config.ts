import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/studymadease8761/", // Yeh aapke repo ke naam ka hona chahiye
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
