import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, SITE } from "../../content/site.js";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const onAnchor = location.pathname === "/";
  const opaque = scrolled || open || !onAnchor;
  const linkColor = opaque
    ? "text-ink hover:text-primary"
    : "text-paper hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]";
  const burgerColor = opaque ? "text-primary" : "text-paper drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]";

  return (
    <nav
      className={[
        "fixed inset-x-0 top-0 z-50",
        "px-section-x py-2",
        "border-b transition-all duration-300 ease-soft",
        scrolled || open || !onAnchor
          ? "bg-white/90 backdrop-blur border-secondary translate-y-0"
          : "bg-transparent border-transparent -translate-y-full md:translate-y-0 md:bg-transparent"
      ].join(" ")}
      aria-label="Navegación principal"
    >
      <div className="mx-auto max-w-shell flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2"
          aria-label={`${SITE.brand} — Inicio`}
        >
          <picture>
            <source type="image/webp" srcSet="/images/logo-640.webp" />
            <img
              src="/images/logo-1280.jpg"
              alt={`${SITE.brand} logo`}
              width="110"
              height="50"
              className="h-9 sm:h-10 w-auto"
              decoding="async"
              fetchpriority="high"
            />
          </picture>
          <span className="sr-only">{SITE.brand}</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-3 py-3 text-fluid-xs font-bold transition-colors ${linkColor}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md hover:bg-secondary/50 transition-colors ${burgerColor}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={[
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-soft",
          open ? "max-h-screen opacity-100 mt-2" : "max-h-0 opacity-0"
        ].join(" ")}
      >
        <ul className="flex flex-col py-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block px-2 py-3 text-base font-bold text-ink hover:text-primary border-b border-secondary/60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
