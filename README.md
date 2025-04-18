# **[Weather Now](https://weathernow04.netlify.app/)**

## Overview
This is a **Weather Now** web app built using **React, Vite, and Tailwind CSS**. The app allows users to search for a city and view current weather conditions, hourly forecasts, and a 7-day forecast.

## Features
- 🌍 **Search for any city** to get real-time weather updates.
- 🌡️ **Current temperature, real feel, and weather conditions**.
- ⏳ **Hourly forecast** with temperature and weather icons.
- 📅 **7-day weather forecast** with high and low temperatures.
- 📊 **Air conditions** including humidity, wind speed, visibility, and UV index.
- 🌅 **Sunrise and sunset times**.
- 🌙 **Dark theme UI** for better user experience.

## Screenshot
![Weather Now UI](https://github.com/ThakurRohitSingh/WeatherNow/blob/59a42925517691714ccae796578e1c9b04ab61cb/public/WeatherNow%20Ui.png)

## Technologies Used
- **React** (for UI components and state management)
- **Vite** (for fast build and development)
- **Tailwind CSS** (for responsive and modern styling)
- **[weatherapi](https://www.weatherapi.com/) API** (for weather data)

## Installation
### Prerequisites
Ensure you have **Node.js** and **npm** installed.

### Steps to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-now.git
   ```
2. Navigate to the project folder:
   ```bash
   cd weather-now
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173/` in your browser.

## API Setup
1. Create a **.env** file in the root directory.
2. Add the following line with your [weatherapi](https://www.weatherapi.com/) key:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
3. Restart the development server if necessary.



## Deployment
To deploy on **Vercel**, **Netlify**, or **GitHub Pages**:
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `/dist` folder using your preferred platform.



