'use client'
import React, { useCallback, useState } from 'react'
import { Map, Pin, APIProvider, InfoWindow, AdvancedMarker,   Marker, useAdvancedMarkerRef,} from "@vis.gl/react-google-maps"
import { FaFacebook, FaYoutube, FaPhone, FaInstagramSquare, FaTiktok } from "react-icons/fa";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import Link from 'next/link';
import { FaSquareXTwitter } from 'react-icons/fa6';



  
function Contactanos() {
    
    const [markerRef, marker] = useAdvancedMarkerRef();

    const [infoWindowShown, setInfoWindowShown] = useState(true);
      
    // // clicking the marker will toggle the infowindow
    const handleMarkerClick = useCallback(
      () => setInfoWindowShown(isShown => !isShown),
      []
    );
  
    // // if the maps api closes the infowindow, we have to synchronize our state
    const handleClose = useCallback(() => setInfoWindowShown(true), []);


       
      
    //     return (
    //       <>
            
    //       </>
    //     );
    //   };

    // const mapStyles = {
    //     width: '100%',
    //     height: '50%'
    // };

    // const position = { lat: 53.54, lng: 10}

  return (

      <div className='flex flex-row justify-center items-center  bg-gray-50 p-24'>
        {/* social medias */}
        <div className='bg-yellow-200 shadow flex flex-col w-10 items-center justify-center p-10 gap-3'>
                <Link href="https://www.facebook.com/gestiondelriesgoctg"><FaFacebook  size={32} className='hover:scale-125 transition duration-500 cursor-pointer'/></Link>
                <Link href="https://x.com/oagrdcartagena"><BsTwitterX  size={32} className='hover:scale-125 transition duration-500 cursor-pointer'/></Link>
                {/* <Link href="#"><FaYoutube size={32} className='hover:scale-125 transition duration-500 cursor-pointer'/></Link> */}
                <Link href="https://www.instagram.com/gestiondelriesgoctg"><FaInstagramSquare size={32} className='hover:scale-125 transition duration-500 cursor-pointer'/></Link>
                <Link href="https://www.tiktok.com/@gestiondelriesgoctg"><FaTiktok size={32} className='hover:scale-125 transition duration-500 cursor-pointer'/></Link>
                <Link href="cel:3175030465"><FaPhone size={32} className='hover:scale-125 transition duration-500 cursor-pointer'/></Link>

        </div>

        {/* contact htmlForm */}
        <div className='border shadow h-auto w-80 p-5 rounded-md grid gap-1 mb-6 md:grid-cols-1 bg-white'>
            <span className='text-xl font-semibold mb-10'>Contactanos</span>
            <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-semibold text-gray-900">Nombre</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
            </div>   
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900 ">Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
            </div> 
            <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-900 ">Mensaje</label>
            <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Deja tu mensaje aqui..."></textarea>
            <p className="ms-auto text-xs text-gray-500 mb-10">Recuerda, este formulario ayuda a que puedas reportar de manera oportunida una incidencia, no lo uses para en caso contrario.</p>
            <button type="submit" className="items-center px-4 text-lg font-semibold text-center text-white bg-blue-900 rounded-lg focus:ring-4 h-10 ">
                        Enviar
           </button>       
        </div>
       
        {/* google maps */}
        <div className='h-auto w-2/4 rounded-md bg-white block p-3 shadow'>
            <APIProvider apiKey='AIzaSyB2MmtCCU1GIWkoblto0sjSQrN_91XTL3U' >
                <div className='h-[450px] w-full rounded'>
                    <Map       
                        // style={{width: '100vw', height: '100vh'}}
                        id={'oagrd-address'}
                        mapId='oagrd-address'
                        defaultCenter={{lat: 10.4105093, lng: -75.5330098}}
                        defaultZoom={15}
                        gestureHandling={'greedy'}
                        disableDefaultUI={true}>
                        {/* <Marker  position={{lat: 10.4105093, lng: -75.5330098}} />
                        <InfoWindow>
                        <h2>InfoWindow content!</h2>
                        <p>Some arbitrary html to be rendered into the InfoWindow.</p>
                        </InfoWindow> */}

                        {/* <AdvancedMarker position={{lat: 10.40319876, lng: -75.47509139}}>
                            <img src={'/images/riesgos/inundacion.png'} width={56} height={56} />
                        </AdvancedMarker>
                        <AdvancedMarker position={{lat: 10.39705322, lng: -75.50693394}}>
                            <img src={'/images/riesgos/remocion_en_masa.png'} width={56} height={56} />
                        </AdvancedMarker>
                        <AdvancedMarker position={{lat: 10.36121077, lng: -75.49175337}}>
                            <img src={'/images/riesgos/remocion_en_masa.png'} width={56} height={56} />
                        </AdvancedMarker>
                        <AdvancedMarker position={{lat: 10.54593654, lng: -75.39056164}}>
                            <img src={'/images/riesgos/inundacion.png'} width={56} height={56} />
                        </AdvancedMarker>
                        <AdvancedMarker position={{lat: 10.33611111, lng: -75.47592}}>
                            <img src={'/images/riesgos/inundacion.png'} width={56} height={56} />
                        </AdvancedMarker>
                        <AdvancedMarker position={{lat: 10.434277, lng: -75.517607}}>
                            <img src={'/images/riesgos/inundacion.png'} width={56} height={56} />
                        </AdvancedMarker>
                        <AdvancedMarker position={{lat: 10.4239965, lng: -75.53118258}}>
                            <img src={'/images/riesgos/remocion_en_masa.png'} width={56} height={56} />
                        </AdvancedMarker>
                        <AdvancedMarker position={{lat: 10.346996, lng: -75.487664}}>
                            <img src={'/images/riesgos/inundacion.png'} width={56} height={56} />
                        </AdvancedMarker> */}

                        <AdvancedMarker
                        ref={markerRef}
                        position={{lat: 10.4105093, lng: -75.5330098}}
                        onClick={handleMarkerClick}
                        >
                        <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                        </AdvancedMarker>
                
                        {infoWindowShown && ( 
                        <InfoWindow anchor={marker} onCloseClick={handleClose}>
                            <h2 className='text-xl font-bold'>Oficina de Gestion del Riesgo de Cartagena de Indias</h2>
                            <br/>
                            <p className='text-md'>Manga Av. 3 #24-79 , Edificio Imán Centro Empresarial, Cartagena, Colombia.</p>
                            <br/>
                        </InfoWindow> 
                        )} 
                    </Map>
                </div>
            </APIProvider>
        </div>
   </div>
  )
}

export default Contactanos
