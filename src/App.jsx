import React, { useEffect, useState } from 'react';
import './App.css';
import DailyForecast from './Components/DailyForecast';
import WeeklyForecast from './Components/WeeklyForecast';
import AirCondition from './Components/AirCondition';
import WeatherInfo from './Components/WeatherInfo';
import { fetchWeatherData } from './FetchWeather';
import logo from "../public/weatherNow.png"

const App = () => {

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();

  const getWeather = async () => {
    if (!city.trim()) return; // Prevents API call if city is empty
    const data = await fetchWeatherData(city);
    setWeatherData(data);
  };

  return (
    <section className='container'>
      <div className="nav bg-white">
      <div className="h-screen flex  flex-col items-center justify-start gap-80">
        <img src={logo} alt="" />
  <span  style={{ writingMode: 'sideways-lr' }} className="font-bold text-4xl">
    WEATHER NOW
  </span>
</div>

      </div>
      <div className="content">
        <div className='card1'>
          <div className="input-container">
            <input type="text"
              placeholder='Search for City'
              id='search'
              value={city}
              onChange={(e) => setCity(e.target.value)} />
            <button onClick={getWeather}>Search</button>
          </div>

          {
            weatherData && (
              <>
                <WeatherInfo data={weatherData} />
                <DailyForecast data={weatherData.forecast.forecastday[0].hour} />
                <AirCondition data={weatherData} />
              </>
            )
          }
        </div>
        {
          weatherData && (<WeeklyForecast data={weatherData.forecast.forecastday} />)
        }
      </div>
    </section>
  );
};

export default App;
