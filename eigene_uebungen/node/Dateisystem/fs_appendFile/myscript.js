const fs = require('fs');

// Appendfile Methode: Falls ein Datei existiert, wird der Inhalt angehängt, falls nicht eine neue Datei erstellt
fs.appendFile('newfile.txt', 'Hello Content', function (err) {
    if (err) throw err;
    console.log('Saved!');
});