import { lazy, Suspense, useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BotonMagnetico from "../../common/animaciones/BotonMagnetico";
import imagenCorredor from "../../../assets/imagenes/corredor.webp";
import { useAutenticacion } from "../../../context/ContextoAutenticacion";
import { RUTAS } from "../../../routes/rutas";
import "./Portada.css";

const Portada3D = lazy(() => import("./Portada3D"));

function useParticulas(cantidad) {
  return useMemo(
    () =>
      Array.from({ length: cantidad }, (_, i) => ({
        id: i,
        izquierda: Math.random() * 100,
        arriba: Math.random() * 100,
        tamano: 1 + Math.random() * 2.2,
        duracion: 10 + Math.random() * 14,
        retraso: Math.random() * -20,
      })),
    [cantidad],
  );
}

export default function Portada() {
  const referenciaSeccion = useRef(null);
  const particulas = useParticulas(18);
  const { estaAutenticado, usuario } = useAutenticacion();

  const { scrollYProgress: progresoScroll } = useScroll({
    target: referenciaSeccion,
    offset: ["start start", "end start"],
  });

  const desplazamientoFondoY = useTransform(
    progresoScroll,
    [0, 1],
    [0, 120],
  );
  const opacidadContenido = useTransform(progresoScroll, [0, 0.8], [1, 0]);

  return (
    <section ref={referenciaSeccion} className="portada">
      <motion.div
        className="portada__fondo-animado"
        style={{ y: desplazamientoFondoY }}
      >
        <div className="portada__resplandor portada__resplandor--verde" />
        <div className="portada__resplandor portada__resplandor--violeta" />
        <div className="portada__lineas">
          <span />
          <span />
        </div>
        <div className="portada__particulas">
          {particulas.map((p) => (
            <span
              key={p.id}
              className="portada__particula"
              style={{
                left: `${p.izquierda}%`,
                top: `${p.arriba}%`,
                width: p.tamano,
                height: p.tamano,
                animationDuration: `${p.duracion}s`,
                animationDelay: `${p.retraso}s`,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="portada__escena">
        <Suspense fallback={null}>
          <Portada3D />
        </Suspense>
      </div>

      <motion.div
        className="portada__corredor"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img src={imagenCorredor} alt="" aria-hidden="true" />
      </motion.div>
      <div className="portada__difuminado" />

      <motion.div
        className="contenedor portada__contenido"
        style={{ opacity: opacidadContenido }}
      >
        <motion.span
          className="antetitulo"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {estaAutenticado
            ? `Bienvenido de nuevo, ${usuario.nombre.split(" ")[0]}`
            : "NEXUS NUTRITION"}
        </motion.span>

        <motion.h1
          className="portada__titulo"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {estaAutenticado ? (
            <>
              SEGUÍ CONSTRUYENDO
              <br />
              <span className="texto-degradado">TU MEJOR VERSIÓN</span>
            </>
          ) : (
            <>
              TU MEJOR VERSIÓN
              <br />
              <span className="texto-degradado">EMPIEZA AQUÍ</span>
            </>
          )}
        </motion.h1>

        <motion.p
          className="portada__texto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          {estaAutenticado
            ? "Cada entrenamiento suma. Explorá el catálogo y encontrá tu próxima fórmula."
            : "Nutrición premium diseñada para acompañar tu rendimiento, tu disciplina y tus objetivos."}
        </motion.p>

        <motion.div
          className="portada__acciones"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
        >
          {estaAutenticado ? (
            <BotonMagnetico
              hacia={RUTAS.PRODUCTOS}
              claseCss="boton boton-primario"
            >
              Ver catálogo
            </BotonMagnetico>
          ) : (
            <>
              <BotonMagnetico
                hacia={RUTAS.REGISTRO}
                claseCss="boton boton-primario"
              >
                Descubrir Nexus
              </BotonMagnetico>
              <BotonMagnetico
                hacia={RUTAS.REGISTRO}
                claseCss="boton boton-secundario"
              >
                Crear cuenta
              </BotonMagnetico>
            </>
          )}
        </motion.div>
      </motion.div>

      <div className="portada__indicador-scroll">
        <span className="portada__punto-scroll" />
      </div>
    </section>
  );
}
