import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); // !false = true
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const classIcon = isSidebarOpen
    ? "fa-solid fa-xmark fa-xl"
    : "fa-solid fa-bars fa-xl";

  return (
    <nav className="z-50 fixed top-0 inset-x-0 bg-primary transition-all duration-300 ease-in-out">
      <div className="navbar">
        <div className="navbar-start max-sm:gap-x-2">
          <button
            tabIndex={0}
            className="btn btn-ghost w-10 text-white hover:bg-transparent lg:hidden"
            onClick={toggleSidebar}
          >
            <i className={classIcon}></i>
          </button>
          <Link
            className="first-letter:text-2xl first-letter:text-secondary font-semibold text-xl text-white lg:px-4 active:scale-90 transition-all"
            to="/"
            onClick={closeSidebar}
          >
            MeawBlog
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white font-medium text-lg px-1 focus:text-white">
            <li>
              <Link className="focus:text-white" to="/category">
                Category<i className="fa-regular fa-folder"></i>
              </Link>
            </li>
            <li>
              <Link className="focus:text-white" to="/write">
                Write<i className="fa-solid fa-pen-to-square"></i>
              </Link>
            </li>
            <li>
              <Link className="focus:text-white" to="/search">
                Search
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/"
            className="btn btn-ghost text-white sm:w-[6.5rem] sm:text-lg hover:bg-transparent"
          >
            Sign Up
          </Link>
          <Link
            to="/"
            className="btn btn-secondary btn-circle w-16 sm:w-24 sm:text-lg"
          >
            Sign In
          </Link>
        </div>
      </div>
      {isSidebarOpen ? (
        <ul className="menu text-white text-lg h-screen lg:hidden">
          <li onClick={closeSidebar}>
            <Link to="/category">
              Category<i className="fa-regular fa-folder"></i>
            </Link>
          </li>
          <li onClick={closeSidebar}>
            <Link to="/write">
              Write<i className="fa-solid fa-pen-to-square"></i>
            </Link>
          </li>
          <li onClick={closeSidebar}>
            <Link to="search">
              Search
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}

export default Navbar;
