import './App.css'
import Home from './pages/home'
=======
import Carousel from "./components/Carousel"

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png", 
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

function App() {
  

  return (
    <>
      <div>
        <h1 className='text-3xl font-bold underline'>Hola mundo!</h1>
        <Home></Home>
=======
        <h1 className='font-bold underline text-red-700'>Hola mundo!</h1>
      </div>
      <div className= "max-w-lg">
      <Carousel>
        {slides.map ((s) => (
          <img src={s} alt="Images" />
        ))}
      </Carousel>
      </div>
      
    </>
  )
}

export default App
