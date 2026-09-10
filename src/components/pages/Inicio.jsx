import Portada from "./secciones/Portada";
import InsigniasConfianza from "./secciones/InsigniasConfianza";
import Categorias from "./secciones/Categorias";
import DivisorSeccion from "../common/DivisorSeccion";

export default function Inicio() {
  return (
    <main>
      <Portada />
      <InsigniasConfianza />
      <Categorias />
      <DivisorSeccion frase="CIENCIA · DISCIPLINA · EVOLUCIÓN" />
    </main>
  );
}
