const s_cancel = new Audio('cancel.wav');
const s_close = new Audio('close.wav');
const s_cursor = new Audio('cursor.wav');
const s_keyup = new Audio('keyup.wav');
const s_keydown = new Audio('keydown.wav');
const s_ok = new Audio('ok.wav');
const s_open = new Audio('open.wav');
const s_select = new Audio('select.wav');
const s_tick = new Audio('tick.wav');
const s_tock = new Audio('tock.wav');

function playSound(soundName) {
  if(soundName === "select") {
    s_select.play();
  }
}

function registerSounds() {
  let elem = document.getElementById("settings");
  elem.onclick = playSound; // to ensure this is the caller
  elem.addEventListener('click', function(){
    playSound("select"); // 'this' is <div class="colorBox"> (the clicked element) in this context
  });
}