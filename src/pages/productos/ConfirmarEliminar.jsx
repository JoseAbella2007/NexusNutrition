import './ConfirmarEliminar.css';

function ConfirmarEliminar({ producto, onConfirmar, onCancelar }) {
  return (
    <div className="confirmar-overlay">
      <div className="confirmar-modal">
        <div className="confirmar-modal__icono">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
        </div>

        <h3 className="confirmar-modal__titulo">¿Eliminar producto?</h3>
        <p className="confirmar-modal__texto">
          Estás por eliminar <strong>{producto.nombre}</strong>. Esta acción no se puede deshacer.
        </p>

        <div className="confirmar-modal__acciones">
          <button className="confirmar-modal__cancelar" onClick={onCancelar}>
            Cancelar
          </button>
          <button className="confirmar-modal__eliminar" onClick={onConfirmar}>
            Sí, eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmarEliminar;