import { Link } from "react-router-dom";
import { RUTAS } from "../../../routes/rutas";
import "../Administrador.css";

export default function AdminProductos() {
  return (
    <div className="admin__contenido">
      <div className="admin__encabezado">
        <span className="antetitulo">Panel</span>
        <h1 className="admin__titulo">
          Gestión de <span className="texto-degradado">productos</span>
        </h1>
        <p className="admin__texto">
          Esta sección todavía la está terminando el resto del equipo. En cuanto
          esté lista, se conecta acá para poder editar y eliminar productos.
        </p>
      </div>

      <section className="admin__bloque">
        <p className="admin__vacio">
          Mientras tanto, podés ver el catálogo actual.
        </p>
        <Link to={RUTAS.PRODUCTOS} className="boton boton-secundario">
          Ver catálogo
        </Link>
      </section>
    </div>
  );
}
