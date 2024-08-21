import React from 'react'

function delete_account() {
  return (
    <div className='my-20 flex flex-col max-w-5xl mx-auto  justify-center items-center'>
      <div className='text-4xl font-bold'>Eliminar Cuenta</div>
      <img src="images/delete_account.webp" />
      <div>
        <h1 className='font-semibold text-xl'>Pasos para eliminar cuentas creadas dentro de la aplicacion Satapp</h1>
        <ul className='items-start justify-start font-medium'>
            <li>1. Ingresar a la aplicacion Satapp desde tu dispositivo movil</li>
            <li>2. Click en el icono de persona que esta en la parte superior derecha.</li>
            <li>3. click en Eliminar cuenta</li>
        </ul>
      </div>
    </div>
  )
}

export default delete_account
