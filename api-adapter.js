// const fetch = require('node-fetch');

function getAllSubmissions(callback) {

  const url = 'http://localhost:3000/api/v1/submissions.json'

  fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(response => callback(response))
    .catch(error => console.log(error))

}

function getAllCategories(callback) {

  const url = 'http://localhost:3000/api/v1/categories.json'

  fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(response => callback(response))
    .catch(error => console.log(error))

}

function getAllContentTypes(callback) {

  const url = 'http://localhost:3000/api/v1/content_types.json'

  fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(response => callback(response))
    .catch(error => console.log(error))

}

function getSingleSubmission(id, callback) {

  const url = 'http://localhost:3000/api/v1/submissions/' + id + '.json'

  fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(response => callback(response))
    .catch(error => console.log(error))

}

function postNewSubmission(data) {

  const url = 'http://localhost:3000/api/v1/submissions'

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

function incrementLikes(id, data) {

  const url = 'http://localhost:3000/api/v1/submissions/' + id

  fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.log(error))

}
