import {  BrowserRouter, Route, Routes } from "react-router-dom";
import { RUTAS } from "./routes/rutas";
import DisenoSitio from "./components/common/DisenoSitio";
import RutaAdministrador from "./routes/RutaAdministrador";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";
import Registro from "./components/pages/Registro";
import Administrador from "./components/pages/Administrador";
import CategoriaProductos from './pages/productos/CategoriaProductos';
import DetalleDeProducto from './pages/productos/DetalleDeProducto';
import Inicio from './pages/Inicio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/categoria/:nombreCategoria" element={<CategoriaProductos />} />
        <Route path="/producto/:id" element={<DetalleDeProducto />} /> 
              <Route element={<DisenoSitio />}>
        <Route path={RUTAS.INICIO} element={<Inicio />} />

        <Route element={<RutaAdministrador />}>
          <Route path={RUTAS.ADMIN} element={<Administrador />} />
        </Route>
      </Route>

      <Route path={RUTAS.INICIAR_SESION} element={<Login />} />
      <Route path={RUTAS.REGISTRO} element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
