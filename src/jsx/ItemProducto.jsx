function ItemProducto({ producto, onEditar, onEliminar }) {
  return (
    <tr className="item-producto">
      <td className="item-producto__imagen-celda">
        <img src={producto.imagen} alt={producto.nombre} className="item-producto__imagen" />
      </td>
      <td className="item-producto__nombre" data-label="Nombre">{producto.nombre}</td>
      <td className="item-producto__categoria" data-label="Categoría">{producto.categoria}</td>
      <td className="item-producto__precio" data-label="Precio">${producto.precio.toLocaleString('es-AR')}</td>
      <td className="item-producto__stock" data-label="Stock">{producto.stock}</td>
      <td className="item-producto__acciones">
        <button className="item-producto__editar" onClick={() => onEditar(producto)}>
          Editar
        </button>
        <button className="item-producto__eliminar" onClick={() => onEliminar(producto.id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default ItemProducto;