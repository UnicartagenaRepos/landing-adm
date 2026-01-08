import React from 'react'
import { Mail, AlertTriangle, Smartphone, Clock, Shield, Trash2 } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'Eliminación de Cuenta - SatApp Oficial OAGRD',
  description: 'Página oficial para solicitar la eliminación de cuenta de SatApp Oficial - Sistema de Alertas Tempranas de la OAGRD, Alcaldía de Cartagena de Indias',
}

function DeleteAccount() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-5xl mx-auto'>
        {/* Header */}
        <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 text-center'>
          <div className='flex justify-center mb-6'>
            <Image
              src="/oagrd-logo.png"
              alt="Logo OAGRD"
              width={120}
              height={120}
              className='object-contain'
            />
          </div>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-3'>
            Eliminación de Cuenta
          </h1>
          <h2 className='text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2'>
            SatApp Oficial
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 font-medium'>
            Oficina Asesora para la Gestión del Riesgo de Desastres (OAGRD)
          </p>
          <p className='text-gray-500 dark:text-gray-400'>
            Alcaldía de Cartagena de Indias, Colombia
          </p>
        </div>

        {/* Información Principal */}
        <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8'>
          <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-3 border-b-2 border-blue-500'>
            Solicitud de Eliminación de Cuenta
          </h3>
          <p className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
            Si deseas eliminar tu cuenta de <strong>SatApp Oficial</strong>, toda tu información personal
            y datos asociados serán eliminados permanentemente de nuestros sistemas.
          </p>
          <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
            Esta página te proporciona toda la información necesaria sobre el proceso de eliminación
            de cuenta y los datos que serán eliminados.
          </p>
        </div>

        {/* Advertencia */}
        <div className='bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-lg p-6 mb-8'>
          <div className='flex items-start'>
            <AlertTriangle className='h-6 w-6 text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0 mt-1' />
            <div>
              <h3 className='text-xl font-bold text-yellow-800 dark:text-yellow-300 mb-3'>
                ⚠️ Información Importante
              </h3>
              <p className='text-yellow-800 dark:text-yellow-200 font-semibold mb-3'>
                La eliminación de cuenta es permanente e irreversible.
              </p>
              <p className='text-yellow-700 dark:text-yellow-300 mb-3'>
                Una vez procesada tu solicitud, no podrás recuperar tu cuenta ni los datos asociados.
              </p>

              <p className='text-yellow-800 dark:text-yellow-200 font-semibold mt-4 mb-2'>
                Al eliminar tu cuenta se eliminarán:
              </p>
              <ul className='list-disc list-inside space-y-2 text-yellow-700 dark:text-yellow-300 ml-4'>
                <li>Información de perfil (nombre, email, foto de perfil)</li>
                <li>Historial completo de reportes realizados</li>
                <li>Asignaciones y seguimientos de casos</li>
                <li>Configuraciones personalizadas de la aplicación</li>
                <li>Preferencias de notificaciones</li>
                <li>Todos los datos personales asociados a tu cuenta</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Método 1: Email */}
        <div className='bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-lg p-6 mb-8'>
          <div className='flex items-start'>
            <Mail className='h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1' />
            <div className='flex-1'>
              <h3 className='text-xl font-bold text-blue-900 dark:text-blue-300 mb-4'>
                📧 Cómo Solicitar la Eliminación por Email
              </h3>

              <div className='bg-white dark:bg-gray-800 rounded-lg p-4 mb-4'>
                <p className='text-gray-700 dark:text-gray-300 mb-2'>
                  <strong className='text-gray-900 dark:text-white'>Email de contacto:</strong>{' '}
                  <a
                    href="mailto:contacto@oagrd.org"
                    className='text-blue-600 dark:text-blue-400 hover:underline font-medium'
                  >
                    contacto@oagrd.org
                  </a>
                </p>
                <p className='text-gray-700 dark:text-gray-300'>
                  <strong className='text-gray-900 dark:text-white'>Asunto del correo:</strong>{' '}
                  Solicitud de Eliminación de Cuenta - SatApp Oficial
                </p>
              </div>

              <p className='text-blue-900 dark:text-blue-200 font-semibold mb-2'>
                Información que debes incluir en tu solicitud:
              </p>
              <ul className='list-disc list-inside space-y-2 text-blue-800 dark:text-blue-300 ml-4 mb-4'>
                <li>Nombre completo registrado en la aplicación</li>
                <li>Email asociado a tu cuenta de SatApp Oficial</li>
                <li>Motivo de la eliminación (opcional)</li>
                <li>Confirmación de que entiendes que la eliminación es permanente</li>
              </ul>

              <div className='bg-white dark:bg-gray-800 rounded-lg p-4 mb-4'>
                <div className='flex items-center mb-2'>
                  <Clock className='h-5 w-5 text-blue-600 dark:text-blue-400 mr-2' />
                  <p className='text-gray-700 dark:text-gray-300'>
                    <strong className='text-gray-900 dark:text-white'>Tiempo de procesamiento:</strong>{' '}
                    5 a 10 días hábiles
                  </p>
                </div>
                <p className='text-gray-600 dark:text-gray-400 text-sm'>
                  Recibirás una confirmación por email cuando tu cuenta haya sido eliminada completamente.
                </p>
              </div>

              <a
                href="mailto:contacto@oagrd.org?subject=Solicitud de Eliminación de Cuenta - SatApp Oficial&body=Nombre completo:%0D%0AEmail registrado:%0D%0AMotivo (opcional):%0D%0A%0D%0AConfirmo que entiendo que la eliminación es permanente e irreversible."
                className='inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl'
              >
                <Mail className='h-5 w-5 mr-2' />
                Enviar Solicitud por Email
              </a>
            </div>
          </div>
        </div>

        {/* Método 2: Desde la App */}
        <div className='bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-6 mb-8'>
          <div className='flex items-start'>
            <Smartphone className='h-6 w-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-1' />
            <div className='flex-1'>
              <h3 className='text-xl font-bold text-green-900 dark:text-green-300 mb-4'>
                📱 Alternativa: Eliminar desde la Aplicación
              </h3>

              <div className='mb-4'>
                <Image
                  src="/images/delete_account.webp"
                  alt="Eliminar cuenta desde la app"
                  width={600}
                  height={400}
                  className='rounded-lg shadow-md w-full object-cover'
                />
              </div>

              <p className='text-green-900 dark:text-green-200 mb-4'>
                También puedes eliminar tu cuenta directamente desde la aplicación móvil <strong>SatApp Oficial</strong>:
              </p>

              <ol className='space-y-3 text-green-800 dark:text-green-300 mb-4'>
                <li className='flex items-start'>
                  <span className='font-bold mr-2 text-green-600 dark:text-green-400'>1.</span>
                  <span>Abre la aplicación <strong>SatApp Oficial</strong></span>
                </li>
                <li className='flex items-start'>
                  <span className='font-bold mr-2 text-green-600 dark:text-green-400'>2.</span>
                  <span>Inicia sesión con tu cuenta</span>
                </li>
                <li className='flex items-start'>
                  <span className='font-bold mr-2 text-green-600 dark:text-green-400'>3.</span>
                  <span>Ve a tu <strong>Perfil</strong> (icono de usuario en la parte superior derecha)</span>
                </li>
                <li className='flex items-start'>
                  <span className='font-bold mr-2 text-green-600 dark:text-green-400'>4.</span>
                  <span>Selecciona <strong>&quot;Configuración&quot;</strong> o <strong>&quot;Ajustes&quot;</strong></span>
                </li>
                <li className='flex items-start'>
                  <span className='font-bold mr-2 text-green-600 dark:text-green-400'>5.</span>
                  <span>Busca la opción <strong>&quot;Eliminar Cuenta&quot;</strong></span>
                </li>
                <li className='flex items-start'>
                  <span className='font-bold mr-2 text-green-600 dark:text-green-400'>6.</span>
                  <span>Lee la advertencia y confirma la eliminación</span>
                </li>
                <li className='flex items-start'>
                  <span className='font-bold mr-2 text-green-600 dark:text-green-400'>7.</span>
                  <span>Tu cuenta será eliminada inmediatamente</span>
                </li>
              </ol>

              <div className='bg-white dark:bg-gray-800 rounded-lg p-4'>
                <p className='text-green-800 dark:text-green-300'>
                  <strong>Nota:</strong> La eliminación desde la app es instantánea y no requiere esperar el tiempo de procesamiento.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Preguntas Frecuentes */}
        <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8'>
          <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500'>
            ❓ Preguntas Frecuentes
          </h3>

          <div className='space-y-6'>
            <div>
              <p className='font-bold text-lg text-gray-900 dark:text-white mb-2'>
                ¿Puedo recuperar mi cuenta después de eliminarla?
              </p>
              <p className='text-gray-700 dark:text-gray-300'>
                No. La eliminación de cuenta es permanente e irreversible. Una vez eliminada,
                no podrás recuperar tu cuenta ni tus datos.
              </p>
            </div>

            <div>
              <p className='font-bold text-lg text-gray-900 dark:text-white mb-2'>
                ¿Qué pasa con mis reportes de emergencias?
              </p>
              <p className='text-gray-700 dark:text-gray-300'>
                Tus reportes personales serán eliminados. Sin embargo, los datos agregados y anónimos
                pueden mantenerse con fines estadísticos y de gestión de riesgos.
              </p>
            </div>

            <div>
              <p className='font-bold text-lg text-gray-900 dark:text-white mb-2'>
                ¿Puedo crear una nueva cuenta después?
              </p>
              <p className='text-gray-700 dark:text-gray-300'>
                Sí, puedes crear una nueva cuenta en cualquier momento descargando la aplicación
                SatApp Oficial y registrándote nuevamente.
              </p>
            </div>

            <div>
              <p className='font-bold text-lg text-gray-900 dark:text-white mb-2'>
                ¿Necesito desinstalar la aplicación?
              </p>
              <p className='text-gray-700 dark:text-gray-300'>
                No es necesario, pero puedes desinstalar la aplicación después de eliminar tu cuenta si lo deseas.
              </p>
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8'>
          <div className='flex items-start mb-4'>
            <Shield className='h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1' />
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
              📞 Contacto y Soporte
            </h3>
          </div>

          <p className='text-gray-700 dark:text-gray-300 mb-4'>
            Si tienes dudas sobre el proceso de eliminación de cuenta o necesitas asistencia, puedes contactarnos:
          </p>

          <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-6 space-y-3'>
            <p className='text-gray-700 dark:text-gray-300'>
              <strong className='text-gray-900 dark:text-white'>Email:</strong>{' '}
              <a
                href="mailto:contacto@oagrd.org"
                className='text-blue-600 dark:text-blue-400 hover:underline'
              >
                contacto@oagrd.org
              </a>
            </p>
            <p className='text-gray-700 dark:text-gray-300'>
              <strong className='text-gray-900 dark:text-white'>Sitio web:</strong>{' '}
              <a
                href="https://www.satcartagena.oagrd.org"
                target="_blank"
                rel="noopener noreferrer"
                className='text-blue-600 dark:text-blue-400 hover:underline'
              >
                www.satcartagena.oagrd.org
              </a>
            </p>
            <p className='text-gray-700 dark:text-gray-300'>
              <strong className='text-gray-900 dark:text-white'>Horario de atención:</strong>{' '}
              Lunes a Viernes, 8:00 AM - 5:00 PM (Hora de Colombia)
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center'>
          <p className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
            SatApp Oficial
          </p>
          <p className='text-gray-600 dark:text-gray-400 mb-1'>
            Sistema de Alertas Tempranas
          </p>
          <p className='text-gray-600 dark:text-gray-400 mb-1'>
            Oficina Asesora para la Gestión del Riesgo de Desastres (OAGRD)
          </p>
          <p className='text-gray-600 dark:text-gray-400 mb-4'>
            Alcaldía de Cartagena de Indias, Colombia
          </p>
          <div className='flex justify-center space-x-4 text-sm'>
            <a
              href="https://www.satcartagena.oagrd.org"
              target="_blank"
              rel="noopener noreferrer"
              className='text-blue-600 dark:text-blue-400 hover:underline'
            >
              www.satcartagena.oagrd.org
            </a>
            <span className='text-gray-400'>|</span>
            <a
              href="mailto:contacto@oagrd.org"
              className='text-blue-600 dark:text-blue-400 hover:underline'
            >
              contacto@oagrd.org
            </a>
          </div>
          <p className='text-gray-500 dark:text-gray-500 text-sm mt-4'>
            © 2026 OAGRD - Alcaldía de Cartagena de Indias. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DeleteAccount
