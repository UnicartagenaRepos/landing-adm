// 'use client';

import React from 'react';
import Image from "next/image";
// import Head from 'next/head';
// import { NextSeo } from 'next-seo';
import SEO from '@/components/global/seo';
import Head from 'next/head';
import { Metadata } from 'next';
// import SEO from '@/seo.config';
export const generateMetadata = async (): Promise<Metadata> => {
    return {
      title: 'aplicación móvil  Satapp - oagrd',
      description: 'aplicación móvil Satapp -  Sistema de Alertas Tempranas de Cartagena',
    };
  };

  
const AplicacionMovil = (): JSX.Element  => (
    <>

        {/* <Head>
        <title>Título dinámico</title>
        <meta name="description" content="Descripción de la página" />
      </Head> */}
        {/* <Head> */}
          {/* <title>Aplicacion Mobil Satapp Cartagena</title> */}
          {/* <meta name="description" content="This is a client-side page with dynamic content." />
           <meta name="robots" content="index, follow" />
           <meta property="og:title" content="Client-Side Page" />
      <meta property="og:description" content="A page with client-side rendered content." /> */}
    {/* </Head> */}
        {/* Download the app */}
        <div className="m-20 text-center">
            <h5 className="text-4xl font-bold text-mainc mb-6">DESCARGA NUESTRA APLICACIÓN</h5>
            <p className="mb-20 text-base text-gray-500 sm:text-lg ">Aquí encontrarás toda la información sobre la aplicación móvil del SAT. Descarga la app y accede a herramientas diseñadas para gestionar riesgos y reportar emergencias.</p>
            <div className="flex flex-col gap-4 items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">


                {/* celphone */}
                <div className="block md:flex">
                    <div className=" relative l-10 mx-auto border-gray-800  bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl -rotate-45">
                        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                        <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white ">
                            <Image width={400} height={600} src="/images/login.png" className="w-[272px] h-[572px]" alt="" />
                            <Image width={400} height={600} src="/images/login.png" className="hidden w-[272px] h-[572px]" alt="" />
                        </div>
                    </div>

                    <div className=" z-10 relative mx-auto border-gray-800  bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl">
                        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                        <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white ">
                            <Image width={400} height={600} src="/images/home.png" className=" w-[272px] h-[572px]" alt="" />
                            <Image width={400} height={600} src="/images/home.png" className="hidden w-[272px] h-[572px]" alt="" />
                        </div>
                    </div>

                    <div className=" relative mx-auto border-gray-800  bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl rotate-45">
                        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                        <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white ">
                            <Image width={400} height={600} src="/images/app-image3.jpeg" className=" w-[272px] h-[572px]" alt="" />
                            <Image width={400} height={600} src="/images/app-image3.jpeg" className="hidden w-[272px] h-[572px]" alt="" />
                        </div>
                    </div>

                </div>
                <div className="flex flex-row gap-4">
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.unicartagena.satapp" className="md:mt-10 w-full sm:w-auto bg-mainc shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 ">
                        <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="Image height={420} width={600}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                        <div className="text-left rtl:text-right">
                            <div className="mb-1 text-base">Descargala en</div>
                            <div className="-mt-1 font-sans text-lg font-semibold">Google Play</div>
                        </div>
                    </a>
                    <a target="_blank" href="https://apps.apple.com/us/app/satapp/id6736963760" className="md:mt-10 border w-full sm:w-auto shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  ">
                        {/* <Image src={'/images/'} alt="app store image"/> */}
                        <svg className="me-3 w-8 h-8" fill="#23234c" viewBox="-52.01 0 560.035 560.035" xmlns="http://www.w3.org/2000/svg"><path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655" /></svg>
                        <div className="text-left rtl:text-right">
                            <div className="mb-1 text-base text-mainc">Descargala en</div>
                            <div className="-mt-1 font-sans text-lg font-semibold text-mainc">App Store</div>
                        </div>
                    </a>
                </div>
            </div>


        </div>
        {/* <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-mainc mb-6">Aplicación Móvil</h1>
            <p className="text-lg text-gray-700 max-w-3xl text-center">
                Aquí encontrarás toda la información sobre la aplicación móvil del SAT. Descarga la app y accede a herramientas diseñadas para gestionar riesgos y reportar emergencias.
            </p>
        </div> */}
        {/* ); */}

    
    </>);

export default AplicacionMovil;