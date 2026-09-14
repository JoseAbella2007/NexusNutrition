import { useState } from 'react';
import productosIniciales from '../../data/productos';
import useLocalStorage from '../../hooks/useLocalStorage';
import FormularioProducto from './FormularioProducto';
import ItemProducto from './ItemProducto';
import './AdminProductos.css';

function AdminProductos() {
  const [productos, setProductos] = useLocalStorage('productos', productosIniciales);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [productoEditar, setProductoEditar] = useState(null);

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

  function eliminarProducto(id) {
    const confirmar = window.confirm('¿Seguro que querés eliminar este producto?');
    if (confirmar) {
      setProductos(productos.filter((p) => p.id !== id));
    }
  }

  return (
    <div className="admin-productos">
      <div className="admin-productos__header">
        <h1 className="admin-productos__titulo">Gestión de Productos</h1>
        <button className="admin-productos__boton-alta" onClick={abrirAlta}>
          + Agregar producto
        </button>
      </div>

      <p className="admin-productos__contador">{productos.length} productos cargados</p>

      <div className="admin-productos__tabla-wrapper">
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
                onEliminar={eliminarProducto}
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
    </div>
  );
}

export default AdminProductos;