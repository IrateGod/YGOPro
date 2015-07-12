var fs = require("fs");

function parseYDK(ydkFileContents) {
	var lineSplit = ydkFileContents.split("\r\n"),
	    originalValues = {
	    	"main": {},
	    	"side": {},
	    	"extra": {}
	    }, current = "";
	lineSplit.forEach(function(value) {
		if (value[0] === "#" || value[0] === "!") {
			if (originalValues.hasOwnProperties(value.substr(1))) {
				current = value.substr(1);
			} else {
				return;
			}
		} else {
			if(originalValues[current].hasOwnProperty(value)) {
				originalValues[current][value] = originalValues[current][value] + 1;
			} else {
				originalValues[current][value] = 1;
			}
		}
	});
	return [originalValues.main, originalValues.side, originalValues.extra];
}
function checkYDK(ydkFileName, cardID) {
	var decks = parseYDK((fs.readFileSync(ydkFileName)).toString()),
		isInDeck = false,
		inMain = false,
		inSide = false,
		inExtra = false;
	decks.forEach(function(deck) {
		
}