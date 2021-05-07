function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var ms = date.getMilliseconds(); // 0 - 999;
    var col = ":";
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    if(ms > 500) {
      col = ":";
    }
    if(ms <= 500) {
      col = " ";
    }
    
    var time = h + col + m;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    setTimeout(showTime, 500);    
}

function showDate(){
    var date = new Date();
    var d = date.getDay(); // 0 - 28 or 29 or 30 or 31
    var m = date.getMonth(); // 0 - 12
    
    d = (d < 10) ? "0" + d : d;
    m = (m < 10) ? "0" + m : m;
    
    var time = d + "/" + m;
    document.getElementById("date").innerText = time;
    document.getElementById("date").textContent = time;
    
    setTimeout(showDate, 500);    
}