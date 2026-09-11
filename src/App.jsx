import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import CategoriaProductos from './pages/productos/CategoriaProductos';
import DetalleDeProducto from './pages/productos/DetalleDeProducto';
// ... tus otros imports comentados

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/categoria/:nombreCategoria" element={<CategoriaProductos />} />
        <Route path="/producto/:id" element={<DetalleDeProducto />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;