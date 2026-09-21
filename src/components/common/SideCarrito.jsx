import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { RUTAS } from "../../routes/rutas";
import "./SideCarrito.responsive.css";

export default function SideCarrito({
  abierto,
  setAbierto,
  carrito,
  setCarrito,
}) {
  const cantidadProductos = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  const total = carrito.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  );

  const eliminarProducto = (id) => {
    setCarrito((carritoActual) =>
      carritoActual.filter((producto) => producto.id !== id)
    );
  };

  const cambiarCantidad = (id, cambio) => {
    setCarrito((carritoActual) =>
      carritoActual.map((producto) =>
        producto.id === id
          ? {
              ...producto,
              cantidad: Math.max(1, producto.cantidad + cambio),
            }
          : producto
      )
    );
  };

  const manejarFinalizarCompra = (evento) => {
    if (carrito.length === 0) {
      evento.preventDefault();
      Swal.fire({
        icon: "warning",
        title: "Faltan productos",
        text: "Agregá al menos un producto al carrito antes de finalizar la compra.",
        confirmButtonText: "Entendido",
        background: "var(--bg-1)",
        color: "var(--white)",
        confirmButtonColor: "var(--purple-1)",
      });
    }
  };

  return (
    <>
      {abierto && (
        <div
          onClick={() => setAbierto(false)}
          className="fixed inset-0 bg-black/70 z-200"
        />
      )}

      <aside
        className={`carrito-panel ${
          abierto ? "carrito-panel-abierto" : ""
        }`}
      >
        <div className="carrito-header">
          <div>
            <h2 className="carrito-titulo">
              Carrito de Compras
            </h2>
            <p className="carrito-contador">
              <span>{cantidadProductos}</span>

              <span>
                {cantidadProductos === 1 ? "Producto" : "Productos"}
              </span>
            </p>
          </div>

          <button
            onClick={() => setAbierto(false)}
            className="carrito-cerrar"
            aria-label="Cerrar carrito"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="carrito-body">
          {carrito.length === 0 ? (
            <p className="text-gray-400 text-center">
              Tu carrito está vacío
            </p>
          ) : (
            <div className="carrito-lista">
              {carrito.map((producto) => (
                <div
                  key={producto.id}
                  className="carrito-item"
                >
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="carrito-imagen"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="carrito-nombre">
                      {producto.nombre}
                    </h3>

                    <p className="carrito-precio">
                      ${" "}
                      {(producto.precio * producto.cantidad).toLocaleString(
                        "es-AR"
                      )}
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          cambiarCantidad(producto.id, -1)
                        }
                        className="carrito-cantidad-btn"
                        aria-label="Disminuir cantidad"
                      >
                        -
                      </button>
                      <span className="carrito-cantidad-valor">
                        {producto.cantidad}
                      </span>
                      <button
                        onClick={() =>
                          cambiarCantidad(producto.id, 1)
                        }
                        className="carrito-cantidad-btn"
                        aria-label="Aumentar cantidad"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => eliminarProducto(producto.id)}
                    className="carrito-eliminar"
                    aria-label="Eliminar producto"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="carrito-footer">
          <div className="flex flex-col items-center">
            <span className="carrito-total-label">
              Total
            </span>
            <span className="carrito-total-valor">
              ${total.toLocaleString("es-AR")}
            </span>
          </div>
          <Link
            to={RUTAS.NO_ENCONTRADA}
            className="carrito-finalizar"
            onClick={manejarFinalizarCompra}
          >
            Finalizar compra
          </Link>
        </div>
      </aside>
    </>
);
}