import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Head } from "vite-react-ssg";
import { Nav } from "./components/layout/Nav.jsx";
import { Footer } from "./components/layout/Footer.jsx";
import { StickyCta } from "./components/layout/StickyCta.jsx";
import { OrganizationJsonLd } from "../src_v1/components/seo/JsonLd.jsx";
import { useFadeIn } from "./hooks/useFadeIn.js";
import "./styles.css";

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=Inter:wght@400;500;600&display=swap";

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  useFadeIn();

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS_HREF} />
        <link
          rel="preload"
          as="image"
          href="/images-modern/header-1280.webp"
          type="image/webp"
          imagesrcset="/images-modern/header-640.webp 640w, /images-modern/header-1280.webp 1280w, /images-modern/header-1920.webp 1920w"
          imagesizes="(min-width: 1024px) 460px, 100vw"
          fetchpriority="high"
        />
      </Head>
      <OrganizationJsonLd />
      <div className="page-shell has-sticky">
        <a className="skip" href="#main-new">
          Saltar al contenido
        </a>
        <Nav />
        <main id="main-new">
          <Outlet />
        </main>
        <Footer />
        <StickyCta />
      </div>
    </>
  );
}
