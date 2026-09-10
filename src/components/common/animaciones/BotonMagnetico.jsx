import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { usePrefiereMovimientoReducido } from "../../../hooks/usePrefiereMovimientoReducido";

const EnlaceConMotion = motion.create(Link);

export default function BotonMagnetico({
  children,
  claseCss = "",
  fuerza = 14,
  hacia,
  ...resto
}) {
  const referencia = useRef(null);
  const movimientoReducido = usePrefiereMovimientoReducido();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const resorteX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const resorteY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });
  const Etiqueta = hacia ? Link : "button";

  if (movimientoReducido) {
    return (
      <Etiqueta className={claseCss} to={hacia} {...resto}>
        {children}
      </Etiqueta>
    );
  }

  const manejarMovimientoMouse = (evento) => {
    const limites = referencia.current.getBoundingClientRect();
    const distanciaX = evento.clientX - limites.left - limites.width / 2;
    const distanciaY = evento.clientY - limites.top - limites.height / 2;
    x.set((distanciaX / (limites.width / 2)) * fuerza);
    y.set((distanciaY / (limites.height / 2)) * fuerza);
  };

  const manejarSalidaMouse = () => {
    x.set(0);
    y.set(0);
  };

  const EtiquetaMotion = hacia ? EnlaceConMotion : motion.button;

  return (
    <EtiquetaMotion
      ref={referencia}
      to={hacia}
      className={claseCss}
      style={{ x: resorteX, y: resorteY }}
      onMouseMove={manejarMovimientoMouse}
      onMouseLeave={manejarSalidaMouse}
      {...resto}
    >
      {children}
    </EtiquetaMotion>
  );
}
