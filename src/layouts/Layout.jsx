import { Outlet } from "react-router-dom";
import ThemeController from "../components/Theme/ThemeController";
import Navbar from "../components/Navbar/Navbar";
import ScrollToTop from "../components/ToTop/ScrollToTop";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <ThemeController />
    </>
  );
}

export default Layout;
