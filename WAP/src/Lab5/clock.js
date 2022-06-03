
(startClock())

function startClock() {
    setInterval(ticking, 1000);
}

function ticking() {
    let date = new Date();
    document.getElementById("year").innerHTML = date.getFullYear();
    document.getElementById("month").innerHTML = date.getMonth() + 1;
    document.getElementById("date").innerHTML = date.getDate();
    document.getElementById("hour").innerHTML = date.getHours();
    document.getElementById("minute").innerHTML = date.getMinutes();
    document.getElementById("seconds").innerHTML = date.getSeconds();
}
