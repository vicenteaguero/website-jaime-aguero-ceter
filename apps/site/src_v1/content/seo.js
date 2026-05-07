import { SITE } from "./site.js";

const baseImage = `${SITE.url}/og-image.png`;

export const SEO_BY_PATH = {
  "/": {
    title: "CETER — Rehabilitación de Adicciones y Salud Mental",
    description:
      "Centro Terapéutico de Rehabilitación en Rancagua. Programa Ambulatorio Intensivo (PAI) para tratar adicciones sin desarraigar al paciente de su entorno familiar y laboral.",
    image: baseImage,
    canonical: `${SITE.url}/`
  },
  "/metodologia": {
    title: "Metodología | CETER",
    description:
      "Metodología integral de prevención y tratamiento de adicciones: evaluación integral, intervención temprana, enfoque comunitario y seguimiento continuo.",
    image: baseImage,
    canonical: `${SITE.url}/metodologia`
  },
  "/documentos": {
    title: "Documentos | CETER",
    description:
      "Artículo sobre Responsabilidad Social Empresarial y el Control de Riesgos del Consumo de Alcohol y Drogas.",
    image: baseImage,
    canonical: `${SITE.url}/documentos`
  }
};

export const DEFAULT_SEO = SEO_BY_PATH["/"];
