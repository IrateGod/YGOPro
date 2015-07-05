var cards = [],
	lflist = {};
$.getJSON('http://ygopro.us/manifest/database.json', function(data) {
    cards = data;
});
$.get('http://ygopro.us/ygopro/lflist.conf', function(data) {
	lflist = ConfigParser(data, {
		keyValueDelim: " ",
		blockRegexp: /^\s?\!(.*?)\s?$/
	});
}

function fAttrRace(obj, num, at) {
    'use strict';
    var val = (at === 1) ? obj.Attribute : obj.Type;
    if (val === num) {
        return true;
    } else {
        return false;
    }
}

function fSetcode(obj, sc) {
    'use strict';
    var val = obj.setcode,
        hexA = val.toString(16),
        hexB = sc.toString(16);
    if (val === sc || parseInt(hexA.substr(hexA.length - 4), 16) === parseInt(hexB, 16) || parseInt(hexA.substr(hexA.length - 2), 16) === parseInt(hexB, 16) || (val >> 16).toString(16) === hexB) {
        return true;
    } else {
        return false;
    }
}

function fLevel(obj, lv, op) {
    'use strict';
    var val = obj.level.toString(16);
    lv = parseInt(lv.toString(16), 10);
    if (op === 0) {
        if (parseInt(val.substr(val.length - 2), 10) <= lv) {
            return true;
        } else {
            return false;
        }
    } else if (op === 1) {
        if (parseInt(val.substr(val.length - 2), 10) === lv) {
            return true;
        } else {
            return false;
        }
    } else {
        if (parseInt(val.substr(val.length - 2), 10) >= lv) {
            return true;
        } else {
            return false;
        }
    }
}

function fScale(obj, sc, op) {
    'use strict';
    var val = obj.level;
    sc = parseInt(sc.toString(16));
    if (op === 0) {
        if (parseInt((val >> 24).toString(16)) <= sc) {
            return true;
        } else {
            return false;
        }
    } else if (op === 1) {
        if (parseInt((val >> 24).toString(16)) === sc) {
            return true;
        } else {
            return false;
        }
    } else {
        if (parseInt((val >> 24).toString(16)) >= sc) {
            return true;
        } else {
            return false;
        }
    }
}

function fType(obj, ty) {
    'use strict';
    var val = obj['type'];
    if ((val & ty) > 0) {
        return true;
    } else {
        return false;
    }
}

function fAtkDef(obj, num, ad, op) {
    'use strict';
    var val = (ad === 1) ? obj.atk : obj.def;
    if (op === 0) {
        if (val <= num) {
            return true;
        } else {
            return false;
        }
    } else if (op === 1) {
        if (val === num) {
            return true;
        } else {
            return false;
        }
    } else {
        if (val >= num) {
            return true;
        } else {
            return false;
        }
    }
}

function fNameDesc(obj, txt, nd) {
    'use strict';
    var val = (nd === 1) ? obj.name.toLowerCase() : obj['desc'].toLowerCase();
    if (val.indexOf(txt.toLowerCase()) >= 0) {
        return true;
    } else {
        return false;
    }
}

function filterName(result, txt) {
    'use strict';
    return result.filter(function(item) {
        return fNameDesc(item, txt, 1);
    });

}

function filterDesc(result, txt) {
    'use strict';
    return result.filter(function(item) {
        return fNameDesc(item, txt, 0);
    });

}

function filterType(result, type) {
    'use strict';
    return result.filter(function(item) {
        return fType(item, type);
    });

}

function filterAttribute(result, attribute) {
    'use strict';
    return result.filter(function(item) {
        return fAttrRace(item, attribute, 1);
    });

}

function filterRace(result, race) {
    'use strict';
    return result.filter(function(item) {
        return fAttrRace(item, race, 0);
    });

}

function filterSetcode(setcode) {
    'use strict';
    return result.filter(function(item) {
        return fSetCode(item, setcode);
    });

}

function filterAtk(result, atk, op) {
    'use strict';
    return result.filter(function(item) {
        return fAtkDef(item, atk, 1, op);
    });

}

function filterDef(result, def, op) {
    'use strict';
    return result.filter(function(item) {
        return fAtkDef(item, def, 0, op);
    });

}

function filterLevel(result, level, op) {
    'use strict';
    return result.filter(function(item) {
        return fLevel(item, level, op);
    });

}

function filterScale(result, scale, op) {
    'use strict';
    return result.filter(function(item) {
        return fScale(item, scale, op);
    });
}

function filterForbiddenLimited(result, selectedLimitation, placeholder, selectedBanlist, config) {
	return result.filter(function(card) {
		return (card.id in config[selectedBanlist] && config[selectedBanlist][card.id] === selectedLimitation);
	});
}

function applyFilters(filterObject, banlist, lflist) {
    var queriedCards = cards,
        o = filterObject,
        prop,
		args = {
            'Atk': 1,
            'Def': 1,
            'Level': 1,
            'Scale': 1,
			'Name': "",
			"Desc": ""
        };
    for (prop in o) {
        if (o.hasOwnProperty(prop) && o.propertyIsEnumerable(prop)) {
            if (o[prop] !== null) {
                queriedCards = window['filter' + prop](queriedCards, (typeof args[prop] === "string") ? "" + o[prop] : o[prop], args[prop] || 0, banlist, lflist);
            }
        }
    }
    return queriedCards;
}

function generateQueryObject() {
    var retVal = {},
        filters = [
            "Name",
            "Desc",
            "Type",
            "Attribute",
            "Race",
            "Setcode",
            "Atk",
            "Def",
            "Level",
            "Scale",
			"ForbiddenLimited"
        ];
    filters.forEach(function(filter) {
        retVal[filter] = $('[data-input-' + filter + ']').val() || null;
    });
    return retVal;
}