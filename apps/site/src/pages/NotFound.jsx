import { Seo } from "../components/seo/Seo.jsx";
import { Button } from "../components/ui/Button.jsx";

export default function NotFound() {
  return (
    <>
      <Seo title="404 — Página no encontrada | CETER" />
      <section className="min-h-[80vh] flex items-center justify-center px-section-x bg-bg">
        <div className="max-w-content text-center">
          <p className="font-display text-fluid-hero text-primary">404</p>
          <h1 className="font-display text-fluid-xl text-ink mt-4 mb-3">
            Página no encontrada
          </h1>
          <p className="text-fluid-base text-ink-soft mb-8">
            La página que buscas no existe o fue movida.
          </p>
          <Button to="/" variant="solid">
            Volver al Inicio
          </Button>
        </div>
      </section>
    </>
  );
}
