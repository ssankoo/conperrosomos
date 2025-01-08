import Link from 'next/link';
import React from 'react';

function Podcast() {
  return (
    <section id="podcast" className="bg-[#582770] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-8 overflow-hidden">
        Mira nuestro podcast!
        </h2>

        {/* Podcast Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Podcast Player */}
          <div className=" w-full">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/episode/5cAK2WUtsy76Lap26haEFa/video?utm_source=generator&theme=0&t=0"
              width="100%"
              height="351"
            ></iframe>
          </div>

          {/* Podcast Details */}
          <div className="text-center md:text-left">
            <p className="text-lg mb-6 leading-relaxed">
            Sumérgete en nuestro último episodio, en el que analizamos temas interesantes, compartimos conocimientos y te entretenemos con historias interesantes. ¡No te lo pierdas!
            </p>
            <Link
              href="https://open.spotify.com/show/your-podcast-link" // Replace with your podcast page link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-900 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Podcast;
