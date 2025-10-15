export default function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <p className="text-lg capitalize">{weather[0].description}</p>
      <p className="text-5xl font-bold my-4">{Math.round(main.temp)}°C</p>
      <div className="flex justify-center gap-6">
        <div>
          <p className="text-sm text-gray-200">💨 Wind</p>
          <p>{wind.speed} m/s</p>
        </div>
        <div>
          <p className="text-sm text-gray-200">💧 Humidity</p>
          <p>{main.humidity}%</p>
        </div>
      </div>
    </div>
  );
}
