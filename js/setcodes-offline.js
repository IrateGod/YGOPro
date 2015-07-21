var setcodes = ConfigParser("#The first line is used for comment" + "\r\n" +
	"#line doesn't start with '!' is also neglected" + "\r\n" +
	"#system" + "\r\n" +
	"!system 1 Normal Summon" + "\r\n" +
	"!system 2 Special Summon" + "\r\n" +
	"!system 3 Flip Summon" + "\r\n" +
	"!system 4 Normal Summoned" + "\r\n" +
	"!system 5 Special Summoned" + "\r\n" +
	"!system 6 Flip Summoned" + "\r\n" +
	"!system 7 Activate" + "\r\n" +
	"!system 10 Remove the Counter(s)" + "\r\n" +
	"!system 11 Pay LP" + "\r\n" +
	"!system 12 Remove the Material(s)" + "\r\n" +
	"!system 20 Draw Phase" + "\r\n" +
	"!system 21 Standby Phase" + "\r\n" +
	"!system 22 Main Phase" + "\r\n" +
	"!system 23 End of Main Phase" + "\r\n" +
	"!system 24 Battle Phase" + "\r\n" +
	"!system 25 End of Battle Phase" + "\r\n" +
	"!system 26 End Phase" + "\r\n" +
	"!system 27 Before the Draw" + "\r\n" +
	"!system 28 Start Step of Battle Phase" + "\r\n" +
	"!system 30 Replay, do you want to continue the Battle?" + "\r\n" +
	"!system 31 Do you want to Attack Directly?" + "\r\n" +
	"!system 40 Damage Step" + "\r\n" +
	"!system 41 Calculating Damage" + "\r\n" +
	"!system 42 End of Damage Step" + "\r\n" +
	"!system 43 At the start of the Damage Step" + "\r\n" +
	"!system 60 Heads" + "\r\n" +
	"!system 61 Tails" + "\r\n" +
	"!system 62 表效果适用中" + "\r\n" +
	"!system 63 里效果适用中" + "\r\n" +
	"!system 64 二重状态" + "\r\n" +
	"!system 70 Monster Cards" + "\r\n" +
	"!system 71 Spell Cards" + "\r\n" +
	"!system 72 Trap Cards" + "\r\n" +
	"!system 80 Entering the Battle Phase" + "\r\n" +
	"!system 81 Entering the End Phase" + "\r\n" +
	"!system 90 Normal Summon without tribute(s)?" + "\r\n" +
	"!system 91 Use your additional Special Summon?" + "\r\n" +
	"!system 92 Use Opponent Monster" + "\r\n" +
	"!system 100 First to go" + "\r\n" +
	"!system 101 Second to go" + "\r\n" +
	"!system 200 Do you wish to use from [%ls] [%ls]'s effect?" + "\r\n" +
	"!system 201 No effect can activated at this moment" + "\r\n" +
	"!system 202 Do you want to check the field?" + "\r\n" +
	"!system 203 Chain another card?" + "\r\n" +
	"!system 204 Remove %d [%ls]" + "\r\n" +
	"!system 205 Please select a sort order" + "\r\n" +
	"!system 206 Please select the chain sequence" + "\r\n" +
	"!system 207 Revealing %d card(s):" + "\r\n" +
	"!system 208 Confirm %d card(s):" + "\r\n" +
	"!system 209 The card has met the requisites" + "\r\n" +
	"!system 210 Select if you want continue:" + "\r\n" +
	"!system 211 Round count:" + "\r\n" +
	"!system 212 Declared card:" + "\r\n" +
	"!system 213 Declared type:" + "\r\n" +
	"!system 214 Declared attribute:" + "\r\n" +
	"!system 215 Declared number:" + "\r\n" +
	"!system 500 Select a monster to tribute" + "\r\n" +
	"!system 501 Select a card to discard" + "\r\n" +
	"!system 502 Select a card to destroy" + "\r\n" +
	"!system 503 Select a card to banish" + "\r\n" +
	"!system 504 Select a card to send to Graveyard" + "\r\n" +
	"!system 505 Select a card to return to hand" + "\r\n" +
	"!system 506 Select the card to add to your hand" + "\r\n" +
	"!system 507 Select the card(s) to return to Deck" + "\r\n" +
	"!system 508 Select the card to Summon" + "\r\n" +
	"!system 509 Select a Monster to Special Summon" + "\r\n" +
	"!system 510 Select a card to flip-up" + "\r\n" +
	"!system 511 Select a target to banish" + "\r\n" +
	"!system 512 Select materials for Synchro Summon" + "\r\n" +
	"!system 513 Select materials for Xyz Summon" + "\r\n" +
	"!system 514 Select a card on opponent's side" + "\r\n" +
	"!system 515 Select a card on your side" + "\r\n" +
	"!system 516 Select a monster in attack position" + "\r\n" +
	"!system 517 Select a monster in defense position" + "\r\n" +
	"!system 518 Select a card to equip" + "\r\n" +
	"!system 519 Select the Xyz material to detach" + "\r\n" +
	"!system 520 Select the monster to change control" + "\r\n" +
	"!system 521 Select the card to replace" + "\r\n" +
	"!system 522 Select the monsters in attack" + "\r\n" +
	"!system 523 Select the monsters in defense" + "\r\n" +
	"!system 524 Select attack monster" + "\r\n" +
	"!system 525 Select defense monster" + "\r\n" +
	"!system 526 Reveal a card" + "\r\n" +
	"!system 527 to select the field you want to place the card" + "\r\n" +
	"!system 528 Select a monster to change" + "\r\n" +
	"!system 529 Select your card" + "\r\n" +
	"!system 530 Select opponent card" + "\r\n" +
	"!system 531 Select the highest level monsters for tribute:" + "\r\n" +
	"!system 550 Select the effect that activates" + "\r\n" +
	"!system 551 Select the target of the effect" + "\r\n" +
	"!system 552 Select head or tails" + "\r\n" +
	"!system 553 Select dice results" + "\r\n" +
	"!system 554 Select a category" + "\r\n" +
	"!system 555 Select an option" + "\r\n" +
	"!system 560 Select" + "\r\n" +
	"!system 561 Select the battle position" + "\r\n" +
	"!system 562 Select Attribute" + "\r\n" +
	"!system 563 Declare a type" + "\r\n" +
	"!system 564 Declare a card name" + "\r\n" +
	"!system 565 Select a number" + "\r\n" +
	"!system 566 Select the effect to activate" + "\r\n" +
	"!system 567 Select a Level/Rank" + "\r\n" +
	"!system 1000 Deck" + "\r\n" +
	"!system 1001 Hand" + "\r\n" +
	"!system 1002 Monster Zone" + "\r\n" +
	"!system 1003 Spell/Trap Zone" + "\r\n" +
	"!system 1004 Graveyard" + "\r\n" +
	"!system 1005 Banished Zone" + "\r\n" +
	"!system 1006 Extra Deck" + "\r\n" +
	"!system 1007 Overlay" + "\r\n" +
	"!system 1008 Field Spell Zone" + "\r\n" +
	"!system 1009 Pendulum Zone" + "\r\n" +
	"!system 1010 Earth" + "\r\n" +
	"!system 1011 Water" + "\r\n" +
	"!system 1012 Fire" + "\r\n" +
	"!system 1013 Wind" + "\r\n" +
	"!system 1014 Light" + "\r\n" +
	"!system 1015 Dark" + "\r\n" +
	"!system 1016 Divine" + "\r\n" +
	"!system 1020 Warrior" + "\r\n" +
	"!system 1021 Spellcaster" + "\r\n" +
	"!system 1022 Fairy" + "\r\n" +
	"!system 1023 Fiend" + "\r\n" +
	"!system 1024 Zombie" + "\r\n" +
	"!system 1025 Machine" + "\r\n" +
	"!system 1026 Aqua" + "\r\n" +
	"!system 1027 Pyro" + "\r\n" +
	"!system 1028 Rock" + "\r\n" +
	"!system 1029 Winged Beast" + "\r\n" +
	"!system 1030 Plant" + "\r\n" +
	"!system 1031 Insect" + "\r\n" +
	"!system 1032 Thunder" + "\r\n" +
	"!system 1033 Dragon" + "\r\n" +
	"!system 1034 Beast" + "\r\n" +
	"!system 1035 Beast-Warrior" + "\r\n" +
	"!system 1036 Dinosaur" + "\r\n" +
	"!system 1037 Fish" + "\r\n" +
	"!system 1038 Sea Serpent" + "\r\n" +
	"!system 1039 Reptile" + "\r\n" +
	"!system 1040 Psychic" + "\r\n" +
	"!system 1041 Divine-Beast" + "\r\n" +
	"!system 1042 Creator God" + "\r\n" +
	"!system 1043 Wyrm" + "\r\n" +
	"!system 1050 Monster" + "\r\n" +
	"!system 1051 Spell" + "\r\n" +
	"!system 1052 Trap" + "\r\n" +
	"!system 1053 ???" + "\r\n" +
	"!system 1054 Normal" + "\r\n" +
	"!system 1055 Effect" + "\r\n" +
	"!system 1056 Fusion" + "\r\n" +
	"!system 1057 Ritual" + "\r\n" +
	"!system 1058 Trap Monsters" + "\r\n" +
	"!system 1059 Spirit" + "\r\n" +
	"!system 1060 Union" + "\r\n" +
	"!system 1061 Gemini" + "\r\n" +
	"!system 1062 Tuner" + "\r\n" +
	"!system 1063 Synchro" + "\r\n" +
	"!system 1064 Token" + "\r\n" +
	"!system 1065 ???" + "\r\n" +
	"!system 1066 Quick-Play" + "\r\n" +
	"!system 1067 Continuous" + "\r\n" +
	"!system 1068 Equip" + "\r\n" +
	"!system 1069 Field" + "\r\n" +
	"!system 1070 Counter" + "\r\n" +
	"!system 1071 Flip" + "\r\n" +
	"!system 1072 Toon" + "\r\n" +
	"!system 1073 Xyz" + "\r\n" +
	"!system 1074 Pendulum" + "\r\n" +
	"!system 1080 (N/A)" + "\r\n" +
	"#GUI" + "\r\n" +
	"!system 1100 S/T Destroy" + "\r\n" +
	"!system 1101 Destroy Monster" + "\r\n" +
	"!system 1102 Banish" + "\r\n" +
	"!system 1103 Graveyard" + "\r\n" +
	"!system 1104 Back to Hand" + "\r\n" +
	"!system 1105 Back to Deck" + "\r\n" +
	"!system 1106 Destroy Hand" + "\r\n" +
	"!system 1107 Destroy Deck" + "\r\n" +
	"!system 1108 Draw" + "\r\n" +
	"!system 1109 Search" + "\r\n" +
	"!system 1110 Recovery" + "\r\n" +
	"!system 1111 Position" + "\r\n" +
	"!system 1112 Control" + "\r\n" +
	"!system 1113 Change ATK/DEF" + "\r\n" +
	"!system 1114 Piercing" + "\r\n" +
	"!system 1115 Repeat Attack" + "\r\n" +
	"!system 1116 Limit Attack" + "\r\n" +
	"!system 1117 Direct Attack" + "\r\n" +
	"!system 1118 Special Summon" + "\r\n" +
	"!system 1119 Token" + "\r\n" +
	"!system 1120 Type-Related" + "\r\n" +
	"!system 1121 Property-Related" + "\r\n" +
	"!system 1122 Damage LP" + "\r\n" +
	"!system 1123 Recover LP" + "\r\n" +
	"!system 1124 Destroy" + "\r\n" +
	"!system 1125 Select" + "\r\n" +
	"!system 1126 Counter" + "\r\n" +
	"!system 1127 Gamble" + "\r\n" +
	"!system 1128 Fusion-Related" + "\r\n" +
	"!system 1129 Tuner-Related" + "\r\n" +
	"!system 1130 Xyz-Related" + "\r\n" +
	"!system 1131 Negate Effect" + "\r\n" +
	"#actions" + "\r\n" +
	"!system 1150 Activate" + "\r\n" +
	"!system 1151 Normal Summon" + "\r\n" +
	"!system 1152 Special Summon" + "\r\n" +
	"!system 1153 Set" + "\r\n" +
	"!system 1154 Flip Summon" + "\r\n" +
	"!system 1155 To Defense" + "\r\n" +
	"!system 1156 To Attack" + "\r\n" +
	"!system 1157 Attack" + "\r\n" +
	"!system 1158 View" + "\r\n" +
	"!system 1159 S/T Set" + "\r\n" +
	"#menu" + "\r\n" +
	"!system 1200 LAN Mode" + "\r\n" +
	"!system 1201 Puzzle Mode" + "\r\n" +
	"!system 1202 Watch Replay" + "\r\n" +
	"!system 1203 N/A" + "\r\n" +
	"!system 1204 Deck Edit" + "\r\n" +
	"!system 1210 Exit" + "\r\n" +
	"!system 1211 OK" + "\r\n" +
	"!system 1212 Cancel" + "\r\n" +
	"!system 1213 Yes" + "\r\n" +
	"!system 1214 No" + "\r\n" +
	"!system 1215 Start" + "\r\n" +
	"!system 1216 Message" + "\r\n" +
	"!system 1217 Refresh" + "\r\n" +
	"!system 1220 Nickname:" + "\r\n" +
	"!system 1221 HostIP:" + "\r\n" +
	"!system 1222 Password:" + "\r\n" +
	"!system 1223 Join" + "\r\n" +
	"!system 1224 Host" + "\r\n" +
	"!system 1225 Allowed Cards:" + "\r\n" +
	"!system 1226 Forbidden List:" + "\r\n" +
	"!system 1227 Duel Mode:" + "\r\n" +
	"!system 1228 Additional Options" + "\r\n" +
	"!system 1229 Don't check deck" + "\r\n" +
	"!system 1230 Do not shuffle deck" + "\r\n" +
	"!system 1231 Starting LP:" + "\r\n" +
	"!system 1232 Starting Hand:" + "\r\n" +
	"!system 1233 Cards per Draw:" + "\r\n" +
	"!system 1234 Host Name:" + "\r\n" +
	"!system 1235 Password:" + "\r\n" +
	"!system 1236 Obsolete Rulings" + "\r\n" +
	"!system 1237 Time limit：" + "\r\n" +
	"!system 1240 OCG" + "\r\n" +
	"!system 1241 TCG" + "\r\n" +
	"!system 1242 TCG/OCG" + "\r\n" +
	"!system 1243 Unspecified" + "\r\n" +
	"!system 1244 Single Duel" + "\r\n" +
	"!system 1245 Match" + "\r\n" +
	"!system 1246 Tag" + "\r\n" +
	"!system 1250 Host" + "\r\n" +
	"!system 1251 →Duel" + "\r\n" +
	"!system 1252 →Spectate" + "\r\n" +
	"!system 1253 Current Spectators:" + "\r\n" +
	"!system 1254 Select Deck" + "\r\n" +
	"!system 1255 Ready!" + "\r\n" +
	"!system 1270 Card info" + "\r\n" +
	"!system 1271 Log" + "\r\n" +
	"!system 1272 Clear Log" + "\r\n" +
	"!system 1273 Settings" + "\r\n" +
	"!system 1274 Auto card placing" + "\r\n" +
	"!system 1275 ↑Random card placing" + "\r\n" +
	"!system 1276 Auto Chain order" + "\r\n" +
	"!system 1277 No delay for Chain" + "\r\n" +
	"!system 1280 Standard duel" + "\r\n" +
	"!system 1281 Custom" + "\r\n" +
	"!system 1290 Mute opponent" + "\r\n" +
	"!system 1291 Mute spectators" + "\r\n" +
	"!system 1300 Ban List:" + "\r\n" +
	"!system 1301 Deck:" + "\r\n" +
	"!system 1302 Save" + "\r\n" +
	"!system 1303 Save as" + "\r\n" +
	"!system 1304 Clear" + "\r\n" +
	"!system 1305 Sort" + "\r\n" +
	"!system 1306 Exit" + "\r\n" +
	"!system 1307 Shuffle" + "\r\n" +
	"!system 1310 (All)" + "\r\n" +
	"!system 1311 Category:" + "\r\n" +
	"!system 1312 Monster" + "\r\n" +
	"!system 1313 Spell" + "\r\n" +
	"!system 1314 Trap" + "\r\n" +
	"!system 1315 Limit:" + "\r\n" +
	"!system 1316 Banned" + "\r\n" +
	"!system 1317 Limited" + "\r\n" +
	"!system 1318 Semi-limited" + "\r\n" +
	"!system 1319 Attr:" + "\r\n" +
	"!system 1321 Type:" + "\r\n" +
	"!system 1322 ATK:" + "\r\n" +
	"!system 1323 DEF:" + "\r\n" +
	"!system 1324 Lv/Rank:" + "\r\n" +
	"!system 1325 Search:" + "\r\n" +
	"!system 1326 Effect" + "\r\n" +
	"!system 1327 Full search" + "\r\n" +
	"!system 1328 Filter results" + "\r\n" +
	"!system 1330 Deck:" + "\r\n" +
	"!system 1331 Extra:" + "\r\n" +
	"!system 1332 Side:" + "\r\n" +
	"!system 1333 Results:" + "\r\n" +
	"!system 1334 Side decking completed" + "\r\n" +
	"!system 1335 Saved successfully" + "\r\n" +
	"!system 1340 Save Replay:" + "\r\n" +
	"!system 1341 Save" + "\r\n" +
	"!system 1342 Replays:" + "\r\n" +
	"!system 1343 Play" + "\r\n" +
	"!system 1344 Pause" + "\r\n" +
	"!system 1345 Step" + "\r\n" +
	"!system 1346 Swap" + "\r\n" +
	"!system 1347 Exit" + "\r\n" +
	"!system 1348 Load Replay" + "\r\n" +
	"!system 1349 Play Replay:" + "\r\n" +
	"!system 1350 Leave" + "\r\n" +
	"!system 1351 Surrender" + "\r\n" +
	"!system 1352 Main message：" + "\r\n" +
	"!system 1353 Start at turn：" + "\r\n" +
	"!system 1390 Waiting..." + "\r\n" +
	"!system 1391 Waiting...." + "\r\n" +
	"!system 1392 Waiting....." + "\r\n" +
	"!system 1393 Archetypes:" + "\r\n" +
	"!system 1400 Unable to connect to the host." + "\r\n" +
	"!system 1401 Connection has been lost." + "\r\n" +
	"!system 1402 An error occurred during the transmission." + "\r\n" +
	"!system 1403 Can't join host" + "\r\n" +
	"!system 1404 Password is incorrect." + "\r\n" +
	"!system 1405 The host refused the connection." + "\r\n" +
	"!system 1406 Invalid Deck" + "\r\n" +
	"!system 1407 [%ls] not allowed. Check the TCG/OCG card list and check the banlist" + "\r\n" +
	"!system 1408 Side decking failed" + "\r\n" +
	"!system 1409 Waiting for side..." + "\r\n" +
	"!system 1410 Side decking error" + "\r\n" +
	"!system 1411 Version mismatch(%X.0%X.%X)。" + "\r\n" +
	"!system 1500 The duel ended." + "\r\n" +
	"!system 1501 Replay ended." + "\r\n" +
	"!system 1502 Connection has been lost." + "\r\n" +
	"!system 1510 Your choice:[%ls]" + "\r\n" +
	"!system 1511 Opponent declared:[%ls]" + "\r\n" +
	"!system 1512 Choice of opponent:[%d]" + "\r\n" +
	"!system 1600 Activate a card" + "\r\n" +
	"!system 1601 Set a card" + "\r\n" +
	"!system 1602 Change a card" + "\r\n" +
	"!system 1603 [%ls]Normal Summon..." + "\r\n" +
	"!system 1604 Normal Summon success" + "\r\n" +
	"!system 1605 [%ls]Special Summon..." + "\r\n" +
	"!system 1606 Special Summon success" + "\r\n" +
	"!system 1607 [%ls]Flip Summon..." + "\r\n" +
	"!system 1608 Flip Summon success" + "\r\n" +
	"!system 1609 [%ls]is activated" + "\r\n" +
	"!system 1610 [%ls](%ls,%d)targeted" + "\r\n" +
	"!system 1611 You draw %d card(s)" + "\r\n" +
	"!system 1612 Opponent draws %d card(s)" + "\r\n" +
	"!system 1613 Received %d damage" + "\r\n" +
	"!system 1614 Opponent received %d damage" + "\r\n" +
	"!system 1615 Increase %d LP" + "\r\n" +
	"!system 1616 Opponent increases %d LP" + "\r\n" +
	"!system 1617 [%ls] has placed %d [%ls]" + "\r\n" +
	"!system 1618 [%ls] been removed %d [%ls]" + "\r\n" +
	"!system 1619 [%ls] Attack [%ls]" + "\r\n" +
	"!system 1620 [%ls] Direct Attack" + "\r\n" +
	"!system 1621 Attack Negated" + "\r\n" +
	"!system 1622 [%ls]You lose points" + "\r\n" +
	"!system 1623 Coin landed on:" + "\r\n" +
	"!system 1624 Die landed on:" + "\r\n" +
	"#mod strings" + "\r\n" +
	"!system 2016 Help" + "\r\n" +
	"!system 2017 Main" + "\r\n" +
	"!system 2018 1vs2" + "\r\n" +
	"!system 2019 Turbo duel" + "\r\n" +
	"!system 2020 Anime" + "\r\n" +
	"!system 2021 Filter:" + "\r\n" +
	"!system 2022 AI mode (beta)" + "\r\n" +
	"!system 2023 About" + "\r\n" +
	"!system 2024 Notes:" + "\r\n" +
	"!system 2025 Are you sure you want to permanently delete this deck?" + "\r\n" +
	"!system 2026 Deleted successfully" + "\r\n" +
	"!system 2027 Delete" + "\r\n" +
	"!system 2028 Volume" + "\r\n" +
	"!system 2029 Room:" + "\r\n" +
	"!system 2030 Players:" + "\r\n" +
	"!system 2031 Server busy. Please try again later or use another server." + "\r\n" +
	"!system 2032 No rooms" + "\r\n" +
	"!system 2033 There are no rooms currently open on the server. Click on 'Host' to create a new room or try another server." + "\r\n" +
	"!system 2034 New YGOPro version" + "\r\n" +
	"!system 2035 There is a new version %s available! Do you want to go to the download page?" + "\r\n" +
	"!system 2036 Connection Failed or Syntax error" + "\r\n" +
	"!system 2037 Failed to open url" + "\r\n" +
	"!system 2038 Failed to parse server data" + "\r\n" +
	"!system 2039 The %s server requires an account to make a room." + "\r\n" +
	"!system 2040 Do you want to open the registration page at http://%s ?" + "\r\n" +
	"!system 2041 Server:" + "\r\n" +
	"!system 2042 Room password:" + "\r\n" +
	"!system 2043 Room name:" + "\r\n" +
	"!system 2044 Online" + "\r\n" +
	"!system 2045 Multiplayer" + "\r\n" +
	"!system 2046 Enable sound effects" + "\r\n" +
	"!system 2047 Enable music" + "\r\n" +
	"#victory reason" + "\r\n" +
	"!victory 0x0 Surrendered" + "\r\n" +
	"!victory 0x1 LP reached 0" + "\r\n" +
	"!victory 0x2 Cards can't be drawn" + "\r\n" +
	"!victory 0x3 Time limit up" + "\r\n" +
	"!victory 0x4 Lost connection" + "\r\n" +
	"!victory 0x10 Victory by the effect of Exodia" + "\r\n" +
	"!victory 0x11 Victory by the effect of Final Countdown" + "\r\n" +
	"!victory 0x12 Victory by the effect of Vennominaga" + "\r\n" +
	"!victory 0x13 Victory by the effect of Horakhty" + "\r\n" +
	"!victory 0x14 Victory by the effect of Exodius" + "\r\n" +
	"!victory 0x15 Victory by the effect of Destiny Board" + "\r\n" +
	"!victory 0x16 Victory by the effect of Last Turn" + "\r\n" +
	"!victory 0x17 Victory by the effect of Number 88: Gimmick Puppet - Destiny Leo" + "\r\n" +
	"!victory 0x18 Victory by the effect of Number C88: Gimmick Puppet Disaster Leo" + "\r\n" +
	"!victory 0x19 Victory by the effect of Jackpot 7" + "\r\n" +
	"!victory 0x1a Victory by the effect of Relay Soul" + "\r\n" +
	"!victory 0x1b Victory by the effect of Ghostrick Spoiled Angel" + "\r\n" +
	"!victory 0x20 Match Victory by the effect of 「%ls」" + "\r\n" +
	"#counters" + "\r\n" +
	"!counter 0x3001 Spell Counter" + "\r\n" +
	"!counter 0x2 Wedge Counter" + "\r\n" +
	"!counter 0x3003 Bushido Counter" + "\r\n" +
	"!counter 0x3004 Psychic Counter" + "\r\n" +
	"!counter 0x5 Shine Counter" + "\r\n" +
	"!counter 0x6 Gem Counter" + "\r\n" +
	"!counter 0x7 Counter(Colosseum Cage of the Gladiator Beasts)" + "\r\n" +
	"!counter 0x8 Morph Counter" + "\r\n" +
	"!counter 0x9 Poison Counter" + "\r\n" +
	"!counter 0xa Genex Counter" + "\r\n" +
	"!counter 0x300b Counter(Ancient City)" + "\r\n" +
	"!counter 0xc Thunder Counter" + "\r\n" +
	"!counter 0xd Greed Counter" + "\r\n" +
	"!counter 0xe A-Counter" + "\r\n" +
	"!counter 0xf Worm Counter" + "\r\n" +
	"!counter 0x10 Black Feather Counter" + "\r\n" +
	"!counter 0x11 Hyper Venom Counter" + "\r\n" +
	"!counter 0x12 Karakuri Counter" + "\r\n" +
	"!counter 0x13 Chaos Counter" + "\r\n" +
	"!counter 0x14 Counter(Miracle Jurassic Egg)" + "\r\n" +
	"!counter 0x15 Ice Counter" + "\r\n" +
	"!counter 0x16 Spellstone Counter" + "\r\n" +
	"!counter 0x17 Nut Counter" + "\r\n" +
	"!counter 0x18 Flower Counter" + "\r\n" +
	"!counter 0x19 Fog Counter" + "\r\n" +
	"!counter 0x20 Plant Counter" + "\r\n" +
	"!counter 0x1a Double Counter" + "\r\n" +
	"!counter 0x1b Clock Counter" + "\r\n" +
	"!counter 0x1c D Counter" + "\r\n" +
	"!counter 0x1d Junk Counter" + "\r\n" +
	"!counter 0x1e Gate Counter" + "\r\n" +
	"!counter 0x1f Counter(B.E.S.)" + "\r\n" +
	"!counter 0x20 Plant Counter" + "\r\n" +
	"!counter 0x21 Guard Counter" + "\r\n" +
	"!counter 0x22 Dragonic Counter" + "\r\n" +
	"!counter 0x23 Ocean Counter" + "\r\n" +
	"!counter 0x24 String Counter" + "\r\n" +
	"!counter 0x25 Chronicle Counter" + "\r\n" +
	"!counter 0x26 Counter(Metal Shooter)" + "\r\n" +
	"!counter 0x27 Counter(Des Mosquito)" + "\r\n" +
	"!counter 0x3028 Counter Dark Catapulter" + "\r\n" +
	"!counter 0x29 Counter(Balloon Lizard)" + "\r\n" +
	"!counter 0x2a Counter(Magic Reflector)" + "\r\n" +
	"!counter 0x2c You Got It Boss! Counter" + "\r\n" +
	"!counter 0x2d Counter(Kickfire)" + "\r\n" +
	"!counter 0x2e Shark Counter" + "\r\n" +
	"!counter 0x30 Feel the Flow Counter" + "\r\n" +
	"!counter 0x302b Destiny Counter" + "\r\n" +
	"!counter 0x32 Balloon Counter" + "\r\n" +
	"!counter 0x33 Hermit Yokai Counter" + "\r\n" +
	"!counter 0x90 Maiden Counter" + "\r\n" +
	"!counter 0x91 Speed Counter" + "\r\n" +
	"!counter 0x92 Plasma Counter" + "\r\n" +
	"!counter 0x93 Sacred Beast Counter" + "\r\n" +
	"!counter 0x94 Pumpkin Counter" + "\r\n" +
	"!counter 0x95 Rising Sun Counter" + "\r\n" +
	"#setcodes" + "\r\n" +
	"!setcode 0x1 Ally of Justice" + "\r\n" +
	"!setcode 0x2 Genex" + "\r\n" +
	"!setcode 0x1002 R－Genex" + "\r\n" +
	"!setcode 0x2002 Genex Ally" + "\r\n" +
	"!setcode 0x4 Amazoness" + "\r\n" +
	"!setcode 0x5 Arcana Force" + "\r\n" +
	"!setcode 0x6 Dark World" + "\r\n" +
	"!setcode 0x7 Ancient Gear" + "\r\n" +
	"!setcode 0x8 HERO" + "\r\n" +
	"!setcode 0x3008 Elemental HERO" + "\r\n" +
	"!setcode 0x6008 Evil HERO" + "\r\n" +
	"!setcode 0xc008 Destiny HERO" + "\r\n" +
	"!setcode 0x5008 Vision HERO" + "\r\n" +
	"!setcode 0xa008 Masked HERO" + "\r\n" +
	"!setcode 0x9 Neos" + "\r\n" +
	"!setcode 0xa Lswarm" + "\r\n" +
	"!setcode 0x100a Steelswarm" + "\r\n" +
	"!setcode 0xb Infernity" + "\r\n" +
	"!setcode 0xc Alien" + "\r\n" +
	"!setcode 0xd Saber" + "\r\n" +
	"!setcode 0x100d X－Saber" + "\r\n" +
	"!setcode 0x300d XX－Saber" + "\r\n" +
	"!setcode 0xe Watt" + "\r\n" +
	"!setcode 0xf Ojama" + "\r\n" +
	"!setcode 0x10 Gusto" + "\r\n" +
	"!setcode 0x11 Karakuri" + "\r\n" +
	"!setcode 0x12 Frog" + "\r\n" +
	"!setcode 0x13 Meklord" + "\r\n" +
	"!setcode 0x3013 Meklord Emperor" + "\r\n" +
	"!setcode 0x6013 Meklord Army" + "\r\n" +
	"!setcode 0x15 B.E.S." + "\r\n" +
	"!setcode 0x16 Roid" + "\r\n" +
	"!setcode 0x1016 Vehicroid" + "\r\n" +
	"!setcode 0x17 Synchron" + "\r\n" +
	"!setcode 0x18 Cloudian" + "\r\n" +
	"!setcode 0x19 Gladiator Beast" + "\r\n" +
	"!setcode 0x1a Dark Scorpion" + "\r\n" +
	"!setcode 0x1b Phantom Beast" + "\r\n" +
	"!setcode 0x1d Koa'ki Meiru" + "\r\n" +
	"!setcode 0x1e Chrysalis" + "\r\n" +
	"!setcode 0x1f Neo-Spacian" + "\r\n" +
	"!setcode 0x20 Shien" + "\r\n" +
	"!setcode 0x21 Earthbound Immortal" + "\r\n" +
	"!setcode 0x22 Jurrac" + "\r\n" +
	"!setcode 0x23 Malefic" + "\r\n" +
	"!setcode 0x24 Scrap" + "\r\n" +
	"!setcode 0x25 Iron Chain" + "\r\n" +
	"!setcode 0x26 Morphtronic" + "\r\n" +
	"!setcode 0x27 T.G." + "\r\n" +
	"!setcode 0x28 Batteryman" + "\r\n" +
	"!setcode 0x29 Dragunity" + "\r\n" +
	"!setcode 0x2a Naturia" + "\r\n" +
	"!setcode 0x2b Ninja" + "\r\n" +
	"!setcode 0x102b Armor Ninja" + "\r\n" +
	"!setcode 0x2c Flamvell" + "\r\n" +
	"!setcode 0x2e Gravekeeper" + "\r\n" +
	"!setcode 0x2f Ice Barrier" + "\r\n" +
	"!setcode 0x30 Vylon" + "\r\n" +
	"!setcode 0x31 Fortune Lady" + "\r\n" +
	"!setcode 0x32 Volcanic" + "\r\n" +
	"!setcode 0x33 Blackwing" + "\r\n" +
	"!setcode 0x34 Crystal Beast" + "\r\n" +
	"!setcode 0x93 Cyber" + "\r\n" +
	"!setcode 0x94 Cybernetic" + "\r\n" +
	"!setcode 0x1093 Cyber Dragon" + "\r\n" +
	"!setcode 0x103 Cyber Dragon Related" + "\r\n" +
	"!setcode 0x35 Fabled" + "\r\n" +
	"!setcode 0x1035 The Fabled" + "\r\n" +
	"!setcode 0x36 Machina" + "\r\n" +
	"!setcode 0x37 Mist Valley" + "\r\n" +
	"!setcode 0x38 Lightsworn" + "\r\n" +
	"!setcode 0x39 Laval" + "\r\n" +
	"!setcode 0x3a Gishki" + "\r\n" +
	"!setcode 0x3b Red-Eyes" + "\r\n" +
	"!setcode 0x3c Reptilianne" + "\r\n" +
	"!setcode 0x3d Six Samurai" + "\r\n" +
	"!setcode 0x3e Worm" + "\r\n" +
	"!setcode 0x3f Majestic" + "\r\n" +
	"!setcode 0x40 Forbidden One" + "\r\n" +
	"!setcode 0x41 LV" + "\r\n" +
	"!setcode 0x42 Nordic" + "\r\n" +
	"!setcode 0x3042 Nordic Ascendant" + "\r\n" +
	"!setcode 0x6042 Nordic Beast" + "\r\n" +
	"!setcode 0xa042 Nordic Alfar" + "\r\n" +
	"!setcode 0x5042 Nordic Relic" + "\r\n" +
	"!setcode 0x43 Junk" + "\r\n" +
	"!setcode 0x44 The Agent" + "\r\n" +
	"!setcode 0x45 Archfiend" + "\r\n" +
	"!setcode 0x46 Polymerization/Fusion" + "\r\n" +
	"!setcode 0x47 Gem-" + "\r\n" +
	"!setcode 0x1047 Gem-Knight" + "\r\n" +
	"!setcode 0x48 Number" + "\r\n" +
	"!setcode 0x49 Skyblaster" + "\r\n" +
	"!setcode 0x4a Timelord" + "\r\n" +
	"!setcode 0x4b Aesir" + "\r\n" +
	"!setcode 0x4c Trap Hole" + "\r\n" +
	"!setcode 0x4e Evol" + "\r\n" +
	"!setcode 0x304e Evoltile" + "\r\n" +
	"!setcode 0x504e Evolzar" + "\r\n" +
	"!setcode 0x604e Evolsaur" + "\r\n" +
	"!setcode 0x4f Buster" + "\r\n" +
	"!setcode 0x104f /Assault Mode" + "\r\n" +
	"!setcode 0x50 Venom" + "\r\n" +
	"!setcode 0x51 Gadget" + "\r\n" +
	"!setcode 0x52 Guardian" + "\r\n" +
	"!setcode 0x53 Constellar" + "\r\n" +
	"!setcode 0x54 Gagaga" + "\r\n" +
	"!setcode 0x55 Photon" + "\r\n" +
	"!setcode 0x56 Inzektor" + "\r\n" +
	"!setcode 0x57 Resonator" + "\r\n" +
	"!setcode 0x58 Wind-Up" + "\r\n" +
	"!setcode 0x59 Gogogo" + "\r\n" +
	"!setcode 0x5a Penguin" + "\r\n" +
	"!setcode 0x5b Inmato" + "\r\n" +
	"!setcode 0x5c Sphinx" + "\r\n" +
	"!setcode 0x60 Bamboo Sword" + "\r\n" +
	"!setcode 0x61 Ninjitsu Art" + "\r\n" +
	"!setcode 0x62 Toon" + "\r\n" +
	"!setcode 0x63 Reactor" + "\r\n" +
	"!setcode 0x64 Harpie" + "\r\n" +
	"!setcode 0x65 Infestation" + "\r\n" +
	"!setcode 0x66 Symphonic Warrior" + "\r\n" +
	"!setcode 0x67 Iron" + "\r\n" +
	"!setcode 0x68 Tin" + "\r\n" +
	"!setcode 0x69 Hieratic" + "\r\n" +
	"!setcode 0x6a Butterspy" + "\r\n" +
	"!setcode 0x6b Bounzer" + "\r\n" +
	"!setcode 0x6c Lightray" + "\r\n" +
	"!setcode 0x6d Djinn" + "\r\n" +
	"!setcode 0x306d Divine Dragon" + "\r\n" +
	"!setcode 0x606d Djinn of Rituals" + "\r\n" +
	"!setcode 0x6e Prophecy" + "\r\n" +
	"!setcode 0x106e Spellbook" + "\r\n" +
	"!setcode 0x6f Heroic" + "\r\n" +
	"!setcode 0x106f Heroic Challenger" + "\r\n" +
	"!setcode 0x70 Chronomaly" + "\r\n" +
	"!setcode 0x71 Madolche" + "\r\n" +
	"!setcode 0x72 Geargia" + "\r\n" +
	"!setcode 0x1072 Geargiano" + "\r\n" +
	"!setcode 0x73 Xyz" + "\r\n" +
	"!setcode 0x74 Mermail" + "\r\n" +
	"!setcode 0x75 Abyss-" + "\r\n" +
	"!setcode 0x76 Heraldic Beast" + "\r\n" +
	"!setcode 0x77 Atlantean" + "\r\n" +
	"!setcode 0x78 Nimble" + "\r\n" +
	"!setcode 0x79 Fire Fist" + "\r\n" +
	"!setcode 0x7a Ignoble Knight" + "\r\n" +
	"!setcode 0x107a Noble Knight" + "\r\n" +
	"!setcode 0x207a Noble Arms" + "\r\n" +
	"!setcode 0x7b Galaxy" + "\r\n" +
	"!setcode 0x107b Galaxy-Eyes" + "\r\n" +
	"!setcode 0x307b Galaxy-Eyes Tachyon" + "\r\n" +
	"!setcode 0x7c Fire Formation" + "\r\n" +
	"!setcode 0x7d Hazy" + "\r\n" +
	"!setcode 0x107d Hazy Flame" + "\r\n" +
	"!setcode 0x7e ZW" + "\r\n" +
	"!setcode 0x7f Utopia" + "\r\n" +
	"!setcode 0x80 Duston" + "\r\n" +
	"!setcode 0x81 Fire King" + "\r\n" +
	"!setcode 0x1081 Fire King Avatar" + "\r\n" +
	"!setcode 0x82 Dododo" + "\r\n" +
	"!setcode 0x100 Synchron Synchos" + "\r\n" +
	"!setcode 0x101 Syncro Fusions" + "\r\n" +
	"!setcode 0x102 Evil Hero Fusions" + "\r\n" +
	"!setcode 0x83 Gimmick Puppet" + "\r\n" +
	"!setcode 0x101b Mecha Phantom Beast" + "\r\n" +
	"!setcode 0x84 Battlin' Boxer" + "\r\n" +
	"!setcode 0x1073 Chaos Xyz" + "\r\n" +
	"!setcode 0x1048 Number C" + "\r\n" +
	"!setcode 0x85 Super-Defense" + "\r\n" +
	"!setcode 0x86 Star Seraph" + "\r\n" +
	"!setcode 0x87 Umbrals" + "\r\n" +
	"!setcode 0x88 Bujin" + "\r\n" +
	"!setcode 0x8a Fascinating" + "\r\n" +
	"!setcode 0x108a Traptrix" + "\r\n" +
	"!setcode 0x89 Hole" + "\r\n" +
	"!setcode 0x8b Malicvorous" + "\r\n" +
	"!setcode 0x8d Ghostrick" + "\r\n" +
	"!setcode 0x8e Vampire" + "\r\n" +
	"!setcode 0x8f Zubaba" + "\r\n" +
	"!setcode 0x90 Sylvan" + "\r\n" +
	"!setcode 0x91 Necrovally" + "\r\n" +
	"!setcode 0x92 Heraldry" + "\r\n" +
	"!setcode 0x95 Rank-Up Magic" + "\r\n" +
	"!setcode 0x96 Fishborg" + "\r\n" +
	"!setcode 0x97 Artifact" + "\r\n" +
	"!setcode 0x98 Magician" + "\r\n" +
	"!setcode 0x99 Odd-Eyes" + "\r\n" +
	"!setcode 0x9a Superheavy Samurai" + "\r\n" +
	"!setcode 0x9b Melodious" + "\r\n" +
	"!setcode 0x9c tellarknight" + "\r\n" +
	"!setcode 0x9d Shaddoll" + "\r\n" +
	"!setcode 0x109d El Shaddoll" + "\r\n" +
	"!setcode 0x9e Yang Zing" + "\r\n" +
	"!setcode 0x9f Performapal" + "\r\n" +
	"!setcode 0xa0 Legendary Knight" + "\r\n" +
	"!setcode 0xa1 Legendary Dragon" + "\r\n" +
	"!setcode 0xa2 Dark Magician" + "\r\n" +
	"!setcode 0xa3 Stardust" + "\r\n" +
	"!setcode 0xa4 Winged Kuriboh" + "\r\n" +
	"!setcode 0xa5 Change" + "\r\n" +
	"!setcode 0xa6 Sprout" + "\r\n" +
	"!setcode 0xa7 Artorigus" + "\r\n" +
	"!setcode 0xa8 Laundsallyn" + "\r\n" +
	"!setcode 0xa9 Furnimal" + "\r\n" +
	"!setcode 0xaa Qliphoth" + "\r\n" +
	"!setcode 0xab Deskbot" + "\r\n" +
	"!setcode 0xac Goblin" + "\r\n" +
	"!setcode 0xad Des-Toy" + "\r\n" +
	"!setcode 0xae Covenant" + "\r\n" +
	"!setcode 0xaf DD" + "\r\n" +
	"!setcode 0xb0 Gottoms" + "\r\n" +
	"!setcode 0xb1 Burning Abyss" + "\r\n" +
	"!setcode 0xb2 U.A." + "\r\n" +
	"!setcode 0xb3 Hermit Youkai" + "\r\n" +
	"!setcode 0xb4 Necloth" + "\r\n" +
	"!setcode 0xb5 Spirit Beast" + "\r\n" +
	"!setcode 0x10b5 Spirit Beast Tamer" + "\r\n" +
	"!setcode 0x20b5 Noble Spirit Beast" + "\r\n" +
	"!setcode 0xb6 Infernoid", {
		keyValueDelim: " ",
        commentDelims: [],
        blockRegexp: /^\s?\#(.*?)\s?$/,
        joinKeyValue: true,
        joinKeySlice: 1
    }).setcodes;