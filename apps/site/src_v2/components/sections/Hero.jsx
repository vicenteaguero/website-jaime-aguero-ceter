import { Eyebrow } from "../ui/Eyebrow.jsx";
import { Button } from "../ui/Button.jsx";
import { Picture } from "../ui/Picture.jsx";
import { Icon } from "../ui/Icon.jsx";
import { HERO_EXTRA } from "../../content/extras.js";
import { BASE_PATH } from "../../constants.js";
import { buildWhatsAppUrl } from "../../lib/whatsapp.js";

export function Hero() {
  const wa = buildWhatsAppUrl();
  return (
    <section className="hero" aria-label="Inicio">
      <svg
        className="hero-blob"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="#4A6C5D"
          d="M421.3 89.5c54.7 38 92.6 102.6 96.4 169.7 3.8 67.1-26.5 136.6-78 175.1-51.5 38.5-124.1 46-186.5 30.4-62.4-15.6-114.6-54.4-148.6-104.7C70.6 309.6 54.5 247.6 73.4 195.4 92.3 143.2 146.3 100.9 207 78.4 267.6 55.9 335 53.2 366.6 51.5c31.6-1.7 27.5-2.5 54.7 38z"
        />
      </svg>
      <div data-anim>
        <Eyebrow>{HERO_EXTRA.eyebrow}</Eyebrow>
        <h1 className="hero-h1">
          {HERO_EXTRA.h1Lead} <em>{HERO_EXTRA.h1Em}</em> {HERO_EXTRA.h1Tail}
        </h1>
        <p className="hero-lede">{HERO_EXTRA.lede}</p>
        <div className="hero-cta-row">
          <Button
            variant="primary"
            href={wa}
            ariaLabel="Conversemos por WhatsApp"
          >
            <Icon name="whatsapp" size={16} />
            Conversemos
          </Button>
          <Button variant="ghost" to={`${BASE_PATH}/metodologia`}>
            Conocer Metodología
          </Button>
        </div>
        <dl className="hero-meta">
          {HERO_EXTRA.meta.map((m) => (
            <div key={m.k}>
              <dt className="k">{m.k}</dt>
              <dd className="v">{m.v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="hero-compose" data-anim>
        <div className="hero-photo">
          <Picture
            base="header"
            hero
            priority
            sizes="(min-width: 1024px) 460px, 100vw"
            alt="Vista aérea del entorno regional de Rancagua"
          />
        </div>
        <blockquote className="hero-quote">
          <span className="hero-quote-k">{HERO_EXTRA.quoteKicker}</span>
          <p>{HERO_EXTRA.quote}</p>
        </blockquote>
      </div>
    </section>
  );
}
