import { useState } from 'react'
import './App.css'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-3xl font-bold underline'>Hola mundo!</h1>
        <Home></Home>
      </div>
      
    </>
  )
}

export default App
