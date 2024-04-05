import { Outlet } from "react-router-dom";
import ThemeController from "../components/Theme/ThemeController";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ThemeController />
    </>
  );
}

export default Layout;
