var GameState = {
    PublicState: {
        "Player 1": {
            Hand: {
                0: [ /* index 0: card ID */, /* index 1: position, face-down = 0, face-up = 1 */ ],
                1: [ , ],
                2: [ , ],
                3: [ , ],
                4: [ , ]
            },
            Field: {
                "Monster Zone": {
                    0: [ /* as with hand, index 0: card ID */, /* index 1: position, face-down ATK = -1, face-down DEF = 0, face-up DEF = 1, face-up ATK = 2 */ ],
                    1: [ , ],
                    2: [ , ],
                    3: [ , ],
                    4: [ , ]
                },
                "Spell/Trap Zone": {
                    0: [ /* index 0: card ID */, /* index 1: position, face-down = 0, face-up = 1 */ ],
                    1: [ , ],
                    2: [ , ],
                    3: [ , ],
                    4: [ , ],
                    5: [ , ], // Field Spell Zone
                    6: [ , ], // Left Pendulum Scale
                    7: [ , ], // Right Pendulum Scale
                }
            },
            Graveyard: [ /* array of IDs */ ],
            "Banished Zone": {
                0: [ /* index 0: card ID */, /* index 1: position, face-down = 0, face-up = 1 */ ],
                1: [ , ],
                2: [ , ],
                3: [ , ] //, etc...
            },
            "Extra Deck": {
                0: [ /* index 0: card ID */, /* index 1: position, face-down = 0, face-up = 1 */ ],
                1: [ , ],
                2: [ , ],
                3: [ , ],
                4: [ , ] //, etc...
            },
            Deck: {
                0: [ /* index 0: card ID */, /* index 1: position, face-down = 0, face-up = 1 */ ],
                1: [ , ],
                2: [ , ],
                3: [ , ],
                4: [ , ] //, etc...
            },
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
    }
};