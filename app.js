let cityinput=document.querySelector(".search input");
let click = document.querySelector(".click");
let icon = document.querySelector(".weather-icon");


const apikey = "c429346c2c4c165e0a99ff41b5bc6bfc";
const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
async function checkWeather(cityname){
    const response = await fetch(apiurl+cityname+`&appid=${apikey}`);
    let data = await response.json();
    console.log(data);
    let city = document.querySelector(".city");
    city.innerHTML = data.name;
    let temp = document.querySelector(".temp");
    temp.innerHTML = Math.round(data.main.temp)+"°C";
    let humidity = document.querySelector(".humidity");
    humidity.innerHTML = data.main.humidity+"%";
    let wind = document.querySelector(".wind");
    wind.innerHTML = data.wind.speed+"km/h";
    if(data.weather[0].main =="Clouds"){
         icon.src = "clouds.png"
    }
    else if(data.weather[0].main=="clear"){
        icon.src = "clear.png"

    }
    
    else if(data.weather[0].main=="haze"){
        icon.src = "mist.png"

    }
    else if(data.weather[0].main=="rain"){
        icon.src = "rain.png"

    }
    else if(data.weather[0].main=="drizzel"){
        icon.src = "drizzel.png"

    }
    else if(data.weather[0].main=="snow"){
        icon.src = "snow.png"

    }
    else if(data.weather[0].main=="wind"){
        icon.src = "wind.png"

    }
 }
 
 click.addEventListener("click",()=>{
    checkWeather(cityinput.value);
 });
 




 
    
