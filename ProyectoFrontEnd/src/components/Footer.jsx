import whatsapp from '../../public/image/logo_whatsapp.svg';
import telefono from '../../public/image/telefono.svg';
import ubicacion from '../../public/image/Ubicacion.svg';
import tarjeta from '../../public/image/tarjetas.png';

export default function Footer ()  {

    return (
        <div className="bg-gray-700">
            <div className="lg:grid lg:grid-cols-4 lg:mx-auto">

                <div className='m-5 text-center lg:text-left'>
                    <p className="font-bold text-lg">Diseños exclusivos</p>
                </div>
                
                <div className='m-5 text-center lg:text-left'>
                    <p className="font-bold text-lg">Categorías</p>
                    <p className="text-sm mt-4">Productos</p>
                    <p className="text-sm mt-1">Promociones</p>
                    <p className="text-sm mt-1">Nuevos Lanzamientos</p>
                </div>

                <div className='m-5 text-center lg:text-left'>
                    <p className="font-bold text-lg">Más info</p>
                    <p className="text-sm mt-4">Compra</p>
                    <p className="text-sm mt-1">Formas de entrega</p>
                    <p className="text-sm mt-1">Posventa</p>
                </div>

                <div className='m-5 text-center lg:text-left'> 
                    <p className="font-bold text-lg"> Contactanos</p>
                    <p className="text-sm mt-4 flex justify-center lg:justify-start"><img src={whatsapp} alt="whatsapp" className='w-5 h-5' />  <span className='ml-2'>261-047-3489</span></p>
                    <p className="text-sm mt-2 flex justify-center lg:justify-start"><img src={telefono} alt="telefono" className='w-5 h-5' />  <span className='ml-2'>261-475-5869</span></p>
                    <p className="text-sm mt-2 flex justify-center lg:justify-start"><img src={ubicacion} alt="ubicacion" className='w-6 h-6' />  <span className='ml-2'>Direccion 23154</span></p>
                </div>
            </div>

            <div>
                <div className='m-5 text-center lg:text-left flex justify-center'>
                    <p className="font-bold lg:text-lg">Medios de pago</p>
                    <img src={tarjeta} className='ml-4' style={{width: '250px'}} alt="tarjetas" />
                </div>
            </div>
        </div>
    )
}