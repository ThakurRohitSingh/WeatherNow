const API_KEY = "ae7b9a03be94487c8ab194108253001";

export const fetchWeatherData = async (city) => {
    if (!city.trim()) {
      console.error("City name is empty, cannot fetch data.");
      return null; // Return null if no city is provided
    }
  
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`
      );
      if (!response.ok) throw new Error("Failed to fetch weather data");
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  };
  