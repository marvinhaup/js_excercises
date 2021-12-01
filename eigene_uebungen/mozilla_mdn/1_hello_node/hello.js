// Load http module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

// Create http Server
const server = http.createServer( function(req, res) {

    // Set the reponse http header with http status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the reponse body "Hello World"
    res.end('Hello World\n');
})
server.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
})