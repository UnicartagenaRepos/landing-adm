'use client';
import { Map, AdvancedMarker, InfoWindow, APIProvider } from '@vis.gl/react-google-maps';
import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react';
import Image from 'next/image';

// Coordenadas y nombres de los sensores en el orden correcto
const markers = [
  { lat: 10.40319876, lng: -75.47509139, name: "Fredonia" },
  { lat: 10.39705322, lng: -75.50693394, name: "Lomas del Marion" },
  { lat: 10.36121077, lng: -75.49175337, name: "Cerro de Albornoz" },
  { lat: 10.54593654, lng: -75.39060164, name: "Bayunca" },
  { lat: 10.33611111, lng: -75.47592, name: "Membrillal" },
  { lat: 10.434277, lng: -75.517607, name: "San Francisco" },
  { lat: 10.4239965, lng: -75.53118258, name: "Lo Amador" },
  { lat: 10.346996, lng: -75.487664, name: "Policarpa" },
];

const normalizeName = (name: string) => {
  return name.replace(" de", "");
};

const MyMapComponent = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [infoWindowPosition, setInfoWindowPosition] = useState(null);
  const [sensorData, setSensorData] = useState(null);
  const [dataError, setDataError] = useState(false); // Nueva variable para manejar el error de datos

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const response = await fetch(
          'https://climateconnector.canalclima.com/wsdata/CCPublicinfo.asmx/getDataOAGRD_Cartagena?key=C2170D3F473E0D2C8399AREF9848AEBD9E8'
        );
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
  
        const mappedData = data.result_object.map((sensor: { Nombre: string; }) => {
          const normalizedSensorName = normalizeName(sensor.Nombre);
          const matchingMarker = markers.find(
            (marker) => normalizeName(marker.name) === normalizedSensorName
          );
          return {
            ...sensor,
            ...matchingMarker, // Añadir los datos del marcador al sensor
          };
        });

        setSensorData(mappedData);
        setDataError(false); // Resetear el error si los datos son obtenidos con éxito
      } catch (error) {
        if (error instanceof Error) {
          console.log('Error al obtener los datos de la API:', error.message); // Reemplazar la alerta por un console.log
          setDataError(true); // Establecer el estado de error
        } else {
          console.log('Error desconocido:', error); // Reemplazar la alerta por un console.log
          setDataError(true); // Establecer el estado de error
        }
      }
    };
  
    fetchSensorData();
  }, []);

  const handleMarkerClick = (lat: number, lng: number, name: string) => {
    setInfoWindowPosition({ lat, lng });
    setSelectedMarker(name);
  };

  return (
    <div className="text-center m-20">
      <h2 className="text-4xl font-bold mb-4">Mapa de Sensores en Cartagena</h2>
      <p className="text-lg text-gray-600 mb-8">
        Aquí se muestran los sensores meteorológicos y sus datos en tiempo real para monitorear el clima en distintas zonas de Cartagena.
      </p>

      <div className="w-2/3 mx-auto rounded-lg bg-mainc p-4 shadow-lg mb-10">
        <APIProvider apiKey="AIzaSyB2MmtCCU1GIWkoblto0sjSQrN_91XTL3U">
          <div className="h-[800px] w-full rounded-md">
            <Map
              id="oagrd-address"
              mapId="oagrd-address"
              defaultCenter={{ lat: 10.462644, lng: -75.438986 }}
              defaultZoom={12}
              gestureHandling="greedy"
              disableDefaultUI={false}
            >
              {markers.map((marker, index) => (
 <AdvancedMarker
 key={index}
 position={{ lat: marker.lat, lng: marker.lng }}
 onClick={() => handleMarkerClick(marker.lat, marker.lng, marker.name)}
>
 <div className="relative w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center animate-ping-slow">
   <Image alt={marker.name} src="/images/riesgos/sensores-icon.png" width={40} height={40} />
 </div>
</AdvancedMarker>
              ))}

              {selectedMarker && infoWindowPosition && (
                <InfoWindow position={infoWindowPosition}>
                  <div>
                    <h3 className="font-bold">{selectedMarker}</h3>
                    <div>
                      {dataError ? ( // Mostrar mensaje de error si no se pueden obtener los datos
                        <p>Datos no disponibles en este momento.</p>
                      ) : sensorData ? (
                        sensorData
                          .filter((sensor: { name: any; }) => sensor.name === selectedMarker)
                          .map((sensor: { Fecha: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Iterable<ReactNode>; Temperatura: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Iterable<ReactNode>; Humedad: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Iterable<ReactNode>; Precipitacion: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Iterable<ReactNode>; }, index: Key) => (
                            <div key={index}>
                              <p><strong>Fecha:</strong> {sensor.Fecha}</p>
                              <p><strong>Temperatura:</strong> {sensor.Temperatura}</p>
                              <p><strong>Humedad:</strong> {sensor.Humedad}</p>
                              <p><strong>Precipitación:</strong> {sensor.Precipitacion}</p>
                            </div>
                          ))
                      ) : (
                        <p>Cargando información...</p>
                      )}
                    </div>
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

export default MyMapComponent;
