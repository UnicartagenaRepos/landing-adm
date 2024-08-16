'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MenuIcon } from 'lucide-react'
import { usePathname } from 'next/navigation';
import { FaFacebook, FaInstagramSquare, FaPhone, FaYoutube } from 'react-icons/fa'
import { BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { FaTiktok } from "react-icons/fa";


type Props = {}

const Navbar = (props: Props) => {
  const pathname = usePathname();
  
  return (
    <header className='z-[100] flex flex-col items-center justify-between bg-red'>
        <div className='bg-mainc h-12 w-full flex flex-row gap-4'>
            <div className='w-full flex justify-around items-center'>
              <Image className="" src="/images/gov.png" width={150} height={2} alt="gov Logo" />
              <div className='flex flex-row items-center justify-center p-10 gap-6'>
                <a href="https://www.facebook.com/gestiondelriesgoctg"><FaFacebook  size={20} className='hover:scale-125 transition duration-500 cursor-pointer text-white'/></a>
                <a href="https://x.com/oagrdcartagena"><BsTwitterX  size={20} className='hover:scale-125 transition duration-500 cursor-pointer text-white'/></a>
                {/* <Link href="#"><FaYoutube size={20} className='hover:scale-125 transition duration-500 cursor-pointer text-white'/></Link> */}
                <Link href="https://www.instagram.com/gestiondelriesgoctg"><FaInstagramSquare size={20} className='hover:scale-125 transition duration-500 cursor-pointer text-white'/></Link>
                <Link href="https://www.tiktok.com/@gestiondelriesgoctg"><FaTiktok size={20} className='hover:scale-125 transition duration-500 cursor-pointer text-white'/></Link>
                <Link href="cel:3175030465"><FaPhone size={20} className='hover:scale-125 transition duration-500 cursor-pointer text-white'/></Link>
              </div>
            </div>
          </div>
        <nav className="bg-white h-22  w-full !z-1000 top-0 start-0 border-b border-gray-200 ">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-1">
        <a href="https://localhost:3000/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/oagrd-logo.png" width={104} height={30} className="hidden md:block h-24" alt="oagrd Logo" />
            {/* <span className="self-center text-4xl font-semibold whitespace-nowrap ">OAGRD</span> */}
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="text-white bg-mainc hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"></button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 text-xl  border border-gray-100 rounded-lg bg-gray-50 md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <li>
              <a href="/" className="block py-2 px-3 hover:underline rounded md:bg-transparent md:text-gray-700 hover:text-mainc hover:font-bold md:hover:text-mainc hover:-translate-y-2 transition ease-in-out delay-80  hover:scale-110 md:p-0" aria-current="page">Inicio</a>
            </li>
            <li>
              <a href="/sat" className="block py-2 px-3 text-gray-700 hover:text-mainc hover:font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mainc  hover:-translate-y-2 transition ease-in-out delay-80  hover:scale-110 hover:underline md:p-0 ">SAT</a>
            </li>
            <li>
              <a href="/quienes-somos" className="block py-2 px-3 text-gray-700 hover:text-mainc hover:font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mainc  hover:-translate-y-2 transition ease-in-out delay-80  hover:scale-110hover:underline md:p-0 ">Quiénes Somos</a>
            </li>
      
            <li>
              <a href="https://www.cartagena.gov.co/Atencion-y-Servicio-a-la-Ciudadania/PQRSDF" className="block py-2 px-3 text-gray-700 hover:text-mainc hover:font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mainc hover:-translate-y-2 transition ease-in-out delay-80  hover:scale-110 hover:underline md:p-0 ">PQRS</a>
            </li>
            <li>
              <a href="/contactanos" className="block py-2 px-3 text-gray-700 hover:text-mainc hover:font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mainc hover:-translate-y-2 transition ease-in-out delay-80  hover:scale-110 hover:underline md:p-0 ">Contáctanos</a>
            </li>
          </ul>
        </div>


        </div>
      </nav>
    </header>
  )
}

export default Navbar


      {/* <li>
              <a href="/reportes" className="block py-2 px-3 text-gray-700 hover:text-mainc hover:font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mainc  hover:-translate-y-2 transition ease-in-out delay-80  hover:scale-110hover:underline md:p-0 ">Reportes</a>
            </li> */}