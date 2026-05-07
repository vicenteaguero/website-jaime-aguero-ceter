import { Icon } from "../ui/Icon.jsx";
import { SITE } from "../../../src_v1/content/site.js";
import { buildWhatsAppUrl } from "../../lib/whatsapp.js";

export function StickyCta() {
  const wa = buildWhatsAppUrl();
  return (
    <div className="sticky-bar" aria-label="Acciones rápidas">
      <a
        className="pill copper"
        href={wa}
        target="_blank"
        rel="noopener"
        aria-label="Conversemos por WhatsApp"
      >
        <Icon name="whatsapp" size={16} />
        WhatsApp
      </a>
      <a
        className="pill ghost"
        href={`tel:${SITE.contact.phone}`}
        aria-label={`Llamar al ${SITE.contact.phoneDisplay}`}
      >
        <Icon name="phone" size={16} />
        Llamar
      </a>
    </div>
  );
}
