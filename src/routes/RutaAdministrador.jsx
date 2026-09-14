import { Navigate, Outlet } from "react-router-dom";
import { useAutenticacion } from "../context/ContextoAutenticacion";
import { RUTAS } from "./rutas";

export default function RutaAdministrador() {
  const { estaAutenticado, esAdministrador } = useAutenticacion();

  if (!estaAutenticado) {
    return <Navigate to={RUTAS.INICIAR_SESION} replace />;
  }

  if (!esAdministrador) {
    return <Navigate to={RUTAS.INICIO} replace />;
  }

  return <Outlet />;
}
