const ROOT = "/images-modern";

export function Picture({
  base,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  alt,
  width,
  height,
  priority = false,
  className = "",
  hero = false,
  ...rest
}) {
  const widths = hero ? [640, 1280, 1920] : [640, 1280];
  const srcset = widths.map((w) => `${ROOT}/${base}-${w}.webp ${w}w`).join(", ");
  const fallback = `${ROOT}/${base}-${widths[widths.length - 1]}.webp`;
  return (
    <img
      src={fallback}
      srcSet={srcset}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchpriority={priority ? "high" : undefined}
      className={className}
      {...rest}
    />
  );
}
