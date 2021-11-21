/**
 * Broadcasts a message asynchronously.
 * @param {string} msg - The message.
 * @param {function} cb - The callback function with error and result parameters.
 */
function broadcastMessage(msg = '', cb = (error, result) => {}) {
    console.log(`Broadcasting message: ${msg}`);
    if (Math.random() < 0.5) {
        setTimeout(() => {
            console.log('Simulate silent failure...');
        }, 500);
    }
    else {
        setTimeout(() => {
            if (typeof msg === 'string') cb(null, true);
            else cb(Error('Message is not a string'), null);
        });
    }
}

/**
 * Tries to broadcasts a message three times before giving up with an error.
 * @param {string} msg - The message.
 * @param {number} trials - The number of trials.
 * @param {number} delay - The delay between two trials in milliseconds.
 * @returns {Promise} - A promise representing the asynchronous operation.
 */
function tryBroadcastMessage(msg = '', trials = 3, delay = 250) {
    // TODOs: Your code
}

const promise = tryBroadcastMessage('Hi everybody!');
// const promise = tryBroadcastMessage(42); // type error
promise.then(value => {
    console.log('Broadcast successful: ' + value);
}).catch(error => {
    console.log('Broadcast failed! ' + error);
});