const HourEl = document.getElementById("hours");
const MinuteEl = document.getElementById("minutes");
const SecondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock(){

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if(h>12){
        h=h-12;
        ampm = "PM";
    }
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;
    HourEl.innerText= h
    MinuteEl.innerText = m;
    SecondEl.innerHTML = s;
    ampmEl.innerText= ampm;
    setTimeout(updateClock, 1000)

}

    updateClock()