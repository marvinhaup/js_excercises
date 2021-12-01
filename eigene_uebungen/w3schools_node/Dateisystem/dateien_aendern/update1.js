const fs = require('fs');

fs.appendfile('beispiel.txt', ' Das ist der angefuegte Text', function (err) {
    if (err) throw err;
    console.log("Updated");
});