import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { usePrefiereMovimientoReducido } from "../../../hooks/usePrefiereMovimientoReducido";

export default function TarjetaInclinada({
  children,
  claseCss = "",
  intensidad = 10,
  ...props
}) {
  const referencia = useRef(null);
  const movimientoReducido = usePrefiereMovimientoReducido();

  const rotacionXCruda = useMotionValue(0);
  const rotacionYCruda = useMotionValue(0);
  const rotacionX = useSpring(rotacionXCruda, {
    stiffness: 220,
    damping: 20,
    mass: 0.6,
  });
  const rotacionY = useSpring(rotacionYCruda, {
    stiffness: 220,
    damping: 20,
    mass: 0.6,
  });
  const brilloX = useTransform(rotacionY, [-intensidad, intensidad], [0, 100]);
  const brilloY = useTransform(rotacionX, [intensidad, -intensidad], [0, 100]);
  const fondoBrillo = useMotionTemplate`radial-gradient(circle at ${brilloX}% ${brilloY}%, rgba(183,255,0,0.16), transparent 60%)`;

  if (movimientoReducido) {
    return (
      <div className={claseCss} {...props}>
        {children}
      </div>
    );
  }

  const manejarMovimientoMouse = (evento) => {
    const limites = referencia.current.getBoundingClientRect();
    const posicionX = (evento.clientX - limites.left) / limites.width;
    const posicionY = (evento.clientY - limites.top) / limites.height;
    rotacionYCruda.set((posicionX - 0.5) * intensidad * 2);
    rotacionXCruda.set((0.5 - posicionY) * intensidad * 2);
  };

  const manejarSalidaMouse = () => {
    rotacionXCruda.set(0);
    rotacionYCruda.set(0);
  };

  return (
    <motion.div
      ref={referencia}
      className={claseCss}
      onMouseMove={manejarMovimientoMouse}
      onMouseLeave={manejarSalidaMouse}
      style={{
        rotateX: rotacionX,
        rotateY: rotacionY,
        transformPerspective: 800,
      }}
      {...props}
    >
      <motion.span
        aria-hidden="true"
        className="tarjeta-inclinada__brillo"
        style={{ background: fondoBrillo }}
      />
      {children}
    </motion.div>
  );
}
