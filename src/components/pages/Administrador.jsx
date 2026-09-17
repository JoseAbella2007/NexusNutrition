import { Link, NavLink, Outlet } from "react-router-dom";
import { RUTAS } from "../../routes/rutas";
import Logo from "../common/Logo";
import fondoAdmin from "../../assets/imagenes/fondoEntrenamiento.webp";
import "./Administrador.css";

export default function Administrador() {
  return (
    <div className="admin-layout">
      <div className="admin-fondo">
        <img
          className="admin-fondo__imagen"
          src={fondoAdmin}
          alt=""
          aria-hidden="true"
        />
      </div>

      <aside className="admin-sidebar">
        <span className="admin-sidebar__titulo">Panel Admin</span>
        <nav className="admin-sidebar__nav">
          <NavLink
            to={RUTAS.ADMIN}
            end
            className={({ isActive }) =>
              `admin-sidebar__link ${isActive ? "admin-sidebar__link--activo" : ""}`
            }
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M3 11.5 12 4l9 7.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Inicio
          </NavLink>

          <NavLink
            to={RUTAS.ADMIN_USUARIOS}
            className={({ isActive }) =>
              `admin-sidebar__link ${isActive ? "admin-sidebar__link--activo" : ""}`
            }
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="7" r="4" />
              <path
                d="M23 21v-2a4 4 0 0 0-3-3.87"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 3.13a4 4 0 0 1 0 7.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Usuarios
          </NavLink>

          <NavLink
            to={RUTAS.ADMIN_PRODUCTOS}
            className={({ isActive }) =>
              `admin-sidebar__link ${isActive ? "admin-sidebar__link--activo" : ""}`
            }
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M21 8 12 3 3 8l9 5 9-5Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 8v8l9 5 9-5V8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12 13v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Productos
          </NavLink>
        </nav>

        <Link to={RUTAS.INICIO} className="admin-sidebar__ir-web">
          <span>Ir a la Web</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <div className="admin-sidebar__pie">
          <Logo size="sm" />
        </div>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
