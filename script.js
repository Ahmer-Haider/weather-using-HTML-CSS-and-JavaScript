// data
// variable to store data
// function to get data from weather api
// manipulate the variable to store the data


let input = document.querySelector('#search-input');
let country = document.querySelector('#country');
let state = document.querySelector('#state');
let city = document.querySelector('#city');
let humidity = document.querySelector('#humidity');
let temperature = document.querySelector('#temperature');
let windSpeed = document.querySelector('#wind-speed');
let weather = document.querySelector('#weather');
let weatherIcon = document.querySelector('#weather-icon');

const getData = async (e)=> {
    e.preventDefault();
    if(!document.querySelector(".message-text") && !input.value){
        const message = document.createElement('p');
        message.innerHTML = 'Please enter a location';
        message.className = 'message-text';
        message.style.padding = '5px 0 0 0';
        document.querySelector(".message-box").appendChild(message);
        setTimeout(()=> {
            message.remove();
        }, 1000);
    };
    const cityName = input.value;
    
    const fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=9c64eafb661d4a3ebb6115805242211&q=${cityName}`);
    const data = await fetchData.json();
    console.log(data);

    if(!document.querySelector(".message-text")&&data.error){
        const message = document.createElement('p');
        message.innerHTML = 'Please enter a valid location';
        message.className = 'message-text';
        message.style.padding = '5px 0 0 0';
        document.querySelector(".message-box").appendChild(message);
        setTimeout(()=> {
            message.remove();
        }, 1000);
        country.innerHTML = "_";
        state.innerHTML = "_";
        city.innerHTML = "_";
        humidity.innerHTML = "_";
        temperature.innerHTML = "_";
        windSpeed.innerHTML = "_";
        weather.innerHTML = "_";
        weatherIcon.src = "_";
    }
    
    country.innerHTML = data.location.country;
    state.innerHTML = data.location.region;
    city.innerHTML = data.location.name;
    humidity.innerHTML = data.current.humidity;
    temperature.innerHTML = data.current.temp_c;
    windSpeed.innerHTML = data.current.wind_kph+" km/h";
    weather.innerHTML = data.current.condition.text;
    weatherIcon.src = data.current.condition.icon;
    

}