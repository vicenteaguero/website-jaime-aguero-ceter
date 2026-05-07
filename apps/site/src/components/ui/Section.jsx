import { useScrollReveal } from "../../hooks/useScrollReveal.js";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion.js";

const BG_BY_KEY = {
  ayuda: "/images/ayuda-1280.webp",
  pai: "/images/pai-1280.webp",
  brain: "/images/brain-1280.webp",
  separacion: "/images/separacion-1280.webp",
  tren: "/images/tren-1280.webp"
};

export function Section({ id, title, children, backgroundImage, className = "" }) {
  const [ref, revealed] = useScrollReveal();
  const reduced = usePrefersReducedMotion();
  const bgUrl = backgroundImage ? BG_BY_KEY[backgroundImage] : null;

  const revealClass =
    !reduced && !revealed
      ? "opacity-0 translate-y-6"
      : "opacity-100 translate-y-0";

  return (
    <section
      id={id}
      ref={ref}
      className={[
        "relative isolate overflow-hidden",
        "min-h-[80vh] md:min-h-[80vh]",
        "flex items-center justify-center text-center text-paper",
        "py-section-y px-section-x",
        "transition-[opacity,transform] duration-700 ease-soft",
        revealClass,
        className
      ].join(" ")}
      style={
        bgUrl
          ? {
              backgroundImage: `url(${bgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }
          : undefined
      }
    >
      {bgUrl ? (
        <div className="absolute inset-0 -z-10 bg-black/55" aria-hidden="true" />
      ) : null}
      <div className="relative z-10 max-w-content w-full mx-auto">
        {title ? (
          <h2 className="text-fluid-2xl font-display font-semibold mb-4 text-shadow-soft">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
