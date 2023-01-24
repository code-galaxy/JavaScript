const city = {
   'Kyiv'    : '703448',
   'Lviv'    : '702550',
   'Miami'   : '4164138',
   'New York': '5128581',
   'Chicago' : '4887398',
   'Toronto' : '5174095',
   'Winnipeg': '6183235',
   'Ivano-Frankivsk': '707471'
}

const weather = [
   'weather_city',
   'weather_description',
   'weather_temp',
   'weather_icon',
   'weather_hr',
   'weather_wind',
   'wind_direction',
   'weather_humidity',
   'atmospheric_pressure'
   ];


let divSelect = document.querySelector('.div-select');
let outDesc = document.querySelector('.out_description');

let select = document.createElement('select');
select.classList.add('select-option');
divSelect.append(select);

function createHtmlElem() {

   for (let key in city) {
      let option = document.createElement('option');
      option.textContent = key;
      option.setAttribute('value', `${city[key]}`);
      select.append(option);
   }

   for (let i = 0; i < weather.length; i++) {
      let desc = document.createElement('div');
      desc.classList.add(weather[i]);
      outDesc.append(desc);
   };
}
createHtmlElem();


const parametr = {
   'url': 'http://api.openweathermap.org/data/2.5/',
   'appid': 'ed1ea0c7bdcad398711b049b9b64a59b'
}

function getWeather() {
   let cityId = document.querySelector('.select-option').value;

   fetch(`${parametr.url}weather?id=${cityId}&appid=70e1ed322b02acbc57d443dd91065f3e`)
      .then(weather => {
         return weather.json();
      }).then(showWeather);
}

getWeather();

function showWeather(data) {
//    console.log(data);
   document.querySelector('.weather_city').textContent = data.name;
   document.querySelector('.weather_temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
   document.querySelector('.weather_description').textContent = data.weather[0]['description'];
   document.querySelector('.weather_icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" width = 150px>`;
   document.querySelector('.weather_wind').textContent = 'wind -' + ' ' + Math.round(data.wind.speed) + ' ' + 'm/sec';
   document.querySelector('.weather_humidity').textContent = 'humidity -' + ' ' + data.main.humidity + ' ' + '%';
   document.querySelector('.wind_direction').textContent = 'wind direction -' + ' ' + data.wind.deg;
   document.querySelector('.atmospheric_pressure').textContent = 'pressure -' + ' ' + data.main.pressure +' '+'hPa';
   document.querySelector('.weather_hr').innerHTML = '<hr>';

}
document.querySelector('.select-option').onchange = getWeather;
