import { motion } from "framer-motion";
import { usarPrefiereMovimientoReducido } from "../../../hooks/usarPrefiereMovimientoReducido";

export default function RevelarAlDesplazar({
  children,
  retraso = 0,
  desplazamientoY = 28,
  duracion = 0.7,
  claseCss = "",
  etiqueta = "div",
}) {
  const movimientoReducido = usarPrefiereMovimientoReducido();
  const ElementoMotion = motion[etiqueta] ?? motion.div;

  if (movimientoReducido) {
    const Etiqueta = etiqueta;
    return <Etiqueta className={claseCss}>{children}</Etiqueta>;
  }

  return (
    <ElementoMotion
      className={claseCss}
      initial={{ opacity: 0, y: desplazamientoY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: duracion,
        delay: retraso,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </ElementoMotion>
  );
}
