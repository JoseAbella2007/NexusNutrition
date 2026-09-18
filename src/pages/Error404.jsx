import { Link } from "react-router-dom";
import "./Error404.css";
import fondo404 from "../assets/imagenes/team/fondoNosotros.jpeg";

// Criterio: página que se muestra ante cualquier ruta no definida
export default function Error404() {
  return (
    <section
       className="error-404"
       style={{ backgroundImage: `url(${fondo404})` }}
    >
      <div className="error-404__contenido">
        <span className="error-404__codigo">404</span>
        <h1>Esta página no existe</h1>
        <p>
          Parece que te perdiste. La página que buscás no está disponible o
          fue movida.
        </p>
        <Link to="/" className="boton boton-primario">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}