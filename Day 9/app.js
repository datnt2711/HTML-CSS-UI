var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var time = document.querySelector('.time');
var temperatureValue = document.querySelector('.temperature-value');
var shortDesc = document.querySelector('.short-desc');
var eye = document.querySelector('.eye span');
var cloud = document.querySelector('.cloud span');
var sun = document.querySelector('.sun span');
var weather = document.querySelector('.weather');
var body = document.querySelector('body');


async function changeWeather() {
    let searchValue = search.value.trim();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=d78fd1588e1b7c0c2813576ba183a667`;
    let data = await fetch(url).then(res => res.json());
    if(data.cod === 200) {
        weather.classList.remove('hide');
        city.innerText = data.name;
        country.innerText = data.sys.country;
        let temperature = (Math.round(data.main.temp - 273.15));
        temperatureValue.innerText = temperature;
        shortDesc.innerText = data.weather[0].main;
        eye.innerText = data.visibility + ` (m/s)`;
        cloud.innerText = data.wind.speed + ` (m/s)`;
        sun.innerText = data.main.humidity + `%`;
        time.innerText = new Date().toLocaleString('vi');
        if(temperature < 20) {
            weather.style.background = "url('../image/cold.png') no-repeat center/cover";
            body.style.background = "url('../image/cold.png') no-repeat center/cover";
        }else{
            weather.style.background = "url('../image/hot.png') no-repeat center/cover";
            body.style.background = "url('../image/hot.png') no-repeat center/cover";
        }
    }else {
        weather.classList.add('hide');
    }
    
}

search.addEventListener('keypress', function(e) {
    if(e.code === 'Enter') {
        changeWeather();
    }
})


