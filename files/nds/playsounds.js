const s_cancel = new Audio('/files/nds/cancel.wav');
const s_close = new Audio('/files/nds/close.wav');
const s_cursor = new Audio('/files/nds/cursor.wav');
const s_keyup = new Audio('/files/nds/keyup.wav');
const s_keydown = new Audio('/files/nds/keydown.wav');
const s_ok = new Audio('/files/nds/ok.wav');
const s_open = new Audio('/files/nds/open.wav');
const s_select = new Audio('/files/nds/select.wav');
const s_tick = new Audio('/files/nds/tick.wav');
const s_tock = new Audio('/files/nds/tock.wav');

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



