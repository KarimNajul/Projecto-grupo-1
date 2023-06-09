export default function Footer ()  {

    return (
        <div className="bg-gray-400">
            <div className="lg:grid lg:grid-cols-4 lg:mx-auto">

                <div className='m-5 italic text-center lg:text-left'>
                    <p className="font-bold text-lg">Diseños exclusivos</p>
                </div>
                
                <div className='m-5 italic text-center lg:text-left'>
                    <p className="font-bold text-lg">Categorías</p>
                    <p className="text-sm mt-4">Productos</p>
                    <p className="text-sm mt-1">Promociones</p>
                    <p className="text-sm mt-1">Nuevos Lanzamientos</p>
                </div>

                <div className='m-5 italic text-center lg:text-left'>
                    <p className="font-bold text-lg">Más info</p>
                    <p className="text-sm mt-4">Compra</p>
                    <p className="text-sm mt-1">Formas de entrega</p>
                    <p className="text-sm mt-1">Posventa</p>
                </div>

                <div className='m-5 italic text-center lg:text-left'> 
                    <p className="font-bold text-lg"> Contactanos</p>
                    <p className="text-sm mt-4 flex justify-center lg:justify-start"><img src= "./image/logo_whatsapp.svg" alt="whatsapp" className='w-5 h-5' />  <span className='ml-2'>11 4444 5555</span></p>
                    <p className="text-sm mt-2 flex justify-center lg:justify-start"><img src= "./image/telefono.svg" alt="telefono" className='w-5 h-5' />  <span className='ml-2'>11 8888 9999</span></p>
                    <p className="text-sm mt-2 flex justify-center lg:justify-start"><img src= "./image/Ubicacion.svg" alt="ubicacion" className='w-6 h-6' />  <span className='ml-2'>Local Belgrano: Amenábar 1991 - CABA - Bs As - Argentina.</span></p>
                    <p className="text-sm mt-2 flex justify-center lg:justify-start"><img src= "./image/Ubicacion.svg" alt="ubicacion" className='w-6 h-6' />  <span className='ml-2'>Local San Justo: Av. J. D. Perón 1098 - Villa Luzuriaga - Bs As -
        Argentina.</span></p>
                </div>
            </div>

            <div>
                <div className='m-5 italic text-center lg:text-left flex justify-center'>
                    <p className="font-bold lg:text-lg">Medios de pago</p>
                    <img src= "./image/tarjetas.png" className='ml-4' style={{width: '250px'}} alt="tarjetas" />
                </div>
            </div>
        </div>
    )
}