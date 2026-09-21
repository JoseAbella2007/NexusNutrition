import { Link } from "react-router-dom";
import { RUTAS } from "../../routes/rutas";
import Swal from "sweetalert2";
import "./SideWishlist.css";

export default function SideWishlist({
  abierta,
  setAbierta,
  wishlist,
  eliminarDeWishlist,
  pasarFavoritosAlCarrito,
}) {
  const cantidadProductos = wishlist.length;

  const manejarIrAComprar = () => {
    if (wishlist.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Faltan productos",
        text: "Agregá al menos un producto a favoritos antes de ir a comprar.",
        confirmButtonText: "Entendido",
        background: "var(--bg-1)",
        color: "var(--white)",
        confirmButtonColor: "var(--purple-1)",
      });
      return;
    }
    pasarFavoritosAlCarrito();
  };

  return (
    <>
      {abierta && (
        <div
          onClick={() => setAbierta(false)}
          className="side-wishlist__fondo"
        />
      )}
      <aside className={`side-wishlist ${abierta ? "side-wishlist--abierta" : ""}`}>
        <div className="side-wishlist__cabecera">
          <div>
            <h2 className="side-wishlist__titulo">Favoritos</h2>
            <p className="side-wishlist__contador">
              <span>{cantidadProductos}</span>
              <span>{cantidadProductos === 1 ? "Producto" : "Productos"}</span>
            </p>
          </div>
          <button
            onClick={() => setAbierta(false)}
            className="side-wishlist__cerrar"
            aria-label="Cerrar wishlist"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="side-wishlist__cuerpo">
          {wishlist.length === 0 ? (
            <p className="side-wishlist__vacio">Tu lista de favoritos está vacía</p>
          ) : (
            <div className="side-wishlist__lista">
              {wishlist.map((producto) => (
                <div key={producto.id} className="side-wishlist__item">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="side-wishlist__imagen"
                  />

                  <div className="side-wishlist__info">
                    <h3 className="side-wishlist__nombre">{producto.nombre}</h3>
                    <p className="side-wishlist__precio">
                      ${producto.precio.toLocaleString("es-AR")}
                    </p>
                    <Link
                      to={`${RUTAS.PRODUCTOS}?producto=${producto.id}`}
                      onClick={() => setAbierta(false)}
                      className="side-wishlist__ver"
                    >
                      Ver producto
                    </Link>
                  </div>

                  <button
                    onClick={() => eliminarDeWishlist(producto.id)}
                    className="side-wishlist__eliminar"
                    aria-label="Quitar de la wishlist"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="side-wishlist__pie">
          <button
            type="button"
            onClick={manejarIrAComprar}
            className="side-wishlist__comprar"
          >
            Ir a comprar
          </button>
        </div>
      </aside>
    </>
  );
}
