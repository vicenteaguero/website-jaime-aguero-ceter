import { SITE } from "../../src_v1/content/site.js";

export function buildWhatsAppUrl(message) {
  const number = SITE.contact.whatsapp.number;
  const text = message ?? SITE.contact.whatsapp.prefilledMessage;
  const params = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${number}${params}`;
}
