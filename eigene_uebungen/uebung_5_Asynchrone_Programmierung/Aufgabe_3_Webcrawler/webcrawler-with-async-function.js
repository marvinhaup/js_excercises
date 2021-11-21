const process = require('process');
const fs = require('fs');
const os = require('os');
const axios = require('axios');
// const async = require('async');
const hrefs = new RegExp('href="(http[s]?://[^"]+)"', 'g');
const file = process.argv[2];
const urls = process.argv.slice(3);

if (process.argv.length < 4) throw new Error('Usage: node webcrawler-with-async-package.js <filename> <url> ...<more_urls>');
// if (fs.existsSync(file)) fs.rmSync(file); // delete file if it already exists

async function processURL(url) {
    console.log('Processing URL ' + url);
    let response = await axios.get(url);
    let matches = [];
    response.data.match(hrefs).forEach(link => {
        if (!matches.includes(link)) matches.push(link);
    });
    //let matches = Array.from(new Set(response.data.match(hrefs)))
    let data = 'Hyperlinks found at URL ' + url + os.EOL + matches.map(url => '  ' + url).join(os.EOL) + os.EOL;
    fs.appendFile(file, data, function (err) {
    if (err) throw new Error(err);
    });
}

const promise = urls.map(url => processURL(url));
Promise.all(promise)
    .then( () => console.log('All URLs have been processed successfully.'))
    .catch(err => {console.log("error")});
//todo: use promise.all to wait for the fullfillment of all promises