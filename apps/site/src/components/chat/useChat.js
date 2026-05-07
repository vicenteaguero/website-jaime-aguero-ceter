import { useCallback, useState } from "react";
import { ENV } from "../../lib/env.js";

const SYSTEM_PROMPT =
  "Eres el asistente virtual de CETER, un centro terapéutico de rehabilitación de adicciones en Rancagua, Chile. Responde con tono cálido, claro y respetuoso. Brinda orientación general sobre el programa ambulatorio y deriva siempre a contacto humano (WhatsApp +56 9 9959 1515 o info@ceter.cl) para casos personales.";

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const send = useCallback(
    async (userText) => {
      const trimmed = userText.trim();
      if (!trimmed) return;

      const next = [...messages, { role: "user", content: trimmed }];
      setMessages(next);
      setPending(true);
      setError(null);

      try {
        const response = await fetch(ENV.chatEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [{ role: "system", content: SYSTEM_PROMPT }, ...next]
          })
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        const reply = data?.reply?.content || data?.content || "";
        setMessages((current) => [
          ...current,
          { role: "assistant", content: reply }
        ]);
      } catch (caught) {
        setError(caught.message || "No se pudo conectar al asistente.");
      } finally {
        setPending(false);
      }
    },
    [messages]
  );

  return { messages, pending, error, send };
}
