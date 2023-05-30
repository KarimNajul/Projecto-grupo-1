import NavBar from "./components/NavBar";
import Carrito from "./pages/Carrito";
import Contactanos from "./pages/Contactanos";
import Inicio from "./pages/Inicio";
import QuienesSomos from "./pages/QuienesSomos";
import Productos from "./pages/Productos.jsx";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="">
      <Router>
        <NavBar />
        <Carousel />
        <Routes>
          <Route path={"/"} element={<Inicio />} />
          <Route path={"/QuienesSomos"} element={<QuienesSomos />} />
          <Route path={"/Contactanos"} element={<Contactanos />} />
          <Route path={"/Productos"} element={<Productos />} />
          <Route path={"/Carrito"} element={<Carrito />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
