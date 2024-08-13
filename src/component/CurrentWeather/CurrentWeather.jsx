import React from 'react';
import { MdCalendarToday, MdLocationOn } from 'react-icons/md';
import OvercastCloud from '../../images/weather_icons/01d.png';

const CurrentWeather = () => {
  return (
    <section className="bg-blue-300 text-gray-700 p-3 shadow-xl mb-5 rounded-lg">
     <h2 className=" text-2xl font-semibold ml-3 mb-3">Now</h2>
     <div className='bg-gray-100 m-3 rounded-3xl p-4'>
      <div className="flex items-center mb-3">
        <p className="text-5xl font-bold">25&deg;C</p>
        <img
          src={OvercastCloud}
          width="64"
          height="64"
          alt="Overcast Clouds"
          className="mx-auto"
        />
      </div>
      <p className="text-lg mb-4">Overcast Clouds</p>
      <ul className="border-t border-gray-300 pt-4">
        <li className="flex items-center gap-2 mb-3">
          <MdCalendarToday className="text-xl" />
          <p className="text-lg font-semibold">Thursday 16, Feb</p>
        </li>
        <li className="flex items-center gap-2">
          <MdLocationOn className="text-xl" />
          <p className="text-lg font-semibold">London, GB</p>
        </li>
      </ul>
     </div>
    </section>
  );
};

export default CurrentWeather;
