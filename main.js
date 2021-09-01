//Variables
let search = document.getElementById("city-search");
let submitButton = document.getElementById("submit-button");
let miami = document.getElementById("miami");
let houston = document.getElementById("houston");
let atlanta = document.getElementById("atlanta");
let newYork = document.getElementById("new-york");
let denver = document.getElementById("denver");
let nashville = document.getElementById("nashville");
let chicago = document.getElementById("chicago");
let vegas = document.getElementById("vegas");
let temp = document.getElementById("temp");
let cityName = document.getElementById("city-name");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed")
//functions
function getWeather(city) {
  $.getJSON(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=7aaa3785a6cb0e55044cd5cba2b25d4d`,
    function (data) {
      console.log(data);
      cityName.innerHTML = `City: ${data.name}`;
      temp.innerHTML = `Temperature: ${data.main.temp}`;
      humidity.innerHTML = `Humidity: ${data.main.humidity}`;
      windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} mph`;
    }
  );
}

// function getWeather(chicago) {
//   $.getJSON(
//     `http://api.openweathermap.org/data/2.5/weather?q=${chicago}&units=imperial&appid=7aaa3785a6cb0e55044cd5cba2b25d4d`,
//     function (data) {
//       console.log(data);
//       cityName.innerHTML = `City: ${data.name}`;
//       temp.innerHTML = `Temperature: ${data.main.temp}`;
//     }
//   );
// }

// getWeather('chicago');

submitButton.addEventListener("click", (event) => {
  getWeather(search.value);
});

denver.addEventListener("click", (event) => {
  getWeather("denver");
});

houston.addEventListener("click", (event) => {
  getWeather("houston");
});

chicago.addEventListener("click", (event) => {
  getWeather("chicago");
});

nashville.addEventListener("click", (event) => {
  getWeather("nashville");
});

vegas.addEventListener("click", (event) => {
  getWeather("vegas");
});

miami.addEventListener("click", (event) => {
  getWeather("miami");
});

atlanta.addEventListener("click", (event) => {
  getWeather("atlanta");
});

indianapolis.addEventListener("click", (event) => {
  getWeather("indianapolis");
});

//  init
// check local storage for the key (cities) if present assign each city to button in the left panel

//Events
