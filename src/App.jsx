import { Route, Routes } from "react-router-dom";
import { RUTAS } from "./routes/rutas";
import DisenoSitio from "./components/common/DisenoSitio";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";
import Registro from "./components/pages/Registro";

export default function App() {
  return (
    <Routes>
      <Route element={<DisenoSitio />}>
        <Route path={RUTAS.INICIO} element={<Inicio />} />
      </Route>

      <Route path={RUTAS.INICIAR_SESION} element={<Login />} />
      <Route path={RUTAS.REGISTRO} element={<Registro />} />
    </Routes>
  );
}