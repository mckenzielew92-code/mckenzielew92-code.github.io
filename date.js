 let daynames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    
    let months = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let d = new Date();
    let dayName = daynames[d.getDay()];
    let monthName = months[d.getMonth()];
    let fulldate = dayName + ", "+ monthName + " " + d.getDate()
    + ", " + d.getFullYear();

    document.getElementById("current-date").innerHTML = d.getFullYear();

    let lastModified = new date(document.lastModified);
    document.getElementById("last-modified").innerHTML = new date
