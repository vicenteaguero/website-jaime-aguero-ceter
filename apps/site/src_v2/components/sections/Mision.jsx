import { Container } from "../ui/Container.jsx";
import { Eyebrow } from "../ui/Eyebrow.jsx";
import { Picture } from "../ui/Picture.jsx";
import { Button } from "../ui/Button.jsx";
import { SECTIONS } from "../../../src_v1/content/home.js";
import { MISION_EXTRA } from "../../content/extras.js";
import { ANCHOR_IDS, BASE_PATH } from "../../constants.js";

export function Mision() {
  const data = SECTIONS.find((s) => s.id === "mision");
  return (
    <section className="section cream" id={ANCHOR_IDS.mision} aria-labelledby="mision-h2">
      <Container>
        <div className="two-col">
          <div data-anim>
            <Eyebrow>{MISION_EXTRA.eyebrow}</Eyebrow>
            <h2 id="mision-h2" className="h2">
              {MISION_EXTRA.title}
            </h2>
            {data.paragraphs.map((p, i) => (
              <p key={i} className="body">
                {p}
              </p>
            ))}
            <div className="mt-cta">
              <Button variant="link" to={`${BASE_PATH}/metodologia`}>
                Conocer Metodología
              </Button>
            </div>
          </div>
          <div className="visual" data-anim>
            <Picture
              base={MISION_EXTRA.imageBase}
              alt={MISION_EXTRA.imageAlt}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
