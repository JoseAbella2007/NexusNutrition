import { Link } from "react-router-dom";
import RevelarAlDesplazar from "../../common/animaciones/RevelarAlDesplazar";
import TarjetaInclinada from "../../common/animaciones/TarjetaInclinada";
import FondoSeccion from "../../common/FondoSeccion";
import { RUTAS } from "../../../routes/rutas";
import "./Categorias.css";

const CATEGORIAS = [
  {
    nombre: "Entrenamiento",
    variantes: ["Rutinas de gimnasio", "Fuerza y musculación", "Cardio", "CrossFit / funcional"],
    imagen: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    icono: <path d="M13 2 3 14h7l-1 8 11-14h-7l1-6Z" />,
  },
  {
    nombre: "Nutrición y dietas",
    variantes: ["Alimentación saludable", "Planes alimentarios", "Recetas saludables", "Meal prep"],
    imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    icono: (
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.6 3.7L12 11.7 5.4 8 12 4.3ZM5 9.6l6 3.4v6.9l-6-3.4V9.6Zm8 10.3v-6.9l6-3.4v6.5l-6 3.8Z" />
    ),
  },
  {
    nombre: "Salud y bienestar",
    variantes: ["Bienestar", "Sueño y descanso", "Manejo del estrés", "Hábitos saludables"],
    imagen: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80",
    icono: <path d="M12 2 3 6v6c0 5 4 8.6 9 10 5-1.4 9-5 9-10V6l-9-4Zm0 2.2 7 3.1v4.7c0 3.9-3 6.8-7 7.9-4-1.1-7-4-7-7.9V7.3l7-3.1Z" />,
  },
  {
    nombre: "Suplementación",
    variantes: ["Proteínas", "Creatina", "Pre-entrenos", "Vitaminas y minerales"],
    imagen: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=80",
    icono: <path d="M12 21s-7.5-4.6-10-9.5C.4 7.7 2.4 4 6 4c2 0 3.6 1.1 4.5 2.6L12 8.4l1.5-1.8C14.4 5.1 16 4 18 4c3.6 0 5.6 3.7 4 7.5C19.5 16.4 12 21 12 21Z" />,
  },
];

export default function Categorias() {
  return (
    <section className="seccion categorias">
      <FondoSeccion />
      <div className="contenedor">
        <RevelarAlDesplazar claseCss="categorias__encabezado">
          <span className="antetitulo">Categorías</span>
          <h2 className="categorias__titulo">
            Cada objetivo, <span className="texto-degradado">su fórmula</span>
          </h2>
        </RevelarAlDesplazar>

        <div className="categorias__grilla">
          {CATEGORIAS.map((categoria, indice) => (
            <RevelarAlDesplazar key={categoria.nombre} retraso={indice * 0.08}>
              <Link
                to={RUTAS.REGISTRO}
                className="tarjeta-categoria__enlace"
                aria-label={`Ver ${categoria.nombre}: creá tu cuenta para acceder`}
              >
                <TarjetaInclinada claseCss="tarjeta-categoria" intensidad={8}>
                  <div className="tarjeta-categoria__imagen">
                    <img src={categoria.imagen} alt="" loading="lazy" />
                  </div>
                  <div className="tarjeta-categoria__cuerpo">
                    <div className="tarjeta-categoria__icono">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        {categoria.icono}
                      </svg>
                    </div>
                    <h3 className="tarjeta-categoria__titulo">{categoria.nombre}</h3>
                    <ul className="tarjeta-categoria__variantes">
                      {categoria.variantes.map((variante) => (
                        <li key={variante}>{variante}</li>
                      ))}
                    </ul>
                    <span className="tarjeta-categoria__cta">Ir →</span>
                    <div className="tarjeta-categoria__resplandor" />
                  </div>
                </TarjetaInclinada>
              </Link>
            </RevelarAlDesplazar>
          ))}
        </div>
      </div>
    </section>
  );
}
