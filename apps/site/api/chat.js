const OPENAI_URL = "https://api.openai.com/v1/chat/completions";
const MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    response.status(500).json({ error: "OPENAI_API_KEY not configured" });
    return;
  }

  const { messages } = request.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    response.status(400).json({ error: "Invalid messages payload" });
    return;
  }

  try {
    const upstream = await fetch(OPENAI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        temperature: 0.4,
        max_tokens: 500
      })
    });

    if (!upstream.ok) {
      const errorBody = await upstream.text();
      response.status(upstream.status).json({ error: errorBody });
      return;
    }

    const payload = await upstream.json();
    const reply = payload.choices?.[0]?.message;
    response.status(200).json({ reply });
  } catch (error) {
    response.status(500).json({ error: error.message || "Upstream failure" });
  }
}
