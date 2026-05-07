import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "../ui/Icon.jsx";
import { NAV_LINKS, BASE_PATH } from "../../constants.js";
import { buildWhatsAppUrl } from "../../lib/whatsapp.js";

const LOGO = "/images-modern/logo-ceter.png";
const ANCHOR_RE = /^\/new(?:\/)?#([\w-]+)$/;

function isActive(href, pathname, hash) {
  const m = href.match(ANCHOR_RE);
  if (m) {
    return pathname === BASE_PATH || pathname === `${BASE_PATH}/`
      ? hash === `#${m[1]}`
      : false;
  }
  return pathname === href || pathname === `${href}/`;
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const closeBtnRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    closeBtnRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      setOpen(false);
      burgerRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash]);

  const wa = buildWhatsAppUrl();

  return (
    <nav className="nav" aria-label="Principal">
      <Link to={BASE_PATH} className="nav-brand" aria-label="CETER">
        <img src={LOGO} alt="CETER" width="160" height="42" />
      </Link>

      <div className="nav-links" role="list">
        {NAV_LINKS.map((l) => {
          const active = isActive(l.href, pathname, hash);
          return (
            <Link
              key={l.href}
              to={l.href}
              role="listitem"
              aria-current={active ? "page" : undefined}
            >
              {l.label}
            </Link>
          );
        })}
      </div>

      <div className="nav-actions">
        <a
          className="nav-icon-btn"
          href={wa}
          target="_blank"
          rel="noopener"
          aria-label="Conversemos por WhatsApp"
        >
          <Icon name="whatsapp" size={18} />
        </a>
        <Link className="nav-cta" to={`${BASE_PATH}#contacto`}>
          Conversemos
        </Link>
        <button
          ref={burgerRef}
          type="button"
          className="nav-burger"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="nav-drawer"
          onClick={() => setOpen(true)}
        >
          <Icon name="menu" size={18} />
        </button>
      </div>

      {open ? (
        <div className="nav-drawer" role="presentation" onClick={() => setOpen(false)}>
          <div
            id="nav-drawer"
            className="nav-drawer-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Menú principal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeBtnRef}
              type="button"
              className="nav-drawer-close"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
            >
              <Icon name="close" size={18} />
            </button>
            {NAV_LINKS.map((l) => {
              const active = isActive(l.href, pathname, hash);
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  aria-current={active ? "page" : undefined}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
