import { useEffect, useState } from "react";
import "./Nosotros.css";
import fondoNosotros from "../assets/imagenes/team/fondoNosotros.jpeg";
import fotoJose from "../assets/imagenes/team/fotoJose.jpeg";
import fotoMariano from "../assets/imagenes/team/fotoMariano.jpeg";
import fotoPilar from "../assets/imagenes/team/fotoPilar.jpeg";
import fotoAgus from "../assets/imagenes/team/fotoAgus.jpeg";

const equipo = [
  {
    nombre: "José Abella",
    rol: "Tech Lead",
    foto: fotoJose,
    descripcion:
      "Líder técnico del equipo. Se encargó de la gestión del repositorio en Git y de revisar y aprobar el código del equipo. Además desarrolló el carrito de compras, con la modificación de cantidades y la eliminación de ítems.",
  },
  {
    nombre: "Mariano De Filippo",
    rol: "Desarrollador",
    foto: fotoMariano,
    descripcion:
      "Desarrollador del equipo. Implementó el CRUD de usuarios, el login simulado con persistencia de sesión, el layout general del panel de administración y las rutas protegidas.",
  },
  {
    nombre: "Pilar Molina",
    rol: "Scrum Master",
    foto: fotoPilar,
    descripcion:
      "Scrum Master del equipo. Coordinó la organización del trabajo en Trello, las reuniones diarias y la gestión de las tarjetas. También desarrolló código: el CRUD de productos, el panel de administración y el detalle de producto.",
  },
  {
    nombre: "Agustín Penza",
    rol: "Desarrollador",
    foto: fotoAgus,
    descripcion:
      "Desarrollador del equipo. Implementó el CRUD de la wishlist, la página Nosotros y la página de error 404.",
  },
];

export default function Nosotros() {
  const [seleccionado, setSeleccionado] = useState(null);

  useEffect(() => {
    if (!seleccionado) return;
    const cerrarConEscape = (e) => {
      if (e.key === "Escape") setSeleccionado(null);
    };
    window.addEventListener("keydown", cerrarConEscape);
    return () => window.removeEventListener("keydown", cerrarConEscape);
  }, [seleccionado]);

  return (
    <section
      className="about-page notranslate"
      translate="no"
      style={{ "--fondo": `url(${fondoNosotros})` }}
    >
      <span className="about-orbe about-orbe--verde" />
      <span className="about-orbe about-orbe--violeta" />

      <div className="about-content">
        <div className="about-header">
          <span className="about-eyebrow">Nexus Nutrition</span>
          <h1>El equipo</h1>
          <p>Las personas que construyen el proyecto</p>
        </div>

        <div className="about-historia">
          <span className="about-historia__etiqueta">Nuestra historia</span>
          <p>
            Arrancamos como cuatro estudiantes de RollingCode School con la
            misma idea: dejar de simular proyectos y construir uno real, de
            punta a punta. Nexus Nutrition nació de ahí — cada pantalla, cada
            línea de código y cada decisión de diseño se armó a pulmón, entre
            clases, code reviews cruzados y bastante prueba y error. Esto es lo
            que salió.
          </p>
        </div>

        <div className="about-gallery">
          {equipo.map((persona, indice) => (
            <button
              type="button"
              className="about-miembro"
              key={persona.nombre}
              style={{ "--retraso": `${indice * 0.12}s` }}
              onClick={() => setSeleccionado(persona)}
              aria-label={`Ver información de ${persona.nombre}`}
            >
              <div className="about-circulo">
                <img
                  className="about-foto"
                  src={persona.foto}
                  alt={persona.nombre}
                />
              </div>
              <div className="about-datos">
                <h3>{persona.nombre}</h3>
                <p>{persona.rol}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {seleccionado && (
        <div
          className="about-modal__fondo"
          onClick={() => setSeleccionado(null)}
        >
          <div
            className="about-modal"
            role="dialog"
            aria-modal="true"
            aria-label={seleccionado.nombre}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="about-modal__cerrar"
              onClick={() => setSeleccionado(null)}
              aria-label="Cerrar"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="about-modal__foto">
              <img src={seleccionado.foto} alt={seleccionado.nombre} />
            </div>
            <span className="about-modal__etiqueta">Integrante del equipo</span>
            <h2>{seleccionado.nombre}</h2>
            <p className="about-modal__rol">{seleccionado.rol}</p>
            <p className="about-modal__descripcion">{seleccionado.descripcion}</p>
          </div>
        </div>
      )}
    </section>
  );
}
