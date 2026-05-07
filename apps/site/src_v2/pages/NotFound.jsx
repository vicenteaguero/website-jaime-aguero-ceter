import { Seo } from "../components/seo/Seo.jsx";
import { Button } from "../components/ui/Button.jsx";
import { BASE_PATH } from "../constants.js";

export default function NotFound() {
  return (
    <>
      <Seo title="Página no encontrada · CETER" />
      <section className="notfound">
        <div>
          <h1>404</h1>
          <p>La página que buscas no existe.</p>
          <Button variant="ghost" to={BASE_PATH}>
            Volver al inicio
          </Button>
        </div>
      </section>
    </>
  );
}
