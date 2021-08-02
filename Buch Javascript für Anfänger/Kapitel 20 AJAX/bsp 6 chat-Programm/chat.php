<?php

$handle = fopen("inhalt.txt", "r");
$inhalt = "";

while (!feof($handle)) {
    $inhalt .= fgets($handle);
}

fclose($handle);

if ($_REQUEST["wert"] != "") {
    $inhalt .= $_REQUEST["wert"];
    $inhalt .= "\n\n";
}

print($inhalt);

$handle = fopen("inhalt.txt","w");

fputs($handle, $inhalt);

fclose($handle);

?>