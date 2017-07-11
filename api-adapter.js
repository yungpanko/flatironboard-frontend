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

function postNewSubmission(data) {

  const url = 'http://localhost:3000/submissions'

  fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.log(error))

}
