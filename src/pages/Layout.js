import { Outlet } from "react-router-dom";
import Header from './Header'
import Footer from "./Footer";

function Layout() {
  return (
    <>
      {/* header */}
      <Header />

      {/* body */}
      <Outlet />

      {/* footer */}
      <Footer />
    </>
  );
}

export default Layout;