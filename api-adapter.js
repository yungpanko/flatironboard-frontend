// const fetch = require('node-fetch');

function getAllSubmissions(callback) {

  const url = 'http://localhost:3000/submissions.json'

  fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(response => callback(response))
    .catch(error => console.log(error))

}

function getSingleSubmission(id, callback) {

  const url = 'http://localhost:3000/submissions/' + id + '.json'

  fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(response => callback(response))
    .catch(error => console.log(error))

}
