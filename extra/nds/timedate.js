function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var ms = date.getMilliseconds(); // 0 - 999;
    var col = ":";
    
    var tick = new Audio('https://www.cycloneblaze.net/extra/nds/tick.wav');
    var tock = new Audio('https://www.cycloneblaze.net/extra/nds/tock.wav');
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    if(s % 2 == 0) {
      col = ":";
    }
    if(s % 2 == 1) {
      col = "\u200A\u2006"; //one pixel too narrow but good enough
    }
    
    if(s == 0) {
      tock.play();
    }
    if(s != 0) {
      tick.play();
    }
    
    var time = h + col + m;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    setTimeout(showTime, 1000);    
}

/* adapted from https://codepen.io/afarrar/pen/JRaEjP */

function showDate(){
    var date = new Date();
    var d = date.getDate(); // 0 - 28 or 29 or 30 or 31
    var m = date.getMonth() + 1; // 1 - 12
    
    d = (d < 10) ? "0" + d : d;
    m = (m < 10) ? "0" + m : m;
    
    var time = d + "/" + m;
    document.getElementById("date").innerText = time;
    document.getElementById("date").textContent = time;
    
    setTimeout(showDate, 1000);    
}