<?php
    $startTime = microtime(TRUE);
    header('Content-Type: text/plain; charset=utf-8');
    define("CDB_PATH", "C:/Users/root/Documents/GitHub/YGOPro-Support-System/server/http/ygopro/databases/0-en-OCGTCG.cdb");
    define("MANIFEST_PATH", "C:/Users/root/Documents/GitHub/YGOPro-Support-System/server/http/manifest/database.json");
    $sqlite = new SQLite3(CDB_PATH);
    $query = $sqlite->prepare('SELECT * FROM `datas`')->execute();
    $nameQuery = 'SELECT * FROM `texts` WHERE id = :id';
    $loopVar = "";
    $resultArray = array();
    $nameDescArray = array();
    $loopTime = microtime(TRUE);
    while ($result = $query->fetchArray(SQLITE3_ASSOC)) {
        if (isset($_GET['explicitTime']) && $_GET['explicitTime'] === '1') {
            $loopTime = microtime(TRUE);
            echo "Fetched database row after " . ($loopTime - $startTime) . " seconds.\n";
        }
        $loopVar = $sqlite->prepare($nameQuery);
        $loopVar->bindValue(':id', $result['id']);
        $loopVar = $loopVar->execute();
        $nameDescArray = $loopVar->fetchArray(SQLITE3_ASSOC);
        if (isset($_GET['explicitTime']) && $_GET['explicitTime'] === '1') {
            $loopTime = microtime(TRUE);
            echo "Fetched name and description after " . ($loopTime - $startTime) . " seconds.\n";
        }
        $nameDescArray = array('name' => $nameDescArray['name'], 'desc' => $nameDescArray['desc']);
        $result = array_merge($result, $nameDescArray);
        array_push($resultArray, $result);
    }
    $sqlite->close();
    $jsonResult = json_encode($resultArray, JSON_PRETTY_PRINT);
    if (file_exists(MANIFEST_PATH)) {
        if (file_get_contents(MANIFEST_PATH) !== $jsonResult) {
            file_put_contents(MANIFEST_PATH, $jsonResult);
            echo "Updated database after a total " . (microtime() - $startTime) . " seconds.\n";
        } else {
            echo "Manifest database unchanged.\n";
        }
    } else {
        file_put_contents(MANIFEST_PATH, "");
        echo "Manifest database file did not exist, creating it...\n";
    }
    echo "Script finished running after " . (microtime(TRUE) - $startTime) . " seconds.";
?>