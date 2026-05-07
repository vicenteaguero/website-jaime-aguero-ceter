# Legacy static site

Este es el sitio original construido por la agencia ORBEN antes de la migración a React (`apps/site`).

**No se deploya.** Vive acá como referencia histórica:
- contenido textual original
- imágenes fuente para optimizar (`bin/optimize-images.sh` lee de `images/`)
- comparación visual / regresiones

Para servirlo localmente:

```bash
cd apps/legacy_static
python3 -m http.server 8765
# http://localhost:8765/
```
