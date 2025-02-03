

const WeeklyForecast = ({ data }) => {

  return (
    <div className=" h-[90%] w-2/5 mt-32">
      <div className="bg-[#212b3a] text-white w-[100%] p-5 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-6 text-[#6b727e]">7-DAY FORECAST</h2>
        <table className="w-full ">
          <tbody>
            {data.map((day, index) => {
              const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
              const weekday = new Date(day.date).toLocaleDateString("en-US", {
                weekday: "long",
              });
              const displayDay = weekday === today ? "Today" : weekday;

              return (
                <tr key={index} className="border-b last:border-0" style={{ borderBottomColor: "#6b727e" }}>
                  <td className="text-lg text-left font-small text-[#6b727e]">{displayDay}</td>
                  <td className="flex items-center justify-start gap-2">
                    <span className="flex justify-start items-center">
                      <img
                        src={day.day.condition.icon}
                        alt={day.day.condition.text}
                      />
                    </span>
                    <span className="text-sm font-bold text-center capitalize">{day.day.condition.text.slice(0, 12)}</span>
                  </td>
                  <td className="text-right text-lg">
                    {Math.round(day.day.maxtemp_c)}<span className="text-[#6b727e]">/{Math.round(day.day.mintemp_c)}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default WeeklyForecast;
