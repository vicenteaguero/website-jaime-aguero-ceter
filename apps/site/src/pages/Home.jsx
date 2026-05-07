import { Seo } from "../components/seo/Seo.jsx";
import { ParallaxHeader } from "../components/ui/ParallaxHeader.jsx";
import { Section } from "../components/ui/Section.jsx";
import { Button } from "../components/ui/Button.jsx";
import { HERO, SECTIONS } from "../content/home.js";
import { SITE } from "../content/site.js";
import { SEO_BY_PATH } from "../content/seo.js";

export default function Home() {
  const seo = SEO_BY_PATH["/"];
  const whatsappHref = `https://wa.me/${SITE.contact.whatsapp.number}?text=${encodeURIComponent(
    SITE.contact.whatsapp.prefilledMessage
  )}`;

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        image={seo.image}
      />
      <ParallaxHeader title={HERO.title} subtitle={HERO.subtitle} />

      {SECTIONS.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          title={section.title}
          backgroundImage={section.backgroundImage}
        >
          {section.paragraphs?.map((paragraph, index) => (
            <p
              key={index}
              className="text-fluid-base font-light mb-6 text-shadow-soft"
            >
              {paragraph}
            </p>
          ))}

          {section.list ? (
            <ul className="text-left max-w-content mx-auto space-y-2 mb-6 text-fluid-base font-light text-shadow-soft">
              {section.list.map((item, index) => (
                <li key={index}>
                  <strong className="font-bold">{item.strong}</strong> {item.text}
                </li>
              ))}
            </ul>
          ) : null}

          {section.cta ? (
            section.cta.isWhatsApp ? (
              <Button href={whatsappHref} external variant="primary">
                {section.cta.label}
              </Button>
            ) : (
              <Button to={section.cta.to} variant="primary">
                {section.cta.label}
              </Button>
            )
          ) : null}
        </Section>
      ))}
    </>
  );
}
