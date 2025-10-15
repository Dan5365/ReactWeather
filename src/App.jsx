import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";

const API_KEY = "c50f0c86a6ea86424c0a6d497e28cd57"; 

export default function App() {
  const [city, setCity] = useState("Almaty");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const fetchWeather = async (cityName) => {
    try {
      setError(null);
      setWeather(null);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      if (data.cod !== 200) throw new Error(data.message);
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-500 flex flex-col items-center justify-center p-4 text-white">
      <h1 className="text-3xl font-bold mb-6">🌦 Weather Forecast</h1>
      <SearchBox onSearch={fetchWeather} />
      {error && <p className="text-red-200 mt-4">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}
