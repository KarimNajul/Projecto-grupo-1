import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Carrito from "./pages/Carrito";
import Contactanos from "./pages/Contactanos";
import Inicio from "./pages/Inicio";
import QuienesSomos from "./pages/QuienesSomos";
import Home from "./pages/Home.jsx";

/*import Carousel from "./components/Carousel"

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];
*/
function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Inicio />} />
        <Route path={"/QuienesSomos"} element={<QuienesSomos />} />
        <Route path={"/Contactanos"} element={<Contactanos />} />
        <Route path={"/Carrito"} element={<Carrito />} />
      </Routes>
      <Home></Home>
    </div>
  );
}

export default App;
