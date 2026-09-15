import { useState } from 'react';
import productosIniciales from '../../data/productos';
import useLocalStorage from '../../hooks/useLocalStorage';
import FormularioProducto from './FormularioProducto';
import ItemProducto from './ItemProducto';
import ConfirmarEliminar from './ConfirmarEliminar';
import './AdminProductos.css';

function AdminProductos() {
  const [productos, setProductos] = useLocalStorage('productos', productosIniciales);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [productoEditar, setProductoEditar] = useState(null);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  function abrirAlta() {
    setProductoEditar(null);
    setMostrarFormulario(true);
  }

  function abrirEdicion(producto) {
    setProductoEditar(producto);
    setMostrarFormulario(true);
  }

  function cerrarFormulario() {
    setMostrarFormulario(false);
    setProductoEditar(null);
  }

  function guardarProducto(productoFinal) {
    if (productoEditar) {
      setProductos(productos.map((p) => (p.id === productoFinal.id ? productoFinal : p)));
    } else {
      setProductos([...productos, productoFinal]);
    }
    cerrarFormulario();
  }

  function pedirConfirmacionBorrado(id) {
    const producto = productos.find((p) => p.id === id);
    setProductoAEliminar(producto);
  }

  function confirmarEliminacion() {
    setProductos(productos.filter((p) => p.id !== productoAEliminar.id));
    setProductoAEliminar(null);
  }

  return (
    <div className="admin-productos">
      <div className="admin-productos__header">
        <h1 className="admin-productos__titulo">Gestión de Productos</h1>
      </div>

      <p className="admin-productos__contador">{productos.length} productos cargados</p>

      <div className="admin-productos__tabla-wrapper">
        <div className="admin-productos__tabla-header">
          <button
            className="admin-productos__boton-icono"
            onClick={abrirAlta}
            title="Agregar producto"
            aria-label="Agregar producto"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>

        <table className="admin-productos__tabla">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <ItemProducto
                key={producto.id}
                producto={producto}
                onEditar={abrirEdicion}
                onEliminar={pedirConfirmacionBorrado}
              />
            ))}
          </tbody>
        </table>
      </div>

      {mostrarFormulario && (
        <FormularioProducto
          productoEditar={productoEditar}
          productosExistentes={productos}
          onGuardar={guardarProducto}
          onCancelar={cerrarFormulario}
        />
      )}

      {productoAEliminar && (
        <ConfirmarEliminar
          producto={productoAEliminar}
          onConfirmar={confirmarEliminacion}
          onCancelar={() => setProductoAEliminar(null)}
        />
      )}
    </div>
  );
}

export default AdminProductos;