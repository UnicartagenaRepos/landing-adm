'use client'
import { ImagesSlider } from '@/components/global/images-slider';
import { motion } from "framer-motion";
import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { TbHeartRateMonitor } from "react-icons/tb";

function sat() {
    const images = [
        "/images/sat/sat1.jpeg",
        "/images/sat/sat2.jpeg",
        "/images/sat/sat3.jpeg",
        "/images/sat/sat4.jpeg",
        "/images/sat/sat5.jpeg",
        // "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ];
      return (
        <main>
            <ImagesSlider className="h-[43rem]" images={images}>
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
                className="z-50 flex flex-col justify-center items-center drop-shadow-xl"
            >
                <motion.p className="font-bold  drop-shadow-lg text-4xl md:text-4xl text-center bg-grey bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-200 py-4">
                Sistema Alerta Temprana <br /> de Cartagena
                </motion.p>
                {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                <span>Join now →</span>
                <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button> */}
            </motion.div>
            </ImagesSlider>


            <div className=' md:flex md:flex-col flex-row items-center justify-center relative -mt-20  w-full '>
                <a href="#" className="m-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl h-[380px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">
                        <img className=" w-32 h-32" src="/sat_icon.jpeg" alt="sat que es"/>
                        <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">¿Que es un SAT?</h5>
                        <p className="mb-4 font-light text-gray-700 dark:text-gray-400">Un Sistema de Alertas Tempranas (SAT) es un conjunto de herramientas, técnicas y procesos diseñados para detectar y notificar de manera oportuna la presencia de eventos o situaciones que representen un riesgo o peligro potencial.</p>
                    </div>
                </a> 
                <a href="#" className="m-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl h-[380px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">
                    <img className="w-32 h-32" src="/sat_obj_icon.png" alt="sat objetivos"/>
                        <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">¿Cuál es su objetivo principal?</h5>
                        <p className="mb-4 font-light text-gray-700 dark:text-gray-400">El objetivo principal de un SAT es proporcionar información anticipada y precisa sobre eventos adversos para que las autoridades, organizaciones y personas puedan tomar medidas preventivas o mitigadoras.</p>
                    </div>
                </a>
                <a href="#" className="m-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl h-[380px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">

                        <img className=" w-32 h-32" src="/sat_ventaja.jpeg" alt="sat ventajas"/>

                        {/* <img className="rounded-full w-96 h-96 md:h-48 md:w-48 md:rounded-full" src="/sat.jpeg" alt="" /> */}
                        <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ventajas de un SAT</h5>
                        <p className="mb-4 font-light text-gray-700 dark:text-gray-400">Un SAT proporciona información valiosa que puede ser utilizada para mejorar la planificación y la toma de decisiones. Al contar con datos y alertas precisas sobre riesgos potenciales</p>
                    </div>
                </a>
            </div>

            {/* ventaja de un sat block */}
 
            <div className="w-full mt-20 mb-20 text-center relative">
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 shadow md:flex-row md:max-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-1/2 h-[300px] md:h-auto md:w-40 " src="/ventajas_personas.jpeg" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="m-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white bg-yellow-400 rounded-2xl h-10 w-auto ">Ventajas de un SAT</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 flex flew-row text-left gap-2"><FaCheck size={24} className='text-yellow-400' />Detectar eventos o situaciones potencialmente peligrosas con anticipación.</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 flex flew-row text-left gap-2"><FaCheck size={24} className='text-yellow-400' />Ayuda a mitigar los riesgos y reducir el impacto negativo de los eventos.</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 flex flew-row text-left gap-2"><FaCheck size={24} className='text-yellow-400' />Permite una respuesta más rápida y eficaz ante eventos adversos..</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 flex flew-row text-left gap-2"><FaCheck size={24} className='text-yellow-400' />Contar con información oportuna y precisa a través de un SAT permite tomar decisiones informadas.</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 flex flew-row text-left gap-2"><FaCheck size={24} className='text-yellow-400' />Al detectar y abordar eventos adversos en sus etapas iniciales, un SAT puede ayudar a reducir los costos asociados.</p>
                   
                   
                   

                </div>
            </a>
            </div>


            {/* funcionamiento de los sistemas */}
            <div className='bg-gray-50 p-10'>
                <span className='w-full mx-auto block text-center text-3xl font-medium mb-5'> Funcionamiento de los sistemas de alertas tempranas</span>
                <div className=' md:flex md:flex-col flex-row items-center justify-center relative mb-10 '>
                    <a href="#" className="m-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-60 h-[420px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">
                        <img className="w-32 h-32" src="/monitoreo.png" alt="sat objetivos"/>
                            <h5 className="mt-4 mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Monitoreo y recopilacion de datos</h5>
                            <p className="mb-4 text-sm text-gray-700 dark:text-gray-400">Los sistemas de alertas tempranas recopilan datos relevantes de diversas fuentes, como sensores, estaciones meteorológicas y redes sociales.</p>
                        </div>
                    </a> 
                    <a href="#" className="m-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-60 h-[420px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">
                        <img className="w-32 h-32" src="/analitica.png" alt="sat objetivos"/>
                            <h5 className="mt-4 mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Analisis de datos</h5>
                            <p className="mb-4 text-sm text-gray-700 dark:text-gray-400">Los datos recopilados se analizan utilizando algoritmos y modelos para identificar patrones y determinar si se cumplen condiciones de alerta.</p>
                        </div>
                    </a>
                    <a href="#" className="m-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-60 h-[420px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">

                            <img className="w-auto h-36" src="/evaluacion.png" alt="sat ventajas"/>

                            {/* <img className="rounded-full w-96 h-96 md:h-48 md:w-48 md:rounded-full" src="/sat.jpeg" alt="" /> */}
                            <h5 className="mt-4 mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Evaluacion de riesgos</h5>
                            <p className="mb-4 text-sm text-gray-700 dark:text-gray-400">Se evalúa el nivel de riesgo asociado con los eventos o situaciones detectadas, considerando la probabilidad y magnitud de los impactos.</p>
                        </div>
                    </a>

                    <a href="#" className="m-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-60 h-[420px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">

                            <img className=" w-32 h-32" src="/megaphone.webp" alt="Difucion de alertas"/>

                            {/* <img className="rounded-full w-96 h-96 md:h-48 md:w-48 md:rounded-full" src="/sat.jpeg" alt="" /> */}
                            <h5 className="mt-4 mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Generacion y difucion de alertas</h5>
                            <p className="mb-4 text-sm text-gray-700 dark:text-gray-400">Si se identifica un riesgo significativo, se generan alertas que se difunden a través de diversos medios para informar a las autoridades y personas afectadas</p>
                        </div>
                    </a>

                    <a href="#" className="m-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-60 h-[420px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="flex flex-col justify-center items-center p-4 leading-normal text-justify">

                            <img className=" w-32 h-32" src="/respuesta.png" alt="Respuesta y seguimiento"/>

                            {/* <img className="rounded-full w-96 h-96 md:h-48 md:w-48 md:rounded-full" src="/sat.jpeg" alt="" /> */}
                            <h5 className="mt-4 mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Respuesta y seguimiento</h5>
                            <p className="mb-4 text-sm text-gray-700 dark:text-gray-400">Las autoridades y las personas involucradas toman acciones de acuerdo con los protocolos de respuesta establecidos, y se realiza un seguimiento continuo de la situación para evaluar la efectividad de las medidas tomadas</p>
                        </div>
                    </a>
                </div>
            </div>

        </main>

    );

}
        

export default sat
