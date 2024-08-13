import React from 'react';
import CurrentWeather from './component/CurrentWeather/CurrentWeather';
import WeeklyForecast from './component/WeeklyForecast/WeeklyForecast';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import HourlyForecast from './component/HourlyForecast/HourlyForecast';
import DailyHighlight from './component/DailyHighlight/DailyHighlight';

const WeatherApp = () => {
  return (
    <>    
      <Header/>
      <main className="h-screen flex flex-col">
        <div className="flex-grow ">
          <article className="p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="content-left">
                <CurrentWeather />
                <DailyHighlight />
              </div>
              <div className="content-right">
                <WeeklyForecast />
              <HourlyForecast />
              </div>
            </div>
          </article>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default WeatherApp;
