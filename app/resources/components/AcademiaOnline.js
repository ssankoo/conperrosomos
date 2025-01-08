'use client'; // For client-side rendering

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import perroTriangulo from '../imgs/perro-triangulo.png'

function Courses() {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push('/online-academy'); // Update this path as needed
  };

  return (
    <section id="courses" className="bg-[#F24B04] py-16">
      <div className="container mx-auto px-4">
        {/* Section Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-4 overflow-hidden">
              ¿Estás interesado en aprender más sobre nuestros amigos de 4 patas?
            </h2>
            <p className="text-lg text-white mb-6">
              Fórmate con nuestros cursos y descubre todo lo que necesitas saber para cuidar, entender y amar aún más a tus compañeros peludos.
            </p>
            <button
              onClick={handleLearnMoreClick}
              className="bg-purple-900 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
            >
              Learn More
            </button>
          </div>

          {/* Image */}
          <div>
            <Image
              src= {perroTriangulo}
              alt="Dog and courses"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
