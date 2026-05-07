import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Nav } from "./Nav.jsx";
import { Footer } from "./Footer.jsx";
import { SkipLink } from "./SkipLink.jsx";
import { WhatsAppFab } from "../whatsapp/WhatsAppFab.jsx";
import { ChatWidget } from "../chat/ChatWidget.jsx";
import { OrganizationJsonLd } from "../seo/JsonLd.jsx";
import { ENV } from "../../lib/env.js";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <>
      <SkipLink />
      <OrganizationJsonLd />
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
      {ENV.isChatEnabled ? <ChatWidget /> : null}
    </>
  );
}
