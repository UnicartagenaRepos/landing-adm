import Link from 'next/link'
import React from 'react'

function News() {
  return (
    <div>
      {/* header */}
      <div className='h-72 w-full bg-mainc'>
        <Link className='text-white hover:underline m-20 relative top-10' href="/#news">Volver a las noticias</Link>
        {/* <p className='text-white text-sm relative -bottom-10 left-2'>Mayo 18, 2024</p> */}
        </div>
      <div className='mb-32 mx-auto bg-white max-w-6xl '> 
        <img className='mx-auto h-[420px] rounded shadow-2xl relative -top-40 -mb-20' src="/images/noticias/not1.jpeg" alt="noticias1"/>
        <h1 className='font-bold text-4xl mb-10 text-center text-mainc'>Distriseguridad fomenta el cuidado ambiental y el sentido de pertenencia en el Caño Juan Angola</h1>
        <p className='mb-4'>Cartagena de Indias D. T. Y C., 18 de mayo de 2024_ – Fortalecer el cuidado ambiental y el sentido de pertenencia hacia el Caño Juan Angola, es el objetivo del equipo de gestores de convivencia y la brigada cívica de Distriseguridad, por esto, se llevó a cabo una jornada de sensibilización dirigida a las comunidades vecinas de uno de los cuerpos de agua más importantes de la ciudad.</p>
        <p className='mb-4'>Esta actividad incluyó charlas interactivas casa a casa, diseñadas para promover la conciencia ambiental y destacar la importancia de la conservación del Caño Juan Angola, con este ejercicio los participantes tuvieron la oportunidad de reforzar el conocimiento sobre la biodiversidad de la zona, las amenazas que enfrenta y las acciones que cada uno puede tomar para contribuir a su protección.</p>
        <p className='mb-4'>David Puello, gestor social de Distriseguridad, destacó la importancia de estas iniciativas: «Hicimos una jornada de sensibilización y pedagogía en el marco de la educación ambiental, entendiendo que la recuperación del caño Juan Angola no solo corresponde a la intervención de maquinarias sino a la intervención desde el punto de vista humano reconociendo el valor ecosistémico; por eso en este casa a casa, le hablamos a los vecinos de la responsabilidad que tienen como ciudadanos para preservar este ecosistema.»</p>
        <p className='mb-4'>La jornada estuvo apoyada con tecnología de avanzada a través de drones con bocinas para enviar mensajes a los habitantes del sector; invitando a continuar con el compromiso y sentido de pertenencia con este valioso recurso natural.</p>
      </div>
    </div>
  )
}

export default News
