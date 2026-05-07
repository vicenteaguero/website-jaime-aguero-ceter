import { SITE } from "../../content/site.js";

export function WhatsAppFab() {
  const { number, prefilledMessage } = SITE.contact.whatsapp;
  const href = `https://wa.me/${number}?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar con CETER por WhatsApp"
      title="Conversar con CETER por WhatsApp"
      className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-40 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-white shadow-lg shadow-black/25 motion-safe:transition-transform motion-safe:duration-300 ease-soft motion-safe:hover:scale-105"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.66 0 2.092-.387 2.62-.95.215-.244.43-.704.43-1.063 0-.158-.043-.33-.085-.486-.15-.487-1.66-1.193-2.16-1.45zM16.32 28.41c-1.788 0-3.535-.45-5.07-1.32l-5.66 1.49 1.515-5.55a10.81 10.81 0 0 1-1.49-5.55c0-5.974 4.85-10.83 10.825-10.83 5.96 0 10.815 4.86 10.815 10.83 0 5.96-4.86 10.83-10.815 10.83zm0-23.62c-7.046 0-12.78 5.737-12.78 12.79 0 2.255.594 4.46 1.72 6.4L3.5 30.5l6.45-1.687a12.728 12.728 0 0 0 6.39 1.722c7.05 0 12.776-5.736 12.776-12.793 0-3.41-1.33-6.61-3.74-9.02a12.61 12.61 0 0 0-9.05-3.732z" />
      </svg>
    </a>
  );
}
