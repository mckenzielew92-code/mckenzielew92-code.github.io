//Temples JSON
const requestURL = 'https://mckenzielew92-code.github.io/the-temples.json';

fetch(requestURL)

    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject) {

        const temples = jsonObject["temples"];

        for (let i = 0; i < temples.length; i++) {

            let art = document.createElement("article");
            let sec = document.createElement("section");
            let temple = document.createElement("h3");
            let add = document.createElement("p");
            let mail = document.createElement("p");
            let service = document.createElement("p");
            let session = document.createElement("p");
            let ordinance = document.createElement("p")
            let closures = document.createElement("p")
            let image = document.createElement("img");

            temple.textContent = temples[i].name;
            add.textContent = "Address: " + temples[i].address;
            mail.textContent = temples[i].email;
            service.textContent = "Services: " + temples[i].services;
            session.textContent = "Session Schedule: " + temples[i].sessionschedule;
            ordinance.textContent = "Ordinance Schedule: " + temples[i].ordinanceschedule;
            closures.textContent = "Temple Closures: " + temples[i].templeclosures;
            image.textContent = temples[i].imageurl;

            let alt = temples[i].name + " " + "picture";
            temple.textContent = temples[i].name;


            image.setAttribute('src', temples[i].imageurl);
            image.setAttribute('alt', alt);

            art.appendChild(sec);
            sec.appendChild(temple);
            sec.appendChild(image);
            sec.appendChild(add);
            sec.appendChild(mail);
            sec.appendChild(service);
            sec.appendChild(session);
            sec.appendChild(ordinance);
            sec.appendChild(closures);

            document.querySelector('span#temples').appendChild(art);
        }


    });

    const apiURL =  "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=bd99fbf52e995e4af1074e56feb731ab";

    fetch(apiURL)
    .then((response)=> response.json())
    .then((jsObject)=>{
        console.log(jsObject);
        var temper = jsObject.main.temp.toFixed(0);

        let weatherDiv = document.createElement('div');
        let summary = document.createElement('h2')
        let weatherCondition = document.createElement('p');
        let temperature = document.createElement('p');
        let humidity = document.createElement('p');
        let wind = document.createElement('p');

        summary.textContent = "Weather Summary"
        weatherCondition.textContent = "Weather Condition: " + jsObject.id.main;
        temperature.textContent = "Temperature: " + temper;
        humidity.textContent = "Humidity: " + jsObject.main.humidity;
        wind.text = "Wind Speed: " + jsObject.wind.speed;

        weatherDiv.appendChild(summary);
        weatherDiv.appendChild(weatherCondition);
        weatherDiv.appendChild(temperature);
        weatherDiv.appendChild(humidity);
        weatherDiv.appendChild(wind);

        document.querySelector('span#temple-weather').appendChild(weatherDiv);



    })