import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import Contactanos from "./pages/Contactanos";
import Inicio from "./pages/Inicio";
import QuienesSomos from "./pages/QuienesSomos";
import Productos from "./pages/Productos.jsx";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useContext, useState } from "react";
import CartContext from "./context/CartContext";
import { FaShoppingCart } from "react-icons/fa";


const App = () => {
  const { cart, isShowing, setIsShowing } = useContext(CartContext);

  const [nothingInCart, setIsNothingInCart] = useState(false);

  const handleNothingInCart = () => {
    setIsNothingInCart((nothingInCart) => !nothingInCart);
    setTimeout(() => {
      setIsNothingInCart((nothingInCart) => !nothingInCart);
    }, 1000);
    clearTimeout(handleNothingInCart);
  };

  return (
    <div className="">
      <Router>
        <NavBar />
        <div className="bg-gray-800">
          <div>
            <FaShoppingCart
              className="h-[1.75rem] w-[1.75rem] absolute top-[1.3rem] right-[5.5rem] md:right-[4.8rem] z-30 text-white cursor-pointer"
              onClick={() => {
                setIsShowing((isShowing) => !isShowing);
                handleNothingInCart();
              }}
            />

            {cart.length > 0 ? (
              <div
                className="h-[1.5rem] w-[1.5rem] absolute top-[0.7rem] right-[5.5rem] md:right-[3.9rem] z-30 
            font-bold text-white text-center bg-red-500 rounded-full cursor-pointer"
              >
                {cart.length}
              </div>
            ) : null}

            {isShowing && cart.length > 0 ? (
              <Cart
                handleNothingInCart={handleNothingInCart}
                className="animate-spin"
              />
            ) : nothingInCart ? (
              <div className="relative">
                <div
                  className="absolute w-[13rem] h-[8rem] md:w-[15rem] md:h-[9rem] lg:w-[20rem] 
                lg:h-[11rem] bg-zinc-800 mx-auto top-[10rem] left-1/2 transform -translate-x-1/2 
                z-30 rounded-md border-[2px] border-first_color text-white italic font-bold text-[1.3rem] 
                md:text-[1.7rem] lg:text-[2.1rem] grid place-items-center"
                >
                  Carrito vacio!
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <Routes>
          <Route path={"/"} element={<Inicio />} />
          <Route path={"/QuienesSomos"} element={<QuienesSomos />} />
          <Route path={"/Contactanos"} element={<Contactanos />} />
          <Route path={"/Productos"} element={<Productos />} />
          <Route path={"/Cart"} element={<Cart />} />
        </Routes>
      </Router>
      
      <Footer />
    </div>
  );
};

export default App;
