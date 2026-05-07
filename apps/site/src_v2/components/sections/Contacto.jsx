import { Container } from "../ui/Container.jsx";
import { Eyebrow } from "../ui/Eyebrow.jsx";
import { Button } from "../ui/Button.jsx";
import { Icon } from "../ui/Icon.jsx";
import { SITE } from "../../../src_v1/content/site.js";
import { CONTACTO_EXTRA } from "../../content/extras.js";
import { ANCHOR_IDS } from "../../constants.js";
import { buildWhatsAppUrl } from "../../lib/whatsapp.js";

export function Contacto() {
  const wa = buildWhatsAppUrl();
  return (
    <section
      className="section teal"
      id={ANCHOR_IDS.contacto}
      aria-labelledby="contacto-h2"
    >
      <Container>
        <div className="contacto" data-anim>
          <Eyebrow>{CONTACTO_EXTRA.eyebrow}</Eyebrow>
          <h2 id="contacto-h2" className="h2">
            {CONTACTO_EXTRA.title}
          </h2>
          <p className="body">{CONTACTO_EXTRA.body}</p>
          <div className="contacto-actions">
            <Button
              variant="primary"
              href={wa}
              ariaLabel="Conversemos por WhatsApp"
            >
              <Icon name="whatsapp" size={16} />
              Conversemos
            </Button>
            <div className="contacto-channels">
              <a href={`tel:${SITE.contact.phone}`}>{SITE.contact.phoneDisplay}</a>
              <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
