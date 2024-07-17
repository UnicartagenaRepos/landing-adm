'use client'

import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { clients } from "@/lib/constant";
import Image from "next/image";
import { motion } from "framer-motion";
import { NextPageContext } from 'next'
import { FaPhoneAlt } from "react-icons/fa";

import { Dropdown } from "flowbite-react";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { TypewriterEffectSmooth } from "@/components/global/typewriter-effect";
import Weather from "@/components/global/weather";
import { useCallback, useEffect, useState } from "react";
import { Map, Pin, APIProvider, InfoWindow, AdvancedMarker,   Marker, useAdvancedMarkerRef,} from "@vis.gl/react-google-maps"
import Link from "next/link";





// export async function getServerSideProps() {
//     const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=10.4195841&lon=-75.5271224&lang=es&units=metric&appid=cc8411344583128d1ea0437c84b2f589`);
//     const data = await res.json();
//     return { props: { data } }
// }

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
  }




export default function Home() {


  const [markerRef, marker] = useAdvancedMarkerRef();
  const [markerRef2, marker2] = useAdvancedMarkerRef();
  const [markerRef3, marker3] = useAdvancedMarkerRef();
  const [markerRef4, marker4] = useAdvancedMarkerRef();
  const [markerRef5, marker5] = useAdvancedMarkerRef();
  const [markerRef6, marker6] = useAdvancedMarkerRef();
  const [markerRef7, marker7] = useAdvancedMarkerRef();
  const [markerRef8, marker8] = useAdvancedMarkerRef();

  const [infoWindowShown, setInfoWindowShown] = useState(false);
  const [infoWindowShown2, setInfoWindowShown2] = useState(false);
  const [infoWindowShown3, setInfoWindowShown3] = useState(false);
  const [infoWindowShown4, setInfoWindowShown4] = useState(false);
  const [infoWindowShown5, setInfoWindowShown5] = useState(false);
  const [infoWindowShown6, setInfoWindowShown6] = useState(false);
  const [infoWindowShown7, setInfoWindowShown7] = useState(false);
  const [infoWindowShown8, setInfoWindowShown8] = useState(false);
   8 
  // // clicking the marker will toggle the infowindow
  const handleMarkerClick = useCallback(
    () => setInfoWindowShown(isShown => !isShown),
    []
  );

  const handleMarkerClick2 = useCallback(
    () => setInfoWindowShown2(isShown => !isShown),
    []
  );
  const handleMarkerClick3 = useCallback(
    () => setInfoWindowShown3(isShown => !isShown),
    []
  );
  const handleMarkerClick4 = useCallback(
    () => setInfoWindowShown4(isShown => !isShown),
    []
  );
  const handleMarkerClick5 = useCallback(
    () => setInfoWindowShown5(isShown => !isShown),
    []
  );
  const handleMarkerClick6 = useCallback(
    () => setInfoWindowShown6(isShown => !isShown),
    []
  );
  const handleMarkerClick7 = useCallback(
    () => setInfoWindowShown7(isShown => !isShown),
    []
  );

  const handleMarkerClick8 = useCallback(
    () => setInfoWindowShown8(isShown => !isShown),
    []
  );

  // // if the maps api closes the infowindow, we have to synchronize our state
  const handleClose = useCallback(() => setInfoWindowShown(false), []);
  const handleClose2 = useCallback(() => setInfoWindowShown2(false), []);
  const handleClose3 = useCallback(() => setInfoWindowShown3(false), []);
  const handleClose4 = useCallback(() => setInfoWindowShown4(false), []);
  const handleClose5 = useCallback(() => setInfoWindowShown5(false), []);
  const handleClose6 = useCallback(() => setInfoWindowShown6(false), []);
  const handleClose7 = useCallback(() => setInfoWindowShown7(false), []);
  const handleClose8 = useCallback(() => setInfoWindowShown8(false), []);
  
  
    const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [currentDate, setCurrentDate] = useState(getDate());
 
  useEffect(() => {
    // fetch('https://api.openweathermap.org/data/2.5/weather?lat=10.4195841&lon=-75.5271224&lang=es&units=metric&appid=cc8411344583128d1ea0437c84b2f589')
    fetch('https://api.weatherapi.com/v1/current.json?key=afecaab6134341fc8f9231218242006&q=Cartagena&aqi=no&lang=es')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  console.log(data);
 
//   if (isLoading) return <p>Loading...</p>
//   if (!data) return <p>No profile data</p>


    
  // const words = [
  //   {
  //       text: "SAT ",
  //        className: "text-6xl",
  //     },
  //   {
  //     text: "Sistema ",
  //      className: "text-5xl",
  //   },
  //   {
  //     text: "de Alertas ",
  //      className: "text-5xl",
  //   },
  //   {
  //     text: "Temprana ",
  //      className: "text-5xl",
  //   },
  //   {
  //       text: "de Cartagena de Indias",
  //        className: "text-5xl ",
  //     },
  // ];





  
  return (
    <main>
   
{/* <div >
   
      </div> */}




   
    {/* carrousel */}
    <div className="w-full justify-center items-center ">
      <div id="default-carousel" className="" data-carousel="slide">
      {/* <!-- Carousel wrapper --> */}
          <div className="relative overflow-hidden md:h-[800px]">
              <div className="hidden duration-3000" data-carousel-item>
                  <img src="/images/banners/sat-banner2.png" className="absolute block w-full -translate-x-1/2 -translate-y-2/2 top-2/2 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-300" data-carousel-item>
                  <img src="/images/home1.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-2/3 top-2/3 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-300" data-carousel-item>
              <p className="relative z-30 w-full mx-auto  mr-3  pr-9 block font-bold items-end text-1xl md:text-1xl text-center py-2 bg-gray-50 opacity-70">
              Comités Barriales de Emergencias del Distrito de Cartagena
                </p>
                  <img src="/images/home2.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/3 top-1/3 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-300" data-carousel-item>
                  <img src="/images/banners/ban1.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/3 top-1/3  left-1/2" alt="..." />
              </div>
              <div className="hidden duration-300" data-carousel-item>
                  <img src="/images/banners/ban2.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/3 top-1/3  left-1/2" alt="..." />
              </div>
              {/* <div className="hidden duration-300" data-carousel-item>
                  <img src="/images/banners/ban3.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/3 top-1/3  left-1/2" alt="..." />
              </div> */}
              <div className="hidden duration-300" data-carousel-item>
                  <img src="/images/banners/ban4.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/3 top-1/3  left-1/2" alt="..." />
              </div>
          </div>
          {/* <!-- Slider indicators --> */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse  ">
              <button type="button" className="w-3 h-3 rounded-full bg-blue-300" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full bg-blue-300" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" className="w-3 h-3 rounded-full bg-blue-300" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" className="w-3 h-3 rounded-full bg-blue-300" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" className="w-3 h-3 rounded-full bg-blue-300" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
              <button type="button" className="w-3 h-3 rounded-full bg-blue-300" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
              <button type="button" className="w-3 h-3 rounded-full bg-blue-300" aria-current="true" aria-label="Slide 7" data-carousel-slide-to="6"></button>
              {/* <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button> */}
          </div>
          {/* <!-- Slider controls --> */}
          {/* <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                  </svg>
                  <span className="sr-only">Previous</span>
              </span>
          </button>
          <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="sr-only">Next</span>
              </span>
          </button> */}
      </div>
    </div>
    {/* name of the page */}


    {/* <div className="flex flex-col items-center justify-center h-[10rem] ">
      <TypewriterEffectSmooth words={words}/>
    </div> */}




 

    {/* <div className="max-w-5xl p-4 mx-auto text-center text-wrap mt-10 mb-10 ">
      <h1 className="mb-4 text-4xl font-semibold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-6xl dark:text-white">Oficina Asesora para la Gestion del Riesgo de Desastres </h1>
    </div> */}

{/* Download the app */}
<div className="w-full text-center bg-gray-50 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 pt-10 pb-20">
    <h5 className="mb-4 mt-10 text-5xl font-bold text-mainc dark:text-white">DESCARGA NUESTRA APLICACIÓN</h5>
    <p className="mb-20 text-base text-gray-500 sm:text-lg dark:text-gray-500">Esta atento a todas nuestras actualizaciones y novedades de alerta de manera temprana</p>
    <div className="flex flex-col gap-4 items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
       

{/* celphone */}
    <div className="flex">
        <div className=" relative l-10 mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl -rotate-45">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <img src="/images/app-image2.jpeg" className="dark:hidden w-[272px] h-[572px]" alt="" />
                <img src="/images/app-image2.jpeg" className="hidden dark:block w-[272px] h-[572px]" alt="" />
            </div>
        </div>

        <div className=" z-10 relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <img src="/images/home-app.jpeg" className="dark:hidden w-[272px] h-[572px]" alt="" />
                <img src="/images/home-app.jpeg" className="hidden dark:block w-[272px] h-[572px]" alt="" />
            </div>
        </div>

        <div className=" relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl rotate-45">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <img src="/images/app-image3.jpeg" className="dark:hidden w-[272px] h-[572px]" alt="" />
                <img src="/images/app-image3.jpeg" className="hidden dark:block w-[272px] h-[572px]" alt="" />
            </div>
        </div>

    </div>
    <div className="flex flex-row gap-10">
        <a href="#" className="md:mt-10 w-full sm:w-auto bg-mainc shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
            <div className="text-left rtl:text-right">
                <div className="mb-1 text-base">Descargala en</div>
                <div className="-mt-1 font-sans text-lg font-semibold">Google Play</div>
            </div>
        </a>
        <a href="#" className="md:mt-10 border w-full sm:w-auto shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            {/* <img src={'/images/'} alt="app store image"/> */}
            <svg  className="me-3 w-8 h-8" fill="#23234c"  viewBox="-52.01 0 560.035 560.035" xmlns="http://www.w3.org/2000/svg"><path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"/></svg>
            <div className="text-left rtl:text-right">
                <div className="mb-1 text-base text-mainc">Descargala en</div>
                <div className="-mt-1 font-sans text-lg font-semibold text-mainc">App Store</div>
            </div>
        </a>
        </div>
    </div>

    
</div>

{/* Ultimas noticias */}
<div id="news" className="mx-auto max-w-6xl font-medium text-4xl mb-10 flex items-center justify-center bg-mainc text-white pl-10 h-20 text-center mt-20">ULTIMAS NOTICIAS</div>
<div className="mx-auto max-w-6xl grid grid-cols-3 gap-10">
  <div className="flex flex-col text-justify hover:shadow-2xl border items-center justify-center transition ease-in-out delay-100 cursor-pointer bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
    <img className='object-cover h-full w-full' src={'/images/noticias/not1.jpeg'} width={600} height={600} alt='Noticia 1'/>
    <div className="bg-gray-50 pb-6">
      <p className="p-4 text-black hover:text-blue-900 ">Distriseguridad fomenta el cuidado ambiental y el sentido de pertenencia en el Caño Juan Angola</p>
      <div className="text-center hover:underline">
        <Link  href="/news" className="bg-mainc text-white rounded-xl px-4 py-1">Leer más</Link>
      </div>
    </div>
  </div>

  <div className="flex flex-col text-justify hover:shadow-2xl border items-center justify-center transition ease-in-out delay-100 cursor-pointer bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
    <img className='object-cover h-full w-full' src={'/images/noticias/not2.jpeg'} width={600} height={600} alt='Noticia 1'/>
    <div className="bg-gray-50 pb-6">
      <p className="p-4 text-black hover:text-blue-900">Distriseguridad fomenta el cuidado ambiental y el sentido de pertenencia en el Caño Juan Angola</p>
      <div className="text-center hover:underline">
        <Link  href="/news" className="bg-mainc text-white rounded-xl px-4 py-1">Leer más</Link>
      </div>
    </div>
  </div>

  <div className="flex flex-col text-justify hover:shadow-2xl border items-center justify-center transition ease-in-out delay-100 cursor-pointer bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
    <img className='object-cover h-full w-full' src={'/images/noticias/not3.jpeg'} width={600} height={600} alt='Noticia 1'/>
    <div className="bg-gray-50 pb-6">
      <p className="p-4 text-black hover:text-blue-900 ">Brigada Cívica de la Alcaldía Mayor de Cartagena recibe certificación en competencias ciudadanas</p>
      <div className="text-center hover:underline">
        <Link  href="/news" className="bg-mainc text-white rounded-xl px-4 py-1">Leer más</Link>
      </div>
    </div>
  </div>

  <div className="flex flex-col text-justify hover:shadow-2xl border items-center justify-center transition ease-in-out delay-100 cursor-pointer bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
    <img className='object-cover h-full w-full' src={'/images/noticias/not4.jpeg'} width={600} height={600} alt='Noticia 1'/>
    <div className="bg-gray-50 pb-6">
      <p className="p-4 text-black hover:text-blue-900 ">Con Brigada Cívica, Distriseguridad fomenta la sana convivencia en Corredores Universitarios de Cartagena</p>
      <div className="text-center hover:underline">
        <Link  href="/news" className="bg-mainc text-white rounded-xl px-4 py-1">Leer más</Link>
      </div>
    </div>
  </div>

  <div className="flex flex-col text-justify hover:shadow-2xl border items-center justify-center transition ease-in-out delay-100 cursor-pointer bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
    <img className='object-cover h-full w-full' src={'/images/noticias/not5.jpeg'} width={600} height={600} alt='Noticia 1'/>
    <div className="bg-gray-50 pb-6">
      <p className="p-4 text-black hover:text-blue-900 ">Distriseguridad, celebra el día del niño con Jornada de Rescate de Juegos Tradicionales</p>
      <div className="text-center hover:underline">
        <Link  href="/news" className="bg-mainc text-white rounded-xl px-4 py-1">Leer más</Link>
      </div>
    </div>
  </div>

  <div className="flex flex-col text-justify hover:shadow-2xl border items-center justify-center transition ease-in-out delay-100 cursor-pointer bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
    <img className='object-cover h-full w-full' src={'/images/noticias/not6.jpeg'} width={600} height={600} alt='Noticia 1'/>
    <div className="bg-gray-50 pb-6">
      <p className="p-4 text-black hover:text-blue-900 ">Distriseguridad continúa atendiendo el llamado de las comunidades con trabajo articulado por la seguridad</p>
      <div className="text-center hover:underline">
        <Link  href="/news" className="bg-mainc text-white rounded-xl px-4 py-1">Leer más</Link>
      </div>
    </div>
  </div>
  
</div>

{/* Clima */}
<motion.div  
initial={{ opacity: 0 }} 
whileInView={{ opacity: 1 }} 
transition={{ ease: "circInOut",
    duration: 
    1,
    x: { duration: 1 }}} 
    className="mt-20 mx-auto max-w-6xl flex flex-col bg-gray-50">
    <span className="text-2xl font-medium mb-4 text-center bg-mainc text-white p-3">El tiempo en Cartagena de Indias hoy - {currentDate}</span>
    <div className="flex flex-row items-center max-w-6xl mb-20 bg-gray-100 dark:bg-gray-900 max-w-screen-2x border border-gray-150 rounded-lg  dark:border-gray-700 mx-auto">
    <div className="flex flex-col bg-white h-40 w-[370px] text-center items-center justify-center p-4">
        <img className="block justify-center items-center text-center" width={50} height={50} src={"https:" + data?.current.condition.icon} alt="Icono del clima" />
        <div className="flex flex-row justify-center mb-1"><h1 className="text-5xl">{Math.ceil(data?.current.temp_c)}</h1><span className="text-2xl">°C</span></div>
        <div className="first-letter:uppercase text-gray-500">{data?.current.condition.text}</div>    
        <div>Fuente: alslsa,sl</div>
    </div>

    <div className="flex flex-col w-5xl p-2 h-32 w-44 bg-red-400 rounded-xl  text-center m-3 ">
        <div className="text-white drop-shadow-lg">Sensacion térmica</div>
        <div className="flex flex-row justify-center mb-2 mt-6"><h1 className="text-4xl">{Math.ceil(data?.current.feelslike_c)}</h1><span className="text-1xl">°C</span></div>
    </div>       

    <div className="flex flex-col w-5xl p-2 h-32 w-44 bg-teal-400 rounded-xl  text-center m-3 ">
        <div className="text-white drop-shadow-lg">Humedad</div>
        <div className="flex flex-row justify-center mb-2 mt-6"><h1 className="text-4xl">{Math.ceil(data?.current.humidity)}</h1><span className="text-1xl">%</span></div>
    </div>    
    <div className="flex flex-col w-5xl p-2 h-32 w-44 bg-gray-400 rounded-xl  text-center m-3 ">
        <div className="text-white drop-shadow-lg">Viento</div>
        <div className="flex flex-row justify-center mb-2 mt-6"><h1 className="text-4xl">{Math.ceil(data?.current.wind_kph)}</h1><span className="text-1xl"> km/h</span></div>
    </div>     
{/* 
    <div className="flex flex-col w-5xl p-2 h-32 w-40 bg-slate-400 rounded-xl  text-center m-3 ">
        <div className="text-white drop-shadow-lg">min/max</div>
        <div className="flex flex-row justify-center mb-1 mt-2"><h1 className="text-4xl">{Math.ceil(data?.current.temp_min)}</h1><span className="text-1xl"> °C</span></div>
        <div className="flex flex-row justify-center "><h1 className="text-4xl">{Math.ceil(data?.current.temp_max)}</h1><span className="text-1xl"> °C</span></div>
    </div>   

    <div className="flex flex-col w-5xl p-2 h-32 w-40 bg-slate-400 rounded-xl  text-center m-3 ">
        <div className="text-white drop-shadow-lg">Viento</div>
        <div className="flex flex-row justify-center mb-2 mt-6"><h1 className="text-4xl">{Math.ceil(data?.current.speed)}</h1><span className="text-1xl"> km/h</span></div>
    </div>    */}

    </div>
</motion.div>

{/* Lineas de atencion */}
<motion.div  
// animate={{ rotate: 360 }}
style={{ rotate: 0 }} 
initial={{ opacity: 0, x: "20%"}}
whileInView={{ opacity: 1, x: 0 }}
animate={{ x: 100 }}
transition={{ ease: "linear",
    duration: 1,
    x: { duration: 1 }}}
    className="w-3/4 -x-100 mx-auto items-center block mb-20">




<div className="mx-auto max-w-6xl text-6xl mb-10 flex items-center justify-between bg-mainc text-white pl-10 h-20 text-center">LINEAS DE EMERGENCIAS <Image className="h-auto rounded-full relative -right-6" src={'/images/lineas/phone247.jpg'} width={200} height={200} alt="Telefono 24 horas"/></div>
<div> 
    <button data-popover-target="popover-oagrd" type="button" className="select-none flex flex-col items-center gab-2 space-y-2 border h-62 w-62 justify-center text-black bg-transparent  font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-auto mb-10 hover:bg-slate-50">
      <div><Image className="mb-1" src={'/oagrd-logo.png'} width={150} height={150} alt={""} ></Image></div>
      <p className="hover:underline">OAGRD</p>
      <a href="tel:3175030465" className="hover:no-underline text-4xl">317 5030465</a>
      </button>

    <div data-popover id="popover-oagrd" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white text-center hover:underline">OAGRD</h3>
        </div>
        <div className="flex mx-auto flex-col px-3 py-2 text-4xl text-mainc text-center justify-center items-center">
            <Image className="mb-3" src={'/oagrd-logo.png'} width={100} height={100} alt={""} ></Image>
            <div className="flex items-center gap-4"><FaPhoneAlt size={24}/><p className="text-5xl">123</p></div>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>


<div className="mx-auto max-w-6xl grid grid-cols-4 gap-10 ">
  <div> 
    <button data-popover-target="popover-policia" type="button" className="select-none flex flex-col items-center gab-2 space-y-2 border h-56 w-56 justify-center text-black bg-transparent  font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-auto hover:bg-slate-50">
      <div><Image className="mb-3" src={'/images/lineas/policia.png'} width={100} height={100} alt={""} ></Image></div>
      <p className="hover:underline">POLICIA NACIONAL</p>
      <a href="tel:123" className="hover:no-underline text-4xl">123</a>
      </button>

    <div data-popover id="popover-policia" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white text-center hover:underline">POLICIA NACIONAL</h3>
        </div>
        <div className="flex mx-auto flex-col px-3 py-2 text-4xl text-mainc text-center justify-center items-center">
            <Image className="mb-3" src={'/images/lineas/policia-person.png'} width={100} height={100} alt={""} ></Image>
            <div className="flex items-center gap-4"><FaPhoneAlt size={24}/><p className="text-5xl">123</p></div>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>

  <div> 
    <button data-popover-target="popover-bomberos" type="button" className="select-none flex flex-col items-center gab-2 space-y-2 border h-56 w-56 justify-center text-black bg-transparent  font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-auto hover:bg-slate-50">
      <div><Image className="mb-3" src={'/images/lineas/bomberos.jpg'} width={100} height={100} alt={""} ></Image></div>
      <p className="hover:underline">BOMBEROS</p>
      <a href="tel:119"  className="hover:no-underline text-4xl">119</a>
      </button>

    <div data-popover id="popover-bomberos" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white text-center hover:underline">BOMBEROS</h3>
        </div>
        <div className="flex mx-auto flex-col px-3 py-2 text-4xl text-mainc text-center justify-center items-center">
            <Image className="mb-3" src={'/images/lineas/bomberos-person.png'} width={100} height={100} alt={""} ></Image>
            <div className="flex items-center gap-4"><FaPhoneAlt size={24}/><p className="text-5xl">119</p></div>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>


  <div> 
    <button data-popover-target="popover-cruz-roja" type="button" className="select-none flex flex-col items-center gab-2 space-y-2 border h-56 w-56 justify-center text-black bg-transparent  font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-auto hover:bg-slate-50">
      <div><Image className="mb-3" src={'/images/lineas/cruz-roja.png'} width={100} height={100} alt={""} ></Image></div>
      <p className="hover:underline">CRUZ ROJA</p>
      <a href="tel:132"  className="hover:no-underline text-4xl">132</a>
      </button>

    <div data-popover id="popover-cruz-roja" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white text-center hover:underline">CRUZ ROJA</h3>
        </div>
        <div className="flex mx-auto flex-col px-3 py-2 text-4xl text-mainc text-center justify-center items-center">
            <Image className="mb-3" src={'/images/lineas/cruz-roja.png'} width={100} height={100} alt={""} ></Image>
            <div className="flex items-center gap-4"><FaPhoneAlt size={24}/><p className="text-5xl">132</p></div>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>
  
  
  <div> 
    <button data-popover-target="popover-surtigas" type="button" className="select-none flex flex-col items-center gab-2 space-y-2 border h-56 w-56 justify-center text-black bg-transparent  font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-auto hover:bg-slate-50">
      <div><Image className="mb-3" src={'/images/lineas/surtigas.png'} width={100} height={100} alt={""} ></Image></div>
      <p className="hover:underline">SURTIGAS</p>
      <a href="tel:164"  className="hover:no-underline text-4xl">164</a>
      </button>

    <div data-popover id="popover-surtigas" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white text-center hover:underline">SURTIGAS</h3>
        </div>
        <div className="flex mx-auto flex-col px-3 py-2 text-4xl text-mainc text-center justify-center items-center">
            <Image className="mb-3" src={'/images/lineas/surtigas.png'} width={100} height={100} alt={""} ></Image>
            <div className="flex items-center gap-4"><FaPhoneAlt size={24}/><p className="text-5xl">164</p></div>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>
  

  <div> 
    <button data-popover-target="popover-afinia" type="button" className="select-none flex flex-col items-center gab-2 space-y-2 border h-56 w-56 justify-center text-black bg-transparent  font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-auto hover:bg-slate-50">
      <div><Image className="mb-3" src={'/images/lineas/afinia.webp'} width={100} height={100} alt={""} ></Image></div>
      <p className="hover:underline">AFINIA</p>
      <a href="tel:115" className="hover:no-underline text-4xl">115</a>
      </button>

    <div data-popover id="popover-afinia" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white text-center hover:underline">AFINIA</h3>
        </div>
        <div className="flex mx-auto flex-col px-3 py-2 text-4xl text-mainc text-center justify-center items-center">
            <Image className="mb-3" src={'/images/lineas/afinia.webp'} width={100} height={100} alt={""} ></Image>
            <div className="flex items-center gap-4"><FaPhoneAlt size={24}/><p className="text-5xl">115</p></div>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>
  


  <div> 
    <button data-popover-target="popover-aguas" type="button" className="select-none flex flex-col items-center gab-2 space-y-2 border h-56 w-56 justify-center text-black bg-transparent  font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-auto hover:bg-slate-50">
      <div><Image className="mb-3" src={'/images/lineas/aguas.png'} width={100} height={100} alt={""} ></Image></div>
      <p className="hover:underline">AGUAS</p>
      <a href="tel:116"  className="hover:no-underline text-4xl">116</a>
      </button>

    <div data-popover id="popover-aguas" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white text-center hover:underline">AGUAS</h3>
        </div>
        <div className="flex mx-auto flex-col px-3 py-2 text-4xl text-mainc text-center justify-center items-center">
            <Image className="mb-3" src={'/images/lineas/aguas.png'} width={100} height={100} alt={""} ></Image>
            <div className="flex items-center gap-4"><FaPhoneAlt size={24}/><p className="text-5xl">116</p></div>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>
  

  <div> 
    <button data-popover-target="popover-defensa" type="button" className="select-none flex flex-col items-center gab-2 space-y-2 border h-56 w-56 justify-center text-black bg-transparent  font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-auto hover:bg-slate-50">
      <div><Image className="mb-3" src={'/images/lineas/defensa.png'} width={100} height={100} alt={""} ></Image></div>
      <p className="hover:underline">DEFENSA CIVIL</p>
      <a href="tel:144"  className="hover:no-underline text-4xl">144</a>
      </button>

    <div data-popover id="popover-defensa" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white text-center hover:underline">DEFENSA CIVIL</h3>
        </div>
        <div className="flex mx-auto flex-col px-3 py-2 text-4xl text-mainc text-center justify-center items-center">
            <Image className="mb-3" src={'/images/lineas/defensa.png'} width={100} height={100} alt={""} ></Image>
            <div className="flex items-center gap-4"><FaPhoneAlt size={24}/><p className="text-5xl">144</p></div>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>
  


  <div> 
    <button data-popover-target="popover-crued" type="button" className="select-none flex flex-col items-center gab-2 space-y-2 border h-56 w-56 justify-center text-black bg-transparent  font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-auto hover:bg-slate-50">
      <div><Image className="mb-3" src={'/images/lineas/crued.png'} width={100} height={100} alt={""} ></Image></div>
      <p className="hover:underline">CRUED</p>
      <a href="tel:125"  className="hover:no-underline text-4xl">125</a>
      </button>

    <div data-popover id="popover-crued" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white text-center hover:underline">CRUED</h3>
        </div>
        <div className="flex mx-auto flex-col px-3 py-2 text-4xl text-mainc text-center justify-center items-center">
            <Image className="mb-3" src={'/images/lineas/crued.png'} width={100} height={100} alt={""} ></Image>
            <div className="flex items-center gap-4"><FaPhoneAlt size={24}/><p className="text-5xl">125</p></div>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>
  
  
</div>

</motion.div>



{/* ten atento a 
<div id="alert-additional-content-1" className="w-3/4 p-4 mx-auto text-justify mb-20 mt-8 text-gray-600 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-600 dark:text-blue-400 dark:border-blue-500" role="alert">
  <div className="flex items-center">
    <svg className="text-black flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span className="sr-only">Info</span>
    <h3 className="text-xl font-medium text-black">Info</h3>
  </div>
  <div className="mt-2 mb-4 text-lg">
  Ten en cuenta las funciones en situacion de desastre que son de vital importancia para el correcto desarrollo de las actividades en una situación de dasastre.
  </div>
  <div className="flex">
    <button type="button" className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <svg className="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
        <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
      </svg>
      Ver mas
    </button>

  </div>
</div> */}



{/* maps sensors */}
   
    {/* google maps */}
    <div className="max-w-full mx-auto flex flex-col bg-gray-100 py-20 shadow-2xl border"> 
      <span className="text-3xl  max-w-full text-center text-mainc font-bold mb-4">RED DE SENSORES OAGRD</span>
      <div className='w-2/3 mx-auto rounded-md bg-mainc block p-3 '>
              <APIProvider apiKey='AIzaSyB2MmtCCU1GIWkoblto0sjSQrN_91XTL3U' >
                  <div className='h-[800px] w-full rounded'>
                      <Map       
                          // style={{width: '100vw', height: '100vh'}}
                          // draggableCursor="false"
                          id={'oagrd-address'}
                          mapId='oagrd-address'
                          defaultCenter={{lat: 10.462644, lng: -75.438986}}
                          defaultZoom={12}
                          gestureHandling={'greedy'}
                          disableDefaultUI={true}>

                          <AdvancedMarker position={{lat: 10.40319876, lng: -75.47509139}} ref={markerRef} onClick={handleMarkerClick}>
                              <img src={'/images/riesgos/inundacion.png'} width={60} height={60} />
                          </AdvancedMarker>
                          <AdvancedMarker position={{lat: 10.39705322, lng: -75.50693394}} ref={markerRef2} onClick={handleMarkerClick2}>
                              <img src={'/images/riesgos/remocion_en_masa.png'} width={60} height={60} />
                          </AdvancedMarker>
                          <AdvancedMarker position={{lat: 10.36121077, lng: -75.49175337}} ref={markerRef3} onClick={handleMarkerClick3}>
                              <img src={'/images/riesgos/remocion_en_masa.png'} width={60} height={60} />
                          </AdvancedMarker>
                          <AdvancedMarker position={{lat: 10.54593654, lng: -75.39060164}} ref={markerRef4} onClick={handleMarkerClick4}>
                              <img src={'/images/riesgos/inundacion.png'} width={60} height={60} />
                          </AdvancedMarker>
                          <AdvancedMarker position={{lat: 10.33611111, lng: -75.47592}} ref={markerRef5} onClick={handleMarkerClick5}>
                              <img src={'/images/riesgos/diapirisimo.png'} width={60} height={60} />
                          </AdvancedMarker>
                          <AdvancedMarker position={{lat: 10.434277, lng: -75.517607}} ref={markerRef6} onClick={handleMarkerClick6}>
                              <img src={'/images/riesgos/inundacion.png'} width={60} height={60} />
                          </AdvancedMarker>
                          <AdvancedMarker position={{lat: 10.4239965, lng: -75.53118258}} ref={markerRef7} onClick={handleMarkerClick7}>
                              <img src={'/images/riesgos/remocion_en_masa.png'} width={60} height={60} />
                          </AdvancedMarker>
                          <AdvancedMarker position={{lat: 10.346996, lng: -75.487664}} ref={markerRef8} onClick={handleMarkerClick8}>
                              <img src={'/images/riesgos/inundacion.png'} width={60} height={60} />
                          </AdvancedMarker>

                          {/* <AdvancedMarker
                          ref={markerRef}
                          position={{lat: 10.4105093, lng: -75.5330098}}
                          onClick={handleMarkerClick}
                          >
                          <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                          </AdvancedMarker>
                   */}
                          {infoWindowShown && ( 
                          <InfoWindow anchor={marker} onCloseClick={handleClose}>
                              <h2 className='text-xl font-bold'>Sensor Fredonia</h2>
                              <br/>
                              <p className='text-lg'>Inundacion</p>
                              <br/>
                          </InfoWindow> 
                          )} 
                              {infoWindowShown2 && ( 
                          <InfoWindow anchor={marker2} onCloseClick={handleClose2}>
                              <h2 className='text-xl font-bold'>Sensor Lomas del Marion</h2>
                              <br/>
                              <p className='text-lg'>Remocion en masa</p>
                              <br/>
                          </InfoWindow> 
                          )} 
                              {infoWindowShown3 && ( 
                          <InfoWindow anchor={marker3} onCloseClick={handleClose3}>
                              <h2 className='text-xl font-bold'>Sensor Cerro de Albornoz</h2>
                              <br/>
                              <p className='text-lg'>Remocion en masa</p>
                              <br/>
                          </InfoWindow> 
                          )} 
                              {infoWindowShown4 && ( 
                          <InfoWindow anchor={marker4} onCloseClick={handleClose4}>
                              <h2 className='text-xl font-bold'>Sensor Bayunca</h2>
                              <br/>
                              <p className='text-lg'>Inundacion</p>
                              <br/>
                          </InfoWindow> 
                          )} 
                              {infoWindowShown5 && ( 
                          <InfoWindow anchor={marker5} onCloseClick={handleClose5}>
                              <h2 className='text-xl font-bold'>Sensor Membrillal</h2>
                              <br/>
                              <p className='text-lg'>Inundacion</p>
                              <br/>
                          </InfoWindow> 
                          )} 
                              {infoWindowShown6 && ( 
                          <InfoWindow anchor={marker6} onCloseClick={handleClose6}>
                              <h2 className='text-xl font-bold'>Sensor San Francisco</h2>
                              <br/>
                              <p className='text-lg'>Inundacion</p>
                              <br/>
                          </InfoWindow> 
                          )} 
                              {infoWindowShown7 && ( 
                          <InfoWindow anchor={marker7} onCloseClick={handleClose7}>
                              <h2 className='text-xl font-bold'>Sensor San Francisco</h2>
                              <br/>
                              <p className='text-lg'>Remocion en masa</p>
                              <br/>
                          </InfoWindow> 
                          )} 
                              {infoWindowShown8 && ( 
                          <InfoWindow anchor={marker8} onCloseClick={handleClose8}>
                              <h2 className='text-xl font-bold'>Sensor Policarpa</h2>
                              <br/>
                              <p className='text-md'>Inundacion</p>
                              <br/>
                          </InfoWindow> 
                          )} 
                      </Map>
                  </div>
              </APIProvider>
          </div>
        </div>







    </main>
  );
}
