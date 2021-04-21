let cityName = document.querySelector('.country');
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.wheather-desc');
let inputValue = document.querySelector('.text-field');
let wheatherIcon = document.querySelector('.wheather-icon');

inputValue.addEventListener('keyup', function () {
    if (e.key === 'Enter') {
        let value = e.target.value;
        getWheatherInfo(value);

    }
});

function getWheatherInfo(name) {
    let api = `api.openweathermap.org/data/2.5/weather?q=${name}&appid=84b0264404cf8bd4f07dbf9a1205d46b&units=metric`;
    fetch(api)
        .then((Response) => Response.json())
        .then((data) => updateWeatherInfo(data));
}

function updateWeatherInfo(data) {
    cityName.innerHTML = data.name;
    temperature.innerHTML = ~~data.main.temp;
    description.innerHTML = `${data.weather[0].description}, Humiditi: ${data.main.humidity}%`;
    wheatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}10n@2x.png`
}

