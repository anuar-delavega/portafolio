# Portafolio — Anuar De La Vega

Portal profesional bilingüe (ES/EN) con los proyectos propios. Sitio estático con [Astro](https://astro.build), publicado en GitHub Pages.

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321/portafolio/
npm run build     # genera dist/
npm run preview   # sirve dist/
npx astro check   # verificación de tipos
```

## Agregar o editar un proyecto

1. Crea `src/content/projects/es/<slug>.md` y `src/content/projects/en/<slug>.md` con el **mismo slug**.
2. El frontmatter se valida en `src/content.config.ts` (`title`, `tagline`, `category`, `status`, `period`, `role`, `stack`, `highlights`, `metrics`, `demo`, `repo`, `credit`, `featured`, `order`).
3. Captura opcional: guarda `src/assets/covers/<slug>.png` (o .jpg/.webp, 16:9). Si no hay captura se dibuja una portada abstracta.
4. Sin `repo`, la página muestra «Código privado — demo bajo solicitud».

## Estructura

```
src/
  content/projects/{es,en}/*.md   # contenido de cada proyecto
  content.config.ts               # esquema del contenido
  i18n/ui.ts                      # textos de la interfaz ES/EN
  site.ts                         # enlaces de contacto públicos + helper href()
  layouts/Base.astro              # head, header, footer, tema claro/oscuro
  views/Home.astro                # inicio (compartido por ambos idiomas)
  views/ProjectDetail.astro       # detalle de proyecto
  pages/                          # rutas: / , /proyectos/<slug>/ , /en/ , /en/projects/<slug>/
```

## Publicar en GitHub Pages

```bash
npm run deploy    # verifica, compila y sube dist/ a la rama gh-pages
```

Sitio: https://amashpit.github.io/portafolio/ (Settings → Pages → rama `gh-pages`).

**Deploy automático (opcional):** `scripts/github-actions-deploy.yml.example` publica en cada push a `main`.
Para usarlo: `gh auth refresh -s workflow`, muévelo a `.github/workflows/deploy.yml` y en Settings → Pages cambia el origen a **GitHub Actions**.

Si usas dominio propio o el repo `AmashPit.github.io`, quita `base` en `astro.config.mjs`.

## Privacidad

No publicar teléfono ni datos sensibles. El correo solo aparece si se llena `email` en `src/site.ts`.
