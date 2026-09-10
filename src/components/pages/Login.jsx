import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DisenoAutenticacion from "../common/DisenoAutenticacion";
import { useAutenticacion } from "../../context/ContextoAutenticacion";
import { RUTAS } from "../../routes/rutas";

const EXPRESION_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validar(formulario) {
  const errores = {};

  if (!formulario.correo.trim()) {
    errores.correo = "Ingresá tu email.";
  } else if (!EXPRESION_EMAIL.test(formulario.correo.trim())) {
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
      iniciarSesion(formulario.correo, formulario.contrasena);
      const rutaDestino = ubicacion.state?.from ?? RUTAS.PRODUCTOS;
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
          <input
            id="contrasena"
            type="password"
            placeholder="Tu contraseña"
            value={formulario.contrasena}
            onChange={manejarCambio("contrasena")}
            onBlur={manejarDesenfoque("contrasena")}
            autoComplete="current-password"
          />
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
