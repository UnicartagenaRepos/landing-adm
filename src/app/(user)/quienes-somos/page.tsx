'use client'


import React from 'react'
import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"

function quienesSomos() {
  return (
    <div>
      
{/* objetivo general */}
<motion.div 
initial={{ opacity: 0 }} 
whileInView={{ opacity: 1 }} 
transition={{ ease: "circInOut",
    duration: 1,
    x: { duration: 1 }}} >
<section className="max-w-full bg-gray-50 p-20  dark:bg-gray-900 border border-gray-100 rounded-lg  dark:border-gray-700 mx-auto  justify-center items-center">
    <div className="flex flex-row gap-20 px-8 py-8 mx-auto">
        <div className="mr-1 place-self-center lg:col-span-7">
          
            <h1 className="flex flex-row  items-center gap-1 mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl dark:text-white text-secondc">Objetivo General <Image height={128} width={128} className="h-32 w-32" src="/images/objetivo-general.png" alt="" /></h1>
            <p className="max-w-2xl mb-6 font-light text-slate-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-justify"> La Oficina Asesora Para la Gestión del Riesgo de Desastres, tendrá como objetivo facilitar la labor del alcalde como responsable y principal ejecutor de los procesos para la gestión del riesgo en el Distrito, coordinar el desempeño del Consejo Distrital de Gestión del Riesgo de Desastres, coordinar la continuidad de los procesos de la gestión del riesgo, en cumplimiento de la política nacional de gestión del riesgo y de forma articulada con la planificación del desarrollo y el ordenamiento territorial distrital, asesorar, aconsejar y asistir en el seguimiento y evaluación de políticas, estrategias, planes, programas, regulaciones y acciones permanentes para el conocimiento y la reducción del riesgo y para el manejo de desastres del Distrito de Cartagena, con el propósito explícito de contribuir a la seguridad, el bienestar, la calidad de vida de las personas y al desarrollo sostenible.</p>
            
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
            <Image height={420} width={600} className="object-cover rounded-lg shadow-2xl max-w-[800px]" src="/images/sat/objetivo.jpeg" alt="mockup" />
        </div>                
    </div>
</section>
</motion.div>



{/* funciones generales */}
<motion.div  
// animate={{ rotate: 360 }}
style={{ rotate: 0 }} 
initial={{ opacity: 0, y: "30%"}}
whileInView={{ opacity: 1, y: 0 }}
animate={{ y: 100 }}
transition={{ ease: "linear",
    duration: 1,
    y: { duration: 1 }}} 
    className="max-w-6xl mx-auto mt-20 text-center block">
<section  className="items-center bg-white">
    <div className='flex flex-row items-center justify-center  mb-4'>
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-mainc text-center">Funciones generales de OAGRD</h5>
        {/* <Image priority={true} width={"150"} height={"150"} src="/oagrd-logo.png" alt="oagrd Logo" /> */}
    </div>
    <Image height={420} width={600} className="object-cover w-full rounded-xl h-2/2 shadow-2xl" src="/images/sat/funcion.jpeg" alt="" />
    <div className="flex flex-col items-center p-4 leading-normal mx-0">
        
        
        <Carousel   plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}>
      <CarouselContent className="text-2xl text-justify max-w-6xl mt-4">
        <CarouselItem className="pl-32 flex items-center justify-center gap-4"><span className='bg-secondc text-center h-10 w-10 rounded-full shadow-2xl font-semibold'>1</span><p>Asesorar en la formulación, seguimiento y evaluación de la política<br />pública de gestión de riesgo de emergencia y desastres del Distrito de<br />Cartagena ajustada a los lineamientos de esta materia.</p></CarouselItem>
        <CarouselItem className="pl-32 flex items-center justify-center gap-4"><span className='bg-secondc text-center h-10 w-10 rounded-full shadow-2xl font-semibold'>2</span><p>Coordinar el Consejo Distrital de Gestión del Riesgo de Desastres de la<br />ciudad de Cartagena.</p></CarouselItem>
        <CarouselItem className="pl-32 flex items-center justify-center gap-4"><span className='bg-secondc text-center h-10 w-10 rounded-full shadow-2xl font-semibold'>3</span><p>Coordinar la continuidad y efectividad de los procesos de conocimiento<br />y reducción del riesgo y manejo de desastres, con enfoque de equidad,<br />en el orden local, y su articulación con los lineamientos que en este<br />sentido se establezcan a nivel departamental, regional y nacional.</p>			</CarouselItem>
        <CarouselItem className="pl-32 flex items-center justify-center gap-4"><span className='bg-secondc text-center h-10 w-10 rounded-full shadow-2xl font-semibold'>4</span><p>Coordinar la articulación de los intervinientes privados, las<br />organizaciones sociales y las organizaciones no gubernamentales en el<br />sistema distrital.</p>			</CarouselItem>
        <CarouselItem className="pl-32 flex items-center justify-center gap-4"><span className='bg-secondc text-center h-10 w-10 rounded-full shadow-2xl font-semibold'>5</span><p>Asesorar en el diseño de las políticas, estrategias, planes, programas,<br />proyectos y procedimientos nacionales de gestión del riesgo de<br />desastres en el contexto Distrital y articularlo con el marco normativo y<br />los instrumentos de gestión de riesgos del Sistema Nacional para la<br />Gestión del Riesgo de Desastres.</p>			</CarouselItem>
        <CarouselItem className="pl-32 flex items-center justify-center gap-4"><span className='bg-secondc text-center h-10 w-10 rounded-full shadow-2xl font-semibold'>6</span><p>Coordinar la articulación con otros sistemas administrativos, tales<br />como el Sistema Nacional de Planeación, el Sistema Nacional<br />Ambiental, el Sistema Nacional de Ciencias, Tecnología e Innovación, el<br />Sistema Nacional de Bomberos y Sistema de Salud Pública entre otros<br />en los temas de su competencia.</p>			</CarouselItem>
        <CarouselItem className="pl-32 flex items-center justify-center gap-4"><span className='bg-secondc text-center h-10 w-10 rounded-full shadow-2xl font-semibold'>7</span><p>Apoyar y Coordinar las actividades en materia de gestión ambiental, en<br />los procesos educativos y de formación de valores que armonicen las<br />relaciones de los seres hamanos con la naturaleza y el medio ambiente;<br />para propiciar el desarrollo de los procesos económicos, sociales y<br />culturales hacia el Desarrollo Sostenible.</p>			</CarouselItem>
        <CarouselItem className="pl-32 flex items-center justify-center gap-4"><span className='bg-secondc text-center h-10 w-10 rounded-full shadow-2xl font-semibold'>8</span><p>Asesorar en la realización de los análisis, estudios e investigaciones en<br />materia de su competencia.</p>			</CarouselItem>
        <CarouselItem className="pl-32 flex items-center justify-center gap-4"><span className='bg-secondc text-center h-10 w-10 rounded-full shadow-2xl font-semibold'>9</span><p>Asesorar la formulación y ejecución del Plan Distrital para la Gestión<br />del Riesgo de Desastres, y realizar el seguimiento y evaluación del<br />mismo.</p>			</CarouselItem>
        <CarouselItem className="pl-32 flex items-center justify-center gap-4"><span className='bg-secondc text-center h-10 w-10 rounded-full shadow-2xl font-semibold'>10</span><p>Asesorar en la aplicación de las normas relacionadas con el<br />ordenamiento urbano, zonas de vulnerabilidad y asentamientos<br />humanos en condiciones de riesgo.</p>	</CarouselItem>
      </CarouselContent>
    </Carousel>
    </div>
</section>

</motion.div>





{/* our team */}
<div className=" p-20 mt-40 w-full max-full text-center bg-gray-50">

    <p className="text-4xl font-bold mb-5 text-mainc">Jefe Oficina Asesora para la Gestión del Riesgo de Desastres</p>
    {/* alinear admins */}
    <div className="shadow-2xl flex flex-col items-center mx-auto justify-center p-6 bg-white border border-gray-200 rounded-lg md:flex-row md:max-w-6xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <Image width={400} height={400} className="object-cover rounded-full" src="/images/jefe-oagrd.jpeg" alt="" />
    <div className="flex flex-col justify-between p-6 leading-normal ">
        <h5 className="mb-4 text-3xl font-bold tracking-tight text-mainc dark:text-white">Daniel Vargas Díaz</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl text-justify">Administrador de Empresas, especialista en Gobierno y Gestión del Desarrollo Regional y Municipal de la Universidad Católica de Bogotá, con magíster en Ciencia Política y Gobierno de la Universidad del Norte. 
        Tiene experiencia como Asesor de la Secretaría del Interior, Asesor de planeación y Director de Juventudes de la Gobernación de Bolívar.
        Es un profesional comprometido y responsable que se destaca por su liderazgo, adaptabilidad y aprendizaje continuo.
        </p>
    </div>
</div>

</div>
    </div>
  )
}

export default quienesSomos
