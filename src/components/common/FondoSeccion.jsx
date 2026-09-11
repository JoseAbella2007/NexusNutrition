import fondoGimnasio from "../../assets/imagenes/fondoEntrenamiento.webp";

export default function FondoSeccion() {
  return (
    <div className="fondo-seccion">
      <img
        className="fondo-seccion__imagen"
        src={fondoGimnasio}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <span className="fondo-seccion__resplandor fondo-seccion__resplandor--verde" />
      <span className="fondo-seccion__resplandor fondo-seccion__resplandor--violeta" />
    </div>
  );
}
