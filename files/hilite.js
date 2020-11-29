window.onload = function () {
				var titles = document.getElementsByClassName('nav-item');
				// find all nav-item elements
				
				if (titles.length == 1) {
					// if there is only one:
						titles[0].style.backgroundColor = 'white';
						titles[0].style.color = 'black';
						// recolour it
				}
				
				for (let i = 0; i < titles.length; i++) {
					// for each item in the list of nav-items:
					if (document.title.includes(titles[i].textContent)) {
					// if it contains text identical to the <title>:
						titles[i].style.backgroundColor = 'white';
						// titles[i].style.borderBottomColor = 'white';
						titles[i].style.color = 'black';
						// recolour that item
						
					}
				}
				
				/*
				var ids = ['index', 'about', 'links', 'reach', 'extra']
				// list of each possible id (corresponding to website page)
				for (i = 0; i < ids.length; i++) {
					page = document.getElementById(ids[i])
					if (page) { 
						var styleSheet = document.styleSheets[0];
						styleSheet.insertRule(`a { color: var(--col-${ ids[i] }) }`, styleSheet.cssRules.length);
						// template literals!
						// surround a string in `` instead of '' or "", and you can use ${variables} in it
						styleSheet.insertRule(`a:hover { background-image: linear-gradient(-45deg, #00ffff, #00B5ff 25%, var(--col-${ ids[i] })) }`, styleSheet.cssRules.length);
						styleSheet.insertRule(`blockquote { border-image: linear-gradient(to top, #0ff, #00b5ff 20%, var(--col-${ ids[i] })) 1; }`, styleSheet.cssRules.length);
					}
				}
				*/
			}