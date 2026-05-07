# Editar textos del sitio

Toda la copy vive en `apps/site/src/content/`. Para cambiar texto NO hace falta tocar componentes.

## Archivos

- `site.js` — datos generales: nombre, contacto (teléfono, email, WhatsApp), dirección, links de navegación.
- `home.js` — hero + secciones de la home (Misión, PAI, Programa, Mantención, Contacto).
- `methodology.js` — página `/metodologia`.
- `documents.js` — página `/documentos` (artículo RSE).
- `seo.js` — title, description, og:image por ruta.

## Cambios típicos

### Cambiar teléfono o WhatsApp

Editar `site.js` → `contact.phone`, `contact.phoneDisplay`, `contact.whatsapp.number`.

### Cambiar mensaje pre-rellenado del WhatsApp

`site.js` → `contact.whatsapp.prefilledMessage`.

### Cambiar texto de una sección de la home

Editar el array `SECTIONS` en `home.js`. Cada item tiene `title`, `paragraphs`, `cta`, `backgroundImage`.

### Agregar una nueva sección a la home

Push un nuevo objeto al array `SECTIONS` con la misma estructura. El componente `Home.jsx` itera automático.

### Cambiar la imagen de fondo de una sección

`backgroundImage` debe coincidir con la key en `Section.jsx > BG_BY_KEY`. Para usar otra imagen:

1. Poner la imagen original en `apps/legacy_static/images/`.
2. Correr `bin/optimize-images.sh`.
3. Agregar entrada en `BG_BY_KEY` en `apps/site/src/components/ui/Section.jsx`.

### Cambiar SEO de una ruta

Editar `seo.js` — `SEO_BY_PATH`.

## Después de editar

```bash
cd apps/site
npm run dev   # ver cambios local
```

Push a `main` → Vercel redeploya en 1-2 min.
