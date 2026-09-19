import { useState } from "react";

export default function SideCarrito() {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      {/* ================= BOTÓN CARRITO ================= */}
      <button
        onClick={() => setAbierto(true)}
        className="
          relative
          text-xl
          text-[#39ff14]
          hover:text-white
          transition-colors
          duration-200
        "
      >
        <i className="fas fa-shopping-cart"></i>

        {/* Cantidad de productos */}
        <span
          className="
            absolute
            -top-2
            -right-3
            flex
            items-center
            justify-center
            w-5
            h-5
            rounded-full
            bg-[#39ff14]
            text-[#050505]
            text-xs
            font-bold
          "
        >
          2
        </span>
      </button>

      {/* ================= FONDO OSCURO ================= */}
      {abierto && (
        <div
          onClick={() => setAbierto(false)}
          className="
            fixed
            inset-0
            bg-black/70
            z-40
          "
        ></div>
      )}

      {/* ================= SIDECARRITO ================= */}
      <aside
        className={`
          fixed
          top-0
          right-0
          h-full
          w-[400px]
          bg-[#080808]
          border-l
          border-[#39ff14]/30
          z-50

          transform
          transition-transform
          duration-300
          ease-in-out

          ${abierto ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {/* ================= HEADER ================= */}
        <div
          className="
            flex
            items-center
            justify-between
            px-6
            py-5
            bg-[#0d0d0d]
            border-b
            border-[#39ff14]/20
          "
        >
          <div>
            <h2
              className="
                text-xl
                font-bold
                text-white
              "
            >
              Mi carrito
            </h2>

            <p className="text-sm text-gray-400">
              2 productos
            </p>
          </div>

          {/* Botón cerrar */}
          <button
            onClick={() => setAbierto(false)}
            className="
              text-gray-400
              text-xl
              hover:text-[#39ff14]
              transition-colors
              duration-200
            "
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* ================= PRODUCTOS ================= */}
        <div
          className="
            h-[calc(100%-180px)]
            overflow-y-auto
            p-5
          "
        >

          {/* Producto */}
          <div
            className="
              flex
              gap-4
              p-4
              mb-4
              rounded-xl
              bg-[#0d0d0d]
              border
              border-[#39ff14]/10
            "
          >

            {/* Imagen */}
            <div
              className="
                w-20
                h-20
                rounded-lg
                bg-[#050505]
                flex
                items-center
                justify-center
              "
            >
              <img
                src="/producto.png"
                alt="Producto"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Información */}
            <div className="flex-1">

              <h3 className="text-white font-semibold">
                Producto
              </h3>

              <p className="text-[#39ff14] font-bold mt-1">
                $25.000
              </p>

              {/* Cantidad */}
              <div className="flex items-center gap-3 mt-3">

                <button
                  className="
                    w-7
                    h-7
                    rounded-md
                    bg-[#050505]
                    border
                    border-[#39ff14]/30
                    text-[#39ff14]
                    hover:bg-[#39ff14]
                    hover:text-[#050505]
                    transition
                  "
                >
                  -
                </button>

                <span className="text-white">
                  1
                </span>

                <button
                  className="
                    w-7
                    h-7
                    rounded-md
                    bg-[#050505]
                    border
                    border-[#39ff14]/30
                    text-[#39ff14]
                    hover:bg-[#39ff14]
                    hover:text-[#050505]
                    transition
                  "
                >
                  +
                </button>

              </div>
            </div>

            {/* Eliminar */}
            <button
              className="
                self-start
                text-gray-500
                hover:text-red-500
                transition
              "
            >
              <i className="fas fa-trash"></i>
            </button>

          </div>

        </div>

        {/* ================= FOOTER ================= */}
        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            p-5
            bg-[#0d0d0d]
            border-t
            border-[#39ff14]/20
          "
        >

          {/* Total */}
          <div
            className="
              flex
              justify-between
              items-center
              mb-4
            "
          >
            <span className="text-gray-400">
              Total
            </span>

            <span
              className="
                text-xl
                font-bold
                text-[#39ff14]
              "
            >
              $25.000
            </span>
          </div>

          {/* Comprar */}
          <button
            className="
              w-full
              py-3
              rounded-lg
              bg-[#39ff14]
              text-[#050505]
              font-bold
              hover:bg-white
              transition-colors
              duration-200
            "
          >
            Finalizar compra
          </button>

        </div>

      </aside>
    </>
  );
}

