import "./Nosotros.css";
import fondoNosotros from "../assets/imagenes/team/fondoNosotros.jpeg";
import fotoJose from "../assets/imagenes/team/fotoJose.jpeg";
import fotoMariano from "../assets/imagenes/team/fotoMariano.jpeg";
import fotoPilar from "../assets/imagenes/team/fotoPilar.jpeg";
import fotoAgus from "../assets/imagenes/team/fotoAgus.jpeg";

const equipo = [
  { nombre: "Jose", rol: "Tech Lead", foto: fotoJose },
  { nombre: "Mariano", rol: "Desarrollador", foto: fotoMariano },
  { nombre: "Pilar", rol: "Scrum Master", foto: fotoPilar },
  { nombre: "Agus", rol: "Desarrollador", foto: fotoAgus },
];

export default function Nosotros() {
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

        <div className="about-gallery">
          {equipo.map((persona, indice) => (
            <article
              className="about-miembro"
              key={persona.nombre}
              tabIndex={0}
              style={{ "--retraso": `${indice * 0.12}s` }}
            >
              <div className="about-circulo">
                <span className="about-inicial">
                  {persona.nombre.charAt(0).toUpperCase()}
                </span>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
