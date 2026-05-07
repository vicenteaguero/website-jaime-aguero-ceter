import { Container } from "../ui/Container.jsx";
import { Eyebrow } from "../ui/Eyebrow.jsx";
import { Button } from "../ui/Button.jsx";
import { METODOLOGIA_HOME_EXTRA } from "../../content/extras.js";
import { ANCHOR_IDS } from "../../constants.js";

export function Metodologia() {
  return (
    <section
      className="section cream"
      id={ANCHOR_IDS.metodologia}
      aria-labelledby="metodologia-h2"
    >
      <Container>
        <div className="meto-head" data-anim>
          <Eyebrow>{METODOLOGIA_HOME_EXTRA.eyebrow}</Eyebrow>
          <h2 id="metodologia-h2" className="h2">
            {METODOLOGIA_HOME_EXTRA.title}
          </h2>
        </div>
        <ul className="pillars" data-anim role="list">
          {METODOLOGIA_HOME_EXTRA.pillars.map((p) => (
            <li key={p.num} className="pillar">
              <article>
                <span className="num">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            </li>
          ))}
        </ul>
        <div className="meto-cta" data-anim>
          <Button variant="ghost" to={METODOLOGIA_HOME_EXTRA.cta.to}>
            {METODOLOGIA_HOME_EXTRA.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
