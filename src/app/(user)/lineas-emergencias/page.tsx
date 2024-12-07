import React from 'react';
import Image from 'next/image';

const EmergencyLinesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-10">
      <header className="mx-auto max-w-6xl  bg-mainc text-white flex items-center justify-between p-6">
        <h1 className="text-2xl md:text-4xl font-semibold">LÍNEAS DE EMERGENCIAS</h1>
        <Image
          className="h-auto rounded-full"
          src={'/images/lineas/phone247.jpg'}
          width={150}
          height={150}
          alt="Teléfono 25 horas"
        />
      </header>

      <section className="max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            name: 'OAGRD',
            phone: '317 5030465',
            logo: '/oagrd-logo.png',
            alt: 'OAGRD',
          },
          {
            name: 'Policía Nacional',
            phone: '123',
            logo: '/images/lineas/policia.png',
            alt: 'Policía Nacional',
          },
          {
            name: 'Bomberos',
            phone: '119',
            logo: '/images/lineas/bomberos.jpg',
            alt: 'Bomberos',
          },
          {
            name: 'Cruz Roja',
            phone: '132',
            logo: '/images/lineas/cruz-roja.png',
            alt: 'Cruz Roja',
          },
          {
            name: 'Surtigas',
            phone: '164',
            logo: '/images/lineas/surtigas.png',
            alt: 'Surtigas',
          },
          {
            name: 'Afinia',
            phone: '115',
            logo: '/images/lineas/afinia.webp',
            alt: 'Afinia',
          },
          {
            name: 'Aguas',
            phone: '116',
            logo: '/images/lineas/aguas.png',
            alt: 'Aguas',
          },
          {
            name: 'Defensa Civil',
            phone: '144',
            logo: '/images/lineas/defensa.png',
            alt: 'Defensa Civil',
          },
          {
            name: 'Crued',
            phone: '125',
            logo: '/images/lineas/crued.png',
            alt: 'Crued',
          },
        ].map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => window.location.href = `tel:${service.phone}`}
          >
            <Image
              className="h-24 w-24 object-contain mb-4"
              src={service.logo}
              width={100}
              height={100}
              alt={service.alt}
            />
            <h2 className="text-lg font-semibold text-mainc mb-2">{service.name}</h2>
            <a
              href={`tel:${service.phone}`}
              className="text-xl font-bold text-mainc hover:text-gray-700 transition-colors duration-200"
            >
              {service.phone}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default EmergencyLinesPage;
