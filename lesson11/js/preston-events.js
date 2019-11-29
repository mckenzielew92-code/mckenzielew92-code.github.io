const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)

    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){

const town = jsonObject["towns"];

for (let i = 0; i < towns.length; i++ ) {

    if (events[i].name== "Preston"){

    let card = document.createElement("article");
    let fillCard = document.createElement("section");
    let heading = document.createElement("h2");
    let event = document.createElement("h3");
   
    heading.textContent = 'Local Events Include:';
    events.textContent = towns[i].events;

    fillCard.appendChild(heading);
    fillCard.appendChild(events);
    card.appendChild(fillCard);
    
    document.querySelector('preston-events').appendChild(card);
   }
}
});
   


