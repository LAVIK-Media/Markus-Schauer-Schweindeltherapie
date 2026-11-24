import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.schwindeltherapie-schauer.de',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  devToolbar: { enabled: false },
});
