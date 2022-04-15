const axios = require('axios');

// Make a request for a user with a given ID
axios.get('localhost:1337/json')
  .then(function (response) {
    // handle success
    return response.json();
  })
  .then((data) => {
      console.log(data);
  });