import"./nosotros.css";
import React from "react";

// ── Datos del equipo ──────────────────────────────────────────────
// Reemplazá "foto" por la ruta real de cada imagen cuando la tengan
// (ej: import fotoJose from "../assets/team/jose.jpg")
const equipo = [
  { nombre: "Jose", rol: "Tech Lead", foto: null },
  { nombre: "Mariano", rol: "Desarrollador", foto: null },
  { nombre: "Pilar", rol: "Scrum Master", foto: null },
  { nombre: "Agus", rol: "Desarrollador", foto: null },
];
export default function About() {
  return (
    <section className="about-page">
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
      </section>
  )}