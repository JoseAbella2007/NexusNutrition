import RevelarAlDesplazar from "../../common/animaciones/RevelarAlDesplazar";
import "./InsigniasConfianza.css";

const INSIGNIAS = [
  "Calidad certificada",
  "Trazabilidad completa",
  "Testeado en laboratorio",
  "Fórmulas veganas disponibles",
  "Envío a todo el país",
];

function ItemInsignia({ insignia }) {
  return (
    <span className="insignias-confianza__item">
      <span className="insignias-confianza__punto" />
      {insignia}
    </span>
  );
}

export default function InsigniasConfianza() {
  return (
    <div className="insignias-confianza">
      <div className="contenedor insignias-confianza__interior">
        {INSIGNIAS.map((insignia, indice) => (
          <RevelarAlDesplazar
            key={insignia}
            retraso={indice * 0.05}
            claseCss="insignias-confianza__item"
          >
            <span className="insignias-confianza__punto" />
            {insignia}
          </RevelarAlDesplazar>
        ))}
      </div>

      <div className="insignias-confianza__carrusel" aria-hidden="true">
        <div className="insignias-confianza__pista">
          {INSIGNIAS.map((insignia) => (
            <ItemInsignia key={`a-${insignia}`} insignia={insignia} />
          ))}
          {INSIGNIAS.map((insignia) => (
            <ItemInsignia key={`b-${insignia}`} insignia={insignia} />
          ))}
        </div>
      </div>
    </div>
  );
}
