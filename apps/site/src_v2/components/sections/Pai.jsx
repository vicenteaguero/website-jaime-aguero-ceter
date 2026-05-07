import { Container } from "../ui/Container.jsx";
import { Eyebrow } from "../ui/Eyebrow.jsx";
import { Button } from "../ui/Button.jsx";
import { SECTIONS } from "../../../src_v1/content/home.js";
import { PAI_EXTRA } from "../../content/extras.js";
import { ANCHOR_IDS, BASE_PATH } from "../../constants.js";

export function Pai() {
  const data = SECTIONS.find((s) => s.id === "pai");
  return (
    <section className="section beige" id={ANCHOR_IDS.pai} aria-labelledby="pai-h2">
      <Container>
        <div className="pai-wrap" data-anim>
          <Eyebrow>{PAI_EXTRA.eyebrow}</Eyebrow>
          <h2 id="pai-h2" className="h2">
            {PAI_EXTRA.titleLead} <em>{PAI_EXTRA.titleEm}</em>
          </h2>
          {data.paragraphs.map((p, i) => (
            <p key={i} className="body">
              {p}
            </p>
          ))}
          <div className="mt-cta">
            <Button variant="link" to={`${BASE_PATH}/metodologia`}>
              Nuestro Método
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
