const sID = '11gT44MWm5PtMF1mRIXmgJfhuFCzv3X89ocD9qutyEYs';
var range = {spreadsheetId: sID, range: 'List!A3:D', majorDimension:"COLUMNS"}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function randomise(lists) {
	console.log(lists);
	
	var listP = document.getElementById('listP');
	var rlabel = document.getElementById('rlabel');
	const btn = document.getElementById('btn'); // need to have in scope
	
	var ltogen = document.getElementById('ltogen').value;
	var ntogen = document.getElementById('ntogen')// have to get anew each time...
	//console.log(ltogen);
	//console.log(ntogen);
	//console.log(listP);
	
	listP.innerHTML = "";
	rlabel.innerHTML = "range: 1 - " + lists[ltogen].length + " ";
	ntogen.max = lists[ltogen].length;
	
	shuffleArray(lists[ltogen]);
	
	for (indx = 0; indx < ntogen.value; ++indx) {
		listP.innerHTML += '<li>' + lists[ltogen][indx] + '</li>';
		//console.log(lists[ltogen][indx]);
	}
}

function getChars() {
	var request = gapi.client.sheets.spreadsheets.values.get(range)
	
	request.then(
		function(response) {
			all_values = response.result.values;
			
			var main = ['Owen Higgins', 'Liam Higgins', 'Rosalina Higgins', 'Ria Higgins', 'Eleanor Higgins', 'Lily Higgins', 'Colin Higgins', 'Grace Higgins', 'Aeon, Life of the Endless', 'Azrael, Death of the Endless'];
			var major = all_values[1];
			var minor = all_values[2];
			var support = all_values[3];
			var all = main.concat(major, minor, support);
			
			var lists = { "main": main, "major": major, "minor": minor, "support": support, "all": all };

			randomise(lists);},
		function(reason) {alert('Error: ' + reason.result.error.message);}
	);
}