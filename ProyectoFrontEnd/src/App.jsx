
import NavBar from "./components/NavBar";
import Carrito from "./pages/Carrito";
import Contactanos from "./pages/Contactanos";
import Inicio from "./pages/Inicio";
import QuienesSomos from "./pages/QuienesSomos";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Carousel from "./components/Carousel"

function App() {
  return (
    <div className="">
      <Router>
        <NavBar></NavBar>
          <Routes>
            <Route path={"/"} element={<Inicio />} />
            <Route path={"/QuienesSomos"} element={<QuienesSomos />} />
            <Route path={"/Contactanos"} element={<Contactanos />} />
            <Route path={"/Carrito"} element={<Carrito />} />
          </Routes>
        <Carousel></Carousel>
        <Home></Home>
      </Router>
    </div>
  );
}

export default App;
