import { Outlet, useLocation } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

export default function DisenoSitio() {
  const { pathname } = useLocation();
  const esAdmin = pathname.startsWith("/admin");

  return (
    <>
      <Menu />
      <Outlet />
      {!esAdmin && <Footer />}
    </>
  );
}
