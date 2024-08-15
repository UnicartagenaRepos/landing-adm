import Link from 'next/link'
import React from 'react'
import img from "next/image";

function News({params}: {params: {newsId: string}}) {
  return (
    <div>
      {/* header */}
      <div className='h-72 w-full bg-mainc'>
        <Link className='text-white hover:underline m-20 relative top-10' href="/#news">Volver a las noticias</Link>
        {/* <p className='text-white text-sm relative -bottom-10 left-2'>Mayo 18, 2024</p> */}
        </div>
      <div className='mb-32 mx-auto bg-white max-w-6xl '> 
        <img height={420} width={600} className='mx-auto h-[420px] rounded shadow-2xl relative -top-40 -mb-20' src="/images/noticias/not1.jpeg" alt="noticias1" />
        <h1 className='font-bold text-4xl mb-10 text-center text-mainc'>Con éxito se realizó en Cartagena el simulacro de la operación binacional de Cartagena y Estados Unidos: Promesa Continua 2024</h1>
        <p className='mb-4'>El simulacro se realizó en la Institución Educativa Fernández Baena y en ella se articularon miembros de la Armada Nacional, Bomberos y Ejército de Colombia y Estados Unidos.</p>

        <p className='mb-4'>Cartagena de Indias D. T. y C., 13 de agosto de 2024. Una edificación abandonada, escombros en el piso y gritos de auxilio. Esa fue la escena que miembros de la Armada Nacional, Ejército Nacional y Bomberos de Colombia vieron al llegar a la Institución Educativa Fernández Baena.</p>

        <p className='mb-4'>Ahí los esperaban los miembros del Ejército Nacional, Bomberos y Armada Nacional de Estados Unidos, quienes llegaron a la ciudad para realizar esta actividad de simulacro enmarcada dentro de los procesos de atención de desastres que tiene la Promesa Continua de los Estados Unidos. Todo esto enmarcado en el trabajo en conjunto que ha estado indicando el alcalde mayor de Cartagena, Dumek Turbay Paz.</p>

        <p className='mb-4'>Con esta operación binacional denominada: Ejercicio de búsqueda y rescate en estructuras colapsadas, los miembros de estas dependencias de la ciudad, así como personal de la Oficina Asesora para la Gestión del Riesgo de Desastres del Distrito, se preparan para enfrentar los eventos o emergencias que puedan presentarse en Cartagena.</p>

        <p className='mb-4'>Con este ejercicio de entrenamiento a la atención de desastres nos preparamos y unimos capacidades con miembros de Estados Unidos y la Alcaldía de Cartagena para estar preparados y atentos a solucionar estas situaciones en cualquier momento que puedan ocurrir. En todo esto, el único fin es proteger la vida de las personas que están en riesgo, dijo el capitan de navío, Ernesto Araújo, jefe de Operaciones número uno Caribe de la Armada Nacional de Colombia.</p>

        <p className='mb-4'>Por su parte, Daniel Vargas, director de la Oficina Asesora para la Gestión del Riesgo de Desastres del Distrito, señaló: Estamos en el colegio articulando este simulacro donde nos preparamos para los eventos y emergencias del Distrito. Desde la oficina asesora, en cabeza de la Alcaldía de Cartagena, estamos coordinando toda la labor para prepararnos para eventualidades.</p>

        <p className='mb-4'>El principal propósito de esta actividad fue fortalecer la preparación ante cualquier situación de emergencia y estandarizar los procedimientos necesarios para llevar a cabo operaciones de búsqueda y rescate en estructuras colapsadas, con el fin de proteger y preservar la vida humana.</p>

        <p className='mb-4'>El simulacro se realizó en colaboración con la Oficina Asesora para la Gestión del Riesgo y Desastres (OARGD), la Defensoría del Pueblo de Colombia, la Armada Nacional de Colombia, La Armada Nacional de Estados Unidos, Bomberos, la Fuerza Naval, el Ejército Nacional de Colombia y la Gerencia de Espacio Público y Movilidad.</p>

        <p className='mb-4'>Fin del Comunicado  No. 85</p>
        
        
        
        
      </div>
    </div>
  )
}

export default News
