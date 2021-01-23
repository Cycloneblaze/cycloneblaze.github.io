// Client ID and API key from the Developer Console
var CLIENT_ID = window.CLIENT_ID
var API_KEY = window.API_KEY

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest", "https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata.readonly';

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');
var startButton = document.getElementById('start_button');
var btnBlock = document.getElementById('gauth');
var rBlock = document.getElementById('rdiv');
var sDiv = document.getElementById('sdiv');
var p = document.getElementById('pre');

/**
*  On load, called to load the auth2 library and API client library.
*/
function handleClientLoad() {
	console.log('handling');

	try {
		initClient();
	} catch(e) {
		gapi.load('client:auth2', () => {
			initClient();
			/*
			* Doesn't work on the encrypted page yet
			* always get an error as if gapi was never loaded... like
			* TypeError: Cannot read property 'init' of undefined
			* at initClient (auth.js:47)
			* at HTMLButtonElement.handleClientLoad (auth.js:27)
			*/
		});
		console.log(e);
	}

	btnBlock.style.display = 'block';
	rBlock.style.display = 'block';
	sDiv.style.display = 'none';
	p.style.display = 'block';
}

/**
*  Initializes the API client library and sets up sign-in state
*  listeners.
*/
function initClient() {
console.log('init');
gapi.client.init({
  apiKey: API_KEY,
  clientId: CLIENT_ID,
  discoveryDocs: DISCOVERY_DOCS,
  scope: SCOPES
}).then(function () {
  // Listen for sign-in state changes.
  gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

  // Handle the initial sign-in state.
  updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  authorizeButton.onclick = handleAuthClick;
  signoutButton.onclick = handleSignoutClick;
}, function(error) {
  console.error(JSON.stringify(error, null, 2));
});
}

/**
*  Called when the signed in status changes, to update the UI
*  appropriately. After a sign-in, the API is called.
*/
function updateSigninStatus(isSignedIn) {
if (isSignedIn) {
  authorizeButton.style.display = 'none';
  signoutButton.style.display = 'inline';
} else {
  authorizeButton.style.display = 'inline';
  signoutButton.style.display = 'none';
}
}

/**
*  Sign in the user upon button click.
*/
function handleAuthClick(event) {
gapi.auth2.getAuthInstance().signIn();
}

/**
*  Sign out the user upon button click.
*/
function handleSignoutClick(event) {
gapi.auth2.getAuthInstance().signOut();
}

startButton.onclick = handleClientLoad;