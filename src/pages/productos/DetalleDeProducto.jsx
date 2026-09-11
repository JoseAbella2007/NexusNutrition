import { useParams, Navigate, Link } from 'react-router-dom';
import productosIniciales from '../../data/productos';
import useLocalStorage from '../../hooks/useLocalStorage';
import './DetalleDeProducto.css';

function DetalleDeProducto() {
  const { id } = useParams();
  const [productos] = useLocalStorage('productos', productosIniciales);

  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="detalle-producto">
      <Link to="/" className="detalle-producto__volver">
        ← Volver al catálogo
      </Link>

      <div className="detalle-producto__contenido">
        <div className="detalle-producto__imagen-wrapper">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="detalle-producto__imagen"
          />
        </div>

        <div className="detalle-producto__info">
          <span className="detalle-producto__categoria">{producto.categoria}</span>
          <h1 className="detalle-producto__nombre">{producto.nombre}</h1>
          <p className="detalle-producto__precio">
            ${producto.precio.toLocaleString('es-AR')}
          </p>
          <p className="detalle-producto__descripcion">{producto.descripcion}</p>

          <p className="detalle-producto__stock">
            {producto.stock > 0
              ? `Stock disponible: ${producto.stock} unidades`
              : 'Sin stock disponible'}
          </p>

          <div className="detalle-producto__acciones">
            <button
              className="detalle-producto__boton-primario"
              disabled={producto.stock === 0}
            >
              Agregar al carrito
            </button>
            <button className="detalle-producto__boton-secundario">
              Agregar a wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleDeProducto;