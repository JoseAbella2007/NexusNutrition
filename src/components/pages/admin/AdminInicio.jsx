import { useAutenticacion } from "../../../context/ContextoAutenticacion";
import FondoSeccion from "../../common/FondoSeccion";
import "../Administrador.css";

export default function AdminInicio() {
  const { usuario } = useAutenticacion();

  return (
    <section className="admin-bienvenida">
      <FondoSeccion />
      <div className="admin-bienvenida__contenido">
        <span className="antetitulo">Panel de administración</span>
        <h1 className="admin-bienvenida__titulo">
          Bienvenido, <span className="texto-degradado">Administrador</span>
        </h1>
        <span className="admin-bienvenida__divisor" aria-hidden="true" />
        <p>
          Hola {usuario.nombre.split(" ")[0]}, desde acá gestionás los usuarios
          registrados y el catálogo de productos de Nexus
          Nutrition.
        </p>
      </div>
    </section>
  );
}
