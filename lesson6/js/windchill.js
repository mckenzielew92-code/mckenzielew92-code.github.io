var temp = parseFloat(document.getElementsByClassName('high').innherhtml);
var speed = parseFloat(document.getElementsByClassName('speed').innerhtml);
var chill = windChill (temp, speed);
var display = result;

document.getElementsByClassName('windchill').innerHTML = display;

function windChill(temp, speed){
    var f = 32.74 + (0.6215 * temp)-(35.75 * Math.pow(speed,0.16) + (0.4275 * temp * Math.pow(speed,0.16));

    return f;
}
