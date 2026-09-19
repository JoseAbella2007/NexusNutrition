import { useState } from 'react';
import { createPortal } from 'react-dom';
import Swal from 'sweetalert2';
import useLocalStorage from '../../hooks/useLocalStorage';
import './QuickViewProducto.css';

function QuickViewProducto({ producto, onCerrar }) {
  const [carrito, setCarrito] = useLocalStorage('carrito', []);
  const [cantidad, setCantidad] = useState(1);

  const sinStock = producto.stock === 0;
  const esVioleta = producto.categoria === 'Salud y Bienestar';

  function aumentarCantidad() {
    setCantidad((c) => Math.min(c + 1, producto.stock));
  }

  function disminuirCantidad() {
    setCantidad((c) => Math.max(c - 1, 1));
  }

  function comprarAhora() {
    setCarrito((actual) => {
      const existente = actual.find((item) => item.id === producto.id);
      if (existente) {
        return actual.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + cantidad } : item
        );
      }
      return [...actual, { ...producto, cantidad }];
    });

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

  const modal = (
    <div className="quickview-overlay" onClick={onCerrar}>
      <div
        className={`quickview-tarjeta quickview-tarjeta--${esVioleta ? 'violeta' : 'verde'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <span className="quickview-resplandor"></span>

        <button className="quickview-cerrar" onClick={onCerrar} aria-label="Cerrar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>

        <div className="quickview-imagen-wrapper">
          <img src={producto.imagen} alt={producto.nombre} className="quickview-imagen" />
        </div>

        <div className="quickview-info">
          <span className="quickview-categoria">{producto.categoria}</span>
          <h2 className="quickview-nombre">{producto.nombre}</h2>
          <p className="quickview-precio">${producto.precio.toLocaleString('es-AR')}</p>
          <p className="quickview-descripcion">{producto.descripcion}</p>
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
              <button onClick={disminuirCantidad} disabled={sinStock || cantidad <= 1}>
                −
              </button>
              <span key={cantidad} className="quickview-cantidad__numero">
                {cantidad}
              </span>
              <button onClick={aumentarCantidad} disabled={sinStock || cantidad >= producto.stock}>
                +
              </button>
            </div>
          </div>

          <button className="quickview-comprar" onClick={comprarAhora} disabled={sinStock}>
            {sinStock ? 'Sin stock' : 'Comprar ahora'}
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

export default QuickViewProducto;