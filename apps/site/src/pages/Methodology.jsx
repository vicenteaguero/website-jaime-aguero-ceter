import { Seo } from "../components/seo/Seo.jsx";
import { Button } from "../components/ui/Button.jsx";
import { METHODOLOGY } from "../content/methodology.js";
import { SEO_BY_PATH } from "../content/seo.js";

export default function Methodology() {
  const seo = SEO_BY_PATH["/metodologia"];

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        image={seo.image}
      />
      <article className="bg-bg pt-28 pb-section-y px-section-x">
        <div className="mx-auto max-w-content bg-paper rounded-lg shadow-md shadow-black/5 p-8 md:p-12">
          <h1 className="font-display text-fluid-2xl text-primary mb-6 leading-tight">
            {METHODOLOGY.title}
          </h1>
          {METHODOLOGY.intro.map((paragraph, index) => (
            <p key={index} className="text-fluid-base text-ink mb-5 leading-relaxed">
              {paragraph}
            </p>
          ))}

          {METHODOLOGY.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="font-display text-fluid-xl text-ink border-b-2 border-secondary pb-2 mb-4">
                {section.heading}
              </h2>
              {section.blocks.map((block, index) => (
                <p key={index} className="text-fluid-base text-ink mb-4 leading-relaxed">
                  {block.strong ? (
                    <strong className="text-primary">{block.strong}</strong>
                  ) : null}{" "}
                  {block.text}
                </p>
              ))}
            </section>
          ))}

          <div className="text-center mt-12">
            <Button to="/" variant="solid">
              Volver al Inicio
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}
