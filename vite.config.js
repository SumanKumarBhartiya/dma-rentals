import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
    base: 'https://sumankumarbhartiya.github.io/dma-rentals',
    plugins: [react(), tailwindcss()],
});
