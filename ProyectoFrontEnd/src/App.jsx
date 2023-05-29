
import NavBar from "./components/NavBar";
import Carrito from "./pages/Carrito";
import Contactanos from "./pages/Contactanos";
import Inicio from "./pages/Inicio";
import QuienesSomos from "./pages/QuienesSomos";
import Home from "./pages/Home.jsx";
import Carousel from "./components/Carousel"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <div className="">
      <Router>
        <NavBar></NavBar>
          <Carousel></Carousel>
          <Routes>
            <Route path={"/"} element={<Inicio />} />
            <Route path={"/QuienesSomos"} element={<QuienesSomos />} />
            <Route path={"/Contactanos"} element={<Contactanos />} />
            <Route path={"/Carrito"} element={<Carrito />} />
          </Routes>
        <Home></Home>
      </Router>
    </div>
  );
}

export default App;
