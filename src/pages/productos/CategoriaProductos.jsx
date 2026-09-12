import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productosIniciales from '../../data/productos';
import useLocalStorage from '../../hooks/useLocalStorage';
import CardProducto from './CardProducto';
import './CategoriaProductos.css';

function quitarAcentos(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function normalizarCategoria(texto) {
  return quitarAcentos(texto).replace(/ /g, '-');
}

const CATEGORIAS = ['Entrenamiento', 'Nutrición y Dietas', 'Salud y Bienestar', 'Suplementación'];
const PRODUCTOS_POR_PAGINA = 4;

const INFO_CATEGORIAS = {
  entrenamiento: {
    tagline: 'Fuerza que se construye, repetición a repetición.',
    acento: 'verde',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
  },
  'nutricion-y-dietas': {
    tagline: 'Combustible real para objetivos reales.',
    acento: 'verde',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  'salud-y-bienestar': {
    tagline: 'Cuidar el cuerpo también es entrenar la mente.',
    acento: 'violeta',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4.5 8-11.8A5.2 5.2 0 0 0 12 6a5.2 5.2 0 0 0-8 4.2C4 17.5 12 22 12 22z" />
      </svg>
    ),
  },
  suplementacion: {
    tagline: 'La precisión detrás de cada resultado.',
    acento: 'verde',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
      </svg>
    ),
  },
  todas: {
    tagline: 'Todo lo que necesitás para tu mejor versión.',
    acento: 'verde',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
};

function CategoriaProductos() {
  const { nombreCategoria } = useParams();
  const navigate = useNavigate();
  const [productos] = useLocalStorage('productos', productosIniciales);

  const [busqueda, setBusqueda] = useState('');
  const [orden, setOrden] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);

  // La categoría activa viene SIEMPRE de la URL, no de un estado propio.
  // Esto evita cualquier desincronización: si la URL dice "suplementacion",
  // la página muestra suplementacion. Punto.
  const categoriaActual = nombreCategoria;

  function irACategoria(slug) {
    navigate(`/categoria/${slug}`);
  }

  const productosPorCategoria =
    categoriaActual === 'todas'
      ? productos
      : productos.filter(
          (producto) => normalizarCategoria(producto.categoria) === categoriaActual
        );

  const productosBuscados = productosPorCategoria.filter((producto) =>
    quitarAcentos(producto.nombre).includes(quitarAcentos(busqueda))
  );

  const productosFiltrados = [...productosBuscados].sort((a, b) => {
    if (orden === 'precio-asc') {
      return a.precio - b.precio;
    }
    if (orden === 'precio-desc') {
      return b.precio - a.precio;
    }
    if (orden === 'nombre-asc') {
      return a.nombre.localeCompare(b.nombre);
    }
    if (orden === 'nombre-desc') {
      return b.nombre.localeCompare(a.nombre);
    }
    return 0;
  });

  // Cada vez que cambia la categoría (URL), o la búsqueda, o el orden,
  // volvemos a la página 1.
  useEffect(() => {
    setPaginaActual(1);
  }, [categoriaActual, busqueda, orden]);

  const totalPaginas = Math.ceil(productosFiltrados.length / PRODUCTOS_POR_PAGINA);
  const indiceInicio = (paginaActual - 1) * PRODUCTOS_POR_PAGINA;
  const productosDeLaPagina = productosFiltrados.slice(
    indiceInicio,
    indiceInicio + PRODUCTOS_POR_PAGINA
  );

  function limpiarFiltros() {
    setBusqueda('');
    setOrden('');
    navigate('/categoria/todas');
  }

  const info = INFO_CATEGORIAS[categoriaActual] || INFO_CATEGORIAS.todas;
  const nombreVisible =
    categoriaActual === 'todas' ? 'Todos los productos' : categoriaActual.replace(/-/g, ' ');

  return (
    <div className="categoria-productos">
      {/* FONDO ANIMADO DE TODA LA PÁGINA */}
      <div className="fondo-animado">
        <span className="fondo-animado__blob fondo-animado__blob--verde"></span>
        <span className="fondo-animado__blob fondo-animado__blob--violeta"></span>
        <span className="fondo-animado__lineas"></span>
      </div>

      {/* HERO DE CATEGORÍA */}
      <div className={`categoria-hero categoria-hero--${info.acento}`}>
        <span className="categoria-hero__icono">{info.icono}</span>
        <h1 className="categoria-hero__titulo">{nombreVisible}</h1>
        <p className="categoria-hero__tagline">{info.tagline}</p>
      </div>

      <div className="categoria-productos__contenido">
        {/* CHIPS RÁPIDOS DE CATEGORÍA (ahora navegan de verdad) */}
        <div className="categoria-chips">
          <button
            className={`categoria-chip ${categoriaActual === 'todas' ? 'categoria-chip--activo' : ''}`}
            onClick={() => irACategoria('todas')}
          >
            Todas
          </button>
          {CATEGORIAS.map((cat) => {
            const slug = normalizarCategoria(cat);
            return (
              <button
                key={cat}
                className={`categoria-chip ${categoriaActual === slug ? 'categoria-chip--activo' : ''}`}
                onClick={() => irACategoria(slug)}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* BARRA DE FILTROS */}
        <div className="categoria-productos__filtros">
          <div className="campo-buscar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="campo-buscar__icono">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="categoria-productos__input"
              placeholder="Buscar por nombre..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div className="campo-select">
            <select
              className="categoria-productos__select"
              value={categoriaActual}
              onChange={(e) => irACategoria(e.target.value)}
            >
              <option value="todas">Todas las categorías</option>
              {CATEGORIAS.map((cat) => (
                <option key={cat} value={normalizarCategoria(cat)}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="campo-select">
            <select
              className="categoria-productos__select"
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
            >
              <option value="">Ordenar por...</option>
              <option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option>
              <option value="nombre-asc">Nombre: A-Z</option>
              <option value="nombre-desc">Nombre: Z-A</option>
            </select>
          </div>

          <button className="categoria-productos__boton-limpiar" onClick={limpiarFiltros}>
            Limpiar filtros
          </button>
        </div>

        <p className="categoria-productos__resultado">
          Se encontraron <strong>{productosFiltrados.length}</strong> productos
        </p>

        {/* GRID DE PRODUCTOS */}
        {productosDeLaPagina.length > 0 ? (
          <div
            className="categoria-productos__grid"
            key={`${categoriaActual}-${busqueda}-${orden}-${paginaActual}`}
          >
            {productosDeLaPagina.map((producto, index) => (
              <div
                key={producto.id}
                className="card-entrada"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <CardProducto producto={producto} />
              </div>
            ))}
          </div>
        ) : (
          <div className="categoria-productos__vacio">
            No se encontraron productos con esos filtros.
          </div>
        )}

        {/* PAGINACIÓN */}
        {totalPaginas > 1 && (
          <div className="categoria-productos__paginacion">
            <button onClick={() => setPaginaActual((p) => p - 1)} disabled={paginaActual === 1}>
              ← Anterior
            </button>
            <span>
              Página {paginaActual} de {totalPaginas}
            </span>
            <button
              onClick={() => setPaginaActual((p) => p + 1)}
              disabled={paginaActual === totalPaginas}
            >
              Siguiente →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoriaProductos;