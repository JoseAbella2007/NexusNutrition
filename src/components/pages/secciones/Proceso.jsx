import RevelarAlDesplazar from "../../common/animaciones/RevelarAlDesplazar";
import FondoSeccion from "../../common/FondoSeccion";
import "./Proceso.css";

const PASOS = [
  {
    numero: "01",
    titulo: "Definí tu objetivo",
    texto:
      "Rendimiento, recuperación o bienestar diario: elegís hacia dónde vas.",
  },
  {
    numero: "02",
    titulo: "Elegí tu fórmula",
    texto:
      "Te guiamos hacia la combinación de nutrientes que tu cuerpo necesita.",
  },
  {
    numero: "03",
    titulo: "Evolucioná con Nexus",
    texto: "Seguimiento continuo y reformulación constante, basada en ciencia.",
  },
];

export default function Proceso() {
  return (
    <section className="seccion proceso">
      <FondoSeccion />
      <div className="contenedor">
        <RevelarAlDesplazar claseCss="proceso__encabezado">
          <span className="antetitulo">Cómo funciona</span>
          <h2 className="proceso__titulo">
            Tres pasos hacia{" "}
            <span className="texto-degradado">tu evolución</span>
          </h2>
        </RevelarAlDesplazar>

        <div className="proceso__grilla">
          <div className="proceso__linea" aria-hidden="true" />
          {PASOS.map((paso, indice) => (
            <RevelarAlDesplazar
              key={paso.numero}
              retraso={indice * 0.12}
              claseCss="proceso__paso"
            >
              <span className="proceso__paso-numero texto-degradado">
                {paso.numero}
              </span>
              <h3>{paso.titulo}</h3>
              <p>{paso.texto}</p>
            </RevelarAlDesplazar>
          ))}
        </div>
      </div>
    </section>
  );
}
