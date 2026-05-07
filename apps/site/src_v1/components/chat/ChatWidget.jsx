import { useEffect, useRef, useState } from "react";
import { useChat } from "./useChat.js";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const { messages, pending, error, send } = useChat();
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, pending]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!draft.trim() || pending) return;
    send(draft);
    setDraft("");
  };

  return (
    <>
      <button
        type="button"
        className="fixed bottom-24 right-4 sm:right-8 z-40 w-12 h-12 rounded-full bg-primary text-paper shadow-lg shadow-black/20 hover:bg-primary-soft transition-colors"
        aria-label={open ? "Cerrar asistente" : "Abrir asistente virtual"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true">{open ? "×" : "💬"}</span>
      </button>

      {open ? (
        <section
          role="dialog"
          aria-label="Asistente virtual CETER"
          className="fixed bottom-40 right-4 sm:right-8 z-40 w-[min(90vw,360px)] max-h-[78vh] flex flex-col rounded-2xl bg-white shadow-2xl border border-secondary overflow-hidden"
        >
          <header className="px-4 py-3 bg-primary text-paper">
            <p className="font-display font-semibold">Asistente CETER</p>
            <p className="text-xs opacity-80">Te respondemos en segundos</p>
          </header>

          <div
            ref={listRef}
            className="flex-1 overflow-y-auto px-4 py-3 space-y-2 text-sm"
          >
            {messages.length === 0 ? (
              <p className="text-ink-soft">
                ¿En qué podemos ayudarte? Escríbenos abajo.
              </p>
            ) : null}
            {messages.map((message, index) => (
              <p
                key={index}
                className={[
                  "rounded-lg px-3 py-2",
                  message.role === "user"
                    ? "bg-primary text-paper ml-auto max-w-[85%]"
                    : "bg-secondary/40 text-ink mr-auto max-w-[85%]"
                ].join(" ")}
              >
                {message.content}
              </p>
            ))}
            {pending ? <p className="text-ink-soft">Escribiendo…</p> : null}
            {error ? <p className="text-red-600">{error}</p> : null}
          </div>

          <form onSubmit={onSubmit} className="border-t border-secondary p-3 flex gap-2">
            <label className="sr-only" htmlFor="chat-input">
              Mensaje
            </label>
            <input
              id="chat-input"
              type="text"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Escribe tu mensaje…"
              className="flex-1 px-3 py-2 rounded-md border border-secondary text-sm"
            />
            <button
              type="submit"
              disabled={pending || !draft.trim()}
              className="px-4 py-2 rounded-md bg-primary text-paper text-sm font-semibold disabled:opacity-50"
            >
              Enviar
            </button>
          </form>
        </section>
      ) : null}
    </>
  );
}
