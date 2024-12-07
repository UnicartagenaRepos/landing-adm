// pages/news.tsx
import Image from 'next/image';
import Link from 'next/link';

const NewsPage = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Título */}
      <div id="news" className="mx-auto max-w-6xl font-medium text-4xl mb-32 flex items-center justify-center bg-mainc text-white pl-10 h-20 text-center mt-20">
        NOTICIAS
      </div>

      {/* Contenedor de noticias */}
      <div className="max-w-6xl grid gap-10 mb-32 md:grid-cols-3 md:mx-auto">
        {/* Noticia 1 */}
        <div className="h-60 object-cover mb-32 flex flex-col text-justify hover:shadow-2xl border items-center justify-center transition ease-in-out delay-100 cursor-pointer bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <Image width={300} height={600} className="object-cover h-full w-full" src="/images/noticias/not1.jpeg" alt="Noticia 1" />
          <div className="bg-gray-50 pb-6">
            <p className="p-4 text-black hover:text-blue-900">Con éxito se realizó en Cartagena el simulacro de la operación binacional de Cartagena y Estados Unidos: Promesa Continua 2024</p>
            <div className="text-center hover:underline">
              <Link href="/news/oficina-gestion-riesgo-noticias-001" className="bg-mainc text-white rounded-xl px-4 py-1">
                Leer más
              </Link>
            </div>
          </div>
        </div>

        {/* Noticia 2 */}
        <div className="h-60 object-cover mb-32 flex flex-col text-justify hover:shadow-2xl border items-center justify-center transition ease-in-out delay-100 cursor-pointer bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <Image width={400} height={600} className="object-cover h-full w-full" src="/images/noticias/not2.jpeg" alt="Noticia 2" />
          <div className="bg-gray-50 pb-6">
            <p className="p-4 text-black hover:text-blue-900">Se reactiva pago de $500 mil dirigido a afectados por el Fenómeno de La Niña, en 2022, que presentaron errores en su registro de nombre o cédula</p>
            <div className="text-center hover:underline">
              <Link href="/news/oficina-gestion-riesgo-noticias-002" className="bg-mainc text-white rounded-xl px-4 py-1">
                Leer más
              </Link>
            </div>
          </div>
        </div>

        {/* Noticia 3 */}
        <div className="h-60 object-cover mb-32 flex flex-col text-justify hover:shadow-2xl border items-center justify-center transition ease-in-out delay-100 cursor-pointer bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <Image width={400} height={600} className="object-cover h-full w-full" src="/images/noticias/not4.jpeg" alt="Noticia 4" />
          <div className="bg-gray-50 pb-6">
            <p className="p-4 text-black hover:text-blue-900">Con Brigada Cívica, Distriseguridad fomenta la sana convivencia en Corredores Universitarios de Cartagena</p>
            <div className="text-center hover:underline">
              <Link href="/news/oficina-gestion-riesgo-noticias-004" className="bg-mainc text-white rounded-xl px-4 py-1">
                Leer más
              </Link>
            </div>
          </div>
        </div>

        {/* Noticia 4 */}
        <div className="h-60 object-cover mb-32 flex flex-col text-justify hover:shadow-2xl border items-center justify-center transition ease-in-out delay-100 cursor-pointer bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <Image width={400} height={600} className="object-cover h-full w-full" src="/images/noticias/not5.jpeg" alt="Noticia 5" />
          <div className="bg-gray-50 pb-6">
            <p className="p-4 text-black hover:text-blue-900">La Onda Tropical No. 27 ha disminuido su formación ciclónica en un 10%, se prevén lluvias leves a intensas en amplios sectores de la ciudad</p>
            <div className="text-center hover:underline">
              <Link href="/news/oficina-gestion-riesgo-noticias-005" className="bg-mainc text-white rounded-xl px-4 py-1">
                Leer más
              </Link>
            </div>
          </div>
        </div>

        {/* Noticia 5 */}
        <div className="h-60 object-cover mb-32 flex flex-col text-justify hover:shadow-2xl border items-center justify-center transition ease-in-out delay-100 cursor-pointer bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <Image width={400} height={600} className="object-cover h-full w-full" src="/images/noticias/not6.jpeg" alt="Noticia 6" />
          <div className="bg-gray-50 pb-6">
            <p className="p-4 text-black hover:text-blue-900">Distriseguridad continúa atendiendo el llamado de las comunidades con trabajo articulado por la seguridad</p>
            <div className="text-center hover:underline">
              <Link href="/news/oficina-gestion-riesgo-noticias-006" className="bg-mainc text-white rounded-xl px-4 py-1">
                Leer más
              </Link>
            </div>
          </div>
        </div>

        {/* Noticia 6 */}
        <div className="h-60 object-cover flex flex-col text-justify hover:shadow-2xl border items-center justify-center transition ease-in-out delay-100 cursor-pointer bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <Image width={400} height={600} className="object-cover h-full w-full" src="/images/noticias/not3.jpeg" alt="Noticia 3" />
          <div className="bg-gray-50 pb-6">
            <p className="p-4 text-black hover:text-blue-900">OAGRD insta a la ciudadanía a estar alerta ante posible desarrollo ciclónico en el Atlántico</p>
            <div className="text-center hover:underline">
              <Link href="/news/oficina-gestion-riesgo-noticias-003" className="bg-mainc text-white rounded-xl px-4 py-1">
                Leer más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
