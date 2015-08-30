var GameState = {
        "Player 1": {
            Hand: [
                [ /* index 0: card ID */, /* index 1: position, face-down = 0, face-up = 1 */ ],
                [ , ],
                [ , ],
                [ , ],
                [ , ]
            ],
            "Monster Zone": [
                [ /* as with hand, index 0: card ID */, /* index 1: position, face-down ATK = -1, face-down DEF = 0, face-up DEF = 1, face-up ATK = 2 */ ],
                [ , ],
                [ , ],
                [ , ],
                [ , ]
            ],
            "Spell/Trap Zone": [
                [ /* index 0: card ID */, /* index 1: position, face-down = 0, face-up = 1 */ ],
                [ , ],
                [ , ],
                [ , ],
                [ , ],
                [ , ], // index 5: Field Spell Zone
                [ , ], // index 6: Left Pendulum Scale
                [ , ], // index 7: Right Pendulum Scale
            ],
            Graveyard: [ /* array of IDs */ ],
            "Banished Zone": [
                [ /* index 0: card ID */, /* index 1: position, face-down = 0, face-up = 1 */ ],
                [ , ],
                [ , ],
                [ , ] //, etc...
            },
            "Extra Deck": [
                [ /* index 0: card ID */, /* index 1: position, face-down = 0, face-up = 1 */ ],
                [ , ],
                [ , ],
                [ , ],
                [ , ] //, etc...
            ],
            Deck: [
                [ /* index 0: card ID */, /* index 1: position, face-down = 0, face-up = 1 */ ],
                [ , ],
                [ , ],
                [ , ],
                [ , ] //, etc...
            ],
            LP: 8000
        },
        "Player 2": {
            // all of the fields are identical to Player 1, card IDs of face-down cards are undefined
        },
        "Player 3": {
            // etc...
        },
        "Player 4": {
            // etc...
        },
        "Turn Counter": 1
};