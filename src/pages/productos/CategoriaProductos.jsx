import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

function CategoriaProductos() {
  const { nombreCategoria } = useParams();
  const [productos] = useLocalStorage('productos', productosIniciales);

  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(nombreCategoria);
  const [orden, setOrden] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);

  const productosPorCategoria =
    categoriaSeleccionada === 'todas'
      ? productos
      : productos.filter(
          (producto) => normalizarCategoria(producto.categoria) === categoriaSeleccionada
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

  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda, categoriaSeleccionada, orden]);

  const totalPaginas = Math.ceil(productosFiltrados.length / PRODUCTOS_POR_PAGINA);
  const indiceInicio = (paginaActual - 1) * PRODUCTOS_POR_PAGINA;
  const productosDeLaPagina = productosFiltrados.slice(
    indiceInicio,
    indiceInicio + PRODUCTOS_POR_PAGINA
  );

  function limpiarFiltros() {
    setBusqueda('');
    setCategoriaSeleccionada('todas');
    setOrden('');
  }

  return (
    <div className="categoria-productos">
      <h1 className="categoria-productos__titulo">
        {categoriaSeleccionada === 'todas' ? 'Todos los productos' : nombreCategoria.replace(/-/g, ' ')}
      </h1>

      <div className="categoria-productos__filtros">
        <input
          type="text"
          className="categoria-productos__input"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select
          className="categoria-productos__select"
          value={categoriaSeleccionada}
          onChange={(e) => setCategoriaSeleccionada(e.target.value)}
        >
          <option value="todas">Todas las categorías</option>
          {CATEGORIAS.map((cat) => (
            <option key={cat} value={normalizarCategoria(cat)}>
              {cat}
            </option>
          ))}
        </select>

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

        <button className="categoria-productos__boton-limpiar" onClick={limpiarFiltros}>
          Limpiar filtros
        </button>
      </div>

      <p className="categoria-productos__resultado">
        Se encontraron {productosFiltrados.length} productos
      </p>

      <div className="categoria-productos__grid">
        {productosDeLaPagina.map((producto) => (
          <CardProducto key={producto.id} producto={producto} />
        ))}
      </div>

      <div className="categoria-productos__paginacion">
        <button onClick={() => setPaginaActual((p) => p - 1)} disabled={paginaActual === 1}>
          Anterior
        </button>
        <span>
          Página {paginaActual} de {totalPaginas}
        </span>
        <button
          onClick={() => setPaginaActual((p) => p + 1)}
          disabled={paginaActual === totalPaginas}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default CategoriaProductos;