import { Route, Routes } from "react-router-dom";
import { RUTAS } from "./routes/rutas";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";
import Registro from "./components/pages/Registro";
import Error404 from "./components/pages/Error404";

export default function App() {
  return (
    <Routes>
      <Route path={RUTAS.INICIO} element={<Inicio />} />
      <Route path={RUTAS.INICIAR_SESION} element={<Login />} />
      <Route path={RUTAS.REGISTRO} element={<Registro />} />
      <Route path={RUTAS.NO_ENCONTRADA} element={<Error404 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
