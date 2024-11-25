import React from 'react'
import Image from 'next/image'
import perro from '../perroDefault.jpg'
import styles from './styles/Sobremi.css'

export default function Sobremi() {
  return (
    <section class="bg-[#F24B04] h-screen flex items-center" id="sobre-mi">
    <div class="container mx-auto py-16 px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
                <h2 class="text-3xl font-extrabold text-white ">Sobre mi</h2>
                <p class="mt-4 text-white text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                    eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                    Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                    malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
            </div>
            <div class="mt-12 md:mt-0">
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>
  )
}

