'use client'
import React from 'react'
import { Map, Pin, APIProvider, InfoWindow, AdvancedMarker, } from "@vis.gl/react-google-maps"
import { FaFacebook, FaYoutube, FaPhone } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Link from 'next/link';


function Contactanos() {

    const mapStyles = {
        width: '100%',
        height: '50%'
    };

    const position = { lat: 53.54, lng: 10}

  return (

      <div className='flex flex-row justify-center items-center p-10 bg-gray-50'>
        {/* social medias */}
        <div className='bg-yellow-200 shadow flex flex-col w-10 items-center justify-center p-10 gap-3'>
        <Link href="#"><FaFacebook  size={32} className='hover:scale-125 transition duration-500 cursor-pointer'/></Link>
        <Link href="#"><FaYoutube size={32} className='hover:scale-125 transition duration-500 cursor-pointer'/></Link>
        <Link href="#"><FaPhone size={32} className='hover:scale-125 transition duration-500 cursor-pointer'/></Link>
        <Link href="#"><BsLinkedin size={32} className='hover:scale-125 transition duration-500 cursor-pointer'/></Link>


        </div>

        {/* contact form */}
        <div className='border shadow h-auto w-80 p-5 rounded-md grid gap-1 mb-6 md:grid-cols-1 bg-white'>
            <span className='text-xl font-semibold mb-10'>Contactanos</span>
            <div>
                <label for="first_name" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white">First name</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            </div>   
            <div className="mb-6">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
            </div> 
            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            <p className="ms-auto text-xs text-gray-500 dark:text-gray-400 mb-10">Remember, contributions to this topic should follow our <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>
            <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Enviar
           </button>       
        </div>
       
        {/* google maps */}
        <div className='h-auto w-2/4 rounded-md bg-white block p-3 shadow'>
            <APIProvider apiKey='AIzaSyCqUDFxjtyNiftGAZznK5t70Vbi8M3qCTs' >
                <div className='h-96 w-full rounded'>
                    <Map zoom={12} center={position}></Map>
                </div>
            </APIProvider>
        </div>
   </div>
  )
}

export default Contactanos
