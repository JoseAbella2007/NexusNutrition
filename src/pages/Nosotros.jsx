import"./Nosotros.css";
import React from "react";
import fotoJose from "../assets/imagenes/team/fotoJose.jpeg";
import fotoMariano from "../assets/imagenes/team/fotoMariano.jpeg";
import fotoPilar from "../assets/imagenes/team/fotoPilar.jpeg";
import fotoAgus from "../assets/imagenes/team/fotoAgus.jpeg";
import fondoNosotros from "../assets/imagenes/team/fondoNosotros.jpeg";

// ── Datos del equipo ──────────────────────────────────────────────
const equipo = [
  { nombre: "Jose", rol: "Tech Lead", foto: fotoJose },
  { nombre: "Mariano", rol: "Desarrollador", foto: fotoMariano },
  { nombre: "Pilar", rol: "Scrum Master", foto: fotoPilar },
  { nombre: "Agus", rol: "Desarrollador", foto: fotoAgus },
];
export default function About() {
  return (
     <section
       className="about-page"
       style={{ backgroundImage: `url(${fondoNosotros})` }}
       >
      <div className="about-content">
        <div className="about-header">
          <span className="about-eyebrow">Nexus Nutrition</span>
          <h1>El equipo</h1>
          <p>Las personas que construyen el proyecto</p>
        </div>

        <div className="about-gallery">
          {equipo.map((persona) => (
            <div className="about-card" key={persona.nombre}>
              <div className="about-photo">
                {persona.foto ? (
                  <img src={persona.foto} alt={persona.nombre} />
                ) : (
                  <span className="about-photo-placeholder">
                    {persona.nombre.charAt(0)}
                  </span>
                )}
              </div>
              <h3>{persona.nombre}</h3>
              <p>{persona.rol}</p>
            </div>
          ))}
        </div>
      </div>
      </section>
  )}