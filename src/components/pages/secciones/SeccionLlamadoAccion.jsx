import RevelarAlDesplazar from "../../common/animaciones/RevelarAlDesplazar";
import BotonMagnetico from "../../common/animaciones/BotonMagnetico";
import TarjetaInclinada from "../../common/animaciones/TarjetaInclinada";
import FondoSeccion from "../../common/FondoSeccion";
import { useAutenticacion } from "../../../context/ContextoAutenticacion";
import { RUTAS } from "../../../routes/rutas";
import "./SeccionLlamadoAccion.css";

export default function SeccionLlamadoAccion() {
  const { estaAutenticado } = useAutenticacion();

  return (
    <section className="seccion cta">
      <FondoSeccion />
      <div className="cta__resplandor" />

      <div className="contenedor">
        <RevelarAlDesplazar>
          <TarjetaInclinada claseCss="cta__caja" intensidad={4}>
            {estaAutenticado ? (
              <>
                <span className="antetitulo">Ya sos parte de esto</span>
                <h2 className="cta__titulo">
                  La <span className="texto-degradado">disciplina</span> de hoy
                  es el resultado de mañana
                </h2>
                <p className="cta__texto">
                  Cada entrenamiento, cada comida, cada decisión suma. Seguí
                  construyendo tu mejor versión: nosotros te acompañamos en cada
                  paso del camino.
                </p>
                <span className="cta__firma">— by Nexus Nutrition</span>
              </>
            ) : (
              <>
                <span className="antetitulo">Únete a Nexus</span>
                <h2 className="cta__titulo">
                  Empieza a construir{" "}
                  <span className="texto-degradado">tu mejor versión</span> hoy
                </h2>
                <p className="cta__texto">
                  Creá tu cuenta y sé parte de la comunidad Nexus Nutrition:
                  rendimiento, ciencia y disciplina en un mismo lugar.
                </p>
                <BotonMagnetico
                  hacia={RUTAS.REGISTRO}
                  claseCss="boton boton-primario"
                >
                  Crear cuenta
                </BotonMagnetico>
              </>
            )}
          </TarjetaInclinada>
        </RevelarAlDesplazar>
      </div>
    </section>
  );
}
