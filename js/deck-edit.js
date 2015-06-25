// deck-edit.js

var sqlite = require("sqlite3").verbose(),
	deckEditorContainer = $('#deckEditorContainer'),
	mainContents = $('#main'),
	extraContents = $('#extra'),
	sideContents = $('#side'),
	searchResults,
	resultsContainer = $('#results'),
	inputBox = $('#inputBox'),
	locale = $('#locale');

inputBox.on('submit change', function(e) {
	e.preventDefault();
	searchResults = getCards(this.value, locale.options[locale.selectedIndex].value);
	resultsContainer.html(listCards(searchResults));
	localStorage.setItem('lastSearch', searchResults.join('~||~'));
});