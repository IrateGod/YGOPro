/**
 *
 * Generic card functions.
 * Assume cards is equal to or an already queried result of manifest/database.json
 *
 * Globals: jQuery, databaseSource, imageSource, cards, filter functions
 *
 * TODO:
 * 	- add locale database support
 *
 **/
var cards = [],
    databaseSource = 'http://ygopro.us/manifest/database.json',
    imageSource = 'http://ygopro.us/ygopro/pics/',
    mainDeck = $('#mainDeck'), // main deck container
    extraDeck = $('#extraDeck'), // extra deck container
    sideDeck = $('#sideDeck'), // side deck container
    cardContainer = $('#cardContainer'), // results container
    nameInput = $('#nameInput'), // input for card names/descriptions
    typeSelect = $('#typeSelect'), // select for type (Monster, Spell, Trap)
    cardImage = $('#cardImage'), // selected card image
    cardDescription = $('#cardDescription');
s // selected card description

cards = $.getJSON(databaseSource);

function createCardList(cards, destinationID) {
    var destination = $('#' + destinationID),
        list = $('<ul class="cardList"></ul>');
    cards.forEach(function(card, index) {
        list.append('<li class="cardEntry"><div class="cardImage"><img src="' + imageSource + card.id + '.jpg"></div><div class="cardDescription"></div>');
    });
    destination.html(list);
}

function execQuery(queryObject) {
    var queriedCards = cards.filter(cardFilter(queryObject));
    createCardList(queriedCards, 'cardContainer');
}

function cardFilter(queryObject) {
    // tbd by Chibi
    return function(card, index, array) {
        var prop, data = queryObject.queryData,
            match;
        for (prop in data) {
            if (data.hasOwnProperty(prop) && data.propertyIsEnumerable(prop)) {
                // Chibi filters, assume it works
                // match is true or false for the filter, will have to communicate with Chibi
            }
        }
        return match;
    };
}

function generateQueryObject(inputArray) {
    // inputArray is an array of jQuery elements of nameInput and typeSelect
    // called like: generateQueryObject([nameInput, typeSelect])
    // assume inputArray is always an array ._.;;
    var retVal = {
        queryType: '',
        queryData: {}
    };
    inputArray.forEach(function(elem) {
        // only <input type="text"> is nameInput, so we can assume it will be the only match for elem.is("input")
        if (elem.is("input")) {
            retVal.queryData.nameDesc = elem.val();
        } else {
            // handle select and associated props
        }
    });
    return retVal;
}
