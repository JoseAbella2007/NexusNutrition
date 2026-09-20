import { useEffect, useRef, useState } from "react";
import FondoSeccion from "./FondoSeccion";
import imagenCorredor from "../../assets/imagenes/corredor.webp";
import imagenGimnasio from "../../assets/imagenes/gimnasio.webp";
import imagenDisciplina from "../../assets/imagenes/disciplina.jpg";
import imagenEntrenamiento from "../../assets/imagenes/fondoEntrenamiento.webp";
import "./CarruselMasVendidos.css";

const IMAGENES_DEMO = [
  imagenCorredor,
  imagenGimnasio,
  imagenDisciplina,
  imagenEntrenamiento,
];

const PRODUCTOS_DEMO = [
  "Whey Protein",
  "Creatina Monohidratada",
  "Pre-Entreno",
  "BCAA",
  "Multivitamínico",
  "Barrita Proteica",
  "Shaker Nexus",
  "Omega 3",
  "Glutamina",
  "Colágeno Hidrolizado",
].map((nombre, indice) => ({
  id: `demo-${indice}`,
  nombre,
  imagen: IMAGENES_DEMO[indice % IMAGENES_DEMO.length],
}));

export default function CarruselMasVendidos({
  productos = PRODUCTOS_DEMO,
  radio = 340,
  duracion = 30,
  onSeleccionar,
}) {
  const cantidad = productos.length;
  const anguloPorItem = 360 / cantidad;

  const [rotacion, setRotacion] = useState(0);
  const arrastrandoRef = useRef(false);
  const pausadoRef = useRef(false);
  const ultimoXRef = useRef(0);
  const inicioXRef = useRef(0);
  const huboArrastreRef = useRef(false);
  const escenaRef = useRef(null);

  useEffect(() => {
    let anterior = performance.now();
    let idFrame;

    const animar = (ahora) => {
      const delta = ahora - anterior;
      anterior = ahora;

      if (!arrastrandoRef.current && !pausadoRef.current) {
        setRotacion((previo) => previo + (delta / 1000) * (360 / duracion));
      }

      idFrame = requestAnimationFrame(animar);
    };

    idFrame = requestAnimationFrame(animar);
    return () => cancelAnimationFrame(idFrame);
  }, [duracion]);

  const manejarPointerDown = (evento) => {
    arrastrandoRef.current = true;
    huboArrastreRef.current = false;
    inicioXRef.current = evento.clientX;
    ultimoXRef.current = evento.clientX;
  };

  const manejarPointerMove = (evento) => {
    if (!arrastrandoRef.current) return;

    // Recién cuando se mueve más de 6px lo consideramos un arrastre
    if (!huboArrastreRef.current) {
      if (Math.abs(evento.clientX - inicioXRef.current) < 6) return;
      huboArrastreRef.current = true;
      evento.currentTarget.setPointerCapture(evento.pointerId);
      ultimoXRef.current = evento.clientX;
      return;
    }

    const deltaX = evento.clientX - ultimoXRef.current;
    ultimoXRef.current = evento.clientX;
    setRotacion((previo) => previo - deltaX * 0.4);
  };

  const manejarPointerUp = () => {
    arrastrandoRef.current = false;
  };

  const seleccionar = (producto) => {
    if (huboArrastreRef.current) return; // si fue un arrastre, no abrir
    onSeleccionar?.(producto);
  };

  useEffect(() => {
    const escena = escenaRef.current;
    if (!escena) return;

    const manejarRueda = (evento) => {
      evento.preventDefault();
      const delta =
        Math.abs(evento.deltaX) > Math.abs(evento.deltaY)
          ? evento.deltaX
          : evento.deltaY;
      setRotacion((previo) => previo + delta * 0.3);
    };

    escena.addEventListener("wheel", manejarRueda, { passive: false });
    return () => escena.removeEventListener("wheel", manejarRueda);
  }, []);

  return (
    <section className="carrusel-mas-vendidos">
      <FondoSeccion />

      <div className="contenedor carrusel-mas-vendidos__encabezado">
        <span className="antetitulo">Nexus Nutrition</span>
        <h2 className="carrusel-mas-vendidos__titulo">
          Los más <span className="texto-degradado">vendidos</span>
        </h2>
        <p className="carrusel-mas-vendidos__ayuda">
          Arrastrá para girarlo vos mismo
        </p>
      </div>

      <div
        ref={escenaRef}
        className="carrusel-mas-vendidos__escena"
        onMouseEnter={() => (pausadoRef.current = true)}
        onMouseLeave={() => {
          pausadoRef.current = false;
          arrastrandoRef.current = false;
        }}
        onPointerDown={manejarPointerDown}
        onPointerMove={manejarPointerMove}
        onPointerUp={manejarPointerUp}
      >
        <div
          className="carrusel-mas-vendidos__anillo"
          style={{ transform: `rotateY(${rotacion}deg)` }}
        >
          {productos.map((producto, indice) => (
            <div
              key={producto.id}
              role="button"
              tabIndex={0}
              className="carrusel-mas-vendidos__item"
              style={{
                transform: `rotateY(${anguloPorItem * indice}deg) translateZ(${radio}px)`,
              }}
              onClick={() => seleccionar(producto)}
              onKeyDown={(evento) => {
                if (evento.key === "Enter" || evento.key === " ") {
                  evento.preventDefault();
                  seleccionar(producto);
                }
              }}
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                loading="lazy"
                draggable={false}
              />
              <div className="carrusel-mas-vendidos__info">
                <span className="carrusel-mas-vendidos__nombre">
                  {producto.nombre}
                </span>
                <span className="carrusel-mas-vendidos__cta">
                  Ver detalle →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}