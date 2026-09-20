import "./Nosotros.css";
import fondoNosotros from "../assets/imagenes/team/fondoNosotros.jpeg";
import fotoJose from "../assets/imagenes/team/fotoJose.jpeg";
import fotoMariano from "../assets/imagenes/team/fotoMariano.jpeg";
import fotoPilar from "../assets/imagenes/team/fotoPilar.jpeg";
import fotoAgus from "../assets/imagenes/team/fotoAgus.jpeg";

const equipo = [
  { nombre: "José Abella", rol: "Tech Lead", foto: fotoJose },
  { nombre: "Mariano De Filippo", rol: "Desarrollador", foto: fotoMariano },
  { nombre: "Pilar Molina", rol: "Scrum Master", foto: fotoPilar },
  { nombre: "Agustín Penza", rol: "Desarrollador", foto: fotoAgus },
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
            <article
              className="about-miembro"
              key={persona.nombre}
              style={{ "--retraso": `${indice * 0.12}s` }}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
