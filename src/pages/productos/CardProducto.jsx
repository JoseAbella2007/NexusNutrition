import { useState } from 'react';
import QuickViewProducto from './QuickViewProducto';
import useLocalStorage from '../../hooks/useLocalStorage';
import './CardProducto.css';

<<<<<<< HEAD
function CardProducto({ producto, agregarAlCarrito, wishlist = [], alternarWishlist: alternarWishlistContexto }) {
=======
function CardProducto({ producto }) {
  const [mostrarQuickView, setMostrarQuickView] = useState(false);
  const [carrito, setCarrito] = useLocalStorage('carrito', []);
  const [wishlist, setWishlist] = useLocalStorage('wishlist', []);
>>>>>>> 10ae6bf89f8735fca0a17907657059cb5e48f2fa
  const [agregado, setAgregado] = useState(false);
  const enWishlist = wishlist.some((item) => item.id === producto.id);

  const enWishlist = wishlist.some((p) => p.id === producto.id);

  function alternarWishlist(e) {
    e.stopPropagation();
<<<<<<< HEAD
    alternarWishlistContexto?.(producto);
  }

  function manejarAgregarAlCarrito(e) {
    e.preventDefault();
    e.stopPropagation();
    agregarAlCarrito(producto);
=======
    setWishlist((actual) =>
      enWishlist ? actual.filter((p) => p.id !== producto.id) : [...actual, producto]
    );
  }

  function agregarAlCarrito(e) {
    e.stopPropagation();
    setCarrito((actual) => {
      const existente = actual.find((item) => item.id === producto.id);
      if (existente) {
        return actual.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...actual, { ...producto, cantidad: 1 }];
    });
>>>>>>> 10ae6bf89f8735fca0a17907657059cb5e48f2fa
    setAgregado(true);
    setTimeout(() => setAgregado(false), 600);
  }

  return (
    <>
      <div className="card-producto" onClick={() => setMostrarQuickView(true)}>
        <img src={producto.imagen} alt={producto.nombre} className="card-producto__imagen" />
        <div className="card-producto__degradado"></div>

        <div className="card-producto__superior">
          <span className="card-producto__categoria">{producto.categoria}</span>

<<<<<<< HEAD
        <div className="card-producto__iconos">
          <button
            className={`card-producto__icono-boton ${agregado ? 'card-producto__icono-boton--activo' : ''}`}
            onClick={manejarAgregarAlCarrito}
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
=======
          <div className="card-producto__iconos">
            <button
              className={`card-producto__icono-boton ${agregado ? 'card-producto__icono-boton--activo' : ''}`}
              onClick={agregarAlCarrito}
              aria-label="Agregar al carrito"
>>>>>>> 10ae6bf89f8735fca0a17907657059cb5e48f2fa
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
          <button
            className="card-producto__boton"
            onClick={(e) => {
              e.stopPropagation();
              setMostrarQuickView(true);
            }}
          >
            Ver detalle
          </button>
        </div>
      </div>

      {mostrarQuickView && (
        <QuickViewProducto producto={producto} onCerrar={() => setMostrarQuickView(false)} />
      )}
    </>
  );
}

export default CardProducto;