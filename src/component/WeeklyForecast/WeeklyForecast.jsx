import React from 'react';
import { WiDaySunny } from 'react-icons/wi';
import OvercastCloud from '../../images/weather_icons/01n.png'

const WeeklyForecast = () => {
  return (
    <section className="bg-blue-300 text-gray-700 p-5 shadow-xl mb-5 rounded-lg">
      <h2 className=" text-2xl font-semibold mb-3">5 Days Forecast</h2>
      <div className=" bg-gray-100 rounded-3xl m-3 p-5">
      <ul>
          <li className="card-item flex items-center justify-between mb-3 last:mb-0">
            <div className="icon-wrapper flex items-center gap-2">
              <img
                src={OvercastCloud}
                width="36"
                height="36"
                alt="Overcast Clouds"
                className="weather-icon text-nowrap"
              />
              <span className="span text-xl font-bold">25</span>
            </div>
            <p className="label-1 text-lg font-semibold">Friday</p>
            <p className="label-1 text-lg font-semibold">17-Feb</p>
          </li>
          <li className="card-item flex items-center justify-between mb-3 last:mb-0">
            <div className="icon-wrapper flex items-center gap-2">
              <img
                src={OvercastCloud}
                width="36"
                height="36"
                alt="Overcast Clouds"
                className="weather-icon"
              />
              <span className="span text-xl font-bold">25</span>
            </div>
            <p className="label-1 text-lg font-semibold">Friday</p>
            <p className="label-1 text-lg font-semibold">17-Feb</p>
          </li>
          <li className="card-item flex items-center justify-between mb-3 last:mb-0">
            <div className="icon-wrapper flex items-center gap-2">
              <img
                src={OvercastCloud}
                width="36"
                height="36"
                alt="Overcast Clouds"
                className="weather-icon"
              />
              <span className="span text-xl font-bold">25</span>
            </div>
            <p className="label-1 text-lg font-semibold">Friday</p>
            <p className="label-1 text-lg font-semibold">17-Feb</p>
          </li>
          <li className="card-item flex items-center justify-between mb-3 last:mb-0">
            <div className="icon-wrapper flex items-center gap-2">
              <img
                src={OvercastCloud}
                width="36"
                height="36"
                alt="Overcast Clouds"
                className="weather-icon"
              />
              <span className="span text-xl font-bold">25</span>
            </div>
            <p className="label-1 text-lg font-semibold">Friday</p>
            <p className="label-1 text-lg font-semibold">17-Feb</p>
          </li>
          <li className="card-item flex items-center justify-between mb-3 last:mb-0">
            <div className="icon-wrapper flex items-center gap-2">
              <img
                src={OvercastCloud}
                width="36"
                height="36"
                alt="Overcast Clouds"
                className="weather-icon"
              />
              <span className="span text-xl font-bold">25</span>
            </div>
            <p className="label-1 text-lg font-semibold">Friday</p>
            <p className="label-1 text-lg font-semibold">17-Feb</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WeeklyForecast;
