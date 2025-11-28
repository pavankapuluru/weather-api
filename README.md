# Weather App (TypeScript + OpenWeather API)

A simple and fast weather application built using TypeScript, HTML, and OpenWeatherMap API.
Users can search for any city and instantly view real-time weather details.

✨ Features
 1. Search Weather by City

Enter any city name and get immediate weather information:

Temperature (°C)

Humidity (%)

Wind Speed (km/h)

Weather Description

 2. Live Weather Data (API Powered)

Uses OpenWeatherMap API to fetch:

main.temp

main.humidity

wind.speed

weather[0].description

 3. Default Weather Display

On page load, the weather for Hyderabad is shown automatically.

 4. Clean TypeScript Logic

Includes:

Strong typing using WeatherData interface

API calls using fetch

Safe optional chaining for description

Safe DOM type casting

🧩 Tech Stack

TypeScript

HTML

CSS

OpenWeatherMap REST API

Fetch API

▶ How to Run

Clone the repo:

git clone https://github.com/pavankapuluru/weather-api


Install TypeScript (if needed):

npm install -g typescript


Compile TypeScript:

tsc main.ts


Open index.html in the browser.
