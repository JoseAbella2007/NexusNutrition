import { Route, Routes } from "react-router-dom";
import { RUTAS } from "./routes/rutas";
import DisenoSitio from "./components/common/DisenoSitio";
import RutaAdministrador from "./routes/RutaAdministrador";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";
import Registro from "./components/pages/Registro";
import Administrador from "./components/pages/Administrador";
import CategoriaProductos from "./pages/productos/CategoriaProductos";
import DetalleDeProducto from "./pages/productos/DetalleDeProducto";
import AdminInicio from "./components/pages/admin/AdminInicio";
import AdminUsuarios from "./components/pages/admin/AdminUsuarios";
import AdminProductos from "./pages/productos/AdminProductos";
import Error404 from "./pages/Error404";

export default function App() {
  return (
    <Routes>
      <Route element={<DisenoSitio />}>
        <Route path={RUTAS.INICIO} element={<Inicio />} />
        <Route
          path="/categoria/:nombreCategoria"
          element={<CategoriaProductos />}
        />
        <Route path="/producto/:id" element={<DetalleDeProducto />} />

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