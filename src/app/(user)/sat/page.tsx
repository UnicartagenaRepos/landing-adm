'use client'
import { ImagesSlider } from '@/components/global/images-slider';
import { motion } from "framer-motion";
import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { TbHeartRateMonitor } from "react-icons/tb";
import Image from "next/image";

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
                <Image height={420} width={600} className="h-[400px] mx-auto object-fit rounded-xl shadow-2xl my-8" src="/ventajas_personas.jpeg" alt="" />
                <div className="p-4">
                    <div id="accordion-collapse" data-accordion="collapse" className='w-6xl max-w-6xl'>
                        <h2 id="accordion-collapse-heading-1">
                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200  hover:bg-gray-100  gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span>Reducción del riesgo de desastres</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                            </svg>  
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                            <div className="p-5 border border-b-0 border-gray-200 text-start">
                            <p className="mb-2 text-gray-500 ">El sistema permite identificar y alertar a la población sobre posibles peligros con anticipación, lo que les da tiempo para tomar medidas de precaución y reducir su vulnerabilidad.</p>
                            {/* <p className="text-gray-500 ">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600  hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p> */}
                            </div>
                        </div>
                        <h2 id="accordion-collapse-heading-2">
                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200  gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                            <span>Protección de vidas</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                            </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                            <div className="p-5 border border-b-0 border-gray-200  text-start">
                            <p className="mb-2 text-gray-500 ">Al brindar información oportuna sobre los riesgos, las personas pueden tomar decisiones informadas para protegerse a sí mismas y a sus familias, lo que puede salvar vidas.</p>
                            {/* <p className="text-gray-500 ">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600  hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p> */}
                            </div>
                        </div>
                        <h2 id="accordion-collapse-heading-3">
                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200  gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                            <span>Minimización de daños</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                            </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                            <div className="p-5 border border-t-0 border-gray-200  text-start">
                            <p className="mb-2 text-gray-500 ">La alerta temprana permite a las autoridades y a la población tomar medidas para reducir los daños materiales y económicos causados por los desastres.</p>
                            </div>
                        </div>

                        <h2 id="accordion-collapse-heading-4">
                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200  gap-3" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
                            <span>Aumento de la resiliencia</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                            </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-4" className="hidden" aria-labelledby="accordion-collapse-heading-4">
                            <div className="p-5 border border-b-0 border-gray-200  text-start">
                            <p className="text-gray-500 ">La resiliencia es la capacidad de una comunidad para recuperarse de un desastre. </p>
                            <p className="text-gray-500 ">El sistema de alertas tempranas es una herramienta fundamental para fortalecer la resiliencia de las comunidades.</p>
                            </div>
                        </div>

                        <h2 id="accordion-collapse-heading-5">
                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200  gap-3" data-accordion-target="#accordion-collapse-body-5" aria-expanded="false" aria-controls="accordion-collapse-body-5">
                            <span>Mejoramiento de la respuesta a emergencias</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                            </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-5" className="hidden" aria-labelledby="accordion-collapse-heading-5">
                            <div className="p-5 border border-b-0 border-gray-200  text-start">
                            <p className="mb-2 text-gray-500 ">El sistema facilita la coordinación de la respuesta a emergencias entre las diferentes entidades gubernamentales y organizaciones de ayuda humanitaria.</p>
                            {/* <p className="text-gray-500 ">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600  hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p> */}
                            </div>
                        </div>

                        <h2 id="accordion-collapse-heading-6">
                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200  gap-3" data-accordion-target="#accordion-collapse-body-6" aria-expanded="false" aria-controls="accordion-collapse-body-6">
                            <span>Promoción de una cultura de prevención</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                            </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-6" className="hidden" aria-labelledby="accordion-collapse-heading-6">
                            <div className="p-5 border border-b-0 border-gray-200  text-start">
                            <p className="mb-2 text-gray-500 ">El sistema ayuda a crear conciencia sobre los riesgos de desastres y la importancia de estar preparados para afrontarlos.</p>
                            {/* <p className="text-gray-500 ">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600  hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p> */}
                            </div>
                        </div>
                    </div>

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
