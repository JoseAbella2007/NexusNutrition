import { useEffect, useRef, useState } from "react";
import RevelarAlDesplazar from "../../common/animaciones/RevelarAlDesplazar";
import FondoSeccion from "../../common/FondoSeccion";
import "./Testimonios.css";

const TESTIMONIOS = [
  {
    cita: "Cambié mi rutina de suplementación por Nexus y la diferencia en recuperación se sintió en dos semanas.",
    nombre: "Martina Ríos",
    rol: "Powerlifting competitivo",
    valoracion: 5,
  },
  {
    cita: "Lo que más valoro es la transparencia: cada fórmula explica exactamente qué contiene y por qué.",
    nombre: "Diego Fernández",
    rol: "Entrenador de fuerza",
    valoracion: 5,
  },
  {
    cita: "Nutrición seria, sin promesas vacías. Es lo que buscaba después de años probando marcas genéricas.",
    nombre: "Lucía Alonso",
    rol: "Triatleta amateur",
    valoracion: 4.5,
  },
  {
    cita: "Empecé con la proteína y terminé confiando en toda la línea. Se nota que hay ciencia detrás.",
    nombre: "Sebastián Ibarra",
    rol: "Corredor de fondo",
    valoracion: 5,
  },
  {
    cita: "Las fórmulas veganas son mi salvación. Por fin una marca que piensa en todos los estilos de vida.",
    nombre: "Camila Torres",
    rol: "Instructora de yoga",
    valoracion: 5,
  },
  {
    cita: "El envío llegó rapidísimo y el producto viene con toda la información de trazabilidad. Se toman en serio la calidad.",
    nombre: "Nicolás Paredes",
    rol: "Crossfitter",
    valoracion: 4.5,
  },
  {
    cita: "Como profesional de la nutrición, valoro que las etiquetas sean claras y los valores estén respaldados.",
    nombre: "Valentina Cruz",
    rol: "Nutricionista deportiva",
    valoracion: 5,
  },
  {
    cita: "Mi entrenador me recomendó Nexus para la pretemporada y ya no cambio de marca.",
    nombre: "Franco Medina",
    rol: "Powerlifter junior",
    valoracion: 5,
  },
  {
    cita: "Los suplementos de resistencia me ayudaron muchísimo en las rutas largas. Rendimiento real, no marketing.",
    nombre: "Agustina Ferreyra",
    rol: "Ciclista de ruta",
    valoracion: 5,
  },
  {
    cita: "Recomiendo Nexus a todos mis atletas. La consistencia entre lotes es algo que en este rubro no es común.",
    nombre: "Rodrigo Salas",
    rol: "Preparador físico",
    valoracion: 4.5,
  },
  {
    cita: "Cuidar la alimentación es tan importante como entrenar. Con Nexus por fin encontré ese equilibrio.",
    nombre: "Julieta Ramos",
    rol: "Boxeadora amateur",
    valoracion: 5,
  },
  {
    cita: "Después de los 40 el cuerpo pide otra cosa. Nexus me acompañó en el cambio sin perder rendimiento.",
    nombre: "Mateo Cabrera",
    rol: "Nadador máster",
    valoracion: 5,
  },
];

function obtenerTarjetasVisibles() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth <= 700) return 1;
  if (window.innerWidth <= 980) return 2;
  return 3;
}

function Estrella() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.9-6.2 3.9 1.6-7L1 9.2l7.1-.6L12 2Z" />
    </svg>
  );
}

function Estrellas({ valoracion }) {
  const porcentaje = (valoracion / 5) * 100;
  return (
    <div
      className="tarjeta-testimonio__estrellas"
      aria-label={`Valoración ${valoracion} de 5`}
    >
      <div className="tarjeta-testimonio__estrellas-fondo">
        {Array.from({ length: 5 }, (_, indice) => (
          <Estrella key={indice} />
        ))}
      </div>
      <div
        className="tarjeta-testimonio__estrellas-relleno"
        style={{ width: `${porcentaje}%` }}
      >
        {Array.from({ length: 5 }, (_, indice) => (
          <Estrella key={indice} />
        ))}
      </div>
    </div>
  );
}

function obtenerIniciales(nombre) {
  return nombre
    .split(" ")
    .map((parte) => parte[0])
    .join("")
    .slice(0, 2);
}

export default function Testimonios() {
  const referenciaPista = useRef(null);
  const [indiceActivo, setIndiceActivo] = useState(0);
  const [tarjetasVisibles, setTarjetasVisibles] = useState(
    obtenerTarjetasVisibles,
  );

  useEffect(() => {
    const manejarResize = () => setTarjetasVisibles(obtenerTarjetasVisibles());
    window.addEventListener("resize", manejarResize);
    return () => window.removeEventListener("resize", manejarResize);
  }, []);

  const totalPaginas = Math.ceil(TESTIMONIOS.length / tarjetasVisibles);
  const paginaActiva = Math.min(
    Math.round(indiceActivo / tarjetasVisibles),
    totalPaginas - 1,
  );

  const desplazarA = (indice) => {
    const pista = referenciaPista.current;
    const tarjeta = pista?.children[indice];
    if (!tarjeta) return;
    tarjeta.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const manejarAnterior = () => {
    const paginaAnterior = paginaActiva - 1;
    if (paginaAnterior < 0) {
      desplazarA((totalPaginas - 1) * tarjetasVisibles);
    } else {
      desplazarA(paginaAnterior * tarjetasVisibles);
    }
  };

  const manejarSiguiente = () => {
    const paginaSiguiente = paginaActiva + 1;
    if (paginaSiguiente >= totalPaginas) {
      desplazarA(0);
    } else {
      desplazarA(paginaSiguiente * tarjetasVisibles);
    }
  };

  const manejarScroll = () => {
    const pista = referenciaPista.current;
    if (!pista) return;

    let indiceCercano = 0;
    let distanciaMinima = Infinity;

    Array.from(pista.children).forEach((hijo, indice) => {
      const distancia = Math.abs(hijo.offsetLeft - pista.scrollLeft);
      if (distancia < distanciaMinima) {
        distanciaMinima = distancia;
        indiceCercano = indice;
      }
    });

    setIndiceActivo(indiceCercano);
  };

  return (
    <section className="seccion testimonios">
      <FondoSeccion />
      <div className="contenedor">
        <RevelarAlDesplazar claseCss="testimonios__encabezado">
          <span className="antetitulo">Comunidad Nexus</span>
          <h2 className="testimonios__titulo">
            Resultados que <span className="texto-degradado">hablan solos</span>
          </h2>
        </RevelarAlDesplazar>

        <div className="testimonios__carrusel">
          <div
            className="testimonios__pista"
            ref={referenciaPista}
            onScroll={manejarScroll}
          >
            {TESTIMONIOS.map((testimonio) => (
              <article className="tarjeta-testimonio" key={testimonio.nombre}>
                <Estrellas valoracion={testimonio.valoracion} />
                <svg
                  className="tarjeta-testimonio__comillas"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7 9c-1.7 0-3 1.3-3 3v5h5v-5H6.5c0-1 .8-1.8 1.8-1.8V9Zm9 0c-1.7 0-3 1.3-3 3v5h5v-5h-2.5c0-1 .8-1.8 1.8-1.8V9Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="tarjeta-testimonio__cita">{testimonio.cita}</p>
                <div className="tarjeta-testimonio__autor">
                  <span className="tarjeta-testimonio__avatar">
                    {obtenerIniciales(testimonio.nombre)}
                  </span>
                  <div>
                    <span className="tarjeta-testimonio__nombre">
                      {testimonio.nombre}
                    </span>
                    <span className="tarjeta-testimonio__rol">
                      {testimonio.rol}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="testimonios__controles">
            <button
              type="button"
              className="testimonios__flecha"
              onClick={manejarAnterior}
              aria-label="Testimonio anterior"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="testimonios__puntos">
              {Array.from({ length: totalPaginas }, (_, pagina) => (
                <button
                  key={pagina}
                  type="button"
                  className={`testimonios__punto ${pagina === paginaActiva ? "testimonios__punto--activo" : ""}`}
                  onClick={() =>
                    desplazarA(
                      Math.min(
                        pagina * tarjetasVisibles,
                        TESTIMONIOS.length - 1,
                      ),
                    )
                  }
                  aria-label={`Ir a la página ${pagina + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="testimonios__flecha"
              onClick={manejarSiguiente}
              aria-label="Testimonio siguiente"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M9 18l6-6-6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
