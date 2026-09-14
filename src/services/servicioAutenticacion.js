const CLAVE_USUARIOS = "nexus_users";
const CLAVE_SESION = "currentUser";

const EXPRESION_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EXPRESION_MAYUSCULA = /[A-ZÁÉÍÓÚÑ]/;
const EXPRESION_CARACTER_ESPECIAL = /[!@#$%^&*(),.?":{}|<>_\-+=[\]/\\;'~`]/;

const CREDENCIALES_ADMINISTRADOR = {
  usuario: "admin",
  contrasena: "admin123",
};

function obtenerUsuarios() {
  try {
    const datosGuardados = localStorage.getItem(CLAVE_USUARIOS);
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  } catch {
    return [];
  }
}

function guardarUsuarios(usuarios) {
  localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuarios));
}

function generarId() {
  return `usr_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

function registrarUsuario({ nombre, correo, contrasena }) {
  if (!nombre || nombre.trim().length < 2) {
    throw new Error("Ingresá un nombre válido.");
  }
  if (!correo || !EXPRESION_CORREO.test(correo.trim())) {
    throw new Error("Ingresá un email válido.");
  }
  if (!contrasena || contrasena.length < 6) {
    throw new Error("La contraseña debe tener al menos 6 caracteres.");
  }
  if (!EXPRESION_MAYUSCULA.test(contrasena)) {
    throw new Error("La contraseña debe incluir al menos una mayúscula.");
  }
  if (!EXPRESION_CARACTER_ESPECIAL.test(contrasena)) {
    throw new Error(
      "La contraseña debe incluir al menos un carácter especial.",
    );
  }

  const correoNormalizado = correo.trim().toLowerCase();
  const usuarios = obtenerUsuarios();

  const yaExiste = usuarios.some(
    (usuario) => usuario.correo === correoNormalizado,
  );
  if (yaExiste) {
    throw new Error("Ya existe una cuenta registrada con este email.");
  }

  const usuarioNuevo = {
    id: generarId(),
    nombre: nombre.trim(),
    correo: correoNormalizado,
    contrasena,
    rol: "usuario",
  };

  usuarios.push(usuarioNuevo);
  guardarUsuarios(usuarios);

  return usuarioNuevo;
}

function iniciarSesion(correo, contrasena) {
  if (
    correo?.trim() === CREDENCIALES_ADMINISTRADOR.usuario &&
    contrasena === CREDENCIALES_ADMINISTRADOR.contrasena
  ) {
    const usuarioAdministrador = {
      id: "admin",
      nombre: "Administrador",
      correo: CREDENCIALES_ADMINISTRADOR.usuario,
      rol: "administrador",
    };

    sessionStorage.setItem(CLAVE_SESION, JSON.stringify(usuarioAdministrador));
    return usuarioAdministrador;
  }

  if (!correo || !EXPRESION_CORREO.test(correo.trim())) {
    throw new Error("Ingresá un email válido.");
  }
  if (!contrasena) {
    throw new Error("Ingresá tu contraseña.");
  }
  const correoNormalizado = correo.trim().toLowerCase();
  const usuarios = obtenerUsuarios();
  const usuarioEncontrado = usuarios.find(
    (usuario) => usuario.correo === correoNormalizado,
  );

  if (!usuarioEncontrado || usuarioEncontrado.contrasena !== contrasena) {
    throw new Error("Email o contraseña incorrectos.");
  }

  const usuarioActual = {
    id: usuarioEncontrado.id,
    nombre: usuarioEncontrado.nombre,
    correo: usuarioEncontrado.correo,
    rol: usuarioEncontrado.rol,
  };

  sessionStorage.setItem(CLAVE_SESION, JSON.stringify(usuarioActual));
  return usuarioActual;
}

function eliminarUsuario(id) {
  const usuarios = obtenerUsuarios().filter((usuario) => usuario.id !== id);
  guardarUsuarios(usuarios);

  const actual = obtenerUsuarioActual();
  if (actual?.id === id) {
    cerrarSesion();
  }
}

function cerrarSesion() {
  sessionStorage.removeItem(CLAVE_SESION);
}

function obtenerUsuarioActual() {
  try {
    const datosGuardados = sessionStorage.getItem(CLAVE_SESION);
    return datosGuardados ? JSON.parse(datosGuardados) : null;
  } catch {
    return null;
  }
}

function estaAutenticado() {
  return obtenerUsuarioActual() !== null;
}

export const servicioAutenticacion = {
  obtenerUsuarios,
  guardarUsuarios,
  registrarUsuario,
  eliminarUsuario,
  iniciarSesion,
  cerrarSesion,
  obtenerUsuarioActual,
  estaAutenticado,
};
