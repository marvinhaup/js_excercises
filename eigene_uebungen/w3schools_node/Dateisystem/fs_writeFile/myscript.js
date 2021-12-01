const fs = require('fs');

// Erzeugt Datei, falls sie nicht existiert
// Ersetzt Datei, falls sie existiert
fs.writeFile('writtenFile.txt', 'Hello content!', function (err){
    if (err) throw err;
    console.log("Saved");
})