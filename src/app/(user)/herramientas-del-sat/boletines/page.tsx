'use client';
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Timestamp } from 'firebase/firestore';
import firebaseConfig from '@/firebase/firebaseConfig';
import { Metadata } from 'next';
import Head from 'next/head';


// export const generateMetadata = async (): Promise<Metadata> => {
//     return {
//       title: 'Aplicacion Mobil Satapp - oagrd',
//       description: 'Aplicacion Mobil Satapp -  Sistema de Alertas Tempranas de Cartagena',
//     };
//   };

  
// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

interface File {
  name: string;
  filePath: string;
  createdAt: Timestamp; // Cambiar a Timestamp de Firebase
}

const Documentation = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date()); // Fecha predeterminada a la fecha actual
  const [boletinesFiles, setBoletinesFiles] = useState<File[]>([]);
  const [pronosticosFiles, setPronosticosFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'boletines' | 'pronosticos'>('boletines'); // Estado para controlar la pestaña activa

  useEffect(() => {
    if (selectedDate) {
      loadFiles(selectedDate);
    }
  }, [selectedDate, activeTab]); // Dependemos de activeTab también para recargar los archivos

  const loadFiles = async (selectedDate: Date) => {
    setIsLoading(true);

    const year = selectedDate.getFullYear();
    const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
    const path = activeTab === 'boletines'
      ? `fileManager/boletines/years/${year}/months/${month}/archivos`
      : `fileManager/pronosticos/years/${year}/months/${month}/archivos`;

    // Definir el rango de fechas
    const startDate = new Date(selectedDate);
    const endDate = new Date(selectedDate);

    // Ajustar el rango de fechas si la fecha seleccionada es un día específico
    startDate.setHours(0, 0, 0, 0); // Ajusta la hora a las 00:00 para el inicio del día
    endDate.setHours(23, 59, 59, 999); // Ajusta la hora a las 23:59 para el final del día

    // Convertir las fechas a Timestamp de Firestore
    const startTimestamp = Timestamp.fromDate(startDate); // Convertir a Timestamp
    const endTimestamp = Timestamp.fromDate(endDate); // Convertir a Timestamp

    console.log("Fecha seleccionada:", selectedDate);
    console.log("Rango de fechas:", startDate.toLocaleDateString(), "a", endDate.toLocaleDateString());

    const fileQuery = query(
      collection(db, path),
      where("createdAt", ">=", startTimestamp),
      where("createdAt", "<=", endTimestamp)
    );

    try {
      const querySnapshot = await getDocs(fileQuery);
      const files = querySnapshot.docs.map((doc) => doc.data() as File);
      console.log("Archivos encontrados:", files); // Ver los archivos encontrados
      if (activeTab === 'boletines') {
        setBoletinesFiles(files);
      } else {
        setPronosticosFiles(files);
      }
    } catch (error) {
      console.error('Error al cargar los archivos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf':
        return '📄'; // Icono para archivos PDF
      case 'jpg':
      case 'jpeg':
      case 'png':
        return '🖼️'; // Icono para imágenes
      case 'xls':
      case 'xlsx':
        return '📊'; // Icono para archivos Excel
      default:
        return '📁'; // Icono genérico para otros archivos
    }
  };

  const formatDate = (timestamp: Timestamp) => {
    const date = timestamp.toDate();
    return date.toLocaleDateString();
  };

  const downloadFile = async (filePath: string, fileName: string) => {
    try {
      const fileRef = ref(storage, filePath);
      const url = await getDownloadURL(fileRef);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    }
  };

  return (

    <>
    
    
     <Head>
     <title>Boletines y Pronosticos</title> 
     <meta name="description" content="Boletines y Pronosticos del clima de la ciudad de Cartagena - OAGRD" />
            <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Boletines y Pronosticos" />    
    </Head> 
    <div className="container mx-auto p-4 m-20">
      <h2 className="text-3xl font-bold mb-4">Gestor de Documentación</h2>

      <div className="mb-6">
        <label className="block text-lg font-semibold">Seleccionar fecha:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          className="mt-2 px-4 py-2 border rounded-lg"
        />
      </div>

      {/* Pestañas de Boletines y Pronósticos */}
      <div className="flex mb-4">
        <button
          onClick={() => setActiveTab('boletines')}
          className={`px-4 py-2 border-b-2 ${activeTab === 'boletines' ? 'border-blue-500 text-blue-500' : 'border-transparent'}`}
        >
          Boletines
        </button>
        <button
          onClick={() => setActiveTab('pronosticos')}
          className={`px-4 py-2 border-b-2 ${activeTab === 'pronosticos' ? 'border-blue-500 text-blue-500' : 'border-transparent'}`}
        >
          Pronósticos
        </button>
      </div>

      <div className="space-y-4">
        {isLoading ? (
          <p>Cargando archivos...</p>
        ) : (activeTab === 'boletines' ? boletinesFiles : pronosticosFiles).length === 0 ? (
          <div className="text-center">
            <span className="text-3xl">📁</span>
            <p className="text-lg">No hay archivos para esta fecha.</p>
          </div>
        ) : (
          (activeTab === 'boletines' ? boletinesFiles : pronosticosFiles).map((file, index) => (
            <div className="flex items-center space-x-4" key={index}>
              <span className="text-2xl">{getFileIcon(file.name)}</span>
              <span className="text-lg">{file.name}</span>
              <span className="text-sm text-gray-500">
                {formatDate(file.createdAt)}
              </span>
              <button
                onClick={() => downloadFile(file.filePath, file.name)}
                className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-700"
              >
                Descargar
              </button>
            </div>
          ))
        )}
      </div>
    </div>
    </>
  );
};

export default Documentation;
