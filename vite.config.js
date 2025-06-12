import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/PRD-Selector-PWA/', // Replace with your GitHub repo name
});
