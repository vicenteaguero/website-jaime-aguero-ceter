import { Seo } from "../components/seo/Seo.jsx";
import { Container } from "../components/ui/Container.jsx";
import { Eyebrow } from "../components/ui/Eyebrow.jsx";
import { DOCUMENTS } from "../../src_v1/content/documents.js";
import { SITE } from "../../src_v1/content/site.js";

function renderParagraph(p, key) {
  if (typeof p === "string") return <p key={key}>{p}</p>;
  return (
    <p key={key}>
      {p.strong ? <strong>{p.strong} </strong> : null}
      {p.text}
    </p>
  );
}

export default function Documents() {
  return (
    <>
      <Seo
        title={`${DOCUMENTS.title} · ${SITE.brand}`}
        description={
          (typeof DOCUMENTS.intro[0] === "string"
            ? DOCUMENTS.intro[0]
            : DOCUMENTS.intro[0]?.text ?? ""
          ).slice(0, 155)
        }
        canonical={`${SITE.url}/new/documentos`}
      />
      <section className="section cream" aria-labelledby="docs-h1">
        <Container>
          <div data-anim>
            <Eyebrow>Documentos</Eyebrow>
            <h1 id="docs-h1" className="h2">
              {DOCUMENTS.title}
            </h1>
            <div className="meto-text">
              {DOCUMENTS.intro.map((p, i) => renderParagraph(p, i))}
            </div>
          </div>
        </Container>
      </section>

      {DOCUMENTS.sections.map((sec, idx) => (
        <section
          key={sec.heading}
          className={idx % 2 === 0 ? "section paper" : "section beige"}
          aria-labelledby={`doc-sec-${idx}`}
        >
          <Container>
            <div data-anim className="pai-wrap">
              <h2 id={`doc-sec-${idx}`} className="h2">
                {sec.heading}
              </h2>
              <div className="meto-text">
                {sec.paragraphs.map((p, j) => renderParagraph(p, j))}
              </div>
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
