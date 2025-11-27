var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
const checkWeather = (city) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const apiKey = "75a96c434d123366265d96fc038da370";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = yield fetch(apiURL);
    const data = yield response.json();
    console.log(data);
    document.querySelector("#country").innerHTML = data.name;
    document.querySelector("#temp").innerHTML =
        Math.round(data.main.temp) + "°C";
    const description = (_c = (_b = (_a = data.weather) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.description) !== null && _c !== void 0 ? _c : "No description";
    document.querySelector("#des").innerHTML = description;
    document.querySelector("#humidity").innerHTML =
        data.main.humidity + "%";
    document.querySelector("#wind").innerHTML =
        data.wind.speed + " km/h";
    // Weather image update
    const img = document.querySelector(".weather");
});
(_a = document.querySelector(".inp button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const location = document.querySelector(".inp input")
        .value;
    checkWeather(location);
});
checkWeather("hyderabad");
export {};
//# sourceMappingURL=index.js.map