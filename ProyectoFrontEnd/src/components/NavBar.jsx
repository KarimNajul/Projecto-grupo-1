import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <nav className="bg-gray-400 py-6 relative">
      <div className="container mx-auto flex px-8 ">
        <div className="flex flex-grow">
          <a href="" className="text-black italic text-3xl">
            <ion-icon name="logo-medium"></ion-icon>
            MundoMueble
          </a>
        </div>

        <div className="text-xl flex lg:hidden">
          <button onClick={toggleOpen}>
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </div>
        <div className={`${open ? "block" : ""}`}>
          <div
            className={`${
              open ? "inline" : "hidden"
            } flex-grow justify-between absolute lg:relative lg:top-0 top-20 left-0 bg-gray-400 w-full lg:w-auto items-center py-14 lg:py-0 lg:inline z-10 `}
          >
            <div className="flex flex-col lg:flex-row text-center">
              <Link to="/" className="text-white italic lg:mr-7 mb-8 lg:mb-0">
                Inicio
              </Link>
              <Link
                to="/Quienessomos"
                className="text-white italic lg:mr-7 mb-8 lg:mb-0"
              >
                Quienes Somos
              </Link>
              <Link
                to="/Productos"
                className="text-white italic lg:mr-7 mb-8 lg:mb-0"
              >
                Productos
              </Link>
              <Link
                to="/Contactanos"
                className="text-white italic lg:mr-7 mb-8 lg:mb-0"
              >
                Contactanos
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Link to="/Cart" className="text-white italic lg:mr-7 mb-8 lg:mb-0">
            Carrito
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
