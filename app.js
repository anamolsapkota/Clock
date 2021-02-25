// Putting it all in a function so that we can set intervals / make it able to update every 1 second
function clockNow() {
    // Getting the full date from built-in Date() object
    const fullDate = new Date();

    // Getting Hours Minutes and Seconds from Full Date
    let hrs = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let secs = fullDate.getSeconds();

    // Making sure that two digits are shown everytime.
    if (hrs < 10) {
        hrs = "0" + hrs;
    }

    if (mins < 10) {
        mins = "0" + mins;
    }

    if (secs < 10) {
        secs = "0" + secs;
    }

    // DOM Elements
    const elemHrs = document.getElementById('hrs');
    const elemMins = document.getElementById('mins');
    const elemSecs = document.getElementById('secs');

    // Just so that they load along with all the other data
    const colons = document.getElementsByClassName('colon');

    // Changing the content of the elments
    elemHrs.innerHTML = hrs;
    elemMins.innerHTML = mins;
    elemSecs.innerHTML = secs;
    colons[0].innerHTML = " :";
    colons[1].innerHTML = " :"
}

// Makes it update every 1 seconds (1000ms)
setInterval(clockNow, 1000);