import { useState } from 'react';
import QuickViewProducto from './QuickViewProducto';
import './CardProducto.css';

function CardProducto({ producto }) {
  const [mostrarQuickView, setMostrarQuickView] = useState(false);

  return (
    <>
      <div className="card-producto" onClick={() => setMostrarQuickView(true)}>
        <img src={producto.imagen} alt={producto.nombre} className="card-producto__imagen" />
        <div className="card-producto__degradado"></div>

        <div className="card-producto__superior">
          <span className="card-producto__categoria">{producto.categoria}</span>
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