README - CETER Chat Agent
-------------------------
Incluye:
- server.js : backend proxy y endpoint de upload.
- chat-widget.html : widget listo para integrar en tu HTML.

Pasos rápidos:
1) Coloca server.js en tu hosting con Node.js (puede ser Render, Vercel o tu propio servidor).
2) Crea un archivo .env con tu OPENAI_API_KEY y modelo (gpt-4o-mini recomendado).
3) Instala dependencias: npm i express node-fetch multer dotenv
4) Ejecuta: node server.js
5) Integra chat-widget.html en tu web HTML. Puedes copiar el contenido dentro de tu index.html.

Notas:
- /api/upload permite subir archivos de texto para alimentar al agente.
- PDFs, DOC, imágenes se guardan para procesamiento adicional si deseas extraer texto.
- Todo el chat está en español, rol claro-cordial-inspirador.