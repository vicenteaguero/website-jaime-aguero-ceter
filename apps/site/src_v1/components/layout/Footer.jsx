import { SITE } from "../../content/site.js";

export function Footer() {
  return (
    <footer className="bg-ink text-bg px-section-x py-10">
      <div className="mx-auto max-w-shell grid gap-8 md:grid-cols-3 text-center md:text-left">
        <div>
          <h2 className="font-display font-semibold text-paper text-fluid-lg mb-3">
            {SITE.brand}
          </h2>
          <p className="text-secondary text-fluid-xs leading-relaxed">
            Un nuevo comienzo es posible. Estamos aquí para ayudarte en cada paso
            del camino.
          </p>
        </div>

        <div>
          <h3 className="font-display font-semibold text-paper text-fluid-base mb-3">
            Contacto
          </h3>
          <ul className="space-y-1 text-secondary text-fluid-xs">
            <li>
              Email:{" "}
              <a
                className="hover:text-paper transition-colors"
                href={`mailto:${SITE.contact.email}`}
              >
                {SITE.contact.email}
              </a>
            </li>
            <li>
              Teléfono:{" "}
              <a
                className="hover:text-paper transition-colors"
                href={`tel:${SITE.contact.phone}`}
              >
                {SITE.contact.phoneDisplay}
              </a>
            </li>
            <li>{SITE.address.street}</li>
            <li>
              {SITE.address.building}, {SITE.address.city}.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-paper text-fluid-base mb-3">
            Información
          </h3>
          <p className="text-secondary text-fluid-xs">
            {SITE.legalName}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-shell border-t border-white/15 mt-8 pt-6 text-center text-secondary text-fluid-xs">
        <p>
          &copy; {SITE.copyrightYear} {SITE.brand}. Todos los derechos reservados.
        </p>
        <p>
          {SITE.credit.label}{" "}
          <a
            className="hover:text-paper transition-colors"
            href={SITE.credit.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            orben.cl
          </a>
        </p>
      </div>
    </footer>
  );
}
