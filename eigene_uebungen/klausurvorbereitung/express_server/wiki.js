// wiki route module

const { nextTick } = require('async');
const express = require('express');
const router = express.Router();

// middleware specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
})

// Home page route
router.get('/', function(req, res) {
    res.send('Wiki home page');
});

// About page route
router.get('/about', function(req, res) {
    res.send('About this wiki');
});

module.exports = router;
