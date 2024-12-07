'use client';  // Indicar que este es un Client Component

import React, { useEffect, useState } from 'react';
import { Map, AdvancedMarker, InfoWindow, APIProvider } from '@vis.gl/react-google-maps';
import { db } from '@/firebase/firebaseConfig'; // Importar la configuración de Firebase
import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image';

// Definir la interfaz de los datos de los marcadores
interface MarkerData {
  nombre: string;
  coordinador: string;
  direccion: string;
  latitud: number;
  longitud: number;
}

const CombasMap = () => {
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
  const [infoWindowPosition, setInfoWindowPosition] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'combasGeolocationMap'));
        const data: MarkerData[] = [];
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          const latitud = Number(docData.latitud);  // Cambiar lat a latitud
          const longitud = Number(docData.longitud);  // Cambiar lng a longitud

          // Verificar si latitud y longitud son números válidos
          if (!isNaN(latitud) && !isNaN(longitud)) {
            data.push({
              nombre: docData.nombre,
              coordinador: docData.coordinador,
              direccion: docData.direccion,
              latitud,  // Asignar latitud
              longitud,  // Asignar longitud
            });
          } else {
            console.warn(`Datos inválidos para el marcador ${docData.nombre}: latitud=${docData.latitud}, longitud=${docData.longitud}`);
          }
        });
        setMarkers(data);
      } catch (error) {
        console.error('Error fetching marker data:', error);
      }
    };

    fetchData();
  }, []);

  const handleMarkerClick = (lat: number, lng: number, name: string) => {
    setInfoWindowPosition({ lat, lng });
    setSelectedMarker(name);
  };

  return (
    <div className="text-center m-20">
      <h2 className="text-4xl font-bold mb-4">Mapa de Sensores COMBAS</h2>
      <p className="text-lg text-gray-600 mb-8">
        Aquí se muestran los sensores de la red COMBAS con su información actualizada.
      </p>
      <div className="w-2/3 mx-auto rounded-lg bg-mainc p-4 shadow-lg mb-10">
      <APIProvider apiKey="AIzaSyB2MmtCCU1GIWkoblto0sjSQrN_91XTL3U">
        <div className="h-[800px] w-full rounded-md">
          <Map
            id="combas-map"
            mapId="combas-map-id"
            defaultCenter={{ lat: 10.462644, lng: -75.438986 }}
            defaultZoom={12}
            gestureHandling="greedy"
            disableDefaultUI={true}
          >
            {markers.map((marker, index) => (
              <AdvancedMarker
                key={index}
                position={{ lat: marker.latitud, lng: marker.longitud }}  // Usar latitud y longitud
                onClick={() => handleMarkerClick(marker.latitud, marker.longitud, marker.nombre)}
              >
                <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-300 shadow-lg flex items-center justify-center">
                  <Image
                    alt={marker.nombre}
                    src="/images/sat/combas-icon.png"
                    width={40}
                    height={40}
                  />
                </div>
              </AdvancedMarker>
            ))}

            {selectedMarker && infoWindowPosition && (
              <InfoWindow position={infoWindowPosition}>
                <div>
                  <h3 className="font-bold">{selectedMarker}</h3>
                  {markers
                    .filter((marker) => marker.nombre === selectedMarker)
                    .map((marker, index) => (
                      <div key={index}>
                        <p><strong>Coordinador:</strong> {marker.coordinador}</p>
                        <p><strong>Dirección:</strong> {marker.direccion}</p>
                      </div>
                    ))}
                </div>
              </InfoWindow>
            )}
          </Map>
        </div>
      </APIProvider>
      </div>
    </div>
  );
};

export default CombasMap;
