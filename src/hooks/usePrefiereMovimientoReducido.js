import { useEffect, useState } from "react";

export function usePrefiereMovimientoReducido() {
  const [reducido, setReducido] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const consultaMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const manejarCambio = (evento) => setReducido(evento.matches);

    consultaMedia.addEventListener("change", manejarCambio);
    return () => consultaMedia.removeEventListener("change", manejarCambio);
  }, []);

  return reducido;
}