import { useEffect, useState } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        'https://api.weatherapi.com/v1/current.json?key=afecaab6134341fc8f9231218242006&q=Cartagena&aqi=no&lang=es'
      );
      const data = await response.json();
      setWeather(data);
    };

    fetchWeather();
  }, []);

  return (
    <div className="container mx-auto p-6">
      {weather ? (
        <div className="flex space-x-4 items-center justify-center overflow-hidden">
          {/* Temperatura */}
          <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 p-6 rounded-xl shadow-xl flex items-center space-x-4 w-1/5">
            <img 
              src={weather.current.condition.icon} 
              alt={weather.current.condition.text} 
              className="w-16 h-16"
            />
            <div className="text-white text-center">
              <p className="text-xl font-semibold">Temperatura</p>
              <p className="text-3xl font-bold">{weather.current.temp_c}°C</p>
              <p className="text-sm">{weather.current.condition.text}</p>
            </div>
          </div>

          {/* Humedad */}
          <div className="bg-gradient-to-r from-green-500 via-green-400 to-green-300 p-4 rounded-xl shadow-xl flex items-center space-x-4 w-1/5">
            <div className="text-white text-center">
              <p className="text-xl font-semibold">Humedad</p>
              <p className="text-2xl font-bold">{weather.current.humidity}%</p>
            </div>
          </div>

          {/* Viento */}
          <div className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 p-4 rounded-xl shadow-xl flex items-center space-x-4 w-1/5">
            <div className="text-white text-center">
              <p className="text-xl font-semibold">Viento</p>
              <p className="text-2xl font-bold">{weather.current.wind_kph} km/h</p>
            </div>
          </div>

          {/* Sensación térmica */}
          <div className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 p-4 rounded-xl shadow-xl flex items-center space-x-4 w-1/5">
            <div className="text-white text-center">
              <p className="text-xl font-semibold">Sensación Térmica</p>
              <p className="text-2xl font-bold">{weather.current.feelslike_c}°C</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl">Cargando clima...</p>
      )}
    </div>
  );
};

export default Weather;
