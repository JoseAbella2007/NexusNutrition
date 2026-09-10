import { useMemo } from "react";
import { usePrefiereMovimientoReducido } from "../../hooks/usePrefiereMovimientoReducido";
import "./PalabrasFlotantes.css";

const POSICIONES = [
  { top: "10%", left: "8%" },
  { top: "20%", left: "58%" },
  { top: "38%", left: "20%" },
  { top: "48%", left: "62%" },
  { top: "64%", left: "10%" },
  { top: "76%", left: "50%" },
  { top: "6%", left: "72%" },
  { top: "58%", left: "78%" },
];

export default function PalabrasFlotantes({ palabras = [], claseCss = "" }) {
  const movimientoReducido = usePrefiereMovimientoReducido();

  const items = useMemo(
    () =>
      palabras.map((palabra, indice) => {
        const posicion = POSICIONES[indice % POSICIONES.length];
        return {
          palabra,
          top: posicion.top,
          left: posicion.left,
          duracion: 7 + ((indice * 37) % 5),
          retraso: -((indice * 53) % 6),
          tamano: 0.95 + ((indice * 13) % 4) * 0.14,
        };
      }),
    [palabras],
  );

  return (
    <div className={`palabras-flotantes ${claseCss}`} aria-hidden="true">
      {items.map((item) => (
        <span
          key={item.palabra}
          className={`palabras-flotantes__item ${movimientoReducido ? "palabras-flotantes__item--estatico" : ""}`}
          style={{
            top: item.top,
            left: item.left,
            fontSize: `${item.tamano}rem`,
            animationDuration: `${item.duracion}s`,
            animationDelay: `${item.retraso}s`,
          }}
        >
          {item.palabra}
        </span>
      ))}
    </div>
  );
}
