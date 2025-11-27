interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

const checkWeather = async (city: string): Promise<void> => {
  const apiKey = "75a96c434d123366265d96fc038da370";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const response = await fetch(apiURL);
  const data: WeatherData = await response.json();

  console.log(data);

  (document.querySelector("#country") as HTMLElement).innerHTML = data.name;
  (document.querySelector("#temp") as HTMLElement).innerHTML =
    Math.round(data.main.temp) + "°C";

  const description = data.weather?.[0]?.description ?? "No description";

  (document.querySelector("#des") as HTMLElement)!.innerHTML = description;

  (document.querySelector("#humidity") as HTMLElement).innerHTML =
    data.main.humidity + "%";

  (document.querySelector("#wind") as HTMLElement).innerHTML =
    data.wind.speed + " km/h";

  // Weather image update
  const img = document.querySelector(".weather") as HTMLImageElement;
};

document.querySelector(".inp button")?.addEventListener("click", () => {
  const location = (document.querySelector(".inp input") as HTMLInputElement)
    .value;
  checkWeather(location);
});

checkWeather("hyderabad");
