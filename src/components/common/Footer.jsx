import { Link } from "react-router-dom";
import Logo from "./Logo";
import { RUTAS } from "../../routes/rutas";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="pie-pagina">
      <div className="contenedor pie-pagina__interior">
        <div className="pie-pagina__marca">
          <Logo size="sm" />
          <p className="pie-pagina__lema">
            Nutrición premium diseñada para acompañar tu rendimiento, tu
            disciplina y tus objetivos.
          </p>
        </div>

        <div className="pie-pagina__columnas">
          <div className="pie-pagina__columna">
            <span className="pie-pagina__columna-titulo">Marca</span>
            <Link to={RUTAS.INICIO}>Inicio</Link>
            <Link to={RUTAS.PRODUCTOS}>Productos</Link>
          </div>

          <div className="pie-pagina__columna">
            <span className="pie-pagina__columna-titulo">Cuenta</span>
            <Link to={RUTAS.INICIAR_SESION}>Iniciar sesión</Link>
            <Link to={RUTAS.REGISTRO}>Crear cuenta</Link>
          </div>

          <div className="pie-pagina__columna">
            <span className="pie-pagina__columna-titulo">Legal</span>
            <Link to={RUTAS.NO_ENCONTRADA}>Términos y condiciones</Link>
            <Link to={RUTAS.NO_ENCONTRADA}>Política de privacidad</Link>
          </div>
        </div>
      </div>

      <div className="pie-pagina__inferior">
        <div className="contenedor pie-pagina__inferior-interior">
          <span>
            © {new Date().getFullYear()} Nexus Nutrition. Todos los derechos
            reservados.
          </span>
          <span className="pie-pagina__firma">
            Ciencia · Rendimiento · Evolución
          </span>
        </div>
      </div>
    </footer>
  );
}
