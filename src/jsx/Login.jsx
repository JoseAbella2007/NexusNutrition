import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DisenoAutenticacion from "./DisenoAutenticacion";
import { useAutenticacion } from "./ContextoAutenticacion";
import { RUTAS } from "../routes/rutas";

const EXPRESION_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validar(formulario) {
  const errores = {};
  const esUsuarioAdmin = formulario.correo.trim() === "admin";

  if (!formulario.correo.trim()) {
    errores.correo = "Ingresá tu email.";
  } else if (
    !esUsuarioAdmin &&
    !EXPRESION_EMAIL.test(formulario.correo.trim())
  ) {
    errores.correo = "Ingresá un email válido.";
  }

  if (!formulario.contrasena) {
    errores.contrasena = "Ingresá tu contraseña.";
  }

  return errores;
}

const TODOS_TOCADOS = { correo: true, contrasena: true };

export default function Login() {
  const { iniciarSesion } = useAutenticacion();
  const navegar = useNavigate();
  const ubicacion = useLocation();

  const [formulario, setFormulario] = useState({ correo: "", contrasena: "" });
  const [errores, setErrores] = useState({});
  const [tocado, setTocado] = useState({});
  const [errorFormulario, setErrorFormulario] = useState("");
  const [verContrasena, setVerContrasena] = useState(false);

  const manejarCambio = (campo) => (evento) => {
    const formularioActualizado = {
      ...formulario,
      [campo]: evento.target.value,
    };
    setFormulario(formularioActualizado);
    setErrores(validar(formularioActualizado));
  };

  const manejarDesenfoque = (campo) => () => {
    setTocado((previo) => ({ ...previo, [campo]: true }));
    setErrores(validar(formulario));
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    setErrorFormulario("");
    setTocado(TODOS_TOCADOS);

    const erroresDeValidacion = validar(formulario);
    setErrores(erroresDeValidacion);
    if (Object.keys(erroresDeValidacion).length > 0) return;

    try {
      const usuarioLogueado = iniciarSesion(
        formulario.correo,
        formulario.contrasena,
      );
      const destinoPorDefecto =
        usuarioLogueado.rol === "administrador" ? RUTAS.ADMIN : RUTAS.INICIO;
      const rutaDestino = ubicacion.state?.from ?? destinoPorDefecto;
      navegar(rutaDestino, { replace: true });
    } catch (error) {
      setErrorFormulario(error.message);
    }
  };

  const mostrarError = (campo) => tocado[campo] && errores[campo];

  return (
    <DisenoAutenticacion
      antetitulo="Acceso"
      titulo="BIENVENIDO DE NUEVO"
      subtitulo="Ingresá para continuar tu evolución con Nexus."
    >
      <form
        className="formulario-autenticacion"
        onSubmit={manejarEnvio}
        noValidate
      >
        {errorFormulario && (
          <div className="formulario-autenticacion__error">
            {errorFormulario}
          </div>
        )}

        <div
          className={`campo-autenticacion ${mostrarError("correo") ? "campo-autenticacion--error" : ""}`}
        >
          <label htmlFor="correo">Email</label>
          <input
            id="correo"
            type="email"
            placeholder="tu@email.com"
            value={formulario.correo}
            onChange={manejarCambio("correo")}
            onBlur={manejarDesenfoque("correo")}
            autoComplete="email"
          />
          {mostrarError("correo") && (
            <span className="campo-autenticacion__error">{errores.correo}</span>
          )}
        </div>

        <div
          className={`campo-autenticacion ${mostrarError("contrasena") ? "campo-autenticacion--error" : ""}`}
        >
          <label htmlFor="contrasena">Contraseña</label>
          <div className="campo-autenticacion__contrasena-envoltorio">
            <input
              id="contrasena"
              type={verContrasena ? "text" : "password"}
              placeholder="Tu contraseña"
              value={formulario.contrasena}
              onChange={manejarCambio("contrasena")}
              onBlur={manejarDesenfoque("contrasena")}
              autoComplete="current-password"
            />
            <button
              type="button"
              className="campo-autenticacion__ojo"
              onClick={() => setVerContrasena((previo) => !previo)}
              aria-label={
                verContrasena ? "Ocultar contraseña" : "Mostrar contraseña"
              }
            >
              {verContrasena ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.12 14.12a3 3 0 1 1-4.24-4.24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 1l22 22"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
          {mostrarError("contrasena") && (
            <span className="campo-autenticacion__error">
              {errores.contrasena}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="boton boton-primario formulario-autenticacion__enviar"
        >
          Iniciar sesión
        </button>
      </form>

      <p className="diseno-autenticacion__enlace-pie">
        ¿No tenés cuenta? <Link to={RUTAS.REGISTRO}>Crear cuenta</Link>
      </p>
    </DisenoAutenticacion>
  );
}