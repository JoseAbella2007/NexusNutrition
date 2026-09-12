import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CardProducto.css';

function CardProducto({ producto }) {
  const [enWishlist, setEnWishlist] = useState(false);
  const [agregado, setAgregado] = useState(false);

  function alternarWishlist(e) {
    e.preventDefault();
    e.stopPropagation();
    // TODO: acá se conecta el WishlistContext real cuando esté listo
    setEnWishlist((prev) => !prev);
  }

  function agregarAlCarrito(e) {
    e.preventDefault();
    e.stopPropagation();
    // TODO: acá se conecta el CartContext real cuando esté listo
    setAgregado(true);
    setTimeout(() => setAgregado(false), 600);
  }

  return (
    <div className="card-producto">
      <img src={producto.imagen} alt={producto.nombre} className="card-producto__imagen" />
      <div className="card-producto__degradado"></div>

      <div className="card-producto__superior">
        <span className="card-producto__categoria">{producto.categoria}</span>

        <div className="card-producto__iconos">
          <button
            className={`card-producto__icono-boton ${agregado ? 'card-producto__icono-boton--activo' : ''}`}
            onClick={agregarAlCarrito}
            aria-label="Agregar al carrito"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>

          <button
            className={`card-producto__icono-boton ${enWishlist ? 'card-producto__icono-boton--activo' : ''}`}
            onClick={alternarWishlist}
            aria-label="Agregar a wishlist"
          >
            <svg
              viewBox="0 0 24 24"
              fill={enWishlist ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="card-producto__panel">
        <h3 className="card-producto__nombre">{producto.nombre}</h3>
        <p className="card-producto__precio">${producto.precio.toLocaleString('es-AR')}</p>
        <Link to={`/producto/${producto.id}`} className="card-producto__boton">
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

export default CardProducto;