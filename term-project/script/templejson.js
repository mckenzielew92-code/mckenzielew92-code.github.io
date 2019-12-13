//Temples JSON
const requestURL = 'https://github.com/mckenzielew92-code/mckenzielew92-code.github.io/blob/master/term-project/the-temples.json';
fetch(requestURL)

    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        var temples = jsonObject["temples"];

        for (let i = 0; i < temples.length; i++) {

            let art = document.createElement("article");
            let sec = documnet.createElement("section");
            let temple = document.createElement('h3');
            let add = document.createElement('p');
            let mail = document.createElement('p');
            let service = document.createElement('p');
            let session = document.createElement('p');
            let ordinance = document.createElement('p')
            let closures = document.createElement('p')
            let image = document.createElement('img');

            temple.textContent = temples[i].name;
            add.textContent = temples[i].address;
            mail.textContent = temples[i].email;
            service.textContent = temples[i].services;
            session.textContent = temples[i].sessionschedule;
            ordinance.textContent = temples[i].ordinanceschedule;
            closures.textContent = temples[i].templeclosures;
            image.textContent = temples[i].imageurl;

            let alt = temples[i].name + " " + "picture";
            temple.textContent = temples[i].name;


            image.setAttribute('src', temples[i].imageurl);
            image.setAttribute('alt', alt);

            art.appendChild(sec);
            sec.appendChild(temple);
            sec.appendChild(secname[i]);
            sec.appendChild(content);
            sec.appendChild(image);

            document.querySelector('span#temples').appendChild(art);
        }


    });