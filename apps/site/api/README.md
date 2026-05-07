# API — Vercel Serverless Functions

`chat.js` es la función backend del chat OpenAI. En Vercel se deploya automáticamente como `https://ceter.cl/api/chat`.

## Activar el chat

1. En Vercel Project Settings → Environment Variables agregar:
   - `OPENAI_API_KEY` = (tu key de OpenAI)
   - `OPENAI_MODEL` = `gpt-4o-mini` (opcional)
2. En el mismo lugar, frontend env:
   - `VITE_FEATURE_CHAT` = `true`
3. Re-deploy.

## Test local

```bash
vercel dev
```

Luego `curl http://localhost:3000/api/chat -X POST -d '{"messages":[{"role":"user","content":"hola"}]}' -H 'content-type: application/json'`.
