import { Outlet } from "react-router-dom";
import { useState } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import SideCarrito from "./SideCarrito";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function DisenoSitio() {
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [carrito, setCarrito] = useLocalStorage("carrito", []);
  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      const productoExistente = carritoActual.find(
        (item) => item.id === producto.id
      );
      if (productoExistente) {
        return carritoActual.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [
        ...carritoActual,
        {
          ...producto,
          cantidad: 1,
        },
      ];
    });
    setCarritoAbierto(true);
  };
  return (
    <>
      <Menu
        setCarritoAbierto={setCarritoAbierto}
        carrito={carrito}
      />
      <Outlet
        context={{
          agregarAlCarrito,
        }}
      />
      <Footer />
      <SideCarrito
        abierto={carritoAbierto}
        setAbierto={setCarritoAbierto}
        carrito={carrito}
      />
    </>
  );
}