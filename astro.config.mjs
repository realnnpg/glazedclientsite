// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://glazedclient.com', // REPLACE WITH YOUR ACTUAL DOMAIN OR GITHUB PAGES URL
  vite: {
    plugins: [tailwindcss()]
  }
});