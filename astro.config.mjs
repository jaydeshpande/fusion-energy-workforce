import { defineConfig } from 'astro/config';

// Update `site` to your production domain before deploying.
export default defineConfig({
  site: 'https://fusionenergyworkforce.com',
  build: {
    format: 'directory',
  },
});
