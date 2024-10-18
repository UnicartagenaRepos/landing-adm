'use client'

import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { clients } from "@/lib/constant";
import Image from "next/image";
import { motion } from "framer-motion";
import { NextPageContext } from 'next'
import { FaPhoneAlt } from "react-icons/fa";

import { Dropdown } from "flowbite-react";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { TypewriterEffectSmooth } from "@/components/global/typewriter-effect";
import { useCallback, useEffect, useState } from "react";
import { Map, Pin, APIProvider, InfoWindow, AdvancedMarker,   Marker, useAdvancedMarkerRef,} from "@vis.gl/react-google-maps"
import Link from "next/link";




const myArray = [
  {
    "NOMBRE": "ANTONIO JOSE DE SUCRE",
    "UCG": 11,
    "LOCALIDAD": "LI",
    "LATITUD": 10.370012,
    "LONGITUD": -75.496282
  },
  {
    "NOMBRE": "ARARCA",
    "UCG": 20,
    "LOCALIDAD": "LH",
    "LATITUD": 10.261297,
    "LONGITUD": -75.555584
  },
  {
    "NOMBRE": "ARCHIPIELAGO SAN BERNARDO",
    "UCG": 20,
    "LOCALIDAD": "LH",
    "LATITUD": 9.785936,
    "LONGITUD": -75.859085
  },
  {
    "NOMBRE": "ARROYO DE LAS CANOAS",
    "UCG": 20,
    "LOCALIDAD": "LV",
    "LATITUD": 10.640209,
    "LONGITUD": -75.406602
  },
  {
    "NOMBRE": "ARROYO DE PIEDRA",
    "UCG": 20,
    "LOCALIDAD": "LV",
    "LATITUD": 10.6085,
    "LONGITUD": -75.446674
  },
  {
    "NOMBRE": "ARROYO GRANDE",
    "UCG": 20,
    "LOCALIDAD": "LV",
    "LATITUD": 10.65623,
    "LONGITUD": -75.347855
  },
  {
    "NOMBRE": "ARROZ BARATO",
    "UCG": 11,
    "LOCALIDAD": "LI",
    "LATITUD": 10.357049,
    "LONGITUD": -75.491568
  },
  {
    "NOMBRE": "BARRIO CHINO",
    "UCG": 9,
    "LOCALIDAD": "LH",
    "LATITUD": 10.4131,
    "LONGITUD": -75.525694
  },
  {
    "NOMBRE": "BARU",
    "UCG": 20,
    "LOCALIDAD": "LH",
    "LATITUD": 10.142596,
    "LONGITUD": -75.684575
  },
  {
    "NOMBRE": "BAYUNCA",
    "UCG": 20,
    "LOCALIDAD": "LV",
    "LATITUD": 10.534871,
    "LONGITUD": -75.396508
  },
  {
    "NOMBRE": "BOCACHICA",
    "UCG": 20,
    "LOCALIDAD": "LH",
    "LATITUD": 10.32473,
    "LONGITUD": -75.580879
  },
  {
    "NOMBRE": "BOSTON",
    "UCG": 4,
    "LOCALIDAD": "LV",
    "LATITUD": 10.411827,
    "LONGITUD": -75.508197
  },
  {
    "NOMBRE": "BUENOS AIRES",
    "UCG": 8,
    "LOCALIDAD": "LH",
    "LATITUD": 10.392496,
    "LONGITUD": -75.492168
  },
  {
    "NOMBRE": "CAMILO TORRES",
    "UCG": 14,
    "LOCALIDAD": "LI",
    "LATITUD": 10.372893,
    "LONGITUD": -75.47914
  },
  {
    "NOMBRE": "CAÑO DEL ORO",
    "UCG": 20,
    "LOCALIDAD": "LH",
    "LATITUD": 10.340671,
    "LONGITUD": -75.547344
  },
  {
    "NOMBRE": "CEBALLOS",
    "UCG": 11,
    "LOCALIDAD": "LI",
    "LATITUD": 10.386007,
    "LONGITUD": -75.504888
  },
  {
    "NOMBRE": "Cerro de Albornoz",
    "UCG": "",
    "LOCALIDAD": "",
    "LATITUD": 10.364107,
    "LONGITUD": -75.494891
  },
  {
    "NOMBRE": "Cerro de la Popa",
    "UCG": "",
    "LOCALIDAD": "",
    "LATITUD": 10.424396,
    "LONGITUD": -75.525254
  },
  {
    "NOMBRE": "CERRO DE LA POPA",
    "UCG": 2,
    "LOCALIDAD": "LH",
    "LATITUD": 10.423069,
    "LONGITUD": -75.525215
  },
  {
    "NOMBRE": "CHAPACUA",
    "UCG": 7,
    "LOCALIDAD": "LV",
    "LATITUD": 10.400851,
    "LONGITUD": -75.479247
  },
  {
    "NOMBRE": "CHIQUINQUIRA",
    "UCG": 5,
    "LOCALIDAD": "LV",
    "LATITUD": 10.403135,
    "LONGITUD": -75.492137
  },
  {
    "NOMBRE": "CIUDADELA 2000",
    "UCG": 14,
    "LOCALIDAD": "LI",
    "LATITUD": 10.371813,
    "LONGITUD": -75.472012
  },
  {
    "NOMBRE": "CRESPO",
    "UCG": 1,
    "LOCALIDAD": "LH",
    "LATITUD": 10.446421,
    "LONGITUD": -75.516646
  },
  {
    "NOMBRE": "DANIEL LEMAITRE",
    "UCG": 3,
    "LOCALIDAD": "LH",
    "LATITUD": 10.437485,
    "LONGITUD": -75.520205
  },
  {
    "NOMBRE": "EL EDUCADOR",
    "UCG": 15,
    "LOCALIDAD": "LI",
    "LATITUD": 10.373664,
    "LONGITUD": -75.483487
  },
  {
    "NOMBRE": "EL POZON",
    "UCG": 6,
    "LOCALIDAD": "LV",
    "LATITUD": 10.413374,
    "LONGITUD": -75.460108
  },
  {
    "NOMBRE": "EL PRADO",
    "UCG": 9,
    "LOCALIDAD": "LH",
    "LATITUD": 10.409427,
    "LONGITUD": -75.519736
  },
  {
    "NOMBRE": "FLOR DEL CAMPO",
    "UCG": 6,
    "LOCALIDAD": "LV",
    "LATITUD": 10.419287,
    "LONGITUD": -75.44828
  },
  {
    "NOMBRE": "FREDONIA",
    "UCG": 6,
    "LOCALIDAD": "LV",
    "LATITUD": 10.408296,
    "LONGITUD": -75.473993
  },
  {
    "NOMBRE": "HENEQUEN",
    "UCG": 11,
    "LOCALIDAD": "LI",
    "LATITUD": 10.365167,
    "LONGITUD": -75.495915
  },
  {
    "NOMBRE": "ISLA FUERTE",
    "UCG": 20,
    "LOCALIDAD": "LH",
    "LATITUD": 9.380491,
    "LONGITUD": -76.179115
  },
  {
    "NOMBRE": "ISLA MUCURA",
    "UCG": 20,
    "LOCALIDAD": "LH",
    "LATITUD": 9.78174,
    "LONGITUD": -75.872449
  },
  {
    "NOMBRE": "ISLAS DEL ROSARIO",
    "UCG": 20,
    "LOCALIDAD": "LH",
    "LATITUD": 10.176826,
    "LONGITUD": -75.74269
  },
  {
    "NOMBRE": "LA BOQUILLA",
    "UCG": 20,
    "LOCALIDAD": "LV",
    "LATITUD": 10.475328,
    "LONGITUD": -75.496534
  },
  {
    "NOMBRE": "LA CAMPIÑA",
    "UCG": 8,
    "LOCALIDAD": "LH",
    "LATITUD": 10.394003,
    "LONGITUD": -75.502073
  },
  {
    "NOMBRE": "LA CANDELARIA",
    "UCG": 4,
    "LOCALIDAD": "LV",
    "LATITUD": 10.413274,
    "LONGITUD": -75.512847
  },
  {
    "NOMBRE": "LA ESPERANZA",
    "UCG": 4,
    "LOCALIDAD": "LV",
    "LATITUD": 10.415311,
    "LONGITUD": -75.51791
  },
  {
    "NOMBRE": "LA MARIA",
    "UCG": 4,
    "LOCALIDAD": "LV",
    "LATITUD": 10.421586,
    "LONGITUD": -75.519124
  },
  {
    "NOMBRE": "LA QUINTA",
    "UCG": 4,
    "LOCALIDAD": "LV",
    "LATITUD": 10.416599,
    "LONGITUD": -75.525284
  },
  {
    "NOMBRE": "LA VICTORIA",
    "UCG": 15,
    "LOCALIDAD": "LI",
    "LATITUD": 10.376234,
    "LONGITUD": -75.48595
  },
  {
    "NOMBRE": "LAS BRISAS",
    "UCG": 9,
    "LOCALIDAD": "LH",
    "LATITUD": 10.397044,
    "LONGITUD": -75.508404
  },
  {
    "NOMBRE": "LAS PALMERAS",
    "UCG": 7,
    "LOCALIDAD": "LV",
    "LATITUD": 10.400016,
    "LONGITUD": -75.472439
  },
  {
    "NOMBRE": "LO AMADOR",
    "UCG": 2,
    "LOCALIDAD": "LH",
    "LATITUD": 10.422205,
    "LONGITUD": -75.531397
  },
  {
    "NOMBRE": "LOMAS DEL MARION",
    "UCG": "",
    "LOCALIDAD": "",
    "LATITUD": 10.396418,
    "LONGITUD": -75.506943
  },
  {
    "NOMBRE": "LOS CARACOLES",
    "UCG": 12,
    "LOCALIDAD": "LI",
    "LATITUD": 10.387956,
    "LONGITUD": -75.492221
  },
  {
    "NOMBRE": "MANZANILLO DEL MAR",
    "UCG": 20,
    "LOCALIDAD": "LV",
    "LATITUD": 10.515287,
    "LONGITUD": -75.497479
  },
  {
    "NOMBRE": "MARIA CANO",
    "UCG": 14,
    "LOCALIDAD": "LI",
    "LATITUD": 10.373243,
    "LONGITUD": -75.480279
  },
  {
    "NOMBRE": "MEMBRILLAL",
    "UCG": 20,
    "LOCALIDAD": "LI",
    "LATITUD": 10.334275,
    "LONGITUD": -75.477898
  },
  {
    "NOMBRE": "NARIÑO",
    "UCG": 2,
    "LOCALIDAD": "LH",
    "LATITUD": 10.425177,
    "LONGITUD": -75.53007
  },
  {
    "NOMBRE": "NELSON MANDELA",
    "UCG": 14,
    "LOCALIDAD": "LI",
    "LATITUD": 10.365139,
    "LONGITUD": -75.478918
  },
  {
    "NOMBRE": "NUEVO BOSQUE",
    "UCG": 10,
    "LOCALIDAD": "LH",
    "LATITUD": 10.390572,
    "LONGITUD": -75.506824
  },
  {
    "NOMBRE": "NUEVO PARAISO",
    "UCG": 6,
    "LOCALIDAD": "LV",
    "LATITUD": 10.40682,
    "LONGITUD": -75.470569
  },
  {
    "NOMBRE": "OLAYA ST. LA MAGDALENA",
    "UCG": 6,
    "LOCALIDAD": "LV",
    "LATITUD": 10.405078,
    "LONGITUD": -75.476717
  },
  {
    "NOMBRE": "OLAYA ST. LA PUNTILLA",
    "UCG": 6,
    "LOCALIDAD": "LV",
    "LATITUD": 10.408889,
    "LONGITUD": -75.480317
  },
  {
    "NOMBRE": "OLAYA ST. PLAYA BLANCA",
    "UCG": 6,
    "LOCALIDAD": "LV",
    "LATITUD": 10.407298,
    "LONGITUD": -75.478893
  },
  {
    "NOMBRE": "OLAYA ST. PROGRESO",
    "UCG": 6,
    "LOCALIDAD": "LV",
    "LATITUD": 10.408685,
    "LONGITUD": -75.482472
  },
  {
    "NOMBRE": "OLAYA ST. RAFAEL NUÑEZ",
    "UCG": 5,
    "LOCALIDAD": "LV",
    "LATITUD": 10.411708,
    "LONGITUD": -75.499043
  },
  {
    "NOMBRE": "OLAYA ST. RICAURTE",
    "UCG": 5,
    "LOCALIDAD": "LV",
    "LATITUD": 10.410869,
    "LONGITUD": -75.4905
  },
  {
    "NOMBRE": "OLAYA ST. ZARABANDA",
    "UCG": 6,
    "LOCALIDAD": "LV",
    "LATITUD": 10.409491,
    "LONGITUD": -75.476917
  },
  {
    "NOMBRE": "OLAYA ST.11 DE NOVIEMBRE",
    "UCG": 5,
    "LOCALIDAD": "LV",
    "LATITUD": 10.410354,
    "LONGITUD": -75.494667
  },
  {
    "NOMBRE": "PABLO VI - II",
    "UCG": 2,
    "LOCALIDAD": "LH",
    "LATITUD": 10.435149,
    "LONGITUD": -75.524289
  },
  {
    "NOMBRE": "PASACABALLOS",
    "UCG": 20,
    "LOCALIDAD": "LI",
    "LATITUD": 10.283854,
    "LONGITUD": -75.515986
  },
  {
    "NOMBRE": "PETARE",
    "UCG": 2,
    "LOCALIDAD": "LH",
    "LATITUD": 10.433307,
    "LONGITUD": -75.525843
  },
  {
    "NOMBRE": "PIEDRA DE BOLIVAR",
    "UCG": 9,
    "LOCALIDAD": "LH",
    "LATITUD": 10.401904,
    "LONGITUD": -75.508695
  },
  {
    "NOMBRE": "POLICARPA",
    "UCG": 11,
    "LOCALIDAD": "LI",
    "LATITUD": 10.346264,
    "LONGITUD": -75.490561
  },
  {
    "NOMBRE": "PONTEZUELA",
    "UCG": 20,
    "LOCALIDAD": "LV",
    "LATITUD": 10.543737,
    "LONGITUD": -75.439687
  },
  {
    "NOMBRE": "PUERTA DE HIERRO",
    "UCG": 11,
    "LOCALIDAD": "LI",
    "LATITUD": 10.356236,
    "LONGITUD": -75.501542
  },
  {
    "NOMBRE": "PUERTO BELLO",
    "UCG": 20,
    "LOCALIDAD": "LV",
    "LATITUD": 10.48266,
    "LONGITUD": -75.474679
  },
  {
    "NOMBRE": "PUNTA ARENAS",
    "UCG": 20,
    "LOCALIDAD": "LH",
    "LATITUD": 10.363899,
    "LONGITUD": -75.54896
  },
  {
    "NOMBRE": "PUNTA CANOA",
    "UCG": 20,
    "LOCALIDAD": "LV",
    "LATITUD": 10.557165,
    "LONGITUD": -75.500354
  },
  {
    "NOMBRE": "REPUBLICA DEL LIBANO",
    "UCG": 5,
    "LOCALIDAD": "LV",
    "LATITUD": 10.4124,
    "LONGITUD": -75.504276
  },
  {
    "NOMBRE": "SAN BERNARDO",
    "UCG": 3,
    "LOCALIDAD": "LH",
    "LATITUD": 10.428803,
    "LONGITUD": -75.520033
  },
  {
    "NOMBRE": "SAN FRANCISCO",
    "UCG": 3,
    "LOCALIDAD": "LH",
    "LATITUD": 10.430546,
    "LONGITUD": -75.516332
  },
  {
    "NOMBRE": "SAN JOSE DE LOS CAMPANOS",
    "UCG": 13,
    "LOCALIDAD": "LI",
    "LATITUD": 10.385955,
    "LONGITUD": -75.457749
  },
  {
    "NOMBRE": "SAN PEDRO MARTIR",
    "UCG": 15,
    "LOCALIDAD": "LI",
    "LATITUD": 10.371353,
    "LONGITUD": -75.489391
  },
  {
    "NOMBRE": "SIETE DE AGOSTO",
    "UCG": 3,
    "LOCALIDAD": "LH",
    "LATITUD": 10.438995,
    "LONGITUD": -75.514957
  },
  {
    "NOMBRE": "TIERRA BOMBA",
    "UCG": 20,
    "LOCALIDAD": "LH",
    "LATITUD": 10.376369,
    "LONGITUD": -75.574046
  },
  {
    "NOMBRE": "TORICES",
    "UCG": 2,
    "LOCALIDAD": "LH",
    "LATITUD": 10.43017,
    "LONGITUD": -75.533272
  },
  {
    "NOMBRE": "TRECE DE JUNIO",
    "UCG": 7,
    "LOCALIDAD": "LV",
    "LATITUD": 10.402919,
    "LONGITUD": -75.484218
  },
  {
    "NOMBRE": "URBANIZACION SIMON BOLIVAR",
    "UCG": 14,
    "LOCALIDAD": "LI",
    "LATITUD": 10.378211,
    "LONGITUD": -75.46587
  },
  {
    "NOMBRE": "VEINTE DE JULIO SUR",
    "UCG": 11,
    "LOCALIDAD": "LI",
    "LATITUD": 10.373743,
    "LONGITUD": -75.499012
  },
  {
    "NOMBRE": "VILLA ESTRELLA",
    "UCG": 6,
    "LOCALIDAD": "LV",
    "LATITUD": 10.40428,
    "LONGITUD": -75.464522
  },
  {
    "NOMBRE": "VILLA HERMOSA",
    "UCG": 14,
    "LOCALIDAD": "LI",
    "LATITUD": 10.354933,
    "LONGITUD": -75.485253
  },
  {
    "NOMBRE": "VILLA ROSA",
    "UCG": 11,
    "LOCALIDAD": "LI",
    "LATITUD": 10.366366,
    "LONGITUD": -75.499125
  },
  {
    "NOMBRE": "VILLA ROSITA",
    "UCG": 13,
    "LOCALIDAD": "LI",
    "LATITUD": 10.397162,
    "LONGITUD": -75.469562
  },
  {
    "NOMBRE": "VILLAS DE ARANJUEZ",
    "UCG": 6,
    "LOCALIDAD": "LV",
    "LATITUD": 10.41999,
    "LONGITUD": -75.443561
  },
  {
    "NOMBRE": "VILLAS DE LA CANDELARIA",
    "UCG": 6,
    "LOCALIDAD": "LV",
    "LATITUD": 10.404658,
    "LONGITUD": -75.461486
  },
  {
    "NOMBRE": "VISTA HERMOSA",
    "UCG": 15,
    "LOCALIDAD": "LI",
    "LATITUD": 10.377442,
    "LONGITUD": -75.494996
  },
  {
    "NOMBRE": "ZARAGOCILLA",
    "UCG": 8,
    "LOCALIDAD": "LH",
    "LATITUD": 10.400358,
    "LONGITUD": -75.503419
  }
];



// export async function getServerSideProps() {
//     const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=10.4195841&lon=-75.5271224&lang=es&units=metric&appid=cc8411344583128d1ea0437c84b2f589`);
//     const data = await res.json();
//     return { props: { data } }
// }

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
  }




// export type TreeMarkerProps = {
//   tree: Tree;
//   onClick: (tree: Tree) => void;
//   setMarkerRef: (marker: Marker | null, key: string) => void;
// };


export default function Home() {
  // const ref = useCallback(
  //   (marker: google.maps.marker.AdvancedMarkerElement) =>
  //     setMarkerRef(marker, tree.key),
  //   [setMarkerRef, tree.key]
  // );


  // const [infoWindowCombasShown, setInfoWindowCombasShown] = useState(false);


  const [markerRef, marker] = useAdvancedMarkerRef();
  const [markerRef2, marker2] = useAdvancedMarkerRef();
  const [markerRef3, marker3] = useAdvancedMarkerRef();
  const [markerRef4, marker4] = useAdvancedMarkerRef();
  const [markerRef5, marker5] = useAdvancedMarkerRef();
  const [markerRef6, marker6] = useAdvancedMarkerRef();
  const [markerRef7, marker7] = useAdvancedMarkerRef();
  const [markerRef8, marker8] = useAdvancedMarkerRef();

  const [infoWindowShown, setInfoWindowShown] = useState(false);
  const [infoWindowShown2, setInfoWindowShown2] = useState(false);
  const [infoWindowShown3, setInfoWindowShown3] = useState(false);
  const [infoWindowShown4, setInfoWindowShown4] = useState(false);
  const [infoWindowShown5, setInfoWindowShown5] = useState(false);
  const [infoWindowShown6, setInfoWindowShown6] = useState(false);
  const [infoWindowShown7, setInfoWindowShown7] = useState(false);
  const [infoWindowShown8, setInfoWindowShown8] = useState(false);
  
  // // clicking the marker will toggle the infowindow
  const handleMarkerClick = useCallback(
    () => setInfoWindowShown(isShown => !isShown),
    []
  );

  const handleMarkerClick2 = useCallback(
    () => setInfoWindowShown2(isShown => !isShown),
    []
  );
  const handleMarkerClick3 = useCallback(
    () => setInfoWindowShown3(isShown => !isShown),
    []
  );
  const handleMarkerClick4 = useCallback(
    () => setInfoWindowShown4(isShown => !isShown),
    []
  );
  const handleMarkerClick5 = useCallback(
    () => setInfoWindowShown5(isShown => !isShown),
    []
  );
  const handleMarkerClick6 = useCallback(
    () => setInfoWindowShown6(isShown => !isShown),
    []
  );
  const handleMarkerClick7 = useCallback(
    () => setInfoWindowShown7(isShown => !isShown),
    []
  );

  const handleMarkerClick8 = useCallback(
    () => setInfoWindowShown8(isShown => !isShown),
    []
  );

  // // if the maps api closes the infowindow, we have to synchronize our state
  const handleClose = useCallback(() => setInfoWindowShown(false), []);
  const handleClose2 = useCallback(() => setInfoWindowShown2(false), []);
  const handleClose3 = useCallback(() => setInfoWindowShown3(false), []);
  const handleClose4 = useCallback(() => setInfoWindowShown4(false), []);
  const handleClose5 = useCallback(() => setInfoWindowShown5(false), []);
  const handleClose6 = useCallback(() => setInfoWindowShown6(false), []);
  const handleClose7 = useCallback(() => setInfoWindowShown7(false), []);
  const handleClose8 = useCallback(() => setInfoWindowShown8(false), []);
  
  
    const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [currentDate, setCurrentDate] = useState(getDate());
 
  useEffect( () => {
    // fetch('https://api.openweathermap.org/data/2.5/weather?lat=10.4195841&lon=-75.5271224&lang=es&units=metric&appid=cc8411344583128d1ea0437c84b2f589')
    fetch('https://api.weatherapi.com/v1/current.json?key=afecaab6134341fc8f9231218242006&q=Cartagena&aqi=no&lang=es')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  console.log(data);





  
  return (
    <main>
    <div className="w-full justify-center items-center ">
      <div id="default-carousel" className="" data-carousel="slide">
      {/* <!-- Carousel wrapper --> */}
          <div className="relative overflow-hidden md:h-[800px]">
              <div className="hidden duration-3000" data-carousel-item>
                  <img width={400} height={600} src="/images/banners/sat-banner2.png" className="absolute block w-full -translate-x-1/2 -translate-y-2/2 top-2/2 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-300" data-carousel-item>
                  <img width={400} height={600} src="/images/home1.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-2/3 top-2/3 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-300" data-carousel-item>
                <p className="relative z-30 w-full mx-auto  mr-3  pr-9 block font-bold items-end text-1xl md:text-1xl text-center py-2 bg-gray-50 opacity-70">
                Comités Barriales de Emergencias del Distrito de Cartagena
                </p>
                  <img width={400} height={600} src="/images/home2.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/3 top-1/3 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-300" data-carousel-item>
                  <img width={400} height={600} src="/images/banners/ban1.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/3 top-1/3  left-1/2" alt="..." />
              </div>
              <div className="hidden duration-300" data-carousel-item>
                  <img width={400} height={600} src="/images/banners/ban2.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/3 top-1/3  left-1/2" alt="..." />
              </div>
              <div className="hidden duration-300" data-carousel-item>
                  <img width={400} height={600} src="/images/banners/ban4.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/3 top-1/3  left-1/2" alt="..." />
              </div>
          </div>
          {/* <!-- Slider indicators --> */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse  ">
              <button type="button" className="w-3 h-3 rounded-full bg-blue-300" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full bg-blue-300" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" className="w-3 h-3 rounded-full bg-blue-300" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" className="w-3 h-3 rounded-full bg-blue-300" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" className="w-3 h-3 rounded-full bg-blue-300" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
              <button type="button" className="w-3 h-3 rounded-full bg-blue-300" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
              <button type="button" className="w-3 h-3 rounded-full bg-blue-300" aria-current="true" aria-label="Slide 7" data-carousel-slide-to="6"></button>
          </div>
      </div>
    </div>
    {/* name of the page */}


    {/* <div className="flex flex-col items-center justify-center h-[10rem] ">
      <TypewriterEffectSmooth words={words}/>
    </div> */}




 

    {/* <div className="max-w-5xl p-4 mx-auto text-center text-wrap mt-10 mb-10 ">
      <h1 className="mb-4 text-4xl font-semibold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-6xl">Oficina Asesora para la Gestion del Riesgo de Desastres </h1>
    </div> */}

{/* Download the app */}
<div className="w-full text-center bg-gray-50 border border-gray-200 pt-10 pb-20">
    <h5 className="mb-4 mt-10 text-4xl md:text-5xl font-bold text-mainc ">DESCARGA NUESTRA APLICACIÓN</h5>
    <p className="mb-20 text-base text-gray-500 sm:text-lg ">Esta atento a todas nuestras actualizaciones y novedades de alerta de manera temprana</p>
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
        <a href="https://play.google.com/store/apps/details?id=com.unicartagena.satapp" className="md:mt-10 w-full sm:w-auto bg-mainc shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 ">
            <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="Image height={420} width={600}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
            <div className="text-left rtl:text-right">
                <div className="mb-1 text-base">Descargala en</div>
                <div className="-mt-1 font-sans text-lg font-semibold">Google Play</div>
            </div>
        </a>
        <a href="#" className="md:mt-10 border w-full sm:w-auto shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  ">
            {/* <Image src={'/images/'} alt="app store image"/> */}
            <svg  className="me-3 w-8 h-8" fill="#23234c"  viewBox="-52.01 0 560.035 560.035" xmlns="http://www.w3.org/2000/svg"><path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"/></svg>
            <div className="text-left rtl:text-right">
                <div className="mb-1 text-base text-mainc">Descargala en</div>
                <div className="-mt-1 font-sans text-lg font-semibold text-mainc">App Store</div>
            </div>
        </a>
        </div>
    </div>

    
</div>

{/* Ultimas noticias */}
<div id="news" className="mx-auto max-w-6xl font-medium text-4xl mb-32 flex items-center justify-center bg-mainc text-white pl-10 h-20 text-center mt-20">NOTICIAS</div>
<div className=" max-w-6xl grid gap-10 mb-32 md:grid-cols-3 md:mx-auto">
  <div className="h-60 object-cover mb-32 flex flex-col text-justify hover:shadow-2xl border items-center justify-center transition ease-in-out delay-100 cursor-pointer bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
    <Image width={300} height={600} className=' object-cover h-full w-full' src={'/images/noticias/not1.jpeg'}  alt='Noticia 1'/>
    <div className="bg-gray-50 pb-6">
      <p className="p-4 text-black hover:text-blue-900 ">Con éxito se realizó en Cartagena el simulacro de la operación binacional de Cartagena y Estados Unidos: Promesa Continua 2024</p>
      <div className="text-center hover:underline">
        <Link  href="/news/oficina-gestion-riesgo-noticias-001" className="bg-mainc text-white rounded-xl px-4 py-1">Leer más</Link>
      </div>
    </div>
  </div>

  

  <div className="h-60 object-cover mb-32 flex flex-col text-justify hover:shadow-2xl border items-center justify-center transition ease-in-out delay-100 cursor-pointer bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
    <Image width={400} height={600} className=' object-cover h-full w-full' src={'/images/noticias/not2.jpeg'}  alt='Noticia 1'/>
    <div className="bg-gray-50 pb-6">
      <p className="p-4 text-black hover:text-blue-900">Se reactiva pago de $500 mil dirigido a afectados por el Fenómeno de La Niña, en 2022, que presentaron errores en su registro de nombre o cédula</p>
      <div className="text-center hover:underline">
        <Link  href="/news/oficina-gestion-riesgo-noticias-002" className="bg-mainc text-white rounded-xl px-4 py-1">Leer más</Link>
      </div>
    </div>
  </div>



  <div className="h-60 object-cover mb-32 flex flex-col text-justify hover:shadow-2xl border items-center justify-center transition ease-in-out delay-100 cursor-pointer bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
    <Image width={400} height={600} className=' object-cover h-full w-full' src={'/images/noticias/not4.jpeg'}  alt='Noticia 1'/>
    <div className="bg-gray-50 pb-6">
      <p className="p-4 text-black hover:text-blue-900 ">Con Brigada Cívica, Distriseguridad fomenta la sana convivencia en Corredores Universitarios de Cartagena</p>
      <div className="text-center hover:underline">
        <Link  href="/news/oficina-gestion-riesgo-noticias-004" className="bg-mainc text-white rounded-xl px-4 py-1">Leer más</Link>
      </div>
    </div>
  </div>

  <div className="h-60 object-cover mb-32 flex flex-col text-justify hover:shadow-2xl border items-center justify-center transition ease-in-out delay-100 cursor-pointer bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
    <Image width={400} height={600} className='object-cover h-full w-full' src={'/images/noticias/not5.jpeg'}  alt='Noticia 1'/>
    <div className="bg-gray-50 pb-6">
      <p className="p-4 text-black hover:text-blue-900 ">La Onda Tropical No. 27 ha disminuido su formación ciclónica en un 10%, se prevén lluvias leves a intensas en amplios sectores de la ciudad</p>
      <div className="text-center hover:underline">
        <Link  href="/news/oficina-gestion-riesgo-noticias-005" className="bg-mainc text-white rounded-xl px-4 py-1">Leer más</Link>
      </div>
    </div>
  </div>



  <div className="h-60 object-cover  mb-32 flex flex-col text-justify hover:shadow-2xl border items-center justify-center transition ease-in-out delay-100 cursor-pointer bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
    <Image width={400} height={600} className='object-cover h-full w-full' src={'/images/noticias/not6.jpeg'}  alt='Noticia 1'/>
    <div className="bg-gray-50 pb-6">
      <p className="p-4 text-black hover:text-blue-900 ">Distriseguridad continúa atendiendo el llamado de las comunidades con trabajo articulado por la seguridad</p>
      <div className="text-center hover:underline">
        <Link  href="/news/oficina-gestion-riesgo-noticias-006" className="bg-mainc text-white rounded-xl px-4 py-1">Leer más</Link>
      </div>
    </div>
  </div>

    <div className="h-60 object-cover flex flex-col text-justify hover:shadow-2xl border items-center justify-center transition ease-in-out delay-100 cursor-pointer bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
    <Image width={400} height={600} className=' object-cover h-full w-full' src={'/images/noticias/not3.jpeg'} alt='Noticia 1'/>
    <div className="bg-gray-50 pb-6">
      <p className="p-4 text-black hover:text-blue-900 ">OAGRD insta a la ciudadanía a estar alerta ante posible desarrollo ciclónico en el Atlántico</p>
      <div className="text-center hover:underline">
        <Link  href="/news/oficina-gestion-riesgo-noticias-003" className="bg-mainc text-white rounded-xl px-4 py-1">Leer más</Link>
      </div>
    </div>
  </div>
  
</div>

{/* Clima */}
<motion.div  
initial={{ opacity: 0 }} 
whileInView={{ opacity: 1 }} 
transition={{ ease: "circInOut",
    duration: 
    1,
    x: { duration: 1 }}} 
    className="md:max-w-6xl md:mx-auto">
    <div className="text-2xl font-medium mb-4 text-center bg-mainc text-white p-3 md:text-4xl">El tiempo en Cartagena de Indias hoy - {currentDate}</div>
    <div className="md:flex items-center max-w-6xl mb-20 bg-gray-100 max-w-screen-2x border border-gray-150 rounded-lg   mx-auto md:flex-row">
    <div className="flex flex-col bg-white h-44 w-[370px] text-center items-center justify-center p-4">
        <img className="block justify-center items-center text-center" src={"https:" + data?.current.condition.icon} alt="Icono del clima" />
        <div className="flex flex-row justify-center mb-1"><h1 className="text-5xl">{Math.ceil(data?.current.temp_c)}</h1><span className="text-2xl">°C</span></div>
        <div className="first-letter:uppercase text-gray-500">{data?.current.condition.text}</div>    
        <div>Fuente: weatherapi.com</div>
    </div>

    <div className="w-screen-sm p-2 h-32  bg-red-400 rounded-xl  text-center m-3 md:w-44 md:w-5xl md:flex md:flex-col ">
        <div className="text-white drop-shadow-lg">Sensacion térmica</div>
        <div className="flex flex-row justify-center mb-2 mt-6"><h1 className="text-4xl">{Math.ceil(data?.current.feelslike_c)}</h1><span className="text-1xl">°C</span></div>
    </div>       

    <div className="w-screen-sm p-2 h-32 bg-teal-400 rounded-xl  text-center m-3 md:w-44 md:w-5xl md:flex md:flex-col">
        <div className="text-white drop-shadow-lg">Humedad</div>
        <div className="flex flex-row justify-center mb-2 mt-6"><h1 className="text-4xl">{Math.ceil(data?.current.humidity)}</h1><span className="text-1xl">%</span></div>
    </div>    
    <div className="w-screen-sm p-2 h-32 bg-gray-400 rounded-xl  text-center m-3 md:w-44 md:w-5xl md:flex md:flex-col">
        <div className="text-white drop-shadow-lg">Viento</div>
        <div className="flex flex-row justify-center mb-2 mt-6"><h1 className="text-4xl">{Math.ceil(data?.current.wind_kph)}</h1><span className="text-1xl"> km/h</span></div>
    </div>     
{/* 
    <div className="flex flex-col w-5xl p-2 h-32 w-40 bg-slate-400 rounded-xl  text-center m-3 ">
        <div className="text-white drop-shadow-lg">min/max</div>
        <div className="flex flex-row justify-center mb-1 mt-2"><h1 className="text-4xl">{Math.ceil(data?.current.temp_min)}</h1><span className="text-1xl"> °C</span></div>
        <div className="flex flex-row justify-center "><h1 className="text-4xl">{Math.ceil(data?.current.temp_max)}</h1><span className="text-1xl"> °C</span></div>
    </div>   

    <div className="flex flex-col w-5xl p-2 h-32 w-40 bg-slate-400 rounded-xl  text-center m-3 ">
        <div className="text-white drop-shadow-lg">Viento</div>
        <div className="flex flex-row justify-center mb-2 mt-6"><h1 className="text-4xl">{Math.ceil(data?.current.speed)}</h1><span className="text-1xl"> km/h</span></div>
    </div>    */}

    </div>
</motion.div>

{/* Lineas de atencion */}
<motion.div  
// animate={{ rotate: 360 }}
// style={{ rotate: 0 }} 
initial={{ opacity: 0, x: "0%"}}
whileInView={{ opacity: 1, x: 0 }}
animate={{ x: 100 }}
transition={{ ease: "linear",
    duration: 1,
    x: { duration: 1 }}}
    className=" mx-auto items-center block mb-20">




<div className="w-screen-sm text-2xl mb-10 flex items-center justify-between bg-mainc text-white pl-10 h-20 text-center md:max-w-6xl md:text-5xl md:mx-auto">LINEAS DE EMERGENCIAS <Image className="h-auto -right-3 rounded-full relative md:-right-6" src={'/images/lineas/phone247.jpg'} width={200} height={200} alt="Telefono 24 horas"/></div>
<div> 
    <button data-popover-target="popover-oagrd" type="button" className="select-none flex flex-col items-center gab-2 space-y-2 border h-62 w-62 justify-center text-black bg-transparent  font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-auto mb-10 hover:bg-slate-50">
      <div><Image className="mb-1" src={'/oagrd-logo.png'} width={150} height={150} alt={""} /></div>
      <p className="hover:underline">OAGRD</p>
      <a href="tel:3175030465" className="hover:no-underline text-4xl">317 5030465</a>
      </button>

    <div data-popover id="popover-oagrd" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 ">
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900  text-center hover:underline">OAGRD</h3>
        </div>
        <div className="flex mx-auto flex-col px-3 py-2 text-4xl text-mainc text-center justify-center items-center">
            <Image className="mb-3" src={'/oagrd-logo.png'} width={100} height={100} alt={""} />
            <div className="flex items-center gap-4"><FaPhoneAlt size={24}/><p className="text-5xl">123</p></div>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>


<div className="mx-auto max-w-6xl gap-4 md:grid grid-cols-4 md:gap-10 ">
  <div> 
    <button data-popover-target="popover-policia" type="button" className="mb-10 select-none flex flex-col items-center gab-2 space-y-2 border h-56 w-56 justify-center text-black bg-transparent  font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-auto hover:bg-slate-50">
      <div><Image className="mb-3" src={'/images/lineas/policia.png'} width={100} height={100} alt={""} /></div>
      <p className="hover:underline">POLICIA NACIONAL</p>
      <a href="tel:123" className="hover:no-underline text-4xl">123</a>
      </button>

    <div data-popover id="popover-policia" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 ">
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900 text-center hover:underline">POLICIA NACIONAL</h3>
        </div>
        <div className="flex mx-auto flex-col px-3 py-2 text-4xl text-mainc text-center justify-center items-center">
            <Image className="mb-3" src={'/images/lineas/policia-person.png'} width={100} height={100} alt={""} />
            <div className="flex items-center gap-4"><FaPhoneAlt size={24}/><p className="text-5xl">123</p></div>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>

  <div> 
    <button data-popover-target="popover-bomberos" type="button" className="mb-10 select-none flex flex-col items-center gab-2 space-y-2 border h-56 w-56 justify-center text-black bg-transparent  font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-auto hover:bg-slate-50">
      <div><Image className="mb-3" src={'/images/lineas/bomberos.jpg'} width={100} height={100} alt={""} /></div>
      <p className="hover:underline">BOMBEROS</p>
      <a href="tel:119"  className="hover:no-underline text-4xl">119</a>
      </button>

    <div data-popover id="popover-bomberos" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 ">
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900 text-center hover:underline">BOMBEROS</h3>
        </div>
        <div className="flex mx-auto flex-col px-3 py-2 text-4xl text-mainc text-center justify-center items-center">
            <Image className="mb-3" src={'/images/lineas/bomberos-person.png'} width={100} height={100} alt={""} />
            <div className="flex items-center gap-4"><FaPhoneAlt size={24}/><p className="text-5xl">119</p></div>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>


  <div> 
    <button data-popover-target="popover-cruz-roja" type="button" className="mb-10 select-none flex flex-col items-center gab-2 space-y-2 border h-56 w-56 justify-center text-black bg-transparent  font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-auto hover:bg-slate-50">
      <div><Image className="mb-3" src={'/images/lineas/cruz-roja.png'} width={100} height={100} alt={""} /></div>
      <p className="hover:underline">CRUZ ROJA</p>
      <a href="tel:132"  className="hover:no-underline text-4xl">132</a>
      </button>

    <div data-popover id="popover-cruz-roja" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 ">
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900 text-center hover:underline">CRUZ ROJA</h3>
        </div>
        <div className="flex mx-auto flex-col px-3 py-2 text-4xl text-mainc text-center justify-center items-center">
            <Image className="mb-3" src={'/images/lineas/cruz-roja.png'} width={100} height={100} alt={""} />
            <div className="flex items-center gap-4"><FaPhoneAlt size={24}/><p className="text-5xl">132</p></div>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>
  
  
  <div> 
    <button data-popover-target="popover-surtigas" type="button" className="mb-10 select-none flex flex-col items-center gab-2 space-y-2 border h-56 w-56 justify-center text-black bg-transparent  font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-auto hover:bg-slate-50">
      <div><Image className="mb-3" src={'/images/lineas/surtigas.png'} width={100} height={100} alt={""} /></div>
      <p className="hover:underline">SURTIGAS</p>
      <a href="tel:164"  className="hover:no-underline text-4xl">164</a>
      </button>

    <div data-popover id="popover-surtigas" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 ">
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900 text-center hover:underline">SURTIGAS</h3>
        </div>
        <div className="flex mx-auto flex-col px-3 py-2 text-4xl text-mainc text-center justify-center items-center">
            <Image className="mb-3" src={'/images/lineas/surtigas.png'} width={100} height={100} alt={""} />
            <div className="flex items-center gap-4"><FaPhoneAlt size={24}/><p className="text-5xl">164</p></div>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>
  

  <div> 
    <button data-popover-target="popover-afinia" type="button" className="mb-10 select-none flex flex-col items-center gab-2 space-y-2 border h-56 w-56 justify-center text-black bg-transparent  font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-auto hover:bg-slate-50">
      <div><Image className="mb-3" src={'/images/lineas/afinia.webp'} width={100} height={100} alt={""} /></div>
      <p className="hover:underline">AFINIA</p>
      <a href="tel:115" className="hover:no-underline text-4xl">115</a>
      </button>

    <div data-popover id="popover-afinia" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 ">
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900 text-center hover:underline">AFINIA</h3>
        </div>
        <div className="flex mx-auto flex-col px-3 py-2 text-4xl text-mainc text-center justify-center items-center">
            <Image className="mb-3" src={'/images/lineas/afinia.webp'} width={100} height={100} alt={""} />
            <div className="flex items-center gap-4"><FaPhoneAlt size={24}/><p className="text-5xl">115</p></div>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>
  


  <div> 
    <button data-popover-target="popover-aguas" type="button" className="mb-10 select-none flex flex-col items-center gab-2 space-y-2 border h-56 w-56 justify-center text-black bg-transparent  font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-auto hover:bg-slate-50">
      <div><Image className="mb-3" src={'/images/lineas/aguas.png'} width={100} height={100} alt={""} /></div>
      <p className="hover:underline">AGUAS</p>
      <a href="tel:116"  className="hover:no-underline text-4xl">116</a>
      </button>

    <div data-popover id="popover-aguas" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 ">
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900 text-center hover:underline">AGUAS</h3>
        </div>
        <div className="flex mx-auto flex-col px-3 py-2 text-4xl text-mainc text-center justify-center items-center">
            <Image className="mb-3" src={'/images/lineas/aguas.png'} width={100} height={100} alt={""} />
            <div className="flex items-center gap-4"><FaPhoneAlt size={24}/><p className="text-5xl">116</p></div>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>
  

  <div> 
    <button data-popover-target="popover-defensa" type="button" className="mb-10 select-none flex flex-col items-center gab-2 space-y-2 border h-56 w-56 justify-center text-black bg-transparent  font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-auto hover:bg-slate-50">
      <div><Image className="mb-3" src={'/images/lineas/defensa.png'} width={100} height={100} alt={""} /></div>
      <p className="hover:underline">DEFENSA CIVIL</p>
      <a href="tel:144"  className="hover:no-underline text-4xl">144</a>
      </button>

    <div data-popover id="popover-defensa" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 ">
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900 text-center hover:underline">DEFENSA CIVIL</h3>
        </div>
        <div className="flex mx-auto flex-col px-3 py-2 text-4xl text-mainc text-center justify-center items-center">
            <Image className="mb-3" src={'/images/lineas/defensa.png'} width={100} height={100} alt={""} />
            <div className="flex items-center gap-4"><FaPhoneAlt size={24}/><p className="text-5xl">144</p></div>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>
  


  <div> 
    <button data-popover-target="popover-crued" type="button" className="mb-10 select-none flex flex-col items-center gab-2 space-y-2 border h-56 w-56 justify-center text-black bg-transparent  font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-auto hover:bg-slate-50">
      <div><Image className="mb-3" src={'/images/lineas/crued.png'} width={100} height={100} alt={""} /></div>
      <p className="hover:underline">CRUED</p>
      <a href="tel:125"  className="hover:no-underline text-4xl">125</a>
      </button>

    <div data-popover id="popover-crued" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 ">
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
            <h3 className="font-semibold text-gray-900 text-center hover:underline">CRUED</h3>
        </div>
        <div className="flex mx-auto flex-col px-3 py-2 text-4xl text-mainc text-center justify-center items-center">
            <Image className="mb-3" src={'/images/lineas/crued.png'} width={100} height={100} alt={""} />
            <div className="flex items-center gap-4"><FaPhoneAlt size={24} /><p className="text-5xl">125</p></div>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>
  
  
</div>

</motion.div>



{/* ten atento a 
<div id="alert-additional-content-1" className="w-3/4 p-4 mx-auto text-justify mb-20 mt-8 text-gray-600 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-600 dark:text-blue-400 dark:border-blue-500" role="alert">
  <div className="flex items-center">
    <svg className="text-black flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span className="sr-only">Info</span>
    <h3 className="text-xl font-medium text-black">Info</h3>
  </div>
  <div className="mt-2 mb-4 text-lg">
  Ten en cuenta las funciones en situacion de desastre que son de vital importancia para el correcto desarrollo de las actividades en una situación de dasastre.
  </div>
  <div className="flex">
    <button type="button" className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <svg className="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
        <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
      </svg>
      Ver mas
    </button>

  </div>
</div> */}





{/* maps sensors */}
   
    {/* google maps */}


<div>
  <div className="mb-4 border-b border-gray-200 dark:border-gray-700 max-w-sm mx-auto">
      <ul className="flex flex-wrap -mb-px text-2xl font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
          <li className="me-2" role="presentation">
              <button className="inline-block p-4 border-b-2 rounded-t-lg" id="sensor-tab" data-tabs-target="#sensor" type="button" role="tab" aria-controls="sensor" aria-selected="false">Red de Sensores</button>
          </li>
          <li className="me-2" role="presentation">
              <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="combas-tab" data-tabs-target="#combas" type="button" role="tab" aria-controls="combas" aria-selected="false">Combas</button>
          </li>
        
      </ul>
  </div>
  <div id="default-tab-content">

    <div className="max-w-full mx-auto flex flex-col bg-gray-100 py-20 shadow-2xl border" id="sensor" role="tabpanel" aria-labelledby="sensor-tab"> 
      <span className="text-3xl  max-w-full text-center text-mainc font-bold mb-4">RED DE SENSORES OAGRD</span>
      <div className='w-2/3 mx-auto rounded-md bg-mainc block p-3 '>
              <APIProvider apiKey='AIzaSyB2MmtCCU1GIWkoblto0sjSQrN_91XTL3U' >
                  <div className='h-[800px] w-full rounded'>
                      <Map       
                          id={'oagrd-address'}
                          mapId='oagrd-address'
                          defaultCenter={{lat: 10.462644, lng: -75.438986}}
                          defaultZoom={12}
                          gestureHandling={'greedy'}
                          disableDefaultUI={true}>

                          <AdvancedMarker position={{lat: 10.40319876, lng: -75.47509139}} ref={markerRef} onClick={handleMarkerClick}>
                              <Image alt=""  src={'/images/riesgos/inundacion.png'} width={60} height={60} />
                          </AdvancedMarker>
                          <AdvancedMarker position={{lat: 10.39705322, lng: -75.50693394}} ref={markerRef2} onClick={handleMarkerClick2}>
                              <Image alt="" src={'/images/riesgos/remocion_en_masa.png'} width={60} height={60} />
                          </AdvancedMarker>
                          <AdvancedMarker position={{lat: 10.36121077, lng: -75.49175337}} ref={markerRef3} onClick={handleMarkerClick3}>
                              <Image alt="" src={'/images/riesgos/remocion_en_masa.png'} width={60} height={60} />
                          </AdvancedMarker>
                          <AdvancedMarker position={{lat: 10.54593654, lng: -75.39060164}} ref={markerRef4} onClick={handleMarkerClick4}>
                              <Image alt="" src={'/images/riesgos/inundacion.png'} width={60} height={60} />
                          </AdvancedMarker>
                          <AdvancedMarker position={{lat: 10.33611111, lng: -75.47592}} ref={markerRef5} onClick={handleMarkerClick5}>
                              <Image alt="" src={'/images/riesgos/diapirisimo.png'} width={60} height={60} />
                          </AdvancedMarker>
                          <AdvancedMarker position={{lat: 10.434277, lng: -75.517607}} ref={markerRef6} onClick={handleMarkerClick6}>
                              <Image alt="" src={'/images/riesgos/inundacion.png'} width={60} height={60} />
                          </AdvancedMarker>
                          <AdvancedMarker position={{lat: 10.4239965, lng: -75.53118258}} ref={markerRef7} onClick={handleMarkerClick7}>
                              <Image alt="" src={'/images/riesgos/remocion_en_masa.png'} width={60} height={60} />
                          </AdvancedMarker>
                          <AdvancedMarker position={{lat: 10.346996, lng: -75.487664}} ref={markerRef8} onClick={handleMarkerClick8}>
                              <Image alt="" src={'/images/riesgos/inundacion.png'} width={60} height={60} />
                          </AdvancedMarker>
                          {infoWindowShown && ( 
                          <InfoWindow anchor={marker} onCloseClick={handleClose}>
                              <h2 className='text-lg font-bold'>Sensor Fredonia</h2>
                              <br/>
                              <p className='text-md'>Inundacion</p>
                              <br/>
                          </InfoWindow> 
                          )} 
                              {infoWindowShown2 && ( 
                          <InfoWindow anchor={marker2} onCloseClick={handleClose2}>
                              <h2 className='text-lg font-bold'>Sensor Lomas del Marion</h2>
                              <br/>
                              <p className='text-md'>Remocion en masa</p>
                              <br/>
                          </InfoWindow> 
                          )} 
                              {infoWindowShown3 && ( 
                          <InfoWindow anchor={marker3} onCloseClick={handleClose3}>
                              <h2 className='text-lg font-bold'>Sensor Cerro de Albornoz</h2>
                              <br/>
                              <p className='text-md'>Remocion en masa</p>
                              <br/>
                          </InfoWindow> 
                          )} 
                              {infoWindowShown4 && ( 
                          <InfoWindow anchor={marker4} onCloseClick={handleClose4}>
                              <h2 className='text-lg font-bold'>Sensor Bayunca</h2>
                              <br/>
                              <p className='text-md'>Inundacion</p>
                              <br/>
                          </InfoWindow> 
                          )} 
                              {infoWindowShown5 && ( 
                          <InfoWindow anchor={marker5} onCloseClick={handleClose5}>
                              <h2 className='text-lg font-bold'>Sensor Membrillal</h2>
                              <br/>
                              <p className='text-md'>Inundacion</p>
                              <br/>
                          </InfoWindow> 
                          )} 
                              {infoWindowShown6 && ( 
                          <InfoWindow anchor={marker6} onCloseClick={handleClose6}>
                              <h2 className='text-lg font-bold'>Sensor San Francisco</h2>
                              <br/>
                              <p className='text-md'>Inundacion</p>
                              <br/>
                          </InfoWindow> 
                          )} 
                              {infoWindowShown7 && ( 
                          <InfoWindow anchor={marker7} onCloseClick={handleClose7}>
                              <h2 className='text-lg font-bold'>Sensor Lo Amador</h2>
                              <br/>
                              <p className='text-md'>Remocion en masa</p>
                              <br/>
                          </InfoWindow> 
                          )} 
                              {infoWindowShown8 && ( 
                          <InfoWindow anchor={marker8} onCloseClick={handleClose8}>
                              <h2 className='text-lg font-bold'>Sensor Policarpa</h2>
                              <br/>
                              <p className='text-md'>Inundacion</p>
                              <br/>
                          </InfoWindow> 
                          )} 
                      </Map>
                  </div>
              </APIProvider>
          </div>
        </div>
      {/* <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="sensor" role="tabpanel" aria-labelledby="sensor-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
       </div> */}
      <div className="max-w-full mx-auto flex flex-col bg-gray-100 py-20 shadow-2xl border" id="combas" role="tabpanel" aria-labelledby="combas-tab"> 
        <span className="text-3xl  max-w-full text-center text-mainc font-bold mb-4">COMBAS</span>
        <div className='w-2/3 mx-auto rounded-md bg-mainc block p-3 '>

                <div>
              
                  <APIProvider apiKey='AIzaSyB2MmtCCU1GIWkoblto0sjSQrN_91XTL3U' >
                          <div className='h-[800px] w-full rounded'>
                              <Map       
                                  id={'combas'}
                                  mapId='combas'
                                  defaultCenter={{lat: 10.462644, lng: -75.438986}}
                                  defaultZoom={12}
                                  gestureHandling={'greedy'}
                                  disableDefaultUI={true}>
                          {myArray.map((item)=> (
                            <div key={item.NOMBRE}>
                                  <AdvancedMarker position={{lat: item.LATITUD, lng: item.LONGITUD}} ref={markerRef} onClick={() => setInfoWindowShown8(true)}></AdvancedMarker>
                                  {/* {infoWindowCombasShown && ( 
                                  <InfoWindow anchor={marker} onCloseClick={() => setInfoWindowCombasShown(false)}>
                                      <h2 className='text-lg font-bold'>{item.NOMBRE}</h2>
                                      <br/>
                                      <div className="leading-normal"><p className='text-md'><span className="font-bold">Localidad:</span> {item.LOCALIDAD}</p>
                                      <p className='text-md'><span className="font-bold">ucg:</span> {item.UCG}</p>
                                      </div>
                                  </InfoWindow> 
                                  )}  */}
                              </div>
                           ))}
                              </Map>
                          </div>
                      </APIProvider>
                </div>
           
        </div>
      </div>

    </div>
</div>






    </main>

  );
}