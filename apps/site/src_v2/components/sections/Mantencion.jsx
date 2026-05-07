import { Container } from "../ui/Container.jsx";
import { Eyebrow } from "../ui/Eyebrow.jsx";
import { SECTIONS } from "../../../src_v1/content/home.js";
import { MANTENCION_EXTRA } from "../../content/extras.js";
import { ANCHOR_IDS } from "../../constants.js";

export function Mantencion() {
  const data = SECTIONS.find((s) => s.id === "mantencion");
  return (
    <section
      className="section beige"
      id={ANCHOR_IDS.mantencion}
      aria-labelledby="mantencion-h2"
    >
      <Container>
        <div className="pai-wrap" data-anim>
          <Eyebrow>{MANTENCION_EXTRA.eyebrow}</Eyebrow>
          <h2 id="mantencion-h2" className="h2">
            {MANTENCION_EXTRA.title}
          </h2>
          {data.paragraphs.map((p, i) => (
            <p key={i} className="body">
              {p}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
