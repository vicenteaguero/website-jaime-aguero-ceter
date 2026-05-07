# Chat OpenAI — encender / apagar

El chat está implementado pero apagado por defecto. Para encenderlo:

## 1. Conseguir API key OpenAI

1. Crear cuenta en [platform.openai.com](https://platform.openai.com).
2. Billing → cargar saldo (mínimo USD 5).
3. API Keys → Create new secret key. Guardar (no se vuelve a mostrar).

## 2. Configurar Vercel

Project Settings → Environment Variables → Production:

| Key | Value |
|---|---|
| `OPENAI_API_KEY` | (la key de OpenAI) |
| `OPENAI_MODEL` | `gpt-4o-mini` (opcional, default ese) |
| `VITE_FEATURE_CHAT` | `true` |

Redeploy (Vercel → Deployments → tres puntitos → Redeploy).

## 3. Verificar

- Abrir https://ceter.cl → debería aparecer un botón circular bottom-right (separado del WhatsApp FAB).
- Click → se abre widget. Escribir mensaje → debe responder.

## Apagar

`VITE_FEATURE_CHAT` = `false` (o eliminar la variable). Redeploy.

El backend `api/chat.js` queda igual, pero la UI no se renderiza y nadie puede llegar.

## Costos

`gpt-4o-mini` cuesta ~USD 0.15 por 1M tokens input y USD 0.60 por 1M tokens output. Para un chat típico (300 tokens por mensaje) → unos 0.0002 USD por respuesta. 5000 respuestas ~ USD 1.

Recomendado: setear un soft limit en OpenAI billing (e.g. USD 5/mes) para evitar sustos.

## Personalizar el system prompt

Editar `apps/site/src/components/chat/useChat.js` → constante `SYSTEM_PROMPT`.

## Limitaciones actuales

- No hay memoria entre sesiones (cada visita empieza chat vacío).
- No hay knowledge base persistida (legacy_static/server.js tenía upload de TXT en memoria — no se migró por ser feature inestable).
- Sin rate limiting → si hay abuso, agregar middleware en `api/chat.js`.
