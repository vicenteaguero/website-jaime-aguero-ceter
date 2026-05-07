import { Container } from "../ui/Container.jsx";
import { Eyebrow } from "../ui/Eyebrow.jsx";
import { SITE } from "../../../src_v1/content/site.js";
import { UBICACION_EXTRA } from "../../content/extras.js";
import { ANCHOR_IDS, MAP_EMBED_SRC, MAP_LINK } from "../../constants.js";

export function Ubicacion() {
  const a = SITE.address;
  return (
    <section
      className="section cream"
      id={ANCHOR_IDS.ubicacion}
      aria-labelledby="ubicacion-h2"
    >
      <Container>
        <div className="ubic">
          <div data-anim>
            <Eyebrow>{UBICACION_EXTRA.eyebrow}</Eyebrow>
            <h2 id="ubicacion-h2" className="h2">
              {UBICACION_EXTRA.title}
            </h2>
            <div className="addr">
              {a.street}
              <br />
              {a.building}
              <br />
              {a.city}
              <span className="region">
                {a.region}, {a.country}
              </span>
            </div>
            <div className="ubic-contact">
              <div>
                <span className="k">Teléfono</span>
                <a className="v" href={`tel:${SITE.contact.phone}`}>
                  {SITE.contact.phoneDisplay}
                </a>
              </div>
              <div>
                <span className="k">Email</span>
                <a className="v" href={`mailto:${SITE.contact.email}`}>
                  {SITE.contact.email}
                </a>
              </div>
            </div>
          </div>
          <div data-anim>
            <div className="map-frame">
              <iframe
                src={MAP_EMBED_SRC}
                title="Mapa de CETER, Bueras 359, Rancagua"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              className="map-link"
              href={MAP_LINK}
              target="_blank"
              rel="noopener"
            >
              Abrir en Google Maps →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
