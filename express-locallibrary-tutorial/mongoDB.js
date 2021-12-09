var process = require('process');
var mongoose = require('mongoose');
var Genre = require('./models/genre');

// connect to MongoDB
var mongoDB = "mondodb uri";
if (!mongoDB) {
    console.error('Environment variable MONGODB_URI must be set in order to connect to the MongoDB database.');
    process.exit(-1);
}
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => {
        console.log('Connection to MongoDB established.');
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    },
    err => console.error('Connection to MongoDB failed: ', err)
    );

Genre.find()
    .sort([['name', 'ascending']])
    .exec(function (err, list_genres) {
        if (err) { console.error(err); }
        console.log('Genres: ' + list_genres.join());
    });