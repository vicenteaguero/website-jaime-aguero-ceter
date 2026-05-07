import { Head } from "vite-react-ssg";
import { SITE } from "../../content/site.js";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: SITE.brand,
    legalName: SITE.legalName,
    alternateName: "Centro Terapéutico de Rehabilitación y Orientación",
    url: SITE.url,
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    medicalSpecialty: ["Addiction", "Psychiatry"],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE.address.street}, ${SITE.address.building}`,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.countryCode
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: SITE.address.region
    }
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}
