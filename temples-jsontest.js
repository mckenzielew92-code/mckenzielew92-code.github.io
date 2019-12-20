//Fresno Closures
const requestURL = 'https://mckenzielew92-code.github.io/the-temples.json';

fetch(requestURL)

    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject) {

        const temples = jsonObject["temples"];
         {

            let closure = 'closed-days-1';
            document.getElementById(closure).textContent = temples[0].templeclosures;

        }


    });
//Fresno Temple Weather
    const apiURL =  "https://api.openweathermap.org/data/2.5/weather?id=5350937&units=imperial&APPID=bd99fbf52e995e4af1074e56feb731ab";

    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let temper = jsObject.main.temp.toFixed(0);
        
        let weather = 'weather-1';
        let temp = 'temperature-1';
        let humid = 'humidity-1';
        let speed = 'wind-1';
        document.getElementById(weather).textContent = jsObject.id.main;
        document.getElementById(temp).textContent = temper;
        document.getElementById(humid).textContent = jsObject.main.humidity;
        document.getElementById(speed).textContent = jsObject.wind.speed;

        }
    
    );
    //LA Closures
const lacloseURL = 'https://mckenzielew92-code.github.io/the-temples.json';

fetch(lacloseURL)

    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject) {

        const temples = jsonObject["temples"];
         {

            let closure = 'closed-days-2';
            document.getElementById(closure).textContent = temples[1].templeclosures;

        }


    });
//Los Angeles Temple Weather
    const laURL =  "https://api.openweathermap.org/data/2.5/weather?id=5368361&units=imperial&APPID=bd99fbf52e995e4af1074e56feb731ab";
    fetch(laURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let temper = jsObject.main.temp.toFixed(0);
        
        let weather = 'weather-2';
        let temp = 'temperature-2';
        let humid = 'humidity-2';
        let speed = 'wind-2';
        document.getElementById(weather).textContent = jsObject.id.main;
        document.getElementById(temp).textContent = temper;
        document.getElementById(humid).textContent = jsObject.main.humidity;
        document.getElementById(speed).textContent = jsObject.wind.speed;

        }
    
    );
    //NEWPORT Closures
const npcloseURL = 'https://mckenzielew92-code.github.io/the-temples.json';

fetch(npcloseURL)

    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject) {

        const temples = jsonObject["temples"];
         {

            let closure = 'closed-days-3';
            document.getElementById(closure).textContent = temples[2].templeclosures;

        }


    });
//Newport Beach California Temple Weather
const nbURL =  "https://api.openweathermap.org/data/2.5/weather?id=5376890&units=imperial&APPID=bd99fbf52e995e4af1074e56feb731ab";
fetch(nbURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    let temper = jsObject.main.temp.toFixed(0);
    
    let weather = 'weather-3';
    let temp = 'temperature-3';
    let humid = 'humidity-3';
    let speed = 'wind-3';
    document.getElementById(weather).textContent = jsObject.id.main;
    document.getElementById(temp).textContent = temper;
    document.getElementById(humid).textContent = jsObject.main.humidity;
    document.getElementById(speed).textContent = jsObject.wind.speed;

    }

);
 //Oakland Closures
 const okcloseURL = 'https://mckenzielew92-code.github.io/the-temples.json';

 fetch(okcloseURL)
 
     .then(function (response){
         return response.json();
     })
     .then(function (jsonObject) {
 
         const temples = jsonObject["temples"];
          {
 
             let closure = 'closed-days-4';
             document.getElementById(closure).textContent = temples[3].templeclosures;
 
         }
 
 
     });
//Oakland California Temple Weather
const octURL = "https://api.openweathermap.org/data/2.5/weather?id=5378538&units=imperial&APPID=bd99fbf52e995e4af1074e56feb731ab";
fetch(octURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    let temper = jsObject.main.temp.toFixed(0);
    
    let weather = 'weather-4';
    let temp = 'temperature-4';
    let humid = 'humidity-4';
    let speed = 'wind-4';
    document.getElementById(weather).textContent = jsObject.id.main;
    document.getElementById(temp).textContent = temper;
    document.getElementById(humid).textContent = jsObject.main.humidity;
    document.getElementById(speed).textContent = jsObject.wind.speed;

    }

);
//Redlands Closures
const redcloseURL = 'https://mckenzielew92-code.github.io/the-temples.json';

fetch(redcloseURL)

    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject) {

        const temples = jsonObject["temples"];
         {

            let closure = 'closed-days-5';
            document.getElementById(closure).textContent = temples[4].templeclosures;

        }


    });
//Redlands California Temple Weather
const redURL = "https://api.openweathermap.org/data/2.5/weather?id=5386754&units=imperial&APPID=bd99fbf52e995e4af1074e56feb731ab";
fetch(redURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    let temper = jsObject.main.temp.toFixed(0);
    
    let weather = 'weather-5';
    let temp = 'temperature-5';
    let humid = 'humidity-5';
    let speed = 'wind-5';
    document.getElementById(weather).textContent = jsObject.id.main;
    document.getElementById(temp).textContent = temper;
    document.getElementById(humid).textContent = jsObject.main.humidity;
    document.getElementById(speed).textContent = jsObject.wind.speed;

    }

);
//Sacramento Closures
const saccloseURL = 'https://mckenzielew92-code.github.io/the-temples.json';

fetch(saccloseURL)

    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject) {

        const temples = jsonObject["temples"];
         {

            let closure = 'closed-days-6';
            document.getElementById(closure).textContent = temples[5].templeclosures;

        }


    });
//Sacramento California Temple Weather
const sacURL = "https://api.openweathermap.org/data/2.5/weather?id=5389519&units=imperial&APPID=bd99fbf52e995e4af1074e56feb731ab";
fetch(sacURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    let temper = jsObject.main.temp.toFixed(0);
    
    let weather = 'weather-6';
    let temp = 'temperature-6';
    let humid = 'humidity-6';
    let speed = 'wind-6';
    document.getElementById(weather).textContent = jsObject.id.main;
    document.getElementById(temp).textContent = temper;
    document.getElementById(humid).textContent = jsObject.main.humidity;
    document.getElementById(speed).textContent = jsObject.wind.speed;

    }

);
//Sacramento Closures
const sdcloseURL = 'https://mckenzielew92-code.github.io/the-temples.json';

fetch(sdcloseURL)

    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject) {

        const temples = jsonObject["temples"];
         {

            let closure = 'closed-days-7';
            document.getElementById(closure).textContent = temples[6].templeclosures;

        }


    });
//San Diego California Temple Weather
const sdURL = "https://api.openweathermap.org/data/2.5/weather?id=5363944&units=imperial&APPID=bd99fbf52e995e4af1074e56feb731ab";
fetch(sdURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    let temper = jsObject.main.temp.toFixed(0);
    
    let weather = 'weather-7';
    let temp = 'temperature-7';
    let humid = 'humidity-7';
    let speed = 'wind-7';
    document.getElementById(weather).textContent = jsObject.id.main;
    document.getElementById(temp).textContent = temper;
    document.getElementById(humid).textContent = jsObject.main.humidity;
    document.getElementById(speed).textContent = jsObject.wind.speed;

    }

);

