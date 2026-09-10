import Portada from "./secciones/Portada";
import InsigniasConfianza from "./secciones/InsigniasConfianza";
import Categorias from "./secciones/Categorias";
import Beneficios from "./secciones/Beneficios";
import Proceso from "./secciones/Proceso";
import Filosofia from "./secciones/Filosofia";
import DivisorSeccion from "../common/DivisorSeccion";

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
    </main>
  );
}
