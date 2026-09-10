import RevelarAlDesplazar from "../../common/animaciones/RevelarAlDesplazar";
import TarjetaInclinada from "../../common/animaciones/TarjetaInclinada";
import FondoSeccion from "../../common/FondoSeccion";
import "./Beneficios.css";

const BENEFICIOS = [
  {
    titulo: "Ciencia aplicada",
    texto: "Cada fórmula parte de evidencia clínica, no de tendencias.",
  },
  {
    titulo: "Pureza certificada",
    texto: "Materias primas trazables y control de calidad en cada lote.",
  },
  {
    titulo: "Rendimiento real",
    texto: "Diseñado para atletas y personas que exigen resultados medibles.",
  },
  {
    titulo: "Evolución constante",
    texto: "Reformulamos con la investigación más reciente del sector.",
  },
];

export default function Beneficios() {
  return (
    <section className="seccion beneficios">
      <FondoSeccion />
      <div className="contenedor beneficios__grilla">
        <RevelarAlDesplazar claseCss="beneficios__visual">
          <TarjetaInclinada claseCss="beneficios__marco" intensidad={6}>
            <img
              className="beneficios__marco-imagen"
              src="https://images.unsplash.com/photo-1554344728-77cf90d9ed26?auto=format&fit=crop&w=900&q=80"
              alt="Persona entrenando en el laboratorio de rendimiento Nexus"
              loading="lazy"
            />
            <div className="beneficios__marco-cortina" />
            <span className="beneficios__marco-antetitulo">NEXUS LAB</span>
            <span className="beneficios__marco-titulo">
              Precisión en <span className="texto-degradado">cada dosis</span>
            </span>
          </TarjetaInclinada>
        </RevelarAlDesplazar>

        <div className="beneficios__contenido">
          <RevelarAlDesplazar claseCss="beneficios__encabezado">
            <span className="antetitulo">Por qué Nexus</span>
            <h2 className="beneficios__titulo">
              Rendimiento con <span className="texto-degradado">respaldo científico</span>
            </h2>
          </RevelarAlDesplazar>

          <ul className="beneficios__lista">
            {BENEFICIOS.map((beneficio, indice) => (
              <RevelarAlDesplazar
                key={beneficio.titulo}
                retraso={indice * 0.08}
                etiqueta="li"
                claseCss="beneficios__item"
              >
                <span className="beneficios__indice">{String(indice + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{beneficio.titulo}</h3>
                  <p>{beneficio.texto}</p>
                </div>
              </RevelarAlDesplazar>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
