'use client';
import { ImagesSlider } from '@/components/global/images-slider';
import { motion } from "framer-motion";
import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { TbHeartRateMonitor } from "react-icons/tb";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"
import Weather from '@/components/global/weather';
import NewsPage from './(user)/news/page';
import EmergencyLinesPage from './(user)/lineas-emergencias/page';
import { NextSeo } from 'next-seo';



function sat() {


    const images = [
        // "/images/sat/sat1.jpeg",
        "/images/sat/sat2.jpeg",
        "/images/sat/sat3.jpeg",
        "/images/sat/sat4.jpeg",
        "/images/sat/sat5.jpeg",
      ];

      
      return (
        <>
        {/* <NextSeo
        title="Líneas de Emergencia - Sistema de Alertas Tempranas"
        description="Encuentra aquí las principales líneas de emergencia para reportar incidentes o solicitar ayuda."
        openGraph={{
          title: "Líneas de Emergencia - Sistema de Alertas Tempranas",
          description: "Encuentra aquí las principales líneas de emergencia para reportar incidentes o solicitar ayuda.",
          url: "https://tusitio.com/emergency-lines",
          images: [
            {
              url: "/path-to-image.jpg",
              width: 800,
              height: 600,
              alt: "Líneas de emergencia",
            },
          ],
        }}
      /> */}
        
        <main>
            {/* <Image alt="test" width={400} height={400} src="/images/sat/sat2.jpeg" /> */}
            <ImagesSlider className="h-[47rem]" images={images}>
            <motion.div
                initial={{
                opacity: 1,
                y: 1,
                }}
                animate={{
                opacity: 1,
                y: 0,
                }}
                transition={{
                duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center drop-shadow-2xl"
            >
                <motion.p className="font-bold  text-6xl md:text-6xl drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-gray-800 text-center bg-grey bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-200 py-4">
                Sistema de Alertas Tempranas <br /> de Cartagena
                </motion.p> 
             </motion.div> 
            </ImagesSlider>


            <div className='block lg:flex lg:flex-col flex-row items-center justify-center relative -mt-40  w-full '>
                <div className='lg:w-[400px] lg:max-w-lg  lg:h-[500px]'>
                {/* <div className="m-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row lg:w-[400px] lg:max-w-lg lg:w-400 lg:h-[500px] "> */}
                    <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">
                        <Image height={620} width={600} className="w-80 h-80" src="/images/sat/que_es_un_sat.png" alt="que es un sat?"/>
                        <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 ">¿Que es un SAT?</h5>
                        <p className="mb-4 font-light text-gray-700 ">El Sistema de Alertas Tempranas de la Oficina Asesora para la Gestión del Riesgo de Desastres de Cartagena de Indias (OAGRD) es una herramienta fundamental para la prevención y atención de emergencias en la ciudad. Su objetivo principal es <b className='font-bold'>brindar información oportuna y veraz a la población sobre la ocurrencia de posibles desastres naturales o eventos que puedan poner en riesgo la vida e integridad física de las personas.</b></p>
                    </div>
                </div> 
                {/* <div className="m-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row lg:w-[400px]  lg:max-w-xl lg:w-400 lg:h-[500px] "> */}
                <div className='lg:w-[400px] lg:max-w-lg lg:h-[500px]'>
                    <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">
                    <Image height={420} width={600} className="w-80 h-80" src="/images/sat/objetivos.png" alt="sat objetivos"/>
                        <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 ">¿Cuál es su objetivo principal?</h5>
                        <p className="mb-4 font-light text-gray-700 ">El objetivo principal de un SAT es proporcionar información anticipada y precisa sobre eventos adversos para que las autoridades, organizaciones y personas puedan tomar medidas preventivas o mitigadoras.</p>
                    </div>
                </div>
                {/* <div className="m-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row lg:w-[400px] lg:max-w-xl lg:w-400 lg:h-[500px]  "> */}
                <div className='lg:w-[400px] lg:max-w-lg  lg:h-[500px]'>
                    <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">

                        <Image height={420} width={600} className=" w-80 h-80" src="/images/sat/importancia_sistema_alertas.png" alt="sat ventajas"/>
                        {/* <Image height={420} width={600} className="rounded-full w-96 h-96 md:h-48 md:w-48 md:rounded-full" src="/sat.jpeg" alt="" /> */}
                        <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Importancia del Sistema de Alertas Tempranas</h5>
                        <p className="mb-4 font-light text-gray-700 ">El Sistema de Alertas Tempranas de la OAGRD es una herramienta vital para reducir el impacto de los desastres en Cartagena. Al brindar información oportuna a la población, permite que las personas tomen medidas para protegerse a sí mismas y a sus familias, y para evacuar las zonas de riesgo si es necesario.</p>
                    </div>
                </div>
            </div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>



                    <Weather />

            <div  className="mx-auto max-w-6xl mb-20 items-center justify-center object-center text-center align-middle " >
                <h5 className="m-6 text-4xl font-extrabold  rounded-md bg-mainc text-white p-1 items-center text-center">Pilares del Sistema de Alertas Tempranas</h5>
                {/* <Image height={420} width={600} className="h-[400px] mx-auto object-fit rounded-xl my-8" src="/ventajas_personas.jpeg" alt="" /> */}
                <div className="flex flex-col items-center p-4 leading-normal mx-auto bg-blue-50 rounded-xl">
                        <Carousel   plugins={[
                        Autoplay({
                        delay: 5000,
                        }),
                    ]}>
                    <CarouselContent className="text-2xl text-left max-w-6xl mt-4 text-wrap">
                       
                        <CarouselItem className="p-10 flex flex-col items-center justify-start gap-4"><Image height={420} width={600} className=" w-80 h-80" src="/images/sat/COMPRENSION Y GESTION.png" alt="Pilares del Sistema de Alertas Tempranas"/><div className='flex gap-3 justify-start items-center'><span className='bg-secondc text-center h-10 w-10 rounded-full font-bold'>1</span><span className='text-2xl font-bold'>Comprensión y Gestión del Riesgo de Desastre</span></div><p className='text-xl text-wrap w-[850px]'>Asesorar en la formulación, seguimiento y evaluación de la política pública de gestión de riesgo de emergencia y desastres del Distrito de Cartagena ajustada a los lineamientos de esta materia.</p></CarouselItem>
                        <CarouselItem className="p-10 flex flex-col items-center justify-start gap-4"><Image height={420} width={600} className=" w-80 h-80" src="/images/sat/DETECCION OBSERVACION.png" alt="Pilares del Sistema de Alertas Tempranas"/><div className='flex gap-3 justify-start items-center'><span className='bg-secondc text-center h-10 w-10 rounded-full font-bold'>2</span><span className='text-2xl font-bold'>Detección,Oobservacion, Vigilancia, Analisis y Previsión de las amenazas</span></div><p className='text-xl text-wrap w-[850px]'>Al brindar información oportuna sobre los riesgos, las personas pueden tomar decisiones informadas para protegerse a sí mismas y a sus familias, lo que puede salvar vidas.</p></CarouselItem>
                        <CarouselItem className="p-10 flex flex-col items-center justify-start gap-4"><Image height={420} width={600} className=" w-80 h-80" src="/images/sat/DIFUSION Y COMUNICACION.png" alt="Pilares del Sistema de Alertas Tempranas"/><div className='flex gap-3 justify-start items-center'><span className='bg-secondc text-center h-10 w-10 rounded-full  font-bold'>3</span><span className='text-2xl  font-bold'>Difusión y Comunicación de Alertas</span></div><p className='text-xl text-wrap w-[850px]'>La alerta temprana permite a las autoridades y a la población tomar medidas para reducir los daños materiales y económicos causados por los desastres.</p></CarouselItem>
                        <CarouselItem className="p-10 flex flex-col items-center justify-start gap-4 w-[600px]"><Image height={420} width={600} className=" w-80 h-80" src="/images/sat/PREPRACION Y RESPUESTA.png" alt="Pilares del Sistema de Alertas Tempranas"/><div className='flex gap-3 justify-start items-center'><span className='bg-secondc text-center h-10 w-10 rounded-full  font-bold'>4</span><span className='text-2xl  font-bold'>Preparación y Respuesta</span></div><p className='text-xl text-wrap w-[850px]'>La resiliencia es la capacidad de una comunidad para recuperarse de un desastre.</p><p className='text-xl text-wrap w-[850px]'>El sistema de alertas tempranas es una herramienta fundamental para fortalecer la resiliencia de las comunidades.</p></CarouselItem>
                    </CarouselContent>
                    </Carousel>
                </div>                

            </div>

        <NewsPage />
        <EmergencyLinesPage />

            
            



 

        </main>
        </>
    );

}
        

export default sat
