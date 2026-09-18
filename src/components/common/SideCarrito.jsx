export default function SideCarrito({ abierto, setAbierto, carrito, setCarrito}) {
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
return (
    <>
    {abierto && (
        <div
        onClick={() => setAbierto(false)}
        className="fixed inset-0 bg-black/70 z-200"
        />
    )}
    <aside
    className={`
    fixed top-0 right-0 h-full w-100
    bg-[#080808]
    border-l-4 border-[#7b2cff]/30
    shadow-[-12px_0_40px_rgba(168,85,247,0.35)]
    z-201
    transform transition-all duration-300 ease-in-out
    ${abierto ? "translate-x-0" : "translate-x-full"}
`}
    >
        <div className="flex items-center justify-center p-5 bg-[#0d0d0d] border-b-3 border-[#7b2cff]/30">
        <div>
            <h2 className="text-xl font-bold text-white">
            Carrito de Compras
            </h2>
            <p className="flex items-center justify-center text-sm text-[#a855f7]! gap-2">  
            <span>{cantidadProductos}</span>
            <span>{cantidadProductos === 1 ? "Producto" : "Productos"}</span>
            </p>
        </div>
        <button
            onClick={() => setAbierto(false)}
            className="absolute right-5 text-gray-400 text-xl hover:text-[#39ff14] transition"
        >
            <i className="fas fa-times"></i>
        </button>
        </div>
        <div className="p-6 overflow-y-auto h-[calc(100%-180px)]">
        {carrito.length === 0 ? (
            <p className="text-gray-400 text-center">
            Tu carrito está vacío
            </p>
        ) : (
            <div className="flex flex-col gap-4">
            {carrito.map((producto) => (
                <div
            key={producto.id}
            className="flex gap-4 p-4 rounded-lg bg-[#0d0d0d]"
                >
    <img
    src={producto.imagen}
    alt={producto.nombre}
    className="w-20 h-20 m-2 object-cover rounded-md border-red-500"
    />

    <div className="flex-1 min-w-0">
    <h3 className="text-white font-semibold">
        {producto.nombre}
    </h3>

    <p className="text-[#39ff14] font-bold mt-1">
        ${" "}
        {(producto.precio * producto.cantidad).toLocaleString("es-AR")}
    </p>
    <div className="flex items-center justify-center gap-2 mt-2">
        <button
        onClick={() => cambiarCantidad(producto.id, -1)}
        className="w-7 h-7 flex items-center justify-center rounded bg-[#1a1a1a] text-white hover:bg-[#39ff14] hover:text-black transition">
        -
        </button>
        <span className="text-gray-300 text-sm min-w-5 text-center">
        {producto.cantidad}
        </span>
        <button
        onClick={() => cambiarCantidad(producto.id, 1)}
        className="w-7 h-7 flex items-center justify-center rounded bg-[#1a1a1a] text-white hover:bg-[#39ff14] hover:text-black transition">
        +
        </button>
    </div>
    </div>
    <button
    onClick={() => eliminarProducto(producto.id)}
    className="text-gray-400 hover:text-red-500 text-lg transition"
    aria-label="Eliminar producto"
    >
    <i className="fas fa-trash"></i>
    </button>
</div>
))}
        </div>
        )}
        </div>
        <div className="absolute bottom-0 left-0 w-full p-5 bg-[#0d0d0d] border-t-3 border-[#7b2cff]/30">
        <div className="flex justify-between items-center mb-4">
        <span className="text-gray-400">
        Total
        </span>
        <span className="text-xl font-bold text-[#8a8a8a]">
        ${total.toLocaleString("es-AR")}
        </span>
        </div>
        <button
            className="
            w-full
            py-3
            bg-[#39ff14]
            text-[#050505]
            font-bold
            hover:bg-white
            transition
            "
        >
            Finalizar compra
        </button>
        </div>
    </aside>
    </>
);
}