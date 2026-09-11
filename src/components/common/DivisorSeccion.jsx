import "./DivisorSeccion.css";

export default function DivisorSeccion({
  frase = "CIENCIA · DISCIPLINA · EVOLUCIÓN",
}) {
  return (
    <div className="divisor-seccion" aria-hidden="true">
      <span className="divisor-seccion__linea" />
      <span className="divisor-seccion__frase">{frase}</span>
      <span className="divisor-seccion__linea" />
    </div>
  );
}
