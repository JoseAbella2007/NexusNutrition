export default function SideCarrito({ abierto, setAbierto, carrito }) {
const cantidadProductos = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
);
const total = carrito.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
);
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
        border-l border-[#39ff14]/30
        z-201
        transform transition-transform duration-300 ease-in-out
        ${abierto ? "translate-x-0" : "translate-x-full"}
        `}
    >
        <div className="flex items-center justify-between p-5 bg-[#0d0d0d] border-b border-[#39ff14]/20">
        <div>
            <h2 className="text-xl font-bold text-white">
            Mi carrito
            </h2>

            <p className="text-sm text-gray-400">
            {cantidadProductos}{" "}
            {cantidadProductos === 1 ? "producto" : "productos"}
            </p>
        </div>

        <button
            onClick={() => setAbierto(false)}
            className="text-gray-400 text-xl hover:text-[#39ff14] transition"
        >
            <i className="fas fa-times"></i>
        </button>
        </div>
        <div className="p-5 overflow-y-auto h-[calc(100%-180px)]">
        {carrito.length === 0 ? (
            <p className="text-gray-400 text-center">
            Tu carrito está vacío
            </p>
        ) : (
            <div className="flex flex-col gap-4">
            {carrito.map((producto) => (
                <div
            key={producto.id}
            className="flex gap-3 p-3 rounded-lg bg-[#0d0d0d]"
                >
            <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1">
            <h3 className="text-white font-semibold">
            {producto.nombre}
            </h3>
            <p className="text-gray-400 text-sm">
            Cantidad: {producto.cantidad}
            </p>
            <p className="text-[#39ff14] font-bold mt-1">
            $ {(producto.precio * producto.cantidad).toLocaleString("es-AR")}
            </p>
            </div>
        </div>
        ))}
        </div>
        )}
        </div>
        <div className="absolute bottom-0 left-0 w-full p-5 bg-[#0d0d0d] border-t border-[#39ff14]/20">
        <div className="flex justify-between items-center mb-4">
        <span className="text-gray-400">
        Total
        </span>
        <span className="text-xl font-bold text-[#39ff14]">
        ${total.toLocaleString("es-AR")}
        </span>
        </div>
        <button
            className="
            w-full
            py-3
            rounded-lg
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