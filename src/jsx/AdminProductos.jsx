import { useState } from "react";
import productosIniciales from "../data/productos";
import useLocalStorage from "../hooks/useLocalStorage";
import FormularioProducto from "./FormularioProducto";
import ItemProducto from "./ItemProducto";
import ConfirmarEliminar from "./ConfirmarEliminar";
import "../css/AdminProductos.css";

function quitarAcentos(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

const REGEX_SOLO_LETRAS = /[^a-zA-ZÀ-ÖØ-öø-ÿñÑ\s]/g;

function soloLetras(texto) {
  return texto.replace(REGEX_SOLO_LETRAS, "").replace(/\s+/g, " ");
}

const CATEGORIAS = [
  "Entrenamiento",
  "Nutrición y Dietas",
  "Salud y Bienestar",
  "Suplementación",
];

function AdminProductos() {
  const [productos, setProductos] = useLocalStorage(
    "productos",
    productosIniciales,
  );
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [productoEditar, setProductoEditar] = useState(null);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  const [busqueda, setBusqueda] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("todas");
  const [orden, setOrden] = useState("");

  function abrirAlta() {
    setProductoEditar(null);
    setMostrarFormulario(true);
  }

  function abrirEdicion(producto) {
    setProductoEditar(producto);
    setMostrarFormulario(true);
  }

  function cerrarFormulario() {
    setMostrarFormulario(false);
    setProductoEditar(null);
  }

  function guardarProducto(productoFinal) {
    if (productoEditar) {
      setProductos(
        productos.map((p) => (p.id === productoFinal.id ? productoFinal : p)),
      );
    } else {
      setProductos([...productos, productoFinal]);
    }
    cerrarFormulario();
  }

  function pedirConfirmacionBorrado(id) {
    const producto = productos.find((p) => p.id === id);
    setProductoAEliminar(producto);
  }

  function confirmarEliminacion() {
    setProductos(productos.filter((p) => p.id !== productoAEliminar.id));
    setProductoAEliminar(null);
  }

  function limpiarFiltros() {
    setBusqueda("");
    setCategoriaFiltro("todas");
    setOrden("");
  }

  const terminoBusqueda = quitarAcentos(busqueda).trim();

  const productosFiltrados = productos
    .filter(
      (p) => categoriaFiltro === "todas" || p.categoria === categoriaFiltro,
    )
    .filter((p) => quitarAcentos(p.nombre).includes(terminoBusqueda))
    .sort((a, b) => {
      if (orden === "precio-asc") return a.precio - b.precio;
      if (orden === "precio-desc") return b.precio - a.precio;
      if (orden === "nombre-asc") return a.nombre.localeCompare(b.nombre);
      if (orden === "nombre-desc") return b.nombre.localeCompare(a.nombre);
      return 0;
    });

  const hayFiltroActivo =
    busqueda.trim() !== "" || categoriaFiltro !== "todas" || orden !== "";

  return (
    <div className="admin__contenido admin__contenido--fijo">
      <div className="admin__encabezado">
        <span className="antetitulo">Panel</span>
        <h1 className="admin__titulo">
          Gestión de <span className="texto-degradado">productos</span>
        </h1>
        <p className="admin__texto">
          {hayFiltroActivo
            ? `${productosFiltrados.length} de ${productos.length} productos`
            : `${productos.length} productos cargados`}
        </p>
      </div>

      <section className="admin__bloque admin__bloque--flexible">
        <div className="admin-productos__filtros">
          <div className="admin-productos__campo-buscar">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="admin-productos__campo-buscar-icono"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="admin-productos__input"
              placeholder="Buscar por nombre..."
              value={busqueda}
              onChange={(e) => setBusqueda(soloLetras(e.target.value))}
              onPaste={(e) => {
                e.preventDefault();
                const textoPegado = e.clipboardData.getData("text");
                setBusqueda((prev) => prev + soloLetras(textoPegado));
              }}
            />
          </div>

          <div className="admin-productos__campo-select">
            <select
              className="admin-productos__select"
              value={categoriaFiltro}
              onChange={(e) => setCategoriaFiltro(e.target.value)}
            >
              <option value="todas">Todas las categorías</option>
              {CATEGORIAS.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="admin-productos__campo-select">
            <select
              className="admin-productos__select"
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

          <button
            className="admin-productos__boton-limpiar"
            onClick={limpiarFiltros}
          >
            Limpiar filtros
          </button>
        </div>

        <div className="admin-productos__tabla-wrapper">
          <div className="admin-productos__tabla-header">
            <button
              className="admin-productos__boton-icono"
              onClick={abrirAlta}
              title="Agregar producto"
              aria-label="Agregar producto"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
              <span className="admin-productos__boton-icono-texto">
                Agregar producto
              </span>
            </button>
          </div>

          <table className="admin-productos__tabla">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productosFiltrados.map((producto) => (
                <ItemProducto
                  key={producto.id}
                  producto={producto}
                  onEditar={abrirEdicion}
                  onEliminar={pedirConfirmacionBorrado}
                />
              ))}
            </tbody>
          </table>

          {productosFiltrados.length === 0 && (
            <p className="admin-productos__vacio">
              No se encontraron productos con esos filtros.
            </p>
          )}
        </div>
      </section>

      {mostrarFormulario && (
        <FormularioProducto
          productoEditar={productoEditar}
          productosExistentes={productos}
          onGuardar={guardarProducto}
          onCancelar={cerrarFormulario}
        />
      )}

      {productoAEliminar && (
        <ConfirmarEliminar
          producto={productoAEliminar}
          onConfirmar={confirmarEliminacion}
          onCancelar={() => setProductoAEliminar(null)}
        />
      )}
    </div>
  );
}

export default AdminProductos;