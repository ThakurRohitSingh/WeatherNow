import React, { useState } from "react";
import { FaThermometerHalf, FaTint} from "react-icons/fa";
import { WiSunrise,WiSunset,WiHumidity   } from "react-icons/wi";
import { GiWindsock } from "react-icons/gi";
import { TbUvIndex } from "react-icons/tb";

const AirCondition = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-[#212b3a] m-2 p-2 rounded-lg w-[95%] text-white">
      <h2 className="text-lg font-semibold text-gray-300">AIR CONDITIONS </h2>
      <div className="grid grid-cols-4 gap-y-6 mt-4">
        {/* Real Feel */}
        <div className="flex items-center gap-2"> 
          <FaThermometerHalf className="text-gray-400" />
          <div>
            <p className="text-gray-400 text-sm">Real Feel</p> 
            <p className="text-lg font-bold">{data.current.feelslike_c}</p>
          </div>
        </div>
        {/* Sunrise */}
        <div className="flex items-center gap-2"> 
          <WiSunrise className="text-gray-400 text-2xl" />
          <div>
            <p className="text-gray-400 text-sm">Sunrise</p> 
            <p className="text-lg font-bold mr-2">{data.forecast.forecastday[0].astro.sunrise}</p>
          </div>
        </div>
        {/* Sunset */}
        <div className="flex items-center gap-2"> 
          <WiSunset  className="text-gray-400 text-2xl" />
          <div>
            <p className="text-gray-400 text-sm mb-1">Sunset</p> 
            <p className="text-lg font-bold">{data.forecast.forecastday[0].astro.sunset}</p>
          </div>
        </div>
        {/* Humidity */}
        <div className="flex items-center gap-2"> 
          <WiHumidity  className="text-gray-400 text-2xl" />
          <div>
            <p className="text-gray-400 text-sm mb-1">Humidity</p> 
            <p className="text-lg font-bold">{data.current.humidity}</p>
          </div>
        </div>

        {/* Only Show More Data if showMore is true */}
        {showMore && (
          <>
            {/* Visibility */}
            <div className="flex items-center gap-2"> 
              <FaTint className="text-gray-400" />
              <div>
                <p className="text-gray-400 text-sm mb-1">Visiablitiy</p> 
                <p className="text-lg font-bold">{data.current.vis_km}km</p>
              </div>
            </div>

            {/* Wind */}
            <div className="flex items-center gap-2"> 
              <GiWindsock  className="text-gray-400 text-2xl" />
              <div>
                <p className="text-gray-400 text-sm mb-1">Wind</p> 
                <p className="text-lg font-bold">{data.current.wind_kph}km/h</p>
              </div>
            </div>

            {/* UV Index */}
            <div className="flex items-center gap-2"> 
              <TbUvIndex className="text-gray-400 text-2xl" />
              <div>
                <p className="text-gray-400 text-sm mb-1">UV Index</p> 
                <p className="text-lg font-bold">{data.current.uv}</p>
              </div>
            </div>
          </>
        )}


      </div>

      {/* See More Button */}
      <div className="mt-4 text-right">
        <button
          onClick={toggleShowMore} 
          className="bg-blue-500 text-white px-4 py-1 text-sm rounded-full hover:bg-blue-600"
        >
          {showMore ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default AirCondition;
