# Portafolio — instrucciones del proyecto

Sitio estático Astro 7, bilingüe ES (raíz) / EN (`/en/`), desplegado en GitHub Pages bajo `base: '/portafolio'`.

## Reglas
- Todo proyecto existe en **ambos idiomas** con el mismo slug: `src/content/projects/{es,en}/<slug>.md`.
- Textos de interfaz solo en `src/i18n/ui.ts`; nunca strings sueltos en componentes.
- Enlaces internos siempre con `href()` de `src/site.ts` (respeta `base` y `trailingSlash: 'always'`).
- No inventar métricas: solo datos verificables (commits, pruebas, versiones) de cada repo.
- No enlazar repos privados; solo `democrm` es público a 2026-11-20.
- Proyectos de terceros (career-ops de santifer) llevan `credit`. REA y WhatsApp AI Agent Kit quedan fuera (no son propios).
- Nunca publicar teléfono ni correo sin que el usuario lo pida.
- Deploy con `npm run deploy` (rama `gh-pages`) solo cuando el usuario lo indique.
- Verificar con `npx astro check && npm run build` antes de dar algo por terminado.
