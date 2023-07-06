//npm install axios
const axios = require('axios');

// GET request for remote image in node.js
axios.get('https://api.hgbrasil.com/weather')
  .then(function (response) {
    // handle success
    console.log("API > getAxios: "+response.data.results.description);
  })


  module.exports = axios;