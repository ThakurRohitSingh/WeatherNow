import React from "react";

const DailyForecast = ({ data }) => {
  return (
    <div className="bg-[#212b3a] text-white p-6 m-2 rounded-xl w-[95%] shadow-lg">
      <p className="text-sm font-semibold text-gray-400 mb-3">TODAY'S FORECAST</p>
      <div className="flex justify-between">
        {data
          .filter((hour) => {
            const hourNumber = parseInt(hour.time.split(" ")[1].split(":")[0], 10);
            return hourNumber >= 6 && hourNumber <= 21; // Keep only 6 AM to 9 PM
          })
          .filter((_, index) => index % 3 === 0) // Take every 3rd hour from filtered data
          .map((hour, index) => (
            <div key={index} className="flex flex-col items-center px-2 border-r last:border-0" style={{ borderRightColor: "#6b727e" }}>
              <p className="text-sm text-[#6b727e] font-bold" >{hour.time.split(" ")[1]}</p>
              <img src={hour.condition.icon} alt={hour.condition.text} className="w-14 h-14" />
              <p className="text-lg font-bold">{Math.round(hour.temp_c)}°</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DailyForecast;
