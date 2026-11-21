// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages: https://amashpit.github.io/portafolio/
// Si el repo se llama "AmashPit.github.io" o usas dominio propio, quita `base`.
export default defineConfig({
  site: 'https://amashpit.github.io',
  base: '/portafolio',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
