'use client'

import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { clients } from "@/lib/constant";
import Image from "next/image";
import { motion } from "framer-motion";
import { NextPageContext } from 'next'

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
import { useEffect, useState } from "react";





// export async function getServerSideProps() {
//     const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=10.4195841&lon=-75.5271224&lang=es&units=metric&appid=cc8411344583128d1ea0437c84b2f589`);
//     const data = await res.json();
//     return { props: { data } }
// }


export default function Home() {

    const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=10.4195841&lon=-75.5271224&lang=es&units=metric&appid=cc8411344583128d1ea0437c84b2f589')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
//   if (isLoading) return <p>Loading...</p>
//   if (!data) return <p>No profile data</p>


    
  const words = [
    {
      text: "Oficina ",
       className: "text-4xl",
    },
    {
      text: "Asesora ",
       className: "text-4xl",
    },
    {
      text: "para la ",
       className: "text-4xl",
    },
    {
      text: "Gestion del ",
       className: "text-4xl ",
    },
    {
      text: "Riesgo de Desastres.",
      className: "text-yellow-400 dark:text-yellow-400 text-4xl break-after-column",
    },
  ];





  
  return (
    <main>
   
{/* <div >
   
      </div> */}




   
    {/* carrousel */}
    <div className="w-full justify-center items-center ">
      <div id="default-carousel" className="w-full relative" data-carousel="slide">
      {/* <!-- Carousel wrapper --> */}
          <div className="relative overflow-hidden md:h-[700px]">
        
              <div className="hidden duration-300" data-carousel-item>
                  <img src="/images/home1.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-2/3 top-2/3 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-300" data-carousel-item>
              <p className="relative z-30 w-full mx-auto  mr-3  pr-9 block font-bold items-end text-1xl md:text-1xl text-center py-2 bg-slate-50 opacity-70">
              Comités Barriales de Emergencias del Distrito de Cartagena
                </p>
                  <img src="/images/home2.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-2/3 top-2/3 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-300" data-carousel-item>
                  <img src="/images/home3.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/3 top-1 left-1/2" alt="..." />
              </div>
          </div>
          {/* <!-- Slider indicators --> */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
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


    <div className="flex flex-col items-center justify-center h-[10rem] ">
      <TypewriterEffectSmooth words={words}/>
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-3xl">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div> */}
    </div>



 

    {/* <div className="max-w-5xl p-4 mx-auto text-center text-wrap mt-10 mb-10 ">
      <h1 className="mb-4 text-4xl font-semibold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-6xl dark:text-white">Oficina Asesora para la Gestion del Riesgo de Desastres </h1>
    </div> */}


{/* Lineas de atencion */}
<motion.div  
// animate={{ rotate: 360 }}
style={{ rotate: 0 }} 
initial={{ opacity: 0, x: "30%"}}
whileInView={{ opacity: 1, x: 0 }}
animate={{ x: 100 }}
transition={{ ease: "linear",
    duration: 1,
    x: { duration: 1 }}}
    className="w-3/4 -x-100 mx-auto items-center block mb-20">
    <img src="/images/lineas-atencion.jpeg" />
</motion.div>

{/* Clima */}
<div className="max-w-7xl m-20 bg-gray-50 dark:bg-gray-900 max-w-screen-2x border border-gray-50 rounded-lg  dark:border-gray-700 mx-auto  justify-center items-center">
    


    <img width={100} height={100} src={"https://openweathermap.org/img/wn/" + data?.weather[0].icon +"@2x.png"} alt="Icono del clima" />
    <div className="flex flex-row"><h1 className="text-6xl">{Math.ceil(data?.main.temp)}</h1><span className="text-3xl">°C</span></div>
    <h1>{data?.weather[0].description}</h1>
</div>


{/* objetivo general */}
<motion.div 
initial={{ opacity: 0 }} 
whileInView={{ opacity: 1 }} 
transition={{ ease: "circInOut",
    duration: 1,
    x: { duration: 1 }}} >
<section className="max-w-7xl bg-gray-50 dark:bg-gray-900 max-w-screen-2x border border-gray-100 rounded-lg shadow dark:border-gray-700 mx-auto  justify-center items-center">
    <div className="grid max-w-screen-xl px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          
            <h1 className="flex flex-row  items-center gap-4 max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl dark:text-white text-yellow-400">Objetivo General <img className="h-32 w-32 " src="/images/objetivo-general.png" alt="" /></h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-justify"> La Oficina Asesora Para la Gestión del Riesgo de Desastres, tendrá como objetivo facilitar la labor del alcalde como responsable y principal ejecutor de los procesos para la gestión del riesgo en el Distrito, coordinar el desempeño del Consejo Distrital de Gestión del Riesgo de Desastres, coordinar la continuidad de los procesos de la gestión del riesgo, en cumplimiento de la política nacional de gestión del riesgo y de forma articulada con la planificación del desarrollo y el ordenamiento territorial distrital, asesorar, aconsejar y asistir en el seguimiento y evaluación de políticas, estrategias, planes, programas, regulaciones y acciones permanentes para el conocimiento y la reducción del riesgo y para el manejo de desastres del Distrito de Cartagena, con el propósito explícito de contribuir a la seguridad, el bienestar, la calidad de vida de las personas y al desarrollo sostenible.</p>
            
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/images/objetivo-general.avif" alt="mockup" />
        </div>                
    </div>
</section>
</motion.div>



{/* funciones generales */}
<div className="max-w-3/4 mx-auto mt-20 text-center block">
<section  className="flex flex-col items-center bg-white   md:flex-row  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
    <img className="object-cover w-full rounded h-[900px] md:h-auto md:w-80 md:rounded" src="/images/funciones-generales.avif" alt="" />
    <div className="flex flex-col items-center p-4 leading-normal mx-0">
    <Image priority={true} width="150" height="150" src="/oagrd-logo.png" className="text-center pl-10" alt="oagrd Logo" />
        <h5 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-justify pl-10">Funciones generales de OAGRD</h5>
        
        <Carousel   plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}>
      <CarouselContent className="text-lg text-justify -ml-4 max-w-screen-md">
        <CarouselItem className="pl-32"><p>Asesorar en la formulación, seguimiento y evaluación de la política<br />pública de gestión de riesgo de emergencia y desastres del Distrito de<br />Cartagena ajustada a los lineamientos de esta materia.</p></CarouselItem>
        <CarouselItem className="pl-32"><p>Coordinar el Consejo Distrital de Gestión del Riesgo de Desastres de la<br />ciudad de Cartagena.</p></CarouselItem>
        <CarouselItem className="pl-32"><p>Coordinar la continuidad y efectividad de los procesos de conocimiento<br />y reducción del riesgo y manejo de desastres, con enfoque de equidad,<br />en el orden local, y su articulación con los lineamientos que en este<br />sentido se establezcan a nivel departamental, regional y nacional.</p>			</CarouselItem>
        <CarouselItem className="pl-32"><p>Coordinar la articulación de los intervinientes privados, las<br />organizaciones sociales y las organizaciones no gubernamentales en el<br />sistema distrital.</p>			</CarouselItem>
        <CarouselItem className="pl-32"><p>Asesorar en el diseño de las políticas, estrategias, planes, programas,<br />proyectos y procedimientos nacionales de gestión del riesgo de<br />desastres en el contexto Distrital y articularlo con el marco normativo y<br />los instrumentos de gestión de riesgos del Sistema Nacional para la<br />Gestión del Riesgo de Desastres.</p>			</CarouselItem>
        <CarouselItem className="pl-32"><p>Coordinar la articulación con otros sistemas administrativos, tales<br />como el Sistema Nacional de Planeación, el Sistema Nacional<br />Ambiental, el Sistema Nacional de Ciencias, Tecnología e Innovación, el<br />Sistema Nacional de Bomberos y Sistema de Salud Pública entre otros<br />en los temas de su competencia.</p>			</CarouselItem>
        <CarouselItem className="pl-32"><p>Apoyar y Coordinar las actividades en materia de gestión ambiental, en<br />los procesos educativos y de formación de valores que armonicen las<br />relaciones de los seres hamanos con la naturaleza y el medio ambiente;<br />para propiciar el desarrollo de los procesos económicos, sociales y<br />culturales hacia el Desarrollo Sostenible.</p>			</CarouselItem>
        <CarouselItem className="pl-32"><p>Asesorar en la realización de los análisis, estudios e investigaciones en<br />materia de su competencia.</p>			</CarouselItem>
        <CarouselItem className="pl-32"><p>Asesorar la formulación y ejecución del Plan Distrital para la Gestión<br />del Riesgo de Desastres, y realizar el seguimiento y evaluación del<br />mismo.</p>			</CarouselItem>
        <CarouselItem className="pl-32"><p>Asesorar en la aplicación de las normas relacionadas con el<br />ordenamiento urbano, zonas de vulnerabilidad y asentamientos<br />humanos en condiciones de riesgo.</p>	</CarouselItem>
      </CarouselContent>
    </Carousel>
    </div>
</section>

</div>

{/* <Weather/> */}

{/* ten atento a  */}
<div id="alert-additional-content-1" className="w-3/4 p-4 mx-auto text-justify mb-4 mt-8 text-gray-600 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-600 dark:text-blue-400 dark:border-blue-500" role="alert">
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
</div>


{/* our team */}
<div className=" p-10 mt-20 text-center bg-gray-50">

    <p className="text-4xl font-bold mb-5">Cuerpo Administrativo</p>
    {/* alinear admins */}
<div className="flex w-full items-center justify-center">
  <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3  text-justify">
        <a href="#">
            <img className="rounded-t-lg" src="/images/ejecutivo1.avif" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
    {/* segundo admin */}
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  m-3 text-justify">
        <a href="#">
            <img className="rounded-t-lg" src="/images/persona5.avif" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
     {/* tercer admin */}
     <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 text-justify">
        <a href="#">
            <img className="rounded-t-lg" src="/images/ejecutivo3.jpeg" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
       {/* cuarto admin */}


    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 text-justify">
        <a href="#">
            <img className="rounded-t-lg" src="/images/persona6.webp" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>



  </div>

</div>


   



{/* Download the app */}



<div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Descarga nuestra aplicacion</h5>
    <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Esta atento a todas nuestras actualizaciones y mantente alerta de manera temprana</p>
    <div className="flex flex-col gap-4 items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
       

{/* celphone */}
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" className="dark:hidden w-[272px] h-[572px]" alt="" />
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" className="hidden dark:block w-[272px] h-[572px]" alt="" />
        </div>
    </div>


        <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
            <div className="text-left rtl:text-right">
                <div className="mb-1 text-base">Descargala en</div>
                <div className="-mt-1 font-sans text-lg font-semibold">Google Play</div>
            </div>
        </a>
    </div>
</div>




    </main>
  );
}
