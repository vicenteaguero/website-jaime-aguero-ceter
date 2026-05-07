# ceter.cl

Sitio web del Centro Terapéutico de Rehabilitación y Orientación (CETER), Rancagua, Chile.

## Estructura

Monorepo con app activa en `apps/site/` y app legacy preservada en `apps/legacy_static/`.

```
apps/
  site/             # React + Vite + Tailwind (app activa, deployada)
  legacy_static/    # HTML/CSS/JS original de ORBEN (referencia histórica)
bin/                # scripts de operación
docs/               # documentación
etc/                # plantillas de config
.github/workflows/  # CI/CD
```

## Quick start

```bash
nvm use                          # node 20
cd apps/site
npm install
npm run dev                      # http://localhost:5173
```

## Build + preview producción

```bash
cd apps/site
npm run build                    # genera dist/ con HTML pre-renderizado
npm run preview                  # http://localhost:4173
```

## Deploy

Hosteado en **Vercel**. Push a `main` → Vercel buildea `apps/site` automáticamente.

- **Root Directory** en Vercel project settings: `apps/site`
- **Framework preset**: Vite
- **Build command**: `npm run build`
- **Output directory**: `dist`

Funciones serverless en `apps/site/api/` se deployean automáticamente.

Ver [docs/DEPLOY.md](docs/DEPLOY.md) para configuración inicial de DNS (NIC.cl → Vercel).

## Cambiar app activa (futuro)

Cuando se quiera reemplazar el sitio actual por una nueva versión:

```bash
bin/swap-app.sh ceter-v2
```

Esto renombra `apps/site` → `apps/site_v1` y crea `apps/ceter-v2` vacío. Luego editar `APP_DIR` en `.github/workflows/deploy.yml` para apuntar al nuevo directorio.

## Chat OpenAI

Está implementado pero apagado. Para encenderlo ver [docs/CHAT.md](docs/CHAT.md).

## Editar textos sin tocar código

Toda la copy vive en `apps/site/src/content/*.js`. Ver [docs/CONTENT.md](docs/CONTENT.md).
