import { useEffect, useState } from 'react';
import { useParams, Navigate, Link, useOutletContext } from 'react-router-dom';
import Swal from 'sweetalert2';
import productosIniciales from '../../data/productos';
import useLocalStorage from '../../hooks/useLocalStorage';
import './DetalleDeProducto.css';

function quitarAcentos(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function normalizarCategoria(texto) {
  return quitarAcentos(texto).replace(/ /g, '-');
}

function IconoVolver(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" {...props}>
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

function IconoCarrito(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20" {...props}>
      <circle cx="9" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6L23 6H6" />
    </svg>
  );
}

function IconoCheck(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" width="20" height="20" {...props}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function IconoCorazon({ relleno, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={relleno ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.8"
      width="20"
      height="20"
      {...props}
    >
      <path d="M12 21s-7.5-4.6-10-9.3C.4 8.3 2 4.5 5.6 4c2.1-.3 4.1.8 6.4 3 2.3-2.2 4.3-3.3 6.4-3 3.6.5 5.2 4.3 3.6 7.7C19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

function IconoMas(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function IconoMenos(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" {...props}>
      <path d="M5 12h14" />
    </svg>
  );
}

function formatearPrecio(precio) {
  return precio.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 });
}

// Cuenta desde 0 hasta el precio real cuando el producto aparece en pantalla.
function usePrecioAnimado(precioFinal) {
  const [valor, setValor] = useState(0);

  useEffect(() => {
    setValor(0);
    const duracion = 700;
    const inicio = performance.now();

    function paso(ahora) {
      const progreso = Math.min((ahora - inicio) / duracion, 1);
      const facilitado = 1 - Math.pow(1 - progreso, 3);
      setValor(Math.round(precioFinal * facilitado));
      if (progreso < 1) requestAnimationFrame(paso);
    }

    const id = requestAnimationFrame(paso);
    return () => cancelAnimationFrame(id);
  }, [precioFinal]);

  return valor;
}

// Rayos de luz diagonales del fondo: mismo lenguaje visual que el hero de
// CategoriaProductos, pero repetido varias veces a lo ancho de toda la página.
const RAYOS = [
  { left: '6%', angulo: '16deg', color: 'var(--green-lime)', sombra: 'rgba(183,255,0,0.35)', delay: '0s' },
  { left: '24%', angulo: '-14deg', color: 'var(--purple-1)', sombra: 'rgba(123,44,255,0.3)', delay: '0.7s' },
  { left: '48%', angulo: '18deg', color: 'var(--green-classic)', sombra: 'rgba(57,255,20,0.3)', delay: '1.4s' },
  { left: '70%', angulo: '-16deg', color: 'var(--purple-2)', sombra: 'rgba(168,85,247,0.3)', delay: '2.1s' },
  { left: '90%', angulo: '14deg', color: 'var(--green-lime)', sombra: 'rgba(183,255,0,0.25)', delay: '0.35s' },
];

export default function DetalleDeProducto() {
  const { id } = useParams();
  const [productos] = useLocalStorage('productos', productosIniciales);
  const { wishlist, alternarWishlist: alternarWishlistContexto, agregarAlCarrito: agregarAlCarritoContexto,} = useOutletContext();
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  const producto = productos.find((p) => p.id === id);
  const precioAnimado = usePrecioAnimado(producto ? producto.precio : 0);

  if (!producto) {
    return <Navigate to="/404" replace />;
  }

  const enWishlist = wishlist.some((p) => p.id === producto.id);
  const sinStock = producto.stock === 0;
  const stockBajo = producto.stock > 0 && producto.stock <= 5;
  const slugCategoria = normalizarCategoria(producto.categoria);

  function aumentarCantidad() {
    setCantidad((c) => Math.min(c + 1, producto.stock));
  }

  function disminuirCantidad() {
    setCantidad((c) => Math.max(c - 1, 1));
  }

function agregarAlCarrito({ redirigir = false } = {}) {
  agregarAlCarritoContexto(producto, cantidad);
    if (!redirigir) {
      setAgregado(true);
      setTimeout(() => setAgregado(false), 1400);
    }
    Swal.fire({
      icon: 'success',
      iconColor: 'var(--green-lime)',
      title: redirigir ? '¡Listo para pagar!' : 'Agregado al carrito',
      text: `${cantidad} × ${producto.nombre}`,
      confirmButtonColor: 'var(--green-lime)',
      timer: redirigir ? undefined : 1800,
      showConfirmButton: Boolean(redirigir),
      customClass: {
        popup: 'swal-nexus-popup',
        title: 'swal-nexus-title',
        htmlContainer: 'swal-nexus-text',
        confirmButton: 'swal-nexus-confirm',
      },
      buttonsStyling: false,
    });
  }

  function alternarWishlist() {
    alternarWishlistContexto(producto);

    Swal.fire({
      icon: enWishlist ? 'info' : 'success',
      iconColor: enWishlist ? 'var(--purple-2)' : 'var(--green-lime)',
      title: enWishlist ? 'Quitado de favoritos' : 'Agregado a favoritos',
      toast: true,
      position: 'top-end',
      timer: 1500,
      showConfirmButton: false,
      customClass: { popup: 'swal-nexus-popup', title: 'swal-nexus-title' },
    });
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg-0)]">
      {/* Fondo de toda la página: rayos de luz diagonales verde/violeta, igual estética que el resto del sitio */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {RAYOS.map((rayo, i) => (
          <span
            key={i}
            className="absolute top-[-15%] h-[140%] w-[2px] animate-[nxPulso_4s_ease-in-out_infinite]"
            style={{
              left: rayo.left,
              backgroundColor: rayo.color,
              boxShadow: `0 0 30px 6px ${rayo.sombra}, 0 0 70px 16px ${rayo.sombra}`,
              transform: `rotate(${rayo.angulo})`,
              animationDelay: rayo.delay,
            }}
          />
        ))}
        {/* Viñeta para que el centro con el texto no compita con las luces */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at 50% 35%, transparent 0%, var(--bg-0) 72%)' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[var(--container-width)] px-5 py-10 md:px-10">
        {/* Volver + breadcrumb — siempre visible, también en mobile */}
        <div className="mb-12 flex flex-col gap-3 animate-[fadeInUp_0.4s_ease-out_both] sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <Link
            to={`/categoria/${slugCategoria}`}
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--bg-1)] px-4 py-2 text-sm text-[var(--white-soft)] transition-all duration-300 hover:border-[var(--green-lime)] hover:text-[var(--green-lime)] hover:shadow-[0_0_16px_rgba(183,255,0,0.25)]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              <IconoVolver />
            </span>
            Volver a {producto.categoria}
          </Link>

          <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--grey-mute)]">
            <Link
              to="/categoria/todas"
              className="relative transition-colors hover:text-[var(--green-lime)] after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[var(--green-lime)] after:transition-all after:duration-300 hover:after:w-full"
            >
              Catálogo
            </Link>
            <span>/</span>
            <Link
              to={`/categoria/${slugCategoria}`}
              className="relative transition-colors hover:text-[var(--green-lime)] after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[var(--green-lime)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {producto.categoria}
            </Link>
            <span>/</span>
            <span className="max-w-[220px] truncate text-[var(--white-soft)]">{producto.nombre}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 pt-2 md:grid-cols-2 md:gap-16">
          {/* Imagen: sin caja/borde detrás, flota directo sobre el fondo */}
          <div className="relative flex animate-[fadeInUp_0.5s_ease-out_both] items-center justify-center">
            <div className="pointer-events-none absolute bottom-4 left-1/2 h-6 w-1/2 -translate-x-1/2 rounded-full bg-black/40 blur-xl" />

            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="relative z-10 h-auto max-h-[420px] w-auto max-w-full object-contain drop-shadow-2xl animate-[floatY_4s_ease-in-out_infinite] transition-transform duration-500 hover:scale-105"
            />

            {stockBajo && (
              <span className="absolute left-0 top-0 z-10 animate-pulse rounded-full bg-[var(--green-lime)] px-3 py-1 text-xs font-bold text-[var(--bg-0)]">
                ¡Últimas {producto.stock} unidades!
              </span>
            )}
            {sinStock && (
              <span className="absolute left-0 top-0 z-10 rounded-full border border-[var(--border-soft)] bg-[var(--bg-2)] px-3 py-1 text-xs font-bold text-[var(--grey-mute)]">
                Sin stock
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="w-fit animate-[fadeInUp_0.5s_0.05s_ease-out_both,pulseGlow_2.5s_ease-in-out_0.6s_infinite] rounded-full border border-[var(--green-lime)]/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--green-lime)]">
              {producto.categoria}
            </span>

            <h1 className="animate-[fadeInUp_0.5s_0.1s_ease-out_both] text-3xl text-white [font-family:var(--font-heading)]">
              {producto.nombre}
            </h1>

            <p className="animate-[fadeInUp_0.5s_0.15s_ease-out_both] text-3xl font-bold text-[var(--green-lime)] [font-family:var(--font-heading)] tabular-nums">
              {formatearPrecio(precioAnimado)}
            </p>

            <p className="animate-[fadeInUp_0.5s_0.2s_ease-out_both] leading-relaxed text-[var(--white-soft)]">
              {producto.descripcion}
            </p>

            <p className="animate-[fadeInUp_0.5s_0.25s_ease-out_both] text-sm text-[var(--grey-mute)]">
              {sinStock ? 'Sin stock disponible' : `Stock disponible: ${producto.stock} unidades`}
            </p>

            <div className="flex animate-[fadeInUp_0.5s_0.3s_ease-out_both] items-center gap-4">
              <span className="text-sm text-[var(--grey-mute)]">Cantidad</span>
              <div className="flex items-center rounded-full border border-[var(--border-soft)] bg-[var(--bg-1)]">
                <button
                  type="button"
                  onClick={disminuirCantidad}
                  disabled={sinStock || cantidad <= 1}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--white-soft)] transition-transform duration-150 hover:text-[var(--green-lime)] active:scale-90 disabled:opacity-30"
                >
                  <IconoMenos />
                </button>
                <span key={cantidad} className="w-8 text-center text-[var(--white)] animate-[bump_0.35s_ease-out]">
                  {cantidad}
                </span>
                <button
                  type="button"
                  onClick={aumentarCantidad}
                  disabled={sinStock || cantidad >= producto.stock}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--white-soft)] transition-transform duration-150 hover:text-[var(--green-lime)] active:scale-90 disabled:opacity-30"
                >
                  <IconoMas />
                </button>
              </div>
            </div>

            <div className="mt-2 flex w-full max-w-sm animate-[fadeInUp_0.5s_0.35s_ease-out_both] flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => agregarAlCarrito()}
                  disabled={sinStock}
                  title="Agregar al carrito"
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-200 active:scale-90 disabled:opacity-30 ${
                    agregado
                      ? 'border-[var(--green-lime)] bg-[var(--green-lime)]/15 text-[var(--green-lime)]'
                      : 'border-[var(--border-soft)] bg-[var(--bg-1)] text-[var(--white-soft)] hover:border-[var(--green-lime)] hover:text-[var(--green-lime)]'
                  }`}
                >
                  <span key={agregado ? 'check' : 'cart'} className="animate-[popIn_0.3s_ease-out]">
                    {agregado ? <IconoCheck /> : <IconoCarrito />}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={alternarWishlist}
                  title={enWishlist ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                  className={`group flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-200 active:scale-90 ${
                    enWishlist
                      ? 'border-[var(--purple-1)] bg-[var(--purple-1)]/15 text-[var(--purple-2)]'
                      : 'border-[var(--border-soft)] bg-[var(--bg-1)] text-[var(--white-soft)] hover:border-[var(--purple-2)] hover:text-[var(--purple-2)]'
                  }`}
                >
                  <span className="inline-block transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
                    <IconoCorazon relleno={enWishlist} />
                  </span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => agregarAlCarrito({ redirigir: true })}
                disabled={sinStock}
                className="w-full rounded-full py-3 font-bold text-[var(--bg-0)] transition-transform duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-40 [background:var(--gradient-green)]"
              >
                {sinStock ? 'Sin stock' : 'Comprar ahora'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}