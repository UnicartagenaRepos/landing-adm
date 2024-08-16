'use client'
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


function sat() {
    const images = [
        // "/images/sat/sat1.jpeg",
        "/images/sat/sat2.jpeg",
        "/images/sat/sat3.jpeg",
        "/images/sat/sat4.jpeg",
        "/images/sat/sat5.jpeg",
        // "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ];
      return (
        <main>
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
                Sistema de Alerta Temprana <br /> de Cartagena
                </motion.p>
                {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                <span>Join now →</span>
                <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button> */}
            </motion.div>
            </ImagesSlider>


            <div className=' md:flex md:flex-col flex-row items-center justify-center relative -mt-20  w-full '>
                <div className="m-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl h-[380px] ">
                    <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">
                        <Image height={420} width={600} className=" w-32 h-32" src="/sat_icon.jpeg" alt="sat que es"/>
                        <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 ">¿Que es un SAT?</h5>
                        <p className="mb-4 font-light text-gray-700 ">El Sistema de Alertas Tempranas de la Oficina Asesora para la Gestión del Riesgo de Desastres de Cartagena de Indias (OAGRD) es una herramienta fundamental para la prevención y atención de emergencias en la ciudad. Su objetivo principal es <b className='font-bold'>brindar información oportuna y veraz a la población sobre la ocurrencia de posibles desastres naturales o eventos que puedan poner en riesgo la vida e integridad física de las personas.</b></p>
                    </div>
                </div> 
                <div className="m-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl h-[380px] ">
                    <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">
                    <Image height={420} width={600} className="w-32 h-32" src="/sat_obj_icon.png" alt="sat objetivos"/>
                        <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 ">¿Cuál es su objetivo principal?</h5>
                        <p className="mb-4 font-light text-gray-700 ">El objetivo principal de un SAT es proporcionar información anticipada y precisa sobre eventos adversos para que las autoridades, organizaciones y personas puedan tomar medidas preventivas o mitigadoras.</p>
                    </div>
                </div>
                <div className="m-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl h-[380px]  ">
                    <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">

                        <Image height={420} width={600} className=" w-32 h-32" src="/sat_ventaja.jpeg" alt="sat ventajas"/>

                        {/* <Image height={420} width={600} className="rounded-full w-96 h-96 md:h-48 md:w-48 md:rounded-full" src="/sat.jpeg" alt="" /> */}
                        <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Importancia del Sistema de Alertas Tempranas</h5>
                        <p className="mb-4 font-light text-gray-700 ">El Sistema de Alertas Tempranas de la OAGRD es una herramienta vital para reducir el impacto de los desastres en Cartagena. Al brindar información oportuna a la población, permite que las personas tomen medidas para protegerse a sí mismas y a sus familias, y para evacuar las zonas de riesgo si es necesario.</p>
                    </div>
                </div>
            </div>

            {/* ventaja de un sat block */}

            {/* <div className="w-full flex fle-col h-[800px] mt-20 mb-20 text-center relative justify-center"> */}






            <div  className="mx-auto max-w-6xl mb-20 items-center justify-center object-center text-center align-middle " >
                <h5 className="m-6 text-4xl font-extrabold  rounded-md bg-mainc text-white p-1 items-center text-center">Ventajas de un SAT</h5>
                <Image height={420} width={600} className="h-[400px] mx-auto object-fit rounded-xl my-8" src="/ventajas_personas.jpeg" alt="" />
                <div className="flex flex-col items-center p-4 leading-normal mx-auto bg-blue-50 rounded-xl">
                        <Carousel   plugins={[
                        Autoplay({
                        delay: 5000,
                        }),
                    ]}>
                    <CarouselContent className="text-2xl text-left max-w-6xl mt-4 text-wrap">
                        <CarouselItem className="pl-32 flex flex-col items-center justify-center gap-4 px-10"><div className='flex gap-3 justify-center items-center'><span className='bg-secondc text-center h-10 w-10 rounded-full font-bold'>1</span><span className='text-2xl font-bold'>Reducción del riesgo de desastres</span></div><p className='text-xl text-wrap'>Asesorar en la formulación, seguimiento y evaluación de la política pública de gestión de riesgo de emergencia y desastres del Distrito de Cartagena ajustada a los lineamientos de esta materia.</p></CarouselItem>
                        <CarouselItem className="pl-32 flex flex-col items-center justify-center gap-4 px-10"><div className='flex gap-3 justify-center items-center'><span className='bg-secondc text-center h-10 w-10 rounded-full font-bold'>2</span><span className='text-2xl font-bold'>Protección de vidas</span></div><p className='text-xl text-wrap'>Al brindar información oportuna sobre los riesgos, las personas pueden tomar decisiones informadas para protegerse a sí mismas y a sus familias, lo que puede salvar vidas.</p></CarouselItem>
                        <CarouselItem className="pl-32 flex flex-col items-center justify-center gap-4 px-10"><div className='flex gap-3 justify-center items-center'><span className='bg-secondc text-center h-10 w-10 rounded-full  font-bold'>3</span><span className='text-2xl  font-bold'>Minimización de daños</span></div><p className='text-xl text-wrap'>La alerta temprana permite a las autoridades y a la población tomar medidas para reducir los daños materiales y económicos causados por los desastres.</p></CarouselItem>
                        <CarouselItem className="pl-32 flex flex-col items-center justify-start gap-4 px-10"><div className='flex gap-3 justify-center items-center'><span className='bg-secondc text-center h-10 w-10 rounded-full  font-bold'>4</span><span className='text-2xl  font-bold'>Aumento de la resiliencia</span></div><p className='text-xl text-wrap'>La resiliencia es la capacidad de una comunidad para recuperarse de un desastre.</p><p className='text-xl'>El sistema de alertas tempranas es una herramienta fundamental para fortalecer la resiliencia de las comunidades.</p></CarouselItem>
                        <CarouselItem className="pl-32 flex flex-col items-center justify-start gap-4 px-10"><div className='flex gap-3 justify-center items-center'><span className='bg-secondc text-center h-10 w-10 rounded-full  font-bold'>5</span><span className='text-2xl  font-bold'>Mejoramiento de la respuesta a emergencias</span></div><p className='text-xl text-wrap'>El sistema facilita la coordinación de la respuesta a emergencias entre las diferentes entidades gubernamentales y organizaciones de ayuda humanitaria.</p></CarouselItem>
                        <CarouselItem className="pl-32 flex flex-col items-center justify-center gap-4 px-10"><div className='flex gap-3 justify-center items-center'><span className='bg-secondc text-center h-10 w-10 rounded-full  font-bold'>6</span><span className='text-2xl  font-bold'>Promoción de una cultura de prevención</span></div><p className='text-xl text-wrap'>El sistema ayuda a crear conciencia sobre los riesgos de desastres y la importancia de estar preparados para afrontarlos.</p></CarouselItem>
                    
                    </CarouselContent>
                    </Carousel>
                </div>                

            </div>
            {/* </div> */}


            {/* funcionamiento de los sistemas */}
            <div className='bg-gray-50 p-10'>
                <span className='w-full mx-auto block text-center text-3xl font-medium mb-5'> Funcionamiento de los sistemas de alertas tempranas</span>
                <div className=' md:flex md:flex-col flex-row items-center justify-center relative mb-10 '>
                    <a href="#" className="m-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-72 h-[420px] hover:bg-gray-100  ">
                        <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">
                        <Image height={420} width={600} className="w-32 h-32" src="/images/sat/monitoring.png" alt="sat objetivos"/>
                        <div>
                            <h5 className="mt-4 mb-2 text-lg font-semibold tracking-tight text-gray-900 ">Monitoreo y vigilancia</h5>
                            <p className="mb-4 text-sm text-gray-700 ">La OAGRD recibe información sobre un posible peligro a través de su red de monitoreo o de otras fuentes.</p>
                        </div>
                        </div>
                    </a> 
                    <a href="#" className="m-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-72 h-[420px] hover:bg-gray-100  ">
                        <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">
                        <Image height={420} width={600} className="w-32 h-32" src="/images/sat/analisis.png" alt="sat objetivos"/>
                        <div>
                            <h5 className="mt-4 mb-2 text-lg font-semibold tracking-tight text-gray-900 ">Análisis y pronóstico</h5>
                            <p className="mb-4 text-sm text-gray-700 ">La información es analizada por un equipo de expertos, quienes determinan el nivel de riesgo y la necesidad de emitir una alerta.</p>
                        </div>
                        </div>
                    </a>
                    <a href="#" className="m-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-72 h-[420px] hover:bg-gray-100  ">
                        <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">

                            <Image height={420} width={600} className="w-32 h-32" src="/images/sat/emitir.png" alt="sat ventajas"/>

                            {/* <Image height={420} width={600} className="rounded-full w-96 h-96 md:h-48 md:w-48 md:rounded-full" src="/sat.jpeg" alt="" /> */}
                            <div>
                                <h5 className="mt-4 mb-2 text-lg font-semibold tracking-tight text-gray-900 ">Comunicación y alerta</h5>
                                <p className="mb-4 text-sm text-gray-700 ">Si se emite una alerta, la OAGRD activa los canales de comunicación para difundirla a la población lo antes posible.</p>
                            </div>
                        </div>
                    </a>

                    <a href="#" className="m-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-72 h-[420px] hover:bg-gray-100  ">
                        <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">

                            <Image height={420} width={600} className=" w-32 h-32" src="/images/sat/megaphone.png" alt="Difucion de alertas"/>

                            {/* <Image height={420} width={600} className="rounded-full w-96 h-96 md:h-48 md:w-48 md:rounded-full" src="/sat.jpeg" alt="" /> */}
                            <div>
                                <h5 className="mt-4 mb-2 text-lg font-semibold tracking-tight text-gray-900  text-center">Medios de comunicación</h5>
                                <p className="mb-4 text-sm text-gray-700 ">La población recibe la alerta y toma las medidas de precaución necesarias para protegerse.</p>
                            </div>
                        </div>
                    </a>

                    {/* <a href="#" className="m-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-60 h-[420px] hover:bg-gray-100  ">
                        <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">

                            <Image height={420} width={600} className=" w-32 h-32" src="/respuesta.png" alt="Respuesta y seguimiento"/>

                            <h5 className="mt-4 mb-2 text-lg font-semibold tracking-tight text-gray-900 ">Respuesta y seguimiento</h5>
                            <p className="mb-4 text-sm text-gray-700 ">Las autoridades y las personas involucradas toman acciones de acuerdo con los protocolos de respuesta establecidos, y se realiza un seguimiento continuo de la situación para evaluar la efectividad de las medidas tomadas</p>
                        </div>
                    </a> */}
                </div>
            </div>

        </main>

    );

}
        

export default sat
