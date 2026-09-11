import { Link } from 'react-router-dom';
import './CardProducto.css';

function CardProducto({ producto }) {
  return (
    <div className="card-producto">
      <div className="card-producto__imagen-wrapper">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="card-producto__imagen"
        />
        <span className="card-producto__categoria">{producto.categoria}</span>
      </div>

      <div className="card-producto__info">
        <h3 className="card-producto__nombre">{producto.nombre}</h3>
        <p className="card-producto__precio">
          ${producto.precio.toLocaleString('es-AR')}
        </p>
        <Link to={`/producto/${producto.id}`} className="card-producto__boton">
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

export default CardProducto;