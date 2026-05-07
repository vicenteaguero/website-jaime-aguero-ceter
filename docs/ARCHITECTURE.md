# Architecture

## Overview

Monorepo con una app activa (`apps/site`) y la versión legacy preservada (`apps/legacy_static`). La app activa se deploya en Vercel desde `main`.

## Stack

- **Vite 5** — bundler / dev server
- **React 18** — UI
- **react-router-dom 6** — routing SPA dentro del sitio
- **vite-react-ssg** — pre-renderiza HTML por ruta (SSG) sobre react-router. Lo mejor de SEO + carga inicial sin sacrificar la sensación SPA al navegar.
- **Tailwind CSS 3** — design tokens en `tailwind.config.js`. Ningún color/estilo hardcodeado en componentes.
- **react-helmet-async** — meta tags y JSON-LD por ruta.
- **JavaScript** — sin TypeScript (decisión consciente: simplicidad).

## Estructura de carpetas

Ver `README.md` raíz. Resumen:

```
apps/
  site/                  app activa
    src/
      pages/             una por ruta (Home, Methodology, Documents, NotFound)
      components/        ui, layout, seo, whatsapp, chat
      content/           textos/copy en JS (single source of truth)
      hooks/             custom hooks
      lib/               env, helpers
      styles/            globals.css con @tailwind
    public/              assets estáticos (favicon, images, robots, sitemap)
    api/                 Vercel serverless functions (chat OpenAI)
  legacy_static/         sitio HTML/CSS/JS original (referencia histórica)
bin/                     scripts shell (dev, build, deploy, optim images, swap)
etc/                     plantillas de env
docs/                    documentación
```

## Convenciones

- **Nombres de archivos y código** en inglés. **Contenido textual** (copy) en español.
- **URLs** en español (es lo que ven usuarios): `/metodologia`, `/documentos`.
- **Tokens** definidos en `tailwind.config.js`. Componentes solo usan classes Tailwind.
- **Contenido** en `src/content/*.js`. Cambiar copy NO requiere tocar componentes.
- **Feature flags** vía `import.meta.env.VITE_FEATURE_*`.

## Renderizado

`vite-react-ssg build` genera HTML por cada ruta del router en `dist/`. Vercel lo sirve estático. Al navegar, react-router toma el control SPA → no recarga.

## Performance

- Imágenes optimizadas (WebP @ 640/1280/1920) por `bin/optimize-images.sh`. Originales en `apps/legacy_static/images/`.
- Bundle splitting por `vendor` (react, helmet) en `vite.config.js`.
- Tailwind purge solo deja classes usados.
- Animaciones respetan `prefers-reduced-motion`.

## Accesibilidad

- `<html lang="es">`
- Skip link, focus visible, contraste, headings jerárquicos.
- Nav mobile con `aria-expanded`, Esc para cerrar.
- WhatsApp FAB con `aria-label`.

## Chat OpenAI (off por default)

- UI: `src/components/chat/ChatWidget.jsx`. Renderizado solo si `VITE_FEATURE_CHAT === "true"`.
- Backend: `apps/site/api/chat.js` — handler Vercel serverless. Llama OpenAI `gpt-4o-mini` con `OPENAI_API_KEY` de env.
- Para encender: ver `docs/CHAT.md`.
