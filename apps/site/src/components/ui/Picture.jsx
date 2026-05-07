export function Picture({
  src,
  webpSrcSet,
  fallbackSrcSet,
  sizes = "100vw",
  alt,
  width,
  height,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  className = ""
}) {
  return (
    <picture>
      {webpSrcSet ? (
        <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      ) : null}
      {fallbackSrcSet ? (
        <source srcSet={fallbackSrcSet} sizes={sizes} />
      ) : null}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchpriority={fetchPriority}
        className={className}
      />
    </picture>
  );
}
