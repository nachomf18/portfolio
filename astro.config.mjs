// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ignaciomartinfernandez.com', // Cambia esto por tu dominio
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: { 
    svg: {
      mode: 'sprite',
    }
  }
});