import { Outlet } from "react-router-dom";
import { useState } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import SideWishlist from "./SideWishlist";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function DisenoSitio() {
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

  return (
    <>
      <Menu setWishlistAbierta={setWishlistAbierta} wishlist={wishlist} />
      <Outlet
        context={{
          wishlist,
          alternarWishlist,
        }}
      />
      <Footer />
      <SideWishlist
        abierta={wishlistAbierta}
        setAbierta={setWishlistAbierta}
        wishlist={wishlist}
        eliminarDeWishlist={eliminarDeWishlist}
      />
    </>
  );
}
