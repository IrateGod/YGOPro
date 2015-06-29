/**
 *
 * Generic card functions.
 * Assume cards is equal to or an already queried result of manifest/database.json
 *
 * Globals: databaseSource, imageSource, cards, filter functions
 *
 * TODO:
 * 	- add locale database support
 *
**/

var cards = [],
	databaseSource = 'http://ygopro.us/manifest/database.json',
	imageSource = 'http://ygopro.us/ygopro/pics/';

cards = $.parseJSON(databaseSource);

function createCardList(cards, destinationID) {
	var destination = $('#' + destinationID),
		list = $('<ul class="cardList"></ul>');
	cards.forEach(function(card, index) {
		list.append('<li class="cardEntry"><div class="cardImage"><img src="' + imageSource + card.id + '.jpg"></div><div class="cardDescription"></div>');
	});
	destination.html(list);
}

function execQuery(queryObject) {
	cards = cards.filter(cardFilter(queryObject));
	createCardList(cards, 'cardContainer');
}