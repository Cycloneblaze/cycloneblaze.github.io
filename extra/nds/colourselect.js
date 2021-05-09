function selectColor(elem) {
  var elems = document.getElementsByClassName("colorBox");
  
  for (let i = 0; i < elems.length; i++) {
    if (elems[i].classList.contains('selected')) {
      elems[i].classList.remove('selected');
    }
  }
  elem.classList.add('selected');
  
  var header = document.getElementsByTagName("header")[0];
  header.style.backgroundImage = "url(/extra/nds/bar_".concat(elem.id, ".png)");
  
  localStorage.setItem('sel_color', elem.id);
}

function getColor() {
	var prev_color = localStorage.getItem('sel_color');
	if (prev_color !== null) {
    var header = document.getElementsByTagName("header")[0];
    header.style.backgroundImage = "url(/extra/nds/bar_".concat(prev_color, ".png)");
	}
}

function setSelectors() {
  var elems = document.getElementsByClassName("colorBox");
  
  for (let i = 0; i < elems.length; i++) {
    if (elems[i].classList.contains('selected')) {
      elems[i].classList.remove('selected');
    }
  }
  
  for (let i = 0; i < elems.length; i++) {
    elems[i].onclick = selectColor; // to ensure this is the caller
    elems[i].addEventListener('click', function(){
      selectColor(this); // 'this' is <div class="colorBox"> (the clicked element) in this context
    });
  }
  
	var prev_color = localStorage.getItem('sel_color');
	if (prev_color !== null) {
    selectColor(document.getElementById(prev_color));
	}
}



// call setSelectors() in a window.onload() in the page itself