const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)

    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){

const towns = jsonObject["towns"];


for (let i = 0; i < towns.length; i++ ) {

    if (towns[i].name== "Soda Springs"){

    const events = towns[i].events;

    let unOrdered = document.createElement('ul');

    for (let e = 0; e < events.length; e++){
        let list = document.createElement('li');
        list.textContent = events[e];
        unOrdered.appendChild(list);}
 
    let card = document.createElement("article");
    let fillCard = document.createElement("section");
    let heading = document.createElement("h2");
    //let events = document.createElement("h4");
   
   
 

    fillCard.appendChild(heading);
    //fillCard.appendChild(events);
    fillCard.appendChild(unOrdered);
    card.appendChild(fillCard);
    
    document.querySelector('div.soda-springs-events').appendChild(card);
  

}
}
});