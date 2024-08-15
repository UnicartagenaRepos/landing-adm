import Link from 'next/link'
import React from 'react'
import img from "next/image";

function News({params}: {params: {newsId: string}}) {
  // return (
  //   <div>{params.newsId} mama</div>
  // )
  if (params.newsId == "oficina-gestion-riesgo-noticias-001"){
    return (
    <div>
      {/* header */}
      <div className='h-72 w-full bg-mainc'>
        <a className='text-white hover:underline m-20 relative top-10' href="/#news">Volver a las noticias</a>
        {/* <p className='text-white text-sm relative -bottom-10 left-2'>Mayo 18, 2024</p> */}
        </div>
      <div className='mb-32 mx-auto bg-white max-w-6xl '> 
        <img  height={420} width={600} className='mx-auto h-[420px] rounded shadow-2xl relative -top-40 -mb-20' src="/images/noticias/not1.jpeg" alt="noticias1"/>
      <h5 className='max-w-xl mx-auto -mt-10 mb-10 absolute text-center'>13 de agosto, 2024</h5>
      <h1 className='font-bold text-4xl mt-2 mb-10 text-justify text-mainc'>Con éxito se realizó en Cartagena el simulacro de la operación binacional de Cartagena y Estados Unidos: Promesa Continua 2024</h1>
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

if (params.newsId == "oficina-gestion-riesgo-noticias-002"){
  return (
  <div>
    {/* header */}
    <div className='h-72 w-full bg-mainc'>
      <a className='text-white hover:underline m-20 relative top-10' href="/#news">Volver a las noticias</a>
      {/* <p className='text-white text-sm relative -bottom-10 left-2'>Mayo 18, 2024</p> */}
      </div>
    <div className='mb-32 mx-auto bg-white max-w-6xl '> 
    <img  height={420} width={600} className='mx-auto h-[420px] rounded shadow-2xl relative -top-40 -mb-20' src="/images/noticias/not2.jpeg" alt="noticias1"/>
      <h5 className='max-w-xl mx-auto -mt-10 mb-10 absolute text-center'>12 de agosto, 2024</h5>
      <h1 className='font-bold text-4xl mt-2 mb-10 text-justify text-mainc'>Se reactiva pago de $500 mil dirigido a afectados por el Fenómeno de La Niña, en 2022, que presentaron errores en su registro de nombre o cédula</h1>
      <p className='mb-4'>      -La Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD) ha anunciado que hoy comienza en Cartagena el Ciclo de Pago No. 16 del beneficio económico de $500,000.</p>
      <p className='mb-4'>El pago se realizará a través del sistema de Pico y Cédula en el siguiente ciclo: el 12 de agosto para cédulas terminadas en 1 y 2; el 13 de agosto para cédulas terminadas en 3 y 4; el 14 de agosto para cédulas terminadas en 5 y 6; el 15 de agosto para cédulas terminadas en 7 y 8; y el 16 de agosto para cédulas terminadas en 9 y 0.</p>
      <p className='mb-4'>Cartagena de Indias D.T. y C., 12 de agosto de 2024. La Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD) ha informado que, a partir de hoy, se iniciará en Cartagena el Ciclo de pago No. 16  del beneficio económico de $500,000. Este subsidio está dirigido exclusivamente a las personas afectadas por la ola invernal provocada por el Fenómeno de La Niña en 2022, que están registradas en el RUNDA y no pudieron recibir el desembolso previamente debido a inconsistencias en sus datos.</p>
      <p className='mb-4'>Es importante destacar que este beneficio se otorgará por única vez. Por lo tanto, quienes ya recibieron la asistencia económica anteriormente no podrán acceder a este nuevo pago. Este subsidio, proveniente del Gobierno Nacional, está dirigido a los ciudadanos afectados por los eventos que llevaron a la declaración de desastre nacional realizada por el presidente Gustavo Petro en el último trimestre de 2022. En esta etapa de distribución, solo 1,185 jefes y jefas de hogar en Cartagena, que enfrentaron problemas de registro debido a inconsistencias en sus datos u otras razones, serán elegibles para reclamar esta ayuda. El pago se realizará mediante el sistema de Pico y Cédula en 29 puntos de Supergiros distribuidos estratégicamente en la ciudad, ubicados en los barrios que se mencionan a continuación:</p>
      <p className='mb-4'>Armenia, Arroyo Grande, Barú, Bazurto, Bellavista, Bocachica, Bocagrande, Ceballos, Centro, Colombiatón, Crespo, El Amparo, El Bosque (Avenida Crisanto Luque), El Pozón, El Rubí, El Socorro, Isla Grande, La Boquilla, Manga, Nelson Mandela (sector 18 de Enero), Olaya Herrera (sector 11 de Noviembre), Pasacaballos, San Francisco, San José de los Campanos, Santa Ana, Terminal de Transportes, y Torices.</p>
      <p className='mb-4'>La OAGRD enfatiza que este beneficio es otorgado directamente por el Gobierno Nacional, los cuales constan en el Registro Único Nacional de Damnificados-RUNDA. Se reitera que esta asistencia es de carácter único, por lo que aquellos que ya han recibido el apoyo anteriormente no podràn reclamar nuevamente dicha ayuda.</p>
      <p className='mb-4'>Adicionalmente, se aclara que, cada beneficiario contará con sesenta (60) días calendarios para realizar el cobro del reintegro, contados a partir de la fecha inicial de programación que le corresponde a cada uno. Se insta a la población a no caer en manos de individuos inescrupulosos que, con frecuencia, aprovechan estas situaciones para ofrecer falsas promesas de inclusión en nuevos listados de beneficiarios.</p>
      <p className='mb-4'>Fin del Comunicado No. 85</p>
          </div>
        </div>
      )
  }
  
  
  
  if (params.newsId == "oficina-gestion-riesgo-noticias-003"){
    return (
  <div>
    {/* header */}
    <div className='h-72 w-full bg-mainc'>
      <a className='text-white hover:underline m-20 relative top-10' href="/#news">Volver a las noticias</a>
      {/* <p className='text-white text-sm relative -bottom-10 left-2'>Mayo 18, 2024</p> */}
      </div>
    <div className='mb-32 mx-auto bg-white max-w-6xl '> 
      <img  height={420} width={600} className='mx-auto h-[420px] rounded shadow-2xl relative -top-40 -mb-20' src="/images/noticias/not3.jpeg" alt="noticias1"/>
    <h5 className='max-w-xl mx-auto -mt-10 mb-10 absolute text-center'>13 de agosto, 2024</h5>
      <h1 className='font-bold text-4xl mt-2 mb-10 text-justify text-mainc'>OAGRD insta a la ciudadanía a estar alerta ante posible desarrollo ciclónico en el Atlántico</h1>
      <p className='mb-4'>Cartagena, 9 de agosto de 2024 - La Oficina Asesora para la Gestión del Riesgo de Desastres (OAGRD) informa a la comunidad que una amplia onda tropical ubicada al oeste-suroeste de las Islas de Cabo Verde, proveniente de África, ha incrementado su probabilidad de desarrollo ciclónico al 60% en los próximos siete días, según el más reciente pronóstico emitido por el Centro Nacional de Huracanes de Estados Unidos.</p>
      <p className='mb-4'>El fenómeno, que actualmente produce lluvias y tormentas eléctricas desorganizadas, podría evolucionar lentamente a medida que avanza hacia el oeste en el Océano Atlántico. Se prevé que para próxima semana, al acercarse a las Antillas Mayores (Cuba, Jamaica, Haití, República Dominicana y Puerto Rico), el sistema podría convertirse en una depresión tropical, dado que las condiciones ambientales se tornarán más favorables para su desarrollo. En nuestra ciudad, se podrían experimentar vientos y precipitaciones durante este tránsito.</p>
      <p className='mb-4'>Ante esta situación, el Director de la OAGRD, Daniel Vargas, hizo un llamado a la ciudadanía a mantenerse informada y preparada: “Instamos a la ciudadanía a estar alerta y a seguir las actualizaciones sobre la evolución del sistema a través de fuentes oficiales. Aproveche esta oportunidad para revisar su plan de emergencia familiar y tener a la mano los números de emergencia del Distrito”.</p>
      <p className='mb-4'>La OAGRD recuerda la importancia de estar preparados y de no arrojar basura en los canales, ya que esto puede obstruir el flujo de agua y aumentar el riesgo de inundaciones durante eventos climáticos severos. Asimismo, se insta a la comunidad a asegurar sus viviendas, podar árboles que puedan representar un peligro y mantenerse informados a través de las alertas emitidas por las autoridades locales. La prevención y la preparación son clave para mitigar los impactos de posibles fenómenos ciclónicos en nuestra ciudad.</p>
      <p className='mb-4'>Fin del comunicado No. 85</p>
    </div>
  </div>
)
}
if (params.newsId == "oficina-gestion-riesgo-noticias-004"){
  return (
  <div>
    {/* header */}
    <div className='h-72 w-full bg-mainc'>
      <a className='text-white hover:underline m-20 relative top-10' href="/#news">Volver a las noticias</a>
      {/* <p className='text-white text-sm relative -bottom-10 left-2'>Mayo 18, 2024</p> */}
      </div>
    <div className='mb-32 mx-auto bg-white max-w-6xl '> 
      <img  height={420} width={600} className='mx-auto h-[420px] rounded shadow-2xl relative -top-40 -mb-20' src="/images/noticias/not4.jpeg" alt="noticias1"/>
    <h5 className='max-w-xl mx-auto -mt-10 mb-10 absolute text-center'>7 de agosto, 2024</h5>
      <h1 className='font-bold text-4xl mt-2 mb-10 text-justify text-mainc'>La Onda Tropical No. 27 ha disminuido su formación ciclónica en un 10%, se prevén lluvias leves a intensas en amplios sectores de la ciudad</h1>
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
if (params.newsId == "oficina-gestion-riesgo-noticias-005"){
  return (
  <div>
    {/* header */}
    <div className='h-72 w-full bg-mainc'>
      <a className='text-white hover:underline m-20 relative top-10' href="/#news">Volver a las noticias</a>
      {/* <p className='text-white text-sm relative -bottom-10 left-2'>Mayo 18, 2024</p> */}
      </div>
    <div className='mb-32 mx-auto bg-white max-w-6xl '> 
      <img  height={420} width={600} className='mx-auto h-[420px] rounded shadow-2xl relative -top-40 -mb-20' src="/images/noticias/not5.jpeg" alt="noticias1"/>
    <h5 className='max-w-xl mx-auto -mt-10 mb-10 absolute text-center'>13 de agosto, 2024</h5>
      <h1 className='font-bold text-4xl mt-2 mb-10 text-justify text-mainc'>Con éxito se realizó en Cartagena el simulacro de la operación binacional de Cartagena y Estados Unidos: Promesa Continua 2024</h1>
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
if (params.newsId == "oficina-gestion-riesgo-noticias-006"){
  return (
  <div>
    {/* header */}
    <div className='h-72 w-full bg-mainc'>
      <a className='text-white hover:underline m-20 relative top-10' href="/#news">Volver a las noticias</a>
      {/* <p className='text-white text-sm relative -bottom-10 left-2'>Mayo 18, 2024</p> */}
      </div>
    <div className='mb-32 mx-auto bg-white max-w-6xl '> 
      <img  height={420} width={600} className='mx-auto h-[420px] rounded shadow-2xl relative -top-40 -mb-20' src="/images/noticias/not6.jpeg" alt="noticias1"/>
    <h5 className='max-w-xl mx-auto -mt-10 mb-10 absolute text-center'>13 de agosto, 2024</h5>
      <h1 className='font-bold text-4xl mt-2 mb-10 text-justify text-mainc'>Con éxito se realizó en Cartagena el simulacro de la operación binacional de Cartagena y Estados Unidos: Promesa Continua 2024</h1>
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


}

export default News
