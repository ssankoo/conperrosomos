
import React from 'react'
import Image from 'next/image'
import PerrosImage from '../imgs/grupo-perros.png'

export default function Sobremi() {
  return (
    <section className="bg-[#F24B04] min-h-screen flex items-center" id="sobre-mi">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white overflow-hidden">
              Sobre nosotros
            </h2>
            
            <div className="text-white text-lg leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed quis eros at lacus feugiat hendrerit sed ut tortor. 
                Suspendisse et magna quis elit efficitur consequat. Mauris 
                eleifend velit a pretium iaculis.
              </p>
              
              <p className="mt-4">
                Donec sagittis velit et magna euismod, vel aliquet nulla
                malesuada. Nunc pharetra massa lectus, a fermentum arcu 
                volutpat vel.
              </p>
            </div>
          </div>

          {/* Image Container */}
          <div className=" h-[600px] w-full">
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