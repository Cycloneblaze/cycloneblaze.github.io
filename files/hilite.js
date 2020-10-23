window.onload = function () {
				var titles = document.getElementsByClassName('nav-item');
				// find all nav-item elements
				
				for (let i = 0; i < titles.length; i++) {
					// for each item in the above list:
					if (titles[i].textContent == document.title) {
					// if it contains text identical to the <title>:
						titles[i].style.backgroundColor = 'white';
						titles[i].style.color = 'black';
						// recolour that item
					}
				}
			}