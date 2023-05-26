import {Route, Routes} from 'react-router-dom'
import './App.css'

import Carousel from "./components/Carousel";
import NavBar from './components/NavBar';
import Carrito from './components/Pages/Carrito';
import Contactanos from './components/Pages/Contactanos';
import Inicio from './components/Pages/Inicio';
import Productos from './components/Pages/Productos';
import QuienesSomos from './components/Pages/QuienesSomos';


import Home from './pages/home'
import Carousel from "./components/Carousel"


const slides = [
  "https://i.ibb.co/ncrXc2V/1.png", 
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

function App() {
  return(
  
  <div className="">
    <NavBar/>
    <Routes>
      <Route path={"/"} element={<Inicio/>} />
      <Route path={"/QuienesSomos"} element={<QuienesSomos/>} />
      <Route path={"/Productos"} element={<Productos/>} />
      <Route path={"/Contactanos"} element={<Contactanos/>} />
      <Route path={"/Carrito"} element={<Carrito/>} />
    </Routes>


  </div>
  

  )




}
  

  /*return (
    <>
      <div className='bg-orange-300'>
        <h1 className='text-3xl font-bold underline'>Hola mundo!</h1>
        <Home></Home>
        <h1 className='font-bold underline text-red-700'>Hola mundo!</h1>
      </div>
      <div className= "max-w-lg">
      <Carousel>
        {slides.map (s => {
          <img src={s} alt="Images" />
        })}
      </Carousel>
      </div>
      
    </>
  )
}
*/
export default App
