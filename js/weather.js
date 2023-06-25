const API_KEY = "56b471517ae1b73b866bdd0acf52af2f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const icon = document.querySelector("#weather img");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:last-child");
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

      weather.innerText = `${data.main.temp}℃ /`;
      city.innerText = data.name;
      icon.src = iconUrl;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
