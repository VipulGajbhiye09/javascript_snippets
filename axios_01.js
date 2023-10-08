const axios = require('axios');

const url_endpoint = 'enter_url_herr'

// Make a get request 
axios.get(url_endpoint)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// Using async/await 
async function getUser() {
  try {
    const response = await axios.get(url_endpoint);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
