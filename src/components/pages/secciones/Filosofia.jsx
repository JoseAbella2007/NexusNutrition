import RevelarAlDesplazar from "../../common/animaciones/RevelarAlDesplazar";
import TarjetaInclinada from "../../common/animaciones/TarjetaInclinada";
import FondoSeccion from "../../common/FondoSeccion";
import imagenDisciplina from "../../../assets/imagenes/disciplina.jpg";
import "./Filosofia.css";

const ESTADISTICAS = [
  { valor: "10+", etiqueta: "Años de investigación" },
  { valor: "50K+", etiqueta: "Atletas confían en Nexus" },
  { valor: "100%", etiqueta: "Calidad certificada" },
];

export default function Filosofia() {
  return (
    <section className="seccion filosofia">
      <div className="filosofia__fondo" />
      <FondoSeccion />

      <div className="contenedor filosofia__interior">
        <RevelarAlDesplazar claseCss="filosofia__imagen-contenedor">
          <TarjetaInclinada claseCss="filosofia__imagen-tarjeta" intensidad={6}>
            <img
              src={imagenDisciplina}
              alt="Atleta levantando peso con disciplina y foco"
              loading="lazy"
            />
            <div className="filosofia__imagen-cortina" />
          </TarjetaInclinada>
        </RevelarAlDesplazar>

        <div className="filosofia__contenido">
          <RevelarAlDesplazar claseCss="filosofia__declaracion">
            <span className="antetitulo">Filosofía</span>
            <h2 className="filosofia__cita">
              Creemos que la <span className="texto-degradado">disciplina</span>{" "}
              merece una nutrición a su altura. Evolucionamos contigo, con
              ciencia, precisión y propósito.
            </h2>
          </RevelarAlDesplazar>

          <div className="filosofia__estadisticas">
            {ESTADISTICAS.map((estadistica, indice) => (
              <RevelarAlDesplazar
                key={estadistica.etiqueta}
                retraso={indice * 0.1}
                claseCss="filosofia__estadistica"
              >
                <span className="filosofia__estadistica-valor texto-degradado">
                  {estadistica.valor}
                </span>
                <span className="filosofia__estadistica-etiqueta">
                  {estadistica.etiqueta}
                </span>
              </RevelarAlDesplazar>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
