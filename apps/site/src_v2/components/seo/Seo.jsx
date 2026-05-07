import { Head } from "vite-react-ssg";
import { SITE } from "../../../src_v1/content/site.js";

export function Seo({
  title,
  description,
  canonical,
  image,
  type = "website",
  noindex = true
}) {
  const finalTitle = title ?? `${SITE.brand} · ${SITE.tagline}`;
  const finalDescription = description ?? SITE.shortDescription;
  const finalCanonical = canonical ?? `${SITE.url}/new/`;
  const finalImage = image ?? `${SITE.url}/og-image.png`;
  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={finalCanonical} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:site_name" content={SITE.brand} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={finalCanonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
    </Head>
  );
}
