import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useAutenticacion } from "../../context/ContextoAutenticacion";
import { RUTAS } from "../../routes/rutas";
import "./Menu.css";

export default function Menu({setCarritoAbierto, carrito}) {
  const { estaAutenticado, esAdministrador, usuario, cerrarSesion } =
    useAutenticacion();
  const [conScroll, setConScroll] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const navegar = useNavigate();
  const ubicacion = useLocation();

  const cerrandoSesionRef = useRef(false);

  useEffect(() => {
    const manejarScroll = () => setConScroll(window.scrollY > 24);
    window.addEventListener("scroll", manejarScroll, { passive: true });
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  useEffect(() => {
    if (cerrandoSesionRef.current && ubicacion.pathname === RUTAS.INICIO) {
      cerrandoSesionRef.current = false;
      cerrarSesion();
    }
  }, [ubicacion.pathname, cerrarSesion]);

  const manejarCerrarSesion = () => {
    setMenuAbierto(false);

    if (ubicacion.pathname === RUTAS.INICIO) {
      cerrarSesion();
      return;
    }

    cerrandoSesionRef.current = true;
    navegar(RUTAS.INICIO, { replace: true });
  };
  const cantidadProductos = carrito.reduce(
  (total, producto) => total + producto.cantidad,
  0
);
  return (
    <header
      className={`barra-navegacion ${conScroll ? "barra-navegacion--desplazada" : ""}`}
    >
      <div className="contenedor barra-navegacion__interior">
        <Link
          to={esAdministrador ? RUTAS.ADMIN : RUTAS.INICIO}
          className="barra-navegacion__logo"
          onClick={() => {
            setMenuAbierto(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Logo size="sm" />
        </Link>

        <nav
          className={`barra-navegacion__enlaces ${menuAbierto ? "barra-navegacion__enlaces--abierto" : ""}`}
        >
          {estaAutenticado && !esAdministrador && (
            <>
              <Link
                to={RUTAS.INICIO}
                onClick={() => {
                  setMenuAbierto(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Inicio
              </Link>
              <Link to={RUTAS.PRODUCTOS} onClick={() => setMenuAbierto(false)}>
                Productos
              </Link>
            </>
          )}

          <div className="barra-navegacion__autenticacion barra-navegacion__autenticacion--movil">
            {estaAutenticado ? (
              <>
              <button
              type="button"
              className="barra-navegacion__carrito"
              onClick={(manejarAgregarAlCarrito) => {
              setMenuAbierto(false);
              setCarritoAbierto(true);
              }}>
                  <i className="fas fa-shopping-cart relative inline-block text-lg"></i>
                 <span className="absolute top-[-3.5px] -right-2 rounded-full w-4.5 h-4.5 flex items-center justify-center text-[10px] text-white bg-(--purple-1)">
                  {cantidadProductos}
                </span>
               </button>
                <span className="barra-navegacion__usuario">
                  <span className="barra-navegacion__usuario-punto" />
                  Hola, {usuario.nombre.split(" ")[0]}
                </span>
                {esAdministrador && (
                  <Link
                    to={RUTAS.ADMIN}
                    className="boton boton-fantasma barra-navegacion__panel"
                    onClick={() => setMenuAbierto(false)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                    >
                      <rect x="3" y="3" width="7" height="7" rx="1.5" />
                      <rect x="14" y="3" width="7" height="7" rx="1.5" />
                      <rect x="3" y="14" width="7" height="7" rx="1.5" />
                      <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    </svg>
                    Panel
                  </Link>
                )}
                <button
                  className="boton boton-secundario"
                  onClick={manejarCerrarSesion}
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <Link
                  to={RUTAS.INICIAR_SESION}
                  className="boton boton-fantasma"
                  onClick={() => setMenuAbierto(false)}
                >
                  Iniciar sesión
                </Link>
                <Link
                  to={RUTAS.REGISTRO}
                  className="boton boton-primario"
                  onClick={() => setMenuAbierto(false)}
                >
                  Crear cuenta
                </Link>
              </>
            )}
          </div>
        </nav>

        <div className="barra-navegacion__autenticacion barra-navegacion__autenticacion--escritorio">
          {estaAutenticado ? (
            <>
              <button
                 type="button"
                 className="barra-navegacion__carrito relative"
                 onClick={() => {
                 setCarritoAbierto(true);
                }}
              >
              <i className="fas fa-shopping-cart relative inline-block text-lg"></i>
              <span className="absolute top-[-3.5px] -right-2 rounded-full w-4.5 h-4.5 flex items-center justify-center text-[10px] text-white bg-(--purple-1)">
              {cantidadProductos}
              </span>
              </button>
              <span className="barra-navegacion__usuario">
                <span className="barra-navegacion__usuario-punto" />
                Hola, {usuario.nombre.split(" ")[0]}
              </span>
              {esAdministrador && (
                <Link
                  to={RUTAS.ADMIN}
                  className="boton boton-fantasma barra-navegacion__panel"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="16"
                    height="16"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                  Panel
                </Link>
              )}
              <button
                className="boton boton-secundario"
                onClick={manejarCerrarSesion}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link to={RUTAS.INICIAR_SESION} className="boton boton-fantasma">
                Iniciar sesión
              </Link>
              <Link to={RUTAS.REGISTRO} className="boton boton-primario">
                Crear cuenta
              </Link>
            </>
          )}
        </div>

        <button
          className={`barra-navegacion__hamburguesa ${menuAbierto ? "barra-navegacion__hamburguesa--abierta" : ""}`}
          onClick={() => setMenuAbierto((abierto) => !abierto)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
