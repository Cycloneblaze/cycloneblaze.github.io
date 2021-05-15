const re = /\#[0-9a-zA-Z]{6}/;
const sp = /.{1,n}/g;

function rgbToHsl(r, g, b) {
    // from https://gist.github.com/mjackson/5311256
    r /= 255, g /= 255, b /= 255;

    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
  
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
  
      h /= 6;
    }
  
    return [ h, s, l ];
}

function colourHex() {
    let code_elems = document.getElementsByTagName("code");
    for (let i = 0; i > code_elems.length; i++) {
        console.log(code_elems[i]); // not working?
        if (code_elems[i].textContent.match(re)) {
            let hexcode = code_elems[i].textContent;
            code_elems[i].style.color = hexcode;
            hexnums = hexcode.match(sp);
            hsvnums = rgbToHsl(parseInt(hexnums[0]), parseInt(hexnums[1]), parseInt(hexnums[2]));
            if (hsvnums[2] >= 0.75) {
                code_elems[i].style.backgroundColor = "black";
            } else if (hsvnums[2] <= 0.25) {
                code_elems[i].style.backgroundColor = "white";
            }

        } 
    }
}