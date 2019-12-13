const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)

    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){

const towns = jsonObject["towns"];

for (let i = 0; i < towns.length; i++ ) {

    if (towns[i].name == "Fish Haven" ||towns[i].name == "Soda Springs" || towns[i].name== "Preston"){


    let card = document.createElement("article");
    let fillCard = document.createElement("section");
    let h2 = document.createElement("h2");
    let motto = document.createElement("h4");
    let year = document.createElement("p");
    let pop = document.createElement("p");
    let rain = document.createElement("p");
    let image = document.createElement("img");


    h2.textContent = towns[i].name;
    motto.textContent = towns[i].motto;
    year.textContent = 'Year Founded: ' + towns[i].yearFounded;
    pop.textContent = 'Population: ' + towns[i].currentPopulation;
    rain.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall + 'in.';
   
    image.setAttribute('src', towns[i].photo);
    image.setAttribute('alt', towns[i].name);
    
    
    fillCard.appendChild(h2);
    fillCard.appendChild(motto);
    fillCard.appendChild(year);
    fillCard.appendChild(pop);
    fillCard.appendChild(rain);
    card.appendChild(fillCard);
    card.appendChild(image);
    card.classList.add("town-borders", "town-content");
  
    document.querySelector('div.towns').appendChild(card);
   }
     
  
    
}
});

