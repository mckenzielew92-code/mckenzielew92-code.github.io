function pancakeDay(){
    let d =date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dow = days [d.getDay()];

    if (dow == "Monday"){
        document.getElementById("pancakeDay").innerhtml = "Come join us for pancakes in Downtown Preston Park every Friday at 9 A.M.!"
    }
    else {document.getElementById("pancakeDay").style.display = "none";
}
}

/* Last code not working...I'll try this one */
