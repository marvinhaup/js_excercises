var http = require('http');
dateTime = require('./myfirstmodule');

// Server-objekt erstellen
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write(req.url);
    res.write("the date and time are currently: " + dateTime.myDateTime()); // Nachricht an den client senden
    //res.end('Hello World!'); // Nachricht mit etwas beenden
}).listen(8080);

// server mit request: localhost/summer aufrufen, liefert response: /summer