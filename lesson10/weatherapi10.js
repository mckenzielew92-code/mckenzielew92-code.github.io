const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=bd99fbf52e995e4af1074e56feb731ab";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    document.getElementById('weather').textContent = jsObject.id.main;
    document.getElementById('high').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('weather').textContent = desc;

  });

  const jsonURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=bd99fbf52e995e4af1074e56feb731ab";

  fetch(jsonURL)
    .then((response) => response.json())
    .then((jsObject) => {
    //console.log(jsObject);
    for (let i = 0; i < jsObject.list.length; i++)
      if (jsObject.list[i].dt_txt.includes('18:00:00')) {

        document.getElementById('day1').textContent = jsObect.list[i].main.temp.toFixed(0);
        document.getElementById('day2').textContent = jsObect.list[i].main.temp.toFixed(0);
        document.getElementById('day3').textContent = jsObect.list[i].main.temp.toFixed(0);
        document.getElementById('day4').textContent = jsObect.list[i].main.temp.toFixed(0);
        document.getElementById('day5').textContent = jsObect.list[i].main.temp.toFixed(0);




     }
    
      const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
      document.getElementsByClassName('sun-icon').textContent = imagesrc;  // informational specification only
      document.getElementsByClassName('sun-icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
      document.getElementsByClassName('sun-icon').setAttribute('alt', desc);
    
    });