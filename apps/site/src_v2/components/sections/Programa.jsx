import { Container } from "../ui/Container.jsx";
import { Eyebrow } from "../ui/Eyebrow.jsx";
import { PROGRAMA_EXTRA } from "../../content/extras.js";
import { ANCHOR_IDS } from "../../constants.js";

export function Programa() {
  return (
    <section className="section cream" id={ANCHOR_IDS.programa} aria-labelledby="programa-h2">
      <Container>
        <div className="programa-head" data-anim>
          <Eyebrow>{PROGRAMA_EXTRA.eyebrow}</Eyebrow>
          <h2 id="programa-h2" className="h2">
            {PROGRAMA_EXTRA.title}
          </h2>
          <p className="body">{PROGRAMA_EXTRA.intro}</p>
        </div>
        <ol className="timeline" data-anim aria-label="Fases del programa">
          {PROGRAMA_EXTRA.phases.map((ph) => (
            <li key={ph.num} className={ph.last ? "last" : undefined}>
              <div className="num">{ph.num}</div>
              <div className="name">{ph.name}</div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
