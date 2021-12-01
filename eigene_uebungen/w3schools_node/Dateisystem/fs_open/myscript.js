const fs = require('fs');

// öffne die Datei im Modus:w = write 
// Bestehende datei wird überschrieben?
// Wenn Datei nicht existiert, erzeuge Datei

fs.open('testDatei.txt', 'w', function(err, file) {
    if (err) throw err;
    console.log('Saved!');
})