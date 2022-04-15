const express = require("express");
const path = require("path");
const wiki = require("./wiki");

// init app
const app = express();

// Load view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//GET Home Route
app.get('/json', (req, res) => {
    res.json({name: "Marvin", name1: "paul"});
});

app.use('/wiki', wiki);
app.get("/", (req, res, ) => {
    let article = [
        {
            id: 1,
            title: 'article One',
            author: 'Brad Traversy',
            body: 'This is article one'
        },
        {
            id: 2,
            title: 'article Two',
            author: 'John Dow',
            body: 'This is article two'
        },
        {
            id: 3,
            title: 'article Two',
            author: 'Brad Traversy',
            body: 'This is article three'
        }
    ]
    res.render("index", {
        title: 'Variables Feld',
        articles: article
    });
});

// Start Server
app.listen(1337);
console.log("Server listening on port 1337");



















/*
// Achtung! oeffentlich verfuegbar
app.use(express.static('public'));

// CRUD: Create, Read, Update, Delete
//Read mit pfadzugriff bei Auslieferung
app.get("/", (req, res) => {
    console.log(path.join(__dirname + "/index.html"));
    res.sendFile(path.join(__dirname + "/index.html"));
});
//Create
app.post("*", (req, res) => {
    console.log(req);
    res.send("<h1>Hallo Post Express</h1>");
});
//Update
app.put("*", (req, res) => {
    console.log(req);
    res.send("<h1>Hallo Put Express</h1>");
});
// Delete
app.delete("*", (req, res) => {
    console.log(req);
    res.send("<h1>Hallo Delete Express</h1>");
});

// app.use fast gleich wie app.all !!
// REQ -> MIDDLEWARE -> RES

function authenticateUser(req, res, next) {
    res.locals.validatedUsers = "Bob";
    console.log("middleware: " + res.locals.validatedUsers);
    next(); // rufe naechste passende Route auf
}

function rootSite(req, res, next) {
    console.log("root: " + res.locals.validatedUsers);
    res.send("<h1>Hallo GET HOME</h1>");
    next();
}

// Middleware schalte Funktion vor andere Funktionen
app.use("/users/", authenticateUser);
app.use(express.static('public'));
app.use(express.json());

*/