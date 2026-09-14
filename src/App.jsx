import { Route, Routes } from "react-router-dom";
import { RUTAS } from "./routes/rutas";
import DisenoSitio from "./components/common/DisenoSitio";
import RutaAdministrador from "./routes/RutaAdministrador";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";
import Registro from "./components/pages/Registro";
import Administrador from "./components/pages/Administrador";
import InicioProductos from "./pages/Inicio";
import CategoriaProductos from "./pages/productos/CategoriaProductos";
import DetalleDeProducto from "./pages/productos/DetalleDeProducto";
import AdminProductos from "./pages/productos/AdminProductos";

export default function App() {
  return (
    <Routes>
      <Route element={<DisenoSitio />}>
        <Route path={RUTAS.INICIO} element={<Inicio />} />
        <Route path={RUTAS.PRODUCTOS} element={<InicioProductos />} />
        <Route
          path="/categoria/:nombreCategoria"
          element={<CategoriaProductos />}
        />
        <Route path="/producto/:id" element={<DetalleDeProducto />} />

        <Route element={<RutaAdministrador />}>
          <Route path={RUTAS.ADMIN} element={<Administrador />} />
          <Route path="/admin/productos" element={<AdminProductos />} />
        </Route>
      </Route>
      <Route path={RUTAS.INICIAR_SESION} element={<Login />} />
      <Route path={RUTAS.REGISTRO} element={<Registro />} />
    </Routes>
  );
}