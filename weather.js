const apikey="9484af58387ffe454fce95ea7f66b06b";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiUrl2="https://api.openweathermap.org/data/2.5/forecast?&units=metric&q=";


const searchBox = document.querySelector(".searchbar");
const searchBtn = document.querySelector(".searchbtn");
const weather=document.querySelector(".current-weather-logo");
const loading=document.querySelector(".loader");
// const sunRise=data.sys.sunrise;
// const sunrtime = new Date(sunRise * 1000);
// const formattedtime = sunrtime.toLocaleString();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
async function checkWeather(city){
    const response=await fetch(apiurl+ city + `&appid=${apikey}`);
    
    var data=await response.json();
    loading.style.visibility="visible";
    if(data.cod=="200"){
        
        await sleep(2000);
        loading.style.visibility="hidden";
        const sunriseDate = new Date(data.sys.sunrise* 1000);
        const hours = sunriseDate.getHours();
        const minutes = sunriseDate.getMinutes();
        const formattedsrTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

        const sunsetDate = new Date(data.sys.sunset* 1000);
        const hoursset = sunsetDate.getHours();
        const minutesset= sunsetDate.getMinutes();
        const formattedssTime = `${hoursset.toString().padStart(2, '0')}:${minutesset.toString().padStart(2, '0')}`;

        const currentDate = new Date();
        const hoursnow = currentDate.getHours();
        const minutesnow = currentDate.getMinutes();
        const formattedcurrentTime = `${hoursnow.toString().padStart(2, '0')}:${minutesnow.toString().padStart(2, '0')}`;

        const timestamp=data.dt;
        const date=new Date(timestamp * 1000); 

        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
        document.querySelector(".desc").innerHTML=data.weather[0].description;
        document.querySelector(".city").innerHTML=data.name + " , " +data.sys.country ;
        document.querySelector(".speed").innerHTML=data.wind.speed ;
        document.querySelector(".degree").innerHTML=data.wind.deg ;
        document.querySelector(".gust").innerHTML=data.wind.gust ;
        document.querySelector("#humidity").innerHTML=data.main.humidity+ "%" ;
        document.querySelector("#pressure").innerHTML=data.main.pressure+ "hPa" ;
        document.querySelector("#visibility").innerHTML=Math.round((data.visibility)/1000) + "KM";
        document.querySelector("#feels-like").innerHTML=Math.round(data.main.feels_like)+ "°C";
        document.querySelector("#sunrise").innerHTML=formattedsrTime;
        document.querySelector("#sunset").innerHTML=formattedssTime;
        document.querySelector(".time-now").innerHTML=formattedcurrentTime;
        document.querySelector(".date").innerHTML=date.toDateString();
        if(data.weather[0].icon == "01n"){//night clear
            weather.src="moon1.jpg";
            document.body.style.backgroundImage="url('clear-night.jpeg')";
            document.body.style.color="white";
        }
        else if(data.weather[0].icon == "01d"){//day clear
            weather.src="sun.png";
            document.body.style.backgroundImage="url('clear-day1.jpeg')";
            document.body.style.color="black";
        }
        else if(data.weather[0].icon == "02d"){//day few clouds
            weather.src="sun-cloud.png";
            document.body.style.backgroundImage="url('background3.jpg')";
            document.body.style.color="black";
        }
        else if(data.weather[0].icon == "02n"){//night few cloud
            weather.src=" https://openweathermap.org/img/wn/02n@2x.png";
            document.body.style.backgroundImage="url('night-cloud.jpg')";
            document.body.style.color="white";
        }
        else if(data.weather[0].icon == "03d"){//day sc clouds
            weather.src=" https://openweathermap.org/img/wn/03d@2x.png";
            document.body.style.backgroundImage="url('background3.jpg')";
            document.body.style.color="black";
        }
        else if(data.weather[0].icon == "03n"){//night sc clouds
            weather.src=" https://openweathermap.org/img/wn/03n@2x.png";
            document.body.style.backgroundImage="url('night-cloud.jpg')";
            document.body.style.color="white";
        }
        else if(data.weather[0].icon == "04d"){//day br clouds
            weather.src=" https://openweathermap.org/img/wn/04d@2x.png";
            document.body.style.backgroundImage="url('background3.jpg')";
            document.body.style.color="black";
        }
        else if(data.weather[0].icon == "04n"){//night br clouds
            weather.src=" https://openweathermap.org/img/wn/04n@2x.png";
            document.body.style.backgroundImage="url('night-cloud.jpg')";
            document.body.style.color="white";
        }
        else if(data.weather[0].icon == "09d"){//day sh rain
            weather.src=" https://openweathermap.org/img/wn/09d@2x.png";
            document.body.style.backgroundImage="url('https://tenor.com/view/lotus-flower-rainy-day-peace-gif-26815914.gif')";
            document.body.style.color="white";
        }
        else if(data.weather[0].icon == "09n"){//night sh rain
            weather.src=" https://openweathermap.org/img/wn/09n@2x.png";
            document.body.style.backgroundImage="url('https://tenor.com/view/raining-rain-background-newtab-gif-23029466.gif')";
            document.body.style.color="white";
        }
        else if(data.weather[0].icon == "10d"){//day rain
            weather.src=" https://openweathermap.org/img/wn/10d@2x.png";
            document.body.style.backgroundImage="url('https://tenor.com/view/lotus-flower-rainy-day-peace-gif-26815914.gif')";
            document.body.style.color="white";
        }
        else if(data.weather[0].icon == "10n"){//night rain
            weather.src=" https://openweathermap.org/img/wn/10n@2x.png";
            document.body.style.backgroundImage="url('https://tenor.com/view/raining-rain-background-newtab-gif-23029466.gif')";
            document.body.style.color="white";
        }
        else if(data.weather[0].icon == "11d"){//day thunder
            weather.src=" https://openweathermap.org/img/wn/11d@2x.png";
            document.body.style.backgroundImage="url('day-thunder.jpeg')";
            document.body.style.color="white";
        }
        else if(data.weather[0].icon == "11n"){//night thunder
            weather.src=" https://openweathermap.org/img/wn/11n@2x.png";
            document.body.style.backgroundImage="url('https://tenor.com/view/lightning-storm-rain-thunderstorm-bad-weather-gif-17797645.gif')";
            document.body.style.color="white";
        }
        else if(data.weather[0].icon == "13d"){//day snow
            weather.src=" https://openweathermap.org/img/wn/13d@2x.png";
            document.body.style.backgroundImage="url('https://tenor.com/view/mountain-snow-winter-cold-gif-17692117.gif')";
            document.body.style.color="black";
        }
        else if(data.weather[0].icon == "13n"){//night snow
            weather.src=" https://openweathermap.org/img/wn/13n@2x.png";
            document.body.style.backgroundImage="url('https://tenor.com/view/winter-wonderland-gif-25261035.gif')";
            document.body.style.color="black";
        }
        else if(data.weather[0].icon == "50d"){//day mist
            weather.src=" https://openweathermap.org/img/wn/50d@2x.png";
            document.body.style.backgroundImage="url('day-mist.jpeg')";
            document.body.style.color="black";
        }
        else if(data.weather[0].icon == "50n"){//night mist
            weather.src=" https://openweathermap.org/img/wn/50n@2x.png";
            document.body.style.backgroundImage="url('night-mist.jpg')";
            document.body.style.color="white";
        }
    
        else{
            weather.src=" https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
        }
        
        
        if(document.querySelector(".gust").innerHTML=="undefined"){
            document.querySelector(".gust").innerHTML="0";
        }

        // if(data.weather[0].main=="Clouds"){
        //     if(formattedcurrentTime>="06:00" && formattedcurrentTime<="17:30"){
        //         weather.src="sun-cloud.png";
        //     }
        //     else{
        //         weather.src="clouds6.png";
        //     }
            
        // }
        // else if(data.weather[0].main=="Clear"){
        //     weather.src="sun.png";
        // }
        // else if(data.weather[0].main=="Rain"){
        //     if(formattedcurrentTime>="06:00" && formattedcurrentTime<="17:30"){
        //         weather.src="sun-rain.png";
        //     }
        //     else{
        //         weather.src="rain.png";
        //     }
        
        // }
        // else if(data.weather[0].main=="Drizzle"){
        //     weather.src="drizzle2.png";
        // }
        // else if(data.weather[0].main=="Mist"){
        //     weather.src="mist.png";
        // }

        const humidcolor=document.querySelector(".humidity p");
        if(data.main.humidity>=0 && data.main.humidity<=30){
            
            humidcolor.style.color="pink";
        }
        else if(data.main.humidity>30 && data.main.humidity<=70){
            humidcolor.style.color="skyblue";
        }
        else if(data.main.humidity>70 && data.main.humidity<=100){
            humidcolor.style.color="blue";
        }

        const visiblecolor=document.querySelector(".visibility p");
        if(Math.round((data.visibility)/1000)>=0 && Math.round((data.visibility)/1000)<=5){
            visiblecolor.style.color="red";
        }
        else if(Math.round((data.visibility)/1000)>5 && Math.round((data.visibility)/1000)<10){
            visiblecolor.style.color="orange";
        }
        else if(Math.round((data.visibility)/1000)>=10){
            visiblecolor.style.color="green";
        }

        const feelscolor= document.querySelector(".feelslike p");
        if(Math.round(data.main.feels_like)>=0 && Math.round(data.main.feels_like)<=25){
            feelscolor.style.color="skyblue";
        }
        if(Math.round(data.main.feels_like)>26 && Math.round(data.main.feels_like)<40){
            feelscolor.style.color="yellow";
        }
        if(Math.round(data.main.feels_like)>=40){
            feelscolor.style.color="red";
        }
        const response_forecast=await fetch(apiUrl2+ city + `&appid=${apikey}`);
        var data_forecast=await response_forecast.json();

            for(i=0;i<5;i++){
                document.querySelector("#temp"+(i+1)).innerHTML=Math.round(data_forecast.list[i].main.temp)+"°c";
            }
            for(i=0;i<5;i++){
                document.querySelector("#img"+(i+1)).src=" https://openweathermap.org/img/wn/"+data_forecast.list[i].weather[0].icon+".png";
            }
        
        const d=new Date();
        const week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];   
        function checkDay(day){
            if(day +d.getDay()>6){
                return day +d.getDay()-7;
            }
            else{
                return day +d.getDay();
            }
        } 
        for(i=1;i<=5;i++){
            document.querySelector("#day"+(i)).innerHTML=week[checkDay(i)];
        }   
    }
    else{
        await sleep(2000);
        loading.style.visibility="hidden";
        alert("CITY NOT FOUND");
    }
    
} 


searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
   
})


