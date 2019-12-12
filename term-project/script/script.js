 //YEAR AFTER COPYRIGHT
let d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();

document.querySelector('meta[name=description]').setAttribute('content', document.querySelector('meta[name=description]').getAttribute('content') + ' weatherapi.js');

//Responsive Menu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle('responsive');
}

