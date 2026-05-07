import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion.js";

export function ParallaxHeader({ title, subtitle, image = "/images/header-1920.webp" }) {
  const reduced = usePrefersReducedMotion();

  return (
    <header
      className="relative isolate overflow-hidden flex items-center justify-center text-center text-paper min-h-[70vh] md:min-h-[80vh] px-section-x bg-primary-ink"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#1a3540",
        backgroundAttachment: reduced ? "scroll" : "fixed"
      }}
    >
      <div className="absolute inset-0 -z-10 bg-black/45" aria-hidden="true" />
      <div className="relative z-10 max-w-content mx-auto motion-safe:animate-fade-up">
        <h1 className="text-fluid-hero font-display font-normal tracking-wider mb-3 text-shadow-soft">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-fluid-lg font-light text-shadow-soft">{subtitle}</p>
        ) : null}
      </div>
    </header>
  );
}
