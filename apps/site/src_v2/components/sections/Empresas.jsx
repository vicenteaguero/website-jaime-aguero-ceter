import { Container } from "../ui/Container.jsx";
import { Eyebrow } from "../ui/Eyebrow.jsx";
import { Picture } from "../ui/Picture.jsx";
import { Button } from "../ui/Button.jsx";
import { EMPRESAS_EXTRA } from "../../content/extras.js";
import { ANCHOR_IDS } from "../../constants.js";

export function Empresas() {
  return (
    <section
      className="section paper"
      id={ANCHOR_IDS.empresas}
      aria-labelledby="empresas-h2"
    >
      <Container>
        <div className="two-col">
          <div data-anim>
            <Eyebrow>{EMPRESAS_EXTRA.eyebrow}</Eyebrow>
            <h2 id="empresas-h2" className="h2">
              {EMPRESAS_EXTRA.title}
            </h2>
            <p className="body">{EMPRESAS_EXTRA.body}</p>
            <div className="mt-cta">
              <Button variant="link" to={EMPRESAS_EXTRA.cta.to}>
                {EMPRESAS_EXTRA.cta.label}
              </Button>
            </div>
          </div>
          <div className="visual" data-anim>
            <Picture
              base={EMPRESAS_EXTRA.imageBase}
              alt={EMPRESAS_EXTRA.imageAlt}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
