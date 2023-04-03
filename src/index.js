//Date
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let timeNow = `${now.getHours()}:${now.getMinutes()}`;
let weekday = document.querySelector(".current-day");
weekday.innerHTML = `${day}`;

let time = document.querySelector(".current-time");
time.innerHTML = `${timeNow}`;

//Searchbar
function showWeather(response) {
  console.log(response);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector(".temp").innerHTML = `${Math.round(
    response.data.main.temp
  )}°`;
}

function showTemperature(cityName) {
  let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}

function submitForm(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input").value;
  showTemperature(cityInput);
}

let search = document.querySelector("#city-search");
search.addEventListener("submit", submitForm);

//Weather Current
function showCurrentTemperature(response) {
  console.log(response.data.main.temp);
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector(".temp");
  temp.innerHTML = `${temperature}`;
  let loc = response.data.name;
  let locationNow = document.querySelector("#city");
  locationNow.innerHTML = `${loc}`;
}
function currentLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);

  axios.get(apiUrl).then(showCurrentTemperature);
}

navigator.geolocation.getCurrentPosition(currentLocation);

//Conversion
function toFarenheit(event) {
  event.preventDefault();
  let currentTemp = document.querySelector(".temp");
  currentTemp.innerHTML = "86°";
}
let fButton = document.querySelector(".farenheit");
fButton.addEventListener("click", toFarenheit);

function toCelsius(event) {
  event.preventDefault();
  let currentTemp = document.querySelector(".temp");
  currentTemp.innerHTML = "30°";
}
let cButton = document.querySelector(".celsius");
cButton.addEventListener("click", toCelsius);
