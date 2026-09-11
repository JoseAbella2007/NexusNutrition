import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAutenticacion } from "../context/ContextoAutenticacion";
import { RUTAS } from "./rutas";

export default function RutaProtegida() {
  const { estaAutenticado } = useAutenticacion();
  const ubicacion = useLocation();

  if (!estaAutenticado) {
    return (
      <Navigate
        to={RUTAS.INICIAR_SESION}
        state={{ from: ubicacion.pathname }}
        replace
      />
    );
  }

  return <Outlet />;
}
