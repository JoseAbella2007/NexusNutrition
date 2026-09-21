import { useState } from "react";
import { useAutenticacion } from "../../../context/ContextoAutenticacion";
import { servicioAutenticacion } from "../../../services/servicioAutenticacion";
import "../Administrador.css";

export default function AdminUsuarios() {
  const { usuario } = useAutenticacion();
  const [usuarios, setUsuarios] = useState(() =>
    servicioAutenticacion.obtenerUsuarios(),
  );

  const manejarEliminar = (usuarioAEliminar) => {
    const confirmado = window.confirm(
      `¿Seguro que querés eliminar a ${usuarioAEliminar.nombre}? Va a perder el acceso a su cuenta.`,
    );
    if (!confirmado) return;

    servicioAutenticacion.eliminarUsuario(usuarioAEliminar.id);
    setUsuarios(servicioAutenticacion.obtenerUsuarios());
  };

  return (
    <div className="admin__contenido">
      <div className="admin__encabezado">
        <span className="antetitulo">Panel</span>
        <h1 className="admin__titulo">
          Gestión de <span className="texto-degradado">usuarios</span>
        </h1>
        <p className="admin__texto">Usuarios registrados en el sitio.</p>
      </div>

      {usuarios.length === 0 ? (
        <p className="admin__vacio">Todavía no se registró ningún usuario.</p>
      ) : (
        <section className="admin__bloque">
          <div className="admin__tabla-envoltorio">
            <table className="admin__tabla">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                  <th aria-label="Acciones" />
                </tr>
              </thead>
              <tbody>
                {usuarios.map((fila) => (
                  <tr key={fila.id}>
                    <td data-label="Nombre">{fila.nombre}</td>
                    <td data-label="Email">{fila.correo}</td>
                    <td data-label="Rol">
                      <span className="admin__rol">{fila.rol}</span>
                    </td>
                    <td className="admin__acciones">
                      {fila.id !== usuario.id && (
                        <button
                          className="boton boton-fantasma admin__boton-borrar"
                          onClick={() => manejarEliminar(fila)}
                        >
                          Eliminar
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
