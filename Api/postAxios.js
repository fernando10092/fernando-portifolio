//npm install axios

//const axios = require('axios');

/* axios.post('https://viacep.com.br/ws/09336130/json/', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  }); */



// GET request for remote image in node.js
function envioCep(infoCep) {

    const axios = require('axios');

    return axios.get('https://viacep.com.br/ws/' + infoCep + '/json/')
        .then(function (response) {
            // Até data = Todos
            //console.log(response.data.localidade);
            return response.data;

        })


}



module.exports = envioCep;