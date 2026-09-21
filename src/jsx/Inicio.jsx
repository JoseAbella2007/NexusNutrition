import Portada from "./Portada";
import InsigniasConfianza from "./InsigniasConfianza";
import Categorias from "./Categorias";
import Beneficios from "./Beneficios";
import Proceso from "./Proceso";
import Filosofia from "./Filosofia";
import Testimonios from "./Testimonios";
import SeccionLlamadoAccion from "./SeccionLlamadoAccion";
import DivisorSeccion from "./DivisorSeccion";

export default function Inicio() {
  return (
    <main>
      <Portada />
      <InsigniasConfianza />
      <Categorias />
      <DivisorSeccion frase="CIENCIA · DISCIPLINA · EVOLUCIÓN" />
      <Beneficios />
      <Proceso />
      <Filosofia />
      <Testimonios />
      <SeccionLlamadoAccion />
    </main>
  );
}
