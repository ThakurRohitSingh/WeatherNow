import React from 'react';
import { WiDaySunny, WiWindDeg } from 'react-icons/wi';

const WeatherOverview = () => {
  return (
    <section>
     <div className="bg-blue-300 text-gray-900 rounded-2xl p-5 mb-5 shadow-xl">
      <h2 className="text-2xl font-semibold mb-3">Today at</h2>
      <div className="mb-3">
        {/* Temperature Section */}
        <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-2 mb-2">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex flex-col items-center p-2 rounded-lg shadow-lg bg-gray-100">
              <p className="text-lg font-medium mb-2">03 PM</p>
              <WiDaySunny size={48} className="text-yellow-500 mb-2" title="Sunny" />
              <p className="text-lg">25&deg;</p>
            </div>
          ))}
        </div>

        {/* Wind Section */}
        <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-2">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex flex-col items-center p-2 rounded-lg shadow-lg bg-gray-100">
              <p className="text-lg font-medium mb-2">03 PM</p>
              <WiWindDeg size={48} className="text-blue-500 mb-2" title="Windy" />
              <p className="text-lg">12 Km/h</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default WeatherOverview;
