# Deploy — Vercel + NIC.cl

## 1. Vercel project setup

1. Crear cuenta en [vercel.com](https://vercel.com).
2. **Import Project** → conectar este repo de GitHub.
3. **Project Settings**:
   - Framework Preset: **Vite**
   - Root Directory: `apps/site`
   - Build Command: `npm run build` (auto)
   - Output Directory: `dist` (auto)
   - Install Command: `npm install`
4. **Environment Variables** (production):
   - `VITE_FEATURE_CHAT` = `false` (cambiar a `true` para encender el chat)
   - `OPENAI_API_KEY` = (solo si chat encendido)
5. Deploy.

Cada push a `main` redeploya en automático. Las branches generan preview URLs.

## 2. Custom domain — ceter.cl

### En Vercel
- Project → Settings → Domains → Add `ceter.cl` y `www.ceter.cl`.
- Vercel pedirá configurar DNS records.

### En NIC.cl
Login → Mis dominios → `ceter.cl` → Modificar.

**Opción A — Apuntar A/CNAME directo (mantener NS de Hostinger)**

NIC.cl no soporta records A/CNAME en su DNS propio salvo vía servidor secundario, así que esta opción no es directa. Mejor:

**Opción B — Usar Vercel Nameservers (recomendado)**

1. En Vercel → Domain → "Use Vercel Nameservers" → Vercel mostrará algo como:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
2. En NIC.cl panel del dominio ceter.cl → sección **Configuración Técnica** → Servidores DNS:
   - Borrar `ns1.dns-parking.com` y `ns2.dns-parking.com`.
   - Agregar los NS de Vercel.
3. Guardar.
4. Esperar propagación (1–24h).

**Opción C — Cloudflare DNS gratis (control fino + analytics)**

1. Crear cuenta Cloudflare → Add site `ceter.cl`.
2. Cloudflare entrega 2 NS tipo `xxx.ns.cloudflare.com`.
3. En NIC.cl cambiar NS a los de Cloudflare.
4. En Cloudflare DNS:
   - `A` `@` → `76.76.21.21` (Proxy: DNS only)
   - `CNAME` `www` → `cname.vercel-dns.com` (Proxy: DNS only)
5. Esperar propagación.

## 3. Verificar

```bash
dig +short ceter.cl
curl -I https://ceter.cl
```

Tarda hasta 24h para propagación global.

## 4. HTTPS

Vercel provisiona certificado Let's Encrypt automáticamente cuando el dominio resuelve. Ver Project → Domains → status "Valid Configuration".

## Troubleshooting

- **404 en preview**: verificar que `outputDirectory` en `vercel.json` sea `dist`.
- **Funciones API no disponibles**: confirmar que `apps/site/api/*.js` existan y que Root Directory en Vercel apunte a `apps/site`.
- **Chat dice error**: revisar `OPENAI_API_KEY` en Vercel env vars + redeploy.
