<?php
    define("CDB_PATH", "C:/Users/IrateGod/AppData/Roaming/YGOPro Salvation/ygopro/cards.cdb");
    define("MANIFEST_PATH", "manifest_database.json");
    $sqlite = new SQLite3(CDB_PATH);
    $query = $sqlite->prepare('SELECT * FROM `datas`')->execute();
    $nameQuery = 'SELECT * FROM `texts` WHERE id = :id';
    $loopVar = "";
    $resultArray = array();
    while ($result = $query->fetchArray(SQLITE3_ASSOC)) {
        $loopVar = $sqlite->prepare($nameQuery);
        $loopVar->bindValue(':id', $result['id']);
        $loopVar = $loopVar->execute();
        $result = array_merge($result, array('name' => $loopVar->fetchArray(SQLITE3_ASSOC)['name']));
        array_push($resultArray, $result);
    }
    $jsonResult = json_encode($resultArray, JSON_PRETTY_PRINT);
    if (file_exists(MANIFEST_PATH)) {
        if (file_get_contents(MANIFEST_PATH) !== $jsonResult) {
            file_put_contents(MANIFEST_PATH, $jsonResult);
        }
    } else {
        file_put_contents(MANIFEST_PATH, "");
    }
?>