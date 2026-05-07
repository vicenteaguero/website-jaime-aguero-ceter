// server.js - CETER
import express from "express";
import fetch from "node-fetch";
import multer from "multer";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

let knowledge = [];

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "file required" });
    const mimetype = file.mimetype || "";
    let text = "";
    if (mimetype.startsWith("text/") || file.originalname.endsWith(".txt") || file.originalname.endsWith(".md")) {
      text = fs.readFileSync(file.path, "utf8");
      knowledge.push({ id: Date.now().toString(), filename: file.originalname, text, uploadedAt: new Date().toISOString() });
      return res.json({ success: true, message: "Archivo guardado y contenido indexado.", filename: file.originalname });
    } else {
      knowledge.push({ id: Date.now().toString(), filename: file.originalname, text: "", uploadedAt: new Date().toISOString(), note: "Pendiente: extraer texto" });
      return res.json({ success: true, message: "Archivo guardado. Para PDF/DOC/IMG: extraer texto manualmente.", filename: file.originalname });
    }
  } catch (err) {
    res.status(500).json({ error: "upload error", details: err.message });
  }
});

app.get("/api/knowledge", (req, res) => res.json({ count: knowledge.length, items: knowledge.slice(-50) }));

app.post("/api/chat", async (req, res) => {
  try {
    const { messages, useKnowledge } = req.body;
    if (!messages) return res.status(400).json({ error: "messages required" });

    let kbContext = "";
    if (useKnowledge) {
      const recent = knowledge.filter(k => k.text && k.text.length > 30).slice(-3);
      if (recent.length) kbContext = recent.map(r => `Documento: ${r.filename}\n${r.text.substring(0,2000)}`).join("\n\n");
      if (kbContext) messages.unshift({ role: "system", content: "Usa la siguiente información de referencia cuando sea relevante:\n\n" + kbContext });
    }

    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      body: JSON.stringify({ model: process.env.OPENAI_MODEL || "gpt-4o-mini", messages, max_tokens: 800, temperature: 0.2 })
    });

    if (!resp.ok) return res.status(resp.status).send(await resp.text());
    const data = await resp.json();
    res.json({ reply: data.choices?.[0]?.message ?? { role:"assistant", content:"Sin respuesta" } });
  } catch (err) {
    res.status(500).json({ error: "server error", details: err.message });
  }
});

app.get("/api/status", (req, res) => res.json({ ok:true, knowledge_count: knowledge.length }));

app.listen(PORT, () => console.log(`CETER server listening on ${PORT}`));