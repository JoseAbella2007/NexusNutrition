import { Outlet } from "react-router-dom";
import { useState } from "react"
import Menu from "./Menu";
import Footer from "./Footer";
import SideCarrito from "./SideCarrito";

export default function DisenoSitio() {

  const [carritoAbierto, setCarritoAbierto] = useState(false);

  return (
    <>
      <Menu setCarritoAbierto={setCarritoAbierto} />
      <Outlet />
      <Footer />
      <SideCarrito
        abierto={carritoAbierto}
        setAbierto={setCarritoAbierto}
      />
    </>
  );
}
