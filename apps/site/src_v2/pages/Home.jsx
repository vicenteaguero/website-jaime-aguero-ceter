import { Seo } from "../components/seo/Seo.jsx";
import { Hero } from "../components/sections/Hero.jsx";
import { Mision } from "../components/sections/Mision.jsx";
import { Pai } from "../components/sections/Pai.jsx";
import { Programa } from "../components/sections/Programa.jsx";
import { Mantencion } from "../components/sections/Mantencion.jsx";
import { Metodologia } from "../components/sections/Metodologia.jsx";
import { Empresas } from "../components/sections/Empresas.jsx";
import { Ubicacion } from "../components/sections/Ubicacion.jsx";
import { Contacto } from "../components/sections/Contacto.jsx";
import { SITE } from "../../src_v1/content/site.js";

export default function Home() {
  return (
    <>
      <Seo
        title={`${SITE.brand} · ${SITE.tagline}`}
        description={SITE.shortDescription}
        canonical={`${SITE.url}/new/`}
      />
      <Hero />
      <Mision />
      <Pai />
      <Programa />
      <Mantencion />
      <Metodologia />
      <Empresas />
      <Ubicacion />
      <Contacto />
    </>
  );
}
