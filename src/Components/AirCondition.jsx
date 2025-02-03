import React from "react";
import { FaThermometerHalf, FaTint, FaWind, FaSun } from "react-icons/fa";

const AirCondition = () => {
  return (
    <div className="bg-[#212b3a] m-2 p-6 rounded-lg w-[95%] text-white">
      <h2 className="text-lg font-semibold text-gray-300">AIR CONDITIONS</h2>
      <div className="grid grid-cols-4 gap-y-6 mt-4">
        
        {/* Real Feel */}
        <div className="flex items-center gap-2">
          <FaThermometerHalf className="text-gray-400" />
          <div>
            <p className="text-gray-400 text-sm">Real Feel</p>
            <p className="text-xl font-bold">30°</p>
          </div>
        </div>
        {/* Sunrise */}
        <div className="flex items-center gap-2">
          <FaThermometerHalf className="text-gray-400" />
          <div>
            <p className="text-gray-400 text-sm">Real Feel</p>
            <p className="text-xl font-bold">30°</p>
          </div>
        </div>
        {/* Sunset */}
        <div className="flex items-center gap-2">
          <FaThermometerHalf className="text-gray-400" />
          <div>
            <p className="text-gray-400 text-sm">Real Feel</p>
            <p className="text-xl font-bold">30°</p>
          </div>
        </div>
        {/* Humidity */}
        <div className="flex items-center gap-2">
          <FaThermometerHalf className="text-gray-400" />
          <div>
            <p className="text-gray-400 text-sm">Real Feel</p>
            <p className="text-xl font-bold">30°</p>
          </div>
        </div>
        {/* Visiablitiy */}
        <div className="flex items-center gap-2">
          <FaThermometerHalf className="text-gray-400" />
          <div>
            <p className="text-gray-400 text-sm">Real Feel</p>
            <p className="text-xl font-bold">30°</p>
          </div>
        </div>

        {/* Wind */}
        <div className="flex items-center gap-2">
          <FaWind className="text-gray-400" />
          <div>
            <p className="text-gray-400 text-sm">Wind</p>
            <p className="text-xl font-bold">0.2 km/h</p>
          </div>
        </div>

        {/* Chance of Rain */}
        <div className="flex items-center gap-2">
          <FaTint className="text-gray-400" />
          <div>
            <p className="text-gray-400 text-sm">Chance of rain</p>
            <p className="text-xl font-bold">0%</p>
          </div>
        </div>

        {/* UV Index */}
        <div className="flex items-center gap-2">
          <FaSun className="text-gray-400" />
          <div>
            <p className="text-gray-400 text-sm">UV Index</p>
            <p className="text-xl font-bold">3</p>
          </div>
        </div>
      </div>

      {/* See More Button
      <div className="mt-4 text-right">
        <button className="bg-blue-500 text-white px-4 py-1 text-sm rounded-full hover:bg-blue-600">
          See more
        </button>
      </div> */}
    </div>
  );
};

export default AirCondition;
