import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { usarAutenticacion } from "../../context/ContextoAutenticacion";
import { RUTAS } from "../../routes/rutas";
import "./Menu.css";

export default function Menu() {
  const { estaAutenticado, esAdministrador, usuario, cerrarSesion } = usarAutenticacion();
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

  return (
    <header className={`barra-navegacion ${conScroll ? "barra-navegacion--desplazada" : ""}`}>
      <div className="contenedor barra-navegacion__interior">
        <Link to={RUTAS.INICIO} className="barra-navegacion__logo" onClick={() => setMenuAbierto(false)}>
          <Logo size="sm" />
        </Link>

        <nav className={`barra-navegacion__enlaces ${menuAbierto ? "barra-navegacion__enlaces--abierto" : ""}`}>
          {estaAutenticado && (
            <>
              <Link to={RUTAS.INICIO} onClick={() => setMenuAbierto(false)}>
                Inicio
              </Link>
              <Link to={RUTAS.PRODUCTOS} onClick={() => setMenuAbierto(false)}>
                Productos
              </Link>
              {esAdministrador && (
                <Link to={RUTAS.ADMIN} onClick={() => setMenuAbierto(false)}>
                  Admin
                </Link>
              )}
            </>
          )}

          <div className="barra-navegacion__autenticacion barra-navegacion__autenticacion--movil">
            {estaAutenticado ? (
              <>
                <span className="barra-navegacion__usuario">
                  <span className="barra-navegacion__usuario-punto" />
                  Hola, {usuario.nombre.split(" ")[0]}
                </span>
                <button className="boton boton-secundario" onClick={manejarCerrarSesion}>
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <Link to={RUTAS.INICIAR_SESION} className="boton boton-fantasma" onClick={() => setMenuAbierto(false)}>
                  Iniciar sesión
                </Link>
                <Link to={RUTAS.REGISTRO} className="boton boton-primario" onClick={() => setMenuAbierto(false)}>
                  Crear cuenta
                </Link>
              </>
            )}
          </div>
        </nav>

        <div className="barra-navegacion__autenticacion barra-navegacion__autenticacion--escritorio">
          {estaAutenticado ? (
            <>
              <span className="barra-navegacion__usuario">
                <span className="barra-navegacion__usuario-punto" />
                Hola, {usuario.nombre.split(" ")[0]}
              </span>
              <button className="boton boton-secundario" onClick={manejarCerrarSesion}>
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
