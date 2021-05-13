function showTime(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let ms = date.getMilliseconds(); // 0 - 999;
    let col = ":";

    const tick = new Audio('https://www.cycloneblaze.net/extra/nds/tick.wav');
    const tock = new Audio('https://www.cycloneblaze.net/extra/nds/tock.wav');

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    if(s % 2 === 0) {
      col = ":";
    }
    if(s % 2 === 1) {
      col = "\u200A\u2006"; //one pixel too narrow but good enough
    }
    
    if(s === 0) {
      tock.play();
    }
    if(s !== 0) {
      tick.play();
    }

    let time = h + col + m;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    setTimeout(showTime, 1000);    
}

/* adapted from https://codepen.io/afarrar/pen/JRaEjP */

function showDate(){
    let date = new Date();
    let d = date.getDate(); // 0 - 28 or 29 or 30 or 31
    let m = date.getMonth() + 1; // 1 - 12
    
    d = (d < 10) ? "0" + d : d;
    m = (m < 10) ? "0" + m : m;

    let time = d + "/" + m;
    document.getElementById("date").innerText = time;
    document.getElementById("date").textContent = time;
    
    setTimeout(showDate, 1000);    
}