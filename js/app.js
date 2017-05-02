var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();

document.getElementById("second").className = "second second-" + seconds;
document.getElementById("minute").className = "minute minute-" + minutes;
document.getElementById("hour").className = "hour hour-" + hours;