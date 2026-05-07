import { Seo } from "../components/seo/Seo.jsx";
import { Container } from "../components/ui/Container.jsx";
import { Eyebrow } from "../components/ui/Eyebrow.jsx";
import { Button } from "../components/ui/Button.jsx";
import { Icon } from "../components/ui/Icon.jsx";
import { METHODOLOGY } from "../../src_v1/content/methodology.js";
import { SITE } from "../../src_v1/content/site.js";
import { buildWhatsAppUrl } from "../lib/whatsapp.js";

export default function Methodology() {
  const wa = buildWhatsAppUrl();
  return (
    <>
      <Seo
        title={`${METHODOLOGY.title} · ${SITE.brand}`}
        description={METHODOLOGY.intro[0]?.slice(0, 155)}
        canonical={`${SITE.url}/new/metodologia`}
      />
      <section className="section cream" aria-labelledby="meto-h1">
        <Container>
          <div data-anim>
            <Eyebrow>Metodología</Eyebrow>
            <h1 id="meto-h1" className="h2">
              {METHODOLOGY.title}
            </h1>
            <div className="meto-text">
              {METHODOLOGY.intro.map((p, i) => (
                <div key={i} className="meto-block">
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {METHODOLOGY.sections.map((sec, idx) => (
        <section
          key={sec.heading}
          className={idx % 2 === 0 ? "section paper" : "section beige"}
          aria-labelledby={`meto-sec-${idx}`}
        >
          <Container>
            <div data-anim className="pai-wrap">
              <h2 id={`meto-sec-${idx}`} className="h2">
                {sec.heading}
              </h2>
              <div className="meto-text">
                {sec.blocks.map((b, j) => (
                  <div key={j} className="meto-block">
                    <p>
                      {b.strong ? <strong>{b.strong} </strong> : null}
                      {b.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="section teal" aria-labelledby="meto-cta-h2">
        <Container>
          <div className="contacto" data-anim>
            <Eyebrow>Siguiente paso</Eyebrow>
            <h2 id="meto-cta-h2" className="h2">
              Da el primer paso.
            </h2>
            <p className="body">
              Conversemos sobre cómo nuestra metodología puede ayudar a tu
              proceso o al de un familiar.
            </p>
            <div className="contacto-actions">
              <Button
                variant="primary"
                href={wa}
                ariaLabel="Conversemos por WhatsApp"
              >
                <Icon name="whatsapp" size={16} />
                Conversemos
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
