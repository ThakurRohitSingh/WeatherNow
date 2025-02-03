
const WeatherInfo = ({ data }) => {
  return (
    <div className="text-white w-[95%] p-6 m-2 rounded-lg flex items-center justify-between">
      {/* Left Section */}
      <div>
        <h2 className="text-2xl pb-2 font-bold">{data.location.name}</h2>

        {/* Show "Chance of Rain" Only Once (For Today) */}
        <p className="text-sm text-[#6b727e]">
          Chance of Rain: {data.forecast.forecastday[0].day.daily_chance_of_rain}%
        </p>

        <h1 className="text-4xl font-bold mt-4">{data.current.temp_c}°</h1>
      </div>

      {/* Right Section - Weather Icon */}
      <div>
        <img src={data.current.condition.icon} alt={data.current.condition.text} className="w-28 h-28" />
      </div>
    </div>
  );
};

export default WeatherInfo;
