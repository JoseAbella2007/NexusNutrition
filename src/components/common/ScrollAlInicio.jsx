import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Al cambiar de página, vuelve el scroll al inicio (así se ve el hero).
// Se usa "instant" porque index.css tiene scroll-behavior: smooth en <html>
// y, sin esto, se vería un scroll animado desde donde estabas.
export default function ScrollAlInicio() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}