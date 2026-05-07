export const BASE_PATH = "/new";

export const ANCHOR_IDS = {
  mision: "mision",
  pai: "pai",
  programa: "programa",
  mantencion: "mantencion",
  metodologia: "metodologia",
  empresas: "empresas",
  ubicacion: "ubicacion",
  contacto: "contacto"
};

export const NAV_LINKS = [
  { href: `${BASE_PATH}#${ANCHOR_IDS.mision}`, label: "Misión" },
  { href: `${BASE_PATH}#${ANCHOR_IDS.pai}`, label: "PAI" },
  { href: `${BASE_PATH}#${ANCHOR_IDS.programa}`, label: "Programa" },
  { href: `${BASE_PATH}#${ANCHOR_IDS.mantencion}`, label: "Mantención" },
  { href: `${BASE_PATH}#${ANCHOR_IDS.contacto}`, label: "Contacto" }
];

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { href: `${BASE_PATH}/metodologia`, label: "Metodología" },
  { href: `${BASE_PATH}/documentos`, label: "Documentos" }
];

export const BREAKPOINTS = {
  tablet: 768,
  desktop: 1024,
  wide: 1280
};

export const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Bueras%20359%20Rancagua&output=embed";

export const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Bueras+359+Rancagua";
