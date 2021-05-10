const s_cancel = new Audio('/extra/nds/cancel.wav');
const s_close = new Audio('/extra/nds/close.wav');
const s_cursor = new Audio('/extra/nds/cursor.wav');
const s_keyup = new Audio('/extra/nds/keyup.wav');
const s_keydown = new Audio('/extra/nds/keydown.wav');
const s_ok = new Audio('/extra/nds/ok.wav');
const s_open = new Audio('/extra/nds/open.wav');
const s_select = new Audio('/extra/nds/select.wav');
const s_tick = new Audio('/extra/nds/tick.wav');
const s_tock = new Audio('/extra/nds/tock.wav');

function registerSound(elem_id, sound) {
  let elem = document.getElementById(elem_id);
  elem.onclick = sound.play; // to ensure this is the caller
  elem.addEventListener('click', function(event){
    event.preventDefault();
    const goTO = this.getAttribute("href"); 
    sound.play();
    setTimeout(function(){ window.location = goTO; }, (sound.duration * 1000));
  });
}



