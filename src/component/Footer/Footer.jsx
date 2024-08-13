import OpenWeatherLogo from '../../images/openweather.png';

const Footer = () => {
  return (
    <footer className="bg-blue-300 text-gray-600 p-4 mt-7 flex flex-col items-center gap-4">
      <p className="text-sm">
        &copy; 2024 Rohit Singh. All Rights Reserved.
      </p>
      <div className="flex items-center">
        <p className="text-sm">Powered by</p>
        <a
          href="https://openweathermap.org/api"
          title="Free OpenWeather API"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src={OpenWeatherLogo}
            width="150"
            height="30"
            loading="lazy"
            alt="OpenWeather"
            className="object-contain"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
