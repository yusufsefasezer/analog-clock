var time = {},
    hours = 0,
    minutes = 0,
    seconds = 0;

function init() {
    time = new Date();
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();

    var tickSpan = '<span></span>'.repeat(60);
    document.getElementsByClassName('ticks')[0].innerHTML = tickSpan;

    document.getElementById("second").className = "second second-" + seconds;
    document.getElementById("minute").className = "minute minute-" + minutes;
    document.getElementById("hour").className = "hour hour-" + hours;
}

window.addEventListener('DOMContentLoaded', init);