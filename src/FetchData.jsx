import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "ae7b9a03be94487c8ab194108253001"; // Replace with your WeatherAPI key

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message);

      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // return (
  //   <div className="p-5 bg-gray-900 text-white min-h-screen">
  //     <h1 className="text-2xl font-bold">Weather App 🌦</h1>
  //     <input
  //       type="text"
  //       placeholder="Enter city name..."
  //       className="p-2 m-2 text-black"
  //       value={city}
  //       onChange={(e) => setCity(e.target.value)}
  //     />
  //     <button onClick={fetchWeather} className="p-2 bg-blue-500">
  //       Get Weather
  //     </button>

  //     {weatherData && (
  //       <div className="mt-5">
  //         {/* Current Weather */}
  //         <h2 className="text-xl font-bold">Current Weather in {weatherData.location.name}</h2>
  //         <p>🌡 Temperature: {weatherData.current.temp_c}°C</p>
  //         <p>🌬 Wind: {weatherData.current.wind_kph} km/h</p>
  //         <p>💧 Humidity: {weatherData.current.humidity}%</p>
  //         <p>🌤 Condition: {weatherData.current.condition.text}</p>

  //         {/* Hourly Forecast (Next 5 Hours) */}
  //         <h2 className="text-lg mt-3 font-bold">Hourly Forecast</h2>
  //         <div className="grid grid-cols-5 gap-2">
  //           {weatherData.forecast.forecastday[0].hour.slice(0, 5).map((hour, index) => (
  //             <div key={index} className="p-3 bg-gray-800 rounded">
  //               <p>{hour.time.split(" ")[1]}</p>
  //               <p>🌡 {hour.temp_c}°C</p>
  //               <p>💧 {hour.humidity}%</p>
  //             </div>
  //           ))}
  //         </div>

  //         {/* 7-Day Forecast */}
  //         <h2 className="text-lg mt-3 font-bold">7-Day Forecast</h2>
  //         <div className="grid grid-cols-3 gap-3">
  //           {weatherData.forecast.forecastday.map((day, index) => (
  //             <div key={index} className="p-3 bg-gray-700 rounded">
  //               <p>{day.date}</p>
  //               <p>🌡 {day.day.avgtemp_c}°C</p>
  //               <p>🌬 Wind: {day.day.maxwind_kph} km/h</p>
  //               <p>💧 Humidity: {day.day.avghumidity}%</p>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
};

export default WeatherApp;
