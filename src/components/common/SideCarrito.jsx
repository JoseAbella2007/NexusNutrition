export default function SideCarrito({ abierto, setAbierto }) {
  return (
    <>
      {abierto && (
        <div
          onClick={() => setAbierto(false)}
          className="fixed inset-0 bg-black/70 z-40"
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
              0 productos
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
          <p className="text-gray-400 text-center">
            Tu carrito está vacío
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-5 bg-[#0d0d0d] border-t border-[#39ff14]/20">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400">
              Total
            </span>
            <span className="text-xl font-bold text-[#39ff14]">
              $0
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
