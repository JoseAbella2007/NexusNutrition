import { Route, Routes } from "react-router-dom";
import { RUTAS } from "../routes/rutas";
import DisenoSitio from "./DisenoSitio";
import RutaAdministrador from "./RutaAdministrador";
import Inicio from "./Inicio";
import Login from "./Login";
import Registro from "./Registro";
import Administrador from "./Administrador";
import CategoriaProductos from "./CategoriaProductos";
import AdminInicio from "./AdminInicio";
import AdminUsuarios from "./AdminUsuarios";
import AdminProductos from "./AdminProductos";
import Error404 from "./Error404";
import Nosotros from "./Nosotros";

export default function App() {
  return (
    <Routes>
      <Route element={<DisenoSitio />}>
        <Route path={RUTAS.INICIO} element={<Inicio />} />
        <Route
          path="/categoria/:nombreCategoria"
          element={<CategoriaProductos />}
        />
        <Route path={RUTAS.ACERCA_DE} element={<Nosotros />} />
        <Route element={<RutaAdministrador />}>
          <Route path={RUTAS.ADMIN} element={<Administrador />}>
            <Route index element={<AdminInicio />} />
            <Route path="usuarios" element={<AdminUsuarios />} />
            <Route path="productos" element={<AdminProductos />} />
          </Route>
        </Route>
      </Route>
      <Route path={RUTAS.INICIAR_SESION} element={<Login />} />
      <Route path={RUTAS.REGISTRO} element={<Registro />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
