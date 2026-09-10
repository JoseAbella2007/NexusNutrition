import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DisenoAutenticacion from "../common/DisenoAutenticacion";
import { useAutenticacion } from "../../context/ContextoAutenticacion";
import { RUTAS } from "../../routes/rutas";

const EXPRESION_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EXPRESION_MAYUSCULA = /[A-ZÁÉÍÓÚÑ]/;
const EXPRESION_CARACTER_ESPECIAL = /[!@#$%^&*(),.?":{}|<>_\-+=[\]/\\;'~`]/;

function validar(formulario) {
  const errores = {};

  if (!formulario.nombre.trim()) {
    errores.nombre = "Ingresá tu nombre.";
  } else if (formulario.nombre.trim().length < 2) {
    errores.nombre = "El nombre es demasiado corto.";
  }

  if (!formulario.correo.trim()) {
    errores.correo = "Ingresá tu email.";
  } else if (!EXPRESION_EMAIL.test(formulario.correo.trim())) {
    errores.correo = "Ingresá un email válido.";
  }

  if (!formulario.contrasena) {
    errores.contrasena = "Ingresá una contraseña.";
  } else if (formulario.contrasena.length < 6) {
    errores.contrasena = "La contraseña debe tener al menos 6 caracteres.";
  } else if (!EXPRESION_MAYUSCULA.test(formulario.contrasena)) {
    errores.contrasena = "La contraseña debe incluir al menos una mayúscula.";
  } else if (!EXPRESION_CARACTER_ESPECIAL.test(formulario.contrasena)) {
    errores.contrasena =
      "La contraseña debe incluir al menos un carácter especial.";
  }

  if (!formulario.confirmarContrasena) {
    errores.confirmarContrasena = "Repetí tu contraseña.";
  } else if (formulario.confirmarContrasena !== formulario.contrasena) {
    errores.confirmarContrasena = "Las contraseñas no coinciden.";
  }

  return errores;
}

const TODOS_TOCADOS = {
  nombre: true,
  correo: true,
  contrasena: true,
  confirmarContrasena: true,
};

export default function Registro() {
  const { registrar } = useAutenticacion();
  const navegar = useNavigate();

  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
  });
  const [errores, setErrores] = useState({});
  const [tocado, setTocado] = useState({});
  const [errorFormulario, setErrorFormulario] = useState("");
  const [exito, setExito] = useState(false);

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
      registrar({
        nombre: formulario.nombre,
        correo: formulario.correo,
        contrasena: formulario.contrasena,
      });
      setExito(true);
      setTimeout(() => navegar(RUTAS.INICIAR_SESION), 1600);
    } catch (error) {
      setErrorFormulario(error.message);
    }
  };

  const mostrarError = (campo) => tocado[campo] && errores[campo];

  if (exito) {
    return (
      <DisenoAutenticacion antetitulo="Registro" titulo="">
        <div className="autenticacion-exito">
          <div className="autenticacion-exito__icono">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="texto-degradado">CUENTA CREADA</h2>
          <p>
            Bienvenido a Nexus Nutrition. Te estamos redirigiendo al inicio de
            sesión…
          </p>
        </div>
      </DisenoAutenticacion>
    );
  }

  return (
    <DisenoAutenticacion
      antetitulo="Registro"
      titulo="CREAR CUENTA"
      subtitulo="Sumate a Nexus Nutrition y llevá tu rendimiento al siguiente nivel."
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
          className={`campo-autenticacion ${mostrarError("nombre") ? "campo-autenticacion--error" : ""}`}
        >
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre completo"
            value={formulario.nombre}
            onChange={manejarCambio("nombre")}
            onBlur={manejarDesenfoque("nombre")}
            autoComplete="name"
          />
          {mostrarError("nombre") && (
            <span className="campo-autenticacion__error">{errores.nombre}</span>
          )}
        </div>

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
            placeholder="Mínimo 6 caracteres"
            value={formulario.contrasena}
            onChange={manejarCambio("contrasena")}
            onBlur={manejarDesenfoque("contrasena")}
            autoComplete="new-password"
          />
          {mostrarError("contrasena") ? (
            <span className="campo-autenticacion__error">
              {errores.contrasena}
            </span>
          ) : (
            <span className="campo-autenticacion__ayuda">
              Incluí una mayúscula y un carácter especial (ej: !@#$).
            </span>
          )}
        </div>

        <div
          className={`campo-autenticacion ${mostrarError("confirmarContrasena") ? "campo-autenticacion--error" : ""}`}
        >
          <label htmlFor="confirmarContrasena">Confirmar contraseña</label>
          <input
            id="confirmarContrasena"
            type="password"
            placeholder="Repetí tu contraseña"
            value={formulario.confirmarContrasena}
            onChange={manejarCambio("confirmarContrasena")}
            onBlur={manejarDesenfoque("confirmarContrasena")}
            autoComplete="new-password"
          />
          {mostrarError("confirmarContrasena") && (
            <span className="campo-autenticacion__error">
              {errores.confirmarContrasena}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="boton boton-primario formulario-autenticacion__enviar"
        >
          Crear cuenta
        </button>
      </form>

      <p className="diseno-autenticacion__enlace-pie">
        ¿Ya tenés cuenta? <Link to={RUTAS.INICIAR_SESION}>Iniciar sesión</Link>
      </p>
    </DisenoAutenticacion>
  );
}
