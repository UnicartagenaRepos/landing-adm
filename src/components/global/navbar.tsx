'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MenuIcon } from 'lucide-react'
import { usePathname } from 'next/navigation';
import { FaFacebook, FaPhone, FaYoutube } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'


type Props = {}

const Navbar = (props: Props) => {
  const pathname = usePathname();
  
  return (
    <header className='z-[100] flex flex-col items-center justify-between'>
        <div className='bg-mainc h-14 w-full flex flex-row gap-4'>
            <div className='w-full flex justify-around items-center'>
              <Image className="" src="/images/gov.png" width={150} height={2} alt="gov Logo" />
              <div className='flex flex-row items-center justify-center p-10 gap-6'>
                <Link href="#"><FaFacebook  size={20} className='hover:scale-125 transition duration-500 cursor-pointer text-white'/></Link>
                <Link href="#"><FaYoutube size={20} className='hover:scale-125 transition duration-500 cursor-pointer text-white'/></Link>
                <Link href="#"><FaPhone size={20} className='hover:scale-125 transition duration-500 cursor-pointer text-white'/></Link>
                <Link href="#"><BsLinkedin size={20} className='hover:scale-125 transition duration-500 cursor-pointer text-white'/></Link>
              </div>
            </div>
          </div>
        <nav className="bg-white dark:bg-gray-900 w-full !z-1000 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-1">
        <Link href="https://localhost:3000/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/oagrd-logo.png" width={104} height={30} className="h-24" alt="oagrd Logo" />
            {/* <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">OAGRD</span> */}
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="text-white bg-mainc hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"></button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 text-lg  border border-gray-100 rounded-lg bg-gray-50 md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" className="block py-2 px-3 hover:underline rounded md:bg-transparent md:text-gray-600 md:hover:text-mainc md:p-0 md:dark:text-blue-500" aria-current="page">Inicio</a>
            </li>
            <li>
              <Link href="/sat" className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mainc hover:underline md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">SAT</Link>
            </li>
            <li>
              <Link href="/quienes-somos" className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mainc hover:underline md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Quienes Somos</Link>
            </li>
            <li>
              <Link href="/reportes" className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mainc hover:underline md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Reportes</Link>
            </li>
            <li>
              <Link href="https://www.cartagena.gov.co/Atencion-y-Servicio-a-la-Ciudadania/PQRSDF" className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mainc hover:underline md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">PQRS</Link>
            </li>
            <li>
              <Link href="/contactanos" className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mainc hover:underline md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contactanos</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar