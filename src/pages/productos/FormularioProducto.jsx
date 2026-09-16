import { useState, useEffect } from 'react';
import './FormularioProducto.css';

const CATEGORIAS = ['Entrenamiento', 'Nutrición y Dietas', 'Salud y Bienestar', 'Suplementación'];

function quitarAcentos(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function FormularioProducto({ productoEditar, productosExistentes, onGuardar, onCancelar }) {
  const [datos, setDatos] = useState({
    nombre: '',
    precio: '',
    categoria: '',
    imagen: '',
    descripcion: '',
    stock: '',
  });
  const [errores, setErrores] = useState({});

  useEffect(() => {
    if (productoEditar) {
      setDatos({
        nombre: productoEditar.nombre,
        precio: productoEditar.precio,
        categoria: productoEditar.categoria,
        imagen: productoEditar.imagen,
        descripcion: productoEditar.descripcion,
        stock: productoEditar.stock,
      });
    }
  }, [productoEditar]);

  function actualizarCampo(campo, valor) {
    setDatos((prev) => ({ ...prev, [campo]: valor }));
    // Apenas el usuario toca un campo con error, se lo sacamos de encima:
    // no hace falta esperar al próximo submit para que desaparezca el cartel.
    if (errores[campo]) {
      setErrores((prev) => ({ ...prev, [campo]: undefined }));
    }
  }

  function validar() {
    const nuevosErrores = {};

    if (!datos.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    } else {
      // "Código único": no puede haber dos productos con el mismo nombre
      // (sin distinguir mayúsculas/tildes), salvo que sea el mismo que
      // se está editando.
      const nombreNormalizado = quitarAcentos(datos.nombre.trim());
      const yaExiste = productosExistentes.some(
        (p) =>
          quitarAcentos(p.nombre.trim()) === nombreNormalizado &&
          p.id !== productoEditar?.id
      );
      if (yaExiste) {
        nuevosErrores.nombre = 'Ya existe un producto con ese nombre.';
      }
    }

    const precioNum = Number(datos.precio);
    if (datos.precio === '' || Number.isNaN(precioNum) || precioNum <= 0) {
      nuevosErrores.precio = 'El precio debe ser un número mayor a 0.';
    }

    if (!datos.categoria) {
      nuevosErrores.categoria = 'Elegí una categoría.';
    }
    if (!datos.imagen.trim()) {
      nuevosErrores.imagen = 'La imagen es obligatoria.';
    }
    if (!datos.descripcion.trim()) {
      nuevosErrores.descripcion = 'La descripción es obligatoria.';
    }

    const stockNum = Number(datos.stock);
    if (datos.stock === '' || Number.isNaN(stockNum) || stockNum < 0 || !Number.isInteger(stockNum)) {
      nuevosErrores.stock = 'El stock debe ser un número entero, 0 o más.';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  }

  function generarIdUnico() {
    let nuevoId = crypto.randomUUID();
    while (productosExistentes.some((p) => p.id === nuevoId)) {
      nuevoId = crypto.randomUUID();
    }
    return nuevoId;
  }

  function manejarSubmit(e) {
    e.preventDefault();

    if (!validar()) {
      return;
    }

    const productoFinal = {
      id: productoEditar ? productoEditar.id : generarIdUnico(),
      nombre: datos.nombre.trim(),
      precio: Number(datos.precio),
      categoria: datos.categoria,
      imagen: datos.imagen.trim(),
      descripcion: datos.descripcion.trim(),
      stock: Number(datos.stock),
    };

    onGuardar(productoFinal);
  }

  return (
    <div className="formulario-overlay">
      <form className="formulario-producto" onSubmit={manejarSubmit}>
        <h2 className="formulario-producto__titulo">
          {productoEditar ? 'Editar producto' : 'Agregar producto'}
        </h2>

        <div className="formulario-producto__campo">
          <label>Nombre *</label>
          <input
            type="text"
            value={datos.nombre}
            onChange={(e) => actualizarCampo('nombre', e.target.value)}
          />
          {errores.nombre && <span className="formulario-producto__error">{errores.nombre}</span>}
        </div>

        <div className="formulario-producto__fila">
          <div className="formulario-producto__campo">
            <label>Precio *</label>
            <input
              type="number"
              min="0"
              value={datos.precio}
              onChange={(e) => actualizarCampo('precio', e.target.value)}
            />
            {errores.precio && <span className="formulario-producto__error">{errores.precio}</span>}
          </div>

          <div className="formulario-producto__campo">
            <label>Stock *</label>
            <input
              type="number"
              min="0"
              step="1"
              value={datos.stock}
              onChange={(e) => actualizarCampo('stock', e.target.value)}
            />
            {errores.stock && <span className="formulario-producto__error">{errores.stock}</span>}
          </div>
        </div>

        <div className="formulario-producto__campo">
          <label>Categoría *</label>
          <select
            value={datos.categoria}
            onChange={(e) => actualizarCampo('categoria', e.target.value)}
          >
            <option value="">Seleccionar categoría...</option>
            {CATEGORIAS.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errores.categoria && (
            <span className="formulario-producto__error">{errores.categoria}</span>
          )}
        </div>

        <div className="formulario-producto__campo">
          <label>Imagen (URL) *</label>
          <input
            type="text"
            placeholder="https://..."
            value={datos.imagen}
            onChange={(e) => actualizarCampo('imagen', e.target.value)}
          />
          {errores.imagen && <span className="formulario-producto__error">{errores.imagen}</span>}
        </div>

        <div className="formulario-producto__campo">
          <label>Descripción *</label>
          <textarea
            rows="3"
            value={datos.descripcion}
            onChange={(e) => actualizarCampo('descripcion', e.target.value)}
          />
          {errores.descripcion && (
            <span className="formulario-producto__error">{errores.descripcion}</span>
          )}
        </div>

        <div className="formulario-producto__acciones">
          <button type="button" className="formulario-producto__cancelar" onClick={onCancelar}>
            Cancelar
          </button>
          <button type="submit" className="formulario-producto__guardar">
            {productoEditar ? 'Guardar cambios' : 'Agregar producto'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioProducto;