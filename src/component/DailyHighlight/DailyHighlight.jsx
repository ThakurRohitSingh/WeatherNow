import React from 'react';
import {
  WiStrongWind,
  WiHumidity,
  WiThermometer,
  WiBarometer,
  WiSunrise,
  WiSunset,
} from 'react-icons/wi';
import { MdOutlineVisibility } from "react-icons/md";


const getAQIDetails = (aqi) => {
  if (aqi <= 50) return { label: 'Good', className: 'bg-green-500 text-white' };
  if (aqi <= 100)
    return { label: 'Moderate', className: 'bg-yellow-500 text-white' };
  if (aqi <= 150)
    return { label: 'Unhealthy', className: 'bg-orange-500 text-white' };
  if (aqi <= 200)
    return { label: 'Very Unhealthy', className: 'bg-purple-500 text-white' };
    return { label: 'Hazardous', className: 'bg-maroon-500 text-white' };
};

const DailyHighlight = () => {

  const aqiValue = 500;
  const { label: aqiLabel, className: aqiBadgeClass } = getAQIDetails(aqiValue);

  return (
    <section>
      <div className="bg-blue-300 text-gray-900 rounded-2xl p-5 mb-5 shadow-xl">
        <h2
          className="text-2xl font-semibold mb-5">Today's Highlights</h2>
        <div className=" grid gap-5">
          <div className="bg-gray-100 rounded-lg p-4 relative">
            <h3 className="text-xl mb-4 text-gray-500">Air Quality Index</h3>
            <div className="flex justify-between items-center gap-4">
              <WiStrongWind size={36}/>
              <ul className="flex -wrap w-full">
                <li className="flex justify-end gap-2 w-1/2">
                  <p className="text-lg font-semibold">23.3</p>
                  <p className="text-gray-500">
                    PM <sub>2.5</sub>
                  </p>
                </li>
                <li className="flex justify-end gap-2 w-1/2">
                  <p className="text-lg font-semibold">30.4</p>
                  <p className="text-gray-500">
                    SO <sub>2</sub>
                  </p>
                </li>
                <li className="flex justify-end gap-2 w-1/2">
                  <p className="text-lg font-semibold">23.3</p>
                  <p className="text-gray-500">
                    O<sub>3</sub>
                  </p>
                </li>
                <li className="flex justify-end gap-2 w-1/2">
                  <p className="text-lg font-semibold">25.6</p>
                  <p className="text-gray-500">
                    NO<sub>2</sub>
                  </p>
                </li>
              </ul>
            </div>
            <span
              className={`badge label-1 rounded-full px-3 py-1 absolute top-4 right-4 ${aqiBadgeClass}`}
              title={aqiLabel}
            >
              {aqiLabel}
            </span>
          </div>

          <div className="card card-sm highlight-card two bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="text-xl mb-4 text-gray-500">
              Sunrise & Sunset
            </h3>
            <div className="card-list flex flex-wrap gap-4">
              <div className="card-item flex items-center gap-4">
                <WiSunrise size={36} className="text-yellow-500" />
                <div>
                  <p className="label-1 text-gray-500">Sunrise</p>
                  <p className="title-1 text-lg font-semibold">6:30AM</p>
                </div>
              </div>
              <div className="card-item flex items-center gap-4">
                <WiSunset size={36} className="text-orange-500" />
                <div>
                  <p className="label-1 text-gray-500">Sunset</p>
                  <p className="title-1 text-lg font-semibold">5:54 PM</p>
                </div>
              </div>
              <div className="card-item flex items-center gap-4">
                <WiHumidity size={36} className="text-blue-500" />
                <div>
                  <p className="label-1 text-gray-500">Humidity</p>
                  <p className="title-1 text-lg font-semibold">35%</p>
                </div>
              </div>
              <div className="card-item flex items-center gap-4">
                <WiBarometer size={36} className="text-purple-500" />
                <div>
                  <p className="label-1 text-gray-500">Pressure</p>
                  <p className="title-1 text-lg font-semibold">1052 hPa</p>
                </div>
              </div>
              <div className="card-item flex items-center gap-4">
                <MdOutlineVisibility size={30} className="text-fluorescentGreen" />
                <div>
                  <p className="label-1 text-gray-500">Visibility</p>
                  <p className="title-1 text-lg font-semibold">0.4 Km</p>
                </div>
              </div>
              <div className="card-item flex items-center gap-4">
                <WiThermometer size={36} className="text-red-500" />
                <div>
                  <p className="label-1 text-gray-500">Feels Like</p>
                  <p className="title-1 text-lg font-semibold">25°C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyHighlight;
