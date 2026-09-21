import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import SideCarrito from "./SideCarrito";
import useLocalStorage from "../../hooks/useLocalStorage";
import SideWishlist from "./SideWishlist";

export default function DisenoSitio() {
  const { pathname } = useLocation();
  const esAdmin = pathname.startsWith("/admin");

  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [carrito, setCarrito] = useLocalStorage("carrito", []);

  const agregarAlCarrito = (producto, cantidad = 1) => {
    setCarrito((carritoActual) => {
      const productoExistente = carritoActual.find(
        (item) => item.id === producto.id
      );
      if (productoExistente) {
        return carritoActual.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }
      return [
        ...carritoActual,
        { ...producto, cantidad },
      ];
    });
  };

  const [wishlistAbierta, setWishlistAbierta] = useState(false);
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);

  const alternarWishlist = (producto) => {
    setWishlist((actual) =>
      actual.some((item) => item.id === producto.id)
        ? actual.filter((item) => item.id !== producto.id)
        : [...actual, producto]
    );
  };

  const eliminarDeWishlist = (id) => {
    setWishlist((actual) => actual.filter((item) => item.id !== id));
  };

  const pasarFavoritosAlCarrito = () => {
    setCarrito((actual) => {
      const nuevos = wishlist
        .filter((favorito) => !actual.some((item) => item.id === favorito.id))
        .map((favorito) => ({ ...favorito, cantidad: 1 }));
      return [...actual, ...nuevos];
    });
    setWishlistAbierta(false);
    setCarritoAbierto(true);
  };

  return (
    <>
      <Menu
        setCarritoAbierto={setCarritoAbierto}
        carrito={carrito}
        setWishlistAbierta={setWishlistAbierta} wishlist={wishlist}
      />
      <Outlet
        context={{
          agregarAlCarrito,
          wishlist,
          alternarWishlist,
          carrito,
        }}
      />
      {!esAdmin && <Footer />}
      <SideCarrito
        abierto={carritoAbierto}
        setAbierto={setCarritoAbierto}
        carrito={carrito}
        setCarrito={setCarrito}
        />
      <SideWishlist
        abierta={wishlistAbierta}
        setAbierta={setWishlistAbierta}
        wishlist={wishlist}
        eliminarDeWishlist={eliminarDeWishlist}
        pasarFavoritosAlCarrito={pasarFavoritosAlCarrito}
        />
    </>
  );
}