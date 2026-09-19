import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useOutletContext } from 'react-router-dom';
import Swal from 'sweetalert2';
import './QuickViewProducto.css';

function QuickViewProducto({ producto, onCerrar }) {
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
    agregarAlCarrito(producto, cantidad);
    Swal.fire({
      icon: 'success',
      iconColor: 'var(--green-lime)',
      title: '¡Compra exitosa!',
      text: `${cantidad} × ${producto.nombre} agregado a tu carrito.`,
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

    onCerrar();
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

          <button
            className="quickview-comprar"
            onClick={comprarAhora}
            disabled={sinStock}
          >
            {sinStock ? 'Sin stock' : 'Comprar ahora'}
          </button>

          <button
            className="quickview-wishlist"
            onClick={handleAlternarWishlist}
          >
            {enWishlist
              ? 'Quitar de favoritos'
              : 'Agregar a favoritos'}
          </button>

          <button
            className="quickview-carrito"
            onClick={handleAgregarAlCarrito}
            disabled={sinStock}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

export default QuickViewProducto;

