'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { FaFacebook, FaInstagramSquare, FaPhone, FaYoutube, FaTiktok } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Iconos de flecha

const Navbar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const [showSubmenu, setShowSubmenu] = useState(false); // Controla el estado del submenú
  const submenuRef = useRef(null); // Referencia para el submenú
  const menuRef = useRef(null); // Referencia para el contenedor del menú

  // Función para manejar el click en los enlaces
  const handleClick = (link: string, isParent: boolean) => {
    setActiveLink(link); // Activa el enlace
    if (!isParent) {
      setShowSubmenu(false); // Cierra el submenú cuando se hace clic en un enlace hijo
    }
  };

  return (
    <header className="z-[100] flex flex-col items-center justify-between">
      {/* Redes Sociales */}
      <div className="bg-mainc h-12 w-full flex flex-row gap-4">
        <div className="w-full flex justify-around items-center">
          <Image className="" src="/images/gov.png" width={150} height={2} alt="gov Logo" />
          <div className="flex flex-row items-center justify-center p-10 gap-6">
            <a target='_blank' href="https://www.facebook.com/gestiondelriesgoctg">
              <FaFacebook size={20} className="hover:scale-125 transition duration-500 cursor-pointer text-white" />
            </a>
            <a target='_blank' href="https://x.com/oagrdcartagena">
              <BsTwitterX size={20} className="hover:scale-125 transition duration-500 cursor-pointer text-white" />
            </a>
            <Link target='_blank' href="https://www.instagram.com/gestiondelriesgoctg">
              <FaInstagramSquare size={20} className="hover:scale-125 transition duration-500 cursor-pointer text-white" />
            </Link>
            <Link target='_blank' href="https://www.tiktok.com/@gestiondelriesgoctg">
              <FaTiktok size={20} className="hover:scale-125 transition duration-500 cursor-pointer text-white" />
            </Link>
            <Link target='_blank' href="tel:3175030465">
              <FaPhone size={20} className="hover:scale-125 transition duration-500 cursor-pointer text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Menú Principal */}
      <nav className="h-22 w-full z-[1000] border-b border-gray-200">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-1">
          <a href="/" className="flex items-center space-x-3">
            <Image src="/oagrd-logo.png" width={104} height={30} className="hidden md:block h-24" alt="oagrd Logo" />
          </a>
          <div className="items-center hidden w-full md:flex md:w-auto">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 text-xl border-gray-100 rounded-lg md:space-x-10 md:flex-row md:mt-0">
              {/* <li>
                <a
                  href="/"
                  onClick={() => handleClick('/', true)}
                  className={`block py-2 px-3 hover:underline rounded ${
                    activeLink === '/' ? 'font-bold' : ''
                  }`}
                >
                  Inicio
                </a>
              </li> */}
              <li>
                <a
                  href="/"
                  onClick={() => handleClick('/sat', true)}
                  className={`block py-2 px-3 hover:underline rounded ${
                    activeLink === '/sat' ? 'font-bold' : ''
                  }`}
                >
                  SAT
                </a>
              </li>
              <li
                ref={menuRef}
                className="relative"
              >
                <button
                  onClick={() => setShowSubmenu(!showSubmenu)} // Cierra o abre el submenú al hacer clic
                  className={`block py-2 px-3 hover:underline rounded ${
                    activeLink.includes('/herramientas-del-sat') ? 'font-bold' : 'text-black'
                  }`}
                >
                  Herramientas del SAT
                  {/* Icono de flecha que cambia de dirección */}
                  {showSubmenu ? (
                    <FaChevronUp className="inline ml-2" />
                  ) : (
                    <FaChevronDown className="inline ml-2" />
                  )}
                </button>
                {showSubmenu && (
                  <div
                    ref={submenuRef}
                    className="absolute left-0 top-full mt-2 w-80 bg-white shadow-lg rounded-md overflow-hidden z-50"
                  >
                    <ul>
                      <li>
                        <Link
                          href="/herramientas-del-sat/aplicacion-movil"
                          onClick={() => handleClick('/herramientas-del-sat/aplicacion-movil', false)}
                          className={`block px-4 text-lg py-2 text-gray-700 hover:bg-gray-100 ${
                            activeLink === '/herramientas-del-sat/aplicacion-movil' ? 'font-bold' : ''
                          }`}
                        >
                          Aplicación Móvil
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/herramientas-del-sat/sensores"
                          onClick={() => handleClick('/herramientas-del-sat/sensores', false)}
                          className={`block px-4 text-lg py-2 text-gray-700 hover:bg-gray-100 ${
                            activeLink === '/herramientas-del-sat/sensores' ? 'font-bold' : ''
                          }`}
                        >
                          Sensores
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/herramientas-del-sat/combas"
                          onClick={() => handleClick('/herramientas-del-sat/combas', false)}
                          className={`block px-4 text-lg py-2 text-gray-700 hover:bg-gray-100 ${
                            activeLink === '/herramientas-del-sat/combas' ? 'font-bold' : ''
                          }`}
                        >
                          Combas
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/herramientas-del-sat/boletines"
                          onClick={() => handleClick('/herramientas-del-sat/boletines', false)}
                          className={`block px-4 text-lg py-2 text-gray-700 hover:bg-gray-100 ${
                            activeLink === '/herramientas-del-sat/boletines' ? 'font-bold' : ''
                          }`}
                        >
                          Boletines y Pronosticos
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <a
                  href="/quienes-somos"
                  onClick={() => handleClick('/quienes-somos', true)}
                  className={`block py-2 px-3 hover:underline rounded ${
                    activeLink === '/quienes-somos' ? 'font-bold' : ''
                  }`}
                >
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a
                target='_blank'
                  href="https://www.cartagena.gov.co/Atencion-y-Servicio-a-la-Ciudadania/PQRSDF"
                  onClick={() => handleClick('/PQRS', true)}
                  className={`block py-2 px-3 hover:underline rounded ${
                    activeLink === '/PQRS' ? 'font-bold' : ''
                  }`}
                >
                  PQRS
                </a>
              </li>
              <li>
                <a
                  href="/contactanos"
                  onClick={() => handleClick('/contactanos', true)}
                  className={`block py-2 px-3 hover:underline rounded ${
                    activeLink === '/contactanos' ? 'font-bold' : ''
                  }`}
                >
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
