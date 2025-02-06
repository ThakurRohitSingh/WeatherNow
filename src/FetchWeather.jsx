const API_KEY = "8afa06b69132cb979aff891e6602de12";

export const fetchWeatherData = async (city) => {
    if (!city.trim()) {
      console.error("City name is empty, cannot fetch data.");
      return null;
    }
  
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`
      );
      if (!response.ok) throw new Error("Failed to fetch weather data");
  
      const data = await response.json();
      console.log(data)
      console.log()
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  };
  