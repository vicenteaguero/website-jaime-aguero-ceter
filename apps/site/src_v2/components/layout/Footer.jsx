import { Link } from "react-router-dom";
import { SITE } from "../../../src_v1/content/site.js";
import { FOOTER_LINKS } from "../../constants.js";

export function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-legal">
      <div className="footer-grid">
        <div>
          <div id="footer-legal" className="legal">
            {SITE.legalName}
          </div>
          <div className="addr">
            {SITE.address.street} · {SITE.address.building} · {SITE.address.city}
          </div>
        </div>
        <nav aria-label="Pie de página">
          <div className="footer-nav">
            {FOOTER_LINKS.map((l) => (
              <Link key={l.href} to={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <div className="footer-rule" />
      <div className="footer-cr">
        © {SITE.copyrightYear} {SITE.brand}
      </div>
      {SITE.credit ? (
        <div className="footer-credit">
          {SITE.credit.label.replace("ORBEN", "")}
          <a href={SITE.credit.url} target="_blank" rel="noopener">
            ORBEN
          </a>
        </div>
      ) : null}
    </footer>
  );
}
