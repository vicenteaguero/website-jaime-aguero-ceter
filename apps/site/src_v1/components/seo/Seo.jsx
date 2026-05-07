import { Head } from "vite-react-ssg";
import { SITE } from "../../content/site.js";
import { DEFAULT_SEO } from "../../content/seo.js";

export function Seo({ title, description, image, canonical, type = "website" }) {
  const finalTitle = title || DEFAULT_SEO.title;
  const finalDescription = description || DEFAULT_SEO.description;
  const finalImage = image || DEFAULT_SEO.image;
  const finalCanonical = canonical || DEFAULT_SEO.canonical;

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={finalCanonical} />

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
