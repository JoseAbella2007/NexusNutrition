import { createContext, useCallback, useContext, useState } from "react";
import { servicioAutenticacion } from "../services/servicioAutenticacion";

const ContextoAutenticacion = createContext(null);

export function ProveedorAutenticacion({ children }) {
  const [usuario, setUsuario] = useState(() =>
    servicioAutenticacion.obtenerUsuarioActual(),
  );

  const iniciarSesion = useCallback((correo, contrasena) => {
    const usuarioLogueado = servicioAutenticacion.iniciarSesion(
      correo,
      contrasena,
    );
    setUsuario(usuarioLogueado);
    return usuarioLogueado;
  }, []);

  const registrar = useCallback(
    (datos) => servicioAutenticacion.registrarUsuario(datos),
    [],
  );

  const cerrarSesion = useCallback(() => {
    servicioAutenticacion.cerrarSesion();
    setUsuario(null);
  }, []);

  const refrescarUsuario = useCallback(() => {
    setUsuario(servicioAutenticacion.obtenerUsuarioActual());
  }, []);

  const valor = {
    usuario,
    estaAutenticado: usuario !== null,
    iniciarSesion,
    registrar,
    cerrarSesion,
    refrescarUsuario,
  };

  return (
    <ContextoAutenticacion.Provider value={valor}>
      {children}
    </ContextoAutenticacion.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- hook y contexto van juntos a proposito
export function useAutenticacion() {
  const contexto = useContext(ContextoAutenticacion);
  if (!contexto) {
    throw new Error(
      "useAutenticacion debe usarse dentro de un ProveedorAutenticacion",
    );
  }
  return contexto;
}
