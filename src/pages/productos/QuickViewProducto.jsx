import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useOutletContext, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { RUTAS } from '../../routes/rutas';
import './QuickViewProducto.css';

function QuickViewProducto({ producto, onCerrar }) {
   const navigate = useNavigate();
  const {
    wishlist,
    alternarWishlist,
    agregarAlCarrito,
  } = useOutletContext();

  const [cantidad, setCantidad] = useState(1);
  const sinStock = producto.stock === 0;
  const esVioleta = producto.categoria === 'Salud y Bienestar';
  const enWishlist = wishlist.some(
    (p) => p.id === producto.id
  );

  function aumentarCantidad() {
    setCantidad((c) =>
      Math.min(c + 1, producto.stock)
    );
  }

  function disminuirCantidad() {
    setCantidad((c) =>
      Math.max(c - 1, 1)
    );
  }

  function comprarAhora() {
    if (sinStock) return;
    onCerrar();
    navigate(RUTAS.NO_ENCONTRADA);
  }

  function handleAgregarAlCarrito() {
    if (sinStock) return;
    agregarAlCarrito(producto, cantidad);
    Swal.fire({
      icon: 'success',
      iconColor: 'var(--green-lime)',
      title: 'Agregado al carrito',
      text: `${cantidad} × ${producto.nombre}`,
      confirmButtonColor: 'var(--green-lime)',
      confirmButtonText: 'Genial',
      customClass: {
        popup: 'swal-nexus-popup',
        title: 'swal-nexus-title',
        htmlContainer: 'swal-nexus-text',
        confirmButton: 'swal-nexus-confirm',
      },
      buttonsStyling: false,
    });
  }

  function handleAlternarWishlist() {
    alternarWishlist(producto);
    Swal.fire({
      icon: enWishlist ? 'info' : 'success',
      title: enWishlist
        ? 'Quitado de favoritos'
        : 'Agregado a favoritos',
      text: enWishlist
        ? `${producto.nombre} fue quitado de favoritos.`
        : `${producto.nombre} fue agregado a favoritos.`,
      confirmButtonColor: 'var(--green-lime)',
      confirmButtonText: 'Genial',
      customClass: {
        popup: 'swal-nexus-popup',
        title: 'swal-nexus-title',
        htmlContainer: 'swal-nexus-text',
        confirmButton: 'swal-nexus-confirm',
      },
      buttonsStyling: false,
    });
  }

  const modal = (
    <div
      className="quickview-overlay"
      onClick={onCerrar}
    >
      <div
        className={`quickview-tarjeta quickview-tarjeta--${
          esVioleta ? 'violeta' : 'verde'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <span className="quickview-resplandor"></span>
        <button
          className="quickview-cerrar"
          onClick={onCerrar}
          aria-label="Cerrar"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="quickview-imagen-wrapper">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="quickview-imagen"
          />
        </div>
        <div className="quickview-info">
          <span className="quickview-categoria">
            {producto.categoria}
          </span>
          <h2 className="quickview-nombre">
            {producto.nombre}
          </h2>

          <p className="quickview-precio">
            ${producto.precio.toLocaleString('es-AR')}
          </p>

          <p className="quickview-descripcion">
            {producto.descripcion}
          </p>

          <p className="quickview-stock">
            {sinStock ? (
              'Sin stock disponible'
            ) : (
              <>
                <span className="quickview-punto-stock"></span>
                Stock disponible: {producto.stock} unidades
              </>
            )}
          </p>

          <div className="quickview-selector">
            <span>Cantidad</span>

            <div className="quickview-cantidad">
              <button
                onClick={disminuirCantidad}
                disabled={sinStock || cantidad <= 1}
              >
                −
              </button>

              <span
                key={cantidad}
                className="quickview-cantidad__numero"
              >
                {cantidad}
              </span>

              <button
                onClick={aumentarCantidad}
                disabled={
                  sinStock ||
                  cantidad >= producto.stock
                }
              >
                +
              </button>
            </div>
          </div>
          <div className="quickview-acciones">
            <button
              className={`quickview-icono ${
                enWishlist
                  ? 'quickview-icono--activo'
                  : ''
              }`}
              onClick={handleAlternarWishlist}
              aria-label={
                enWishlist
                  ? 'Quitar de favoritos'
                  : 'Agregar a favoritos'
              }
            >
              <svg
                viewBox="0 0 24 24"
                fill={
                  enWishlist
                    ? 'currentColor'
                    : 'none'
                }
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
              </svg>
            </button>
            <button
              className="quickview-icono"
              onClick={handleAgregarAlCarrito}
              disabled={sinStock}
              aria-label="Agregar al carrito"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>
          </div>
          <button
            className="quickview-comprar"
            onClick={comprarAhora}
            disabled={sinStock}
          >
            {sinStock ? 'Sin stock' : 'Comprar ahora'}
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

export default QuickViewProducto;