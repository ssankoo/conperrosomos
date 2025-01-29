
import React from 'react'
import Image from 'next/image'
import PerrosImage from '../imgs/mer kim canil.jpg'

export default function Sobremi() {
  return (
    <section className="bg-[#F24B04] min-h-screen flex items-center" id="sobre-nosotros">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white overflow-hidden mt-4">
              Un poco sobre mi
            </h2>
            
            <div className="text-white text-lg leading-relaxed">
              <p className=''>
              <a className='text-[#582770] text-[30px]'>Mercedes Iacoviello</a>
              </p>
              <p>
              Especialista en Servicios Asistidos por Animales 
              </p>
              <p>
              Profesor y consultor en gestión pública.  
              </p>
              
              <p className="mt-4 mb-4">
              Nací y crecí en <a className='text-[#582770]'>Buenos Aires, Argentina.</a> Lidero el Proyecto Salta Violeta desde que lo fundamos junto con mi hermana Virginia Iacoviello. Desde allí brindamos  servicios educativos asistidos por perros a escuelas y otras instituciones comunitarias desde 2003, principalmente en cuidado responsable de animales, prevención de mordeduras y bienestar animal.

              </p>
              <button className='bg-purple-900 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition duration-300' >Más info</button>
            </div>
          </div>

          {/* Image Container */}
          <div className=" w-full">
            <Image
              src={PerrosImage}
              alt="Modern office space"
              
              className="object-cover object-center rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}