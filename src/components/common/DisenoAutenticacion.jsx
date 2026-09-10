import { Link } from "react-router-dom";
import Logo from "./Logo";
import { RUTAS } from "../../routes/rutas";
import PalabrasFlotantes from "./PalabrasFlotantes";
import fondoGimnasio from "../../assets/imagenes/gimnasio.webp";
import "./DisenoAutenticacion.css";

const PALABRAS_POR_DEFECTO = [
  "DISCIPLINA",
  "VIDA SANA",
  "SALUD",
  "FUERZA",
  "EVOLUCIÓN",
  "RENDIMIENTO",
  "CONSTANCIA",
  "ENERGÍA",
];

export default function DisenoAutenticacion({
  antetitulo,
  titulo,
  subtitulo,
  children,
  imagenFondo = fondoGimnasio,
  palabrasFlotantes = PALABRAS_POR_DEFECTO,
}) {
  return (
    <div className="diseno-autenticacion">
      {imagenFondo && (
        <>
          <img className="diseno-autenticacion__fondo" src={imagenFondo} alt="" aria-hidden="true" />
          <div className="diseno-autenticacion__cortina" />
        </>
      )}

      <div className="diseno-autenticacion__panel">
        {palabrasFlotantes && <PalabrasFlotantes palabras={palabrasFlotantes} />}
        <Link to={RUTAS.INICIO} className="diseno-autenticacion__logo">
          <Logo size="lg" />
        </Link>
        <div className="diseno-autenticacion__panel-texto">
          <span className="antetitulo">Nexus Nutrition</span>
          <h2>
            Ciencia, disciplina y <span className="texto-degradado">rendimiento</span>
          </h2>
          <p>Nutrición premium diseñada para acompañar tu rendimiento, tu disciplina y tus objetivos.</p>
        </div>
      </div>

      <div className="diseno-autenticacion__lado-formulario">
        {palabrasFlotantes && (
          <PalabrasFlotantes palabras={palabrasFlotantes} claseCss="palabras-flotantes--movil" />
        )}

        <Link to={RUTAS.INICIO} className="diseno-autenticacion__logo-movil">
          <Logo size="sm" />
        </Link>

        <div className="diseno-autenticacion__caja-formulario">
          <span className="antetitulo">{antetitulo}</span>
          <h1 className="diseno-autenticacion__titulo">{titulo}</h1>
          {subtitulo && <p className="diseno-autenticacion__subtitulo">{subtitulo}</p>}
          {children}
        </div>
      </div>
    </div>
  );
}
