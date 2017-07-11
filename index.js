$(document)
  .ready(function () {
    // call functions here
    getAllSubmissions(displayContent)
    submitForm()
  });

function displayContent(data) {
  let collection = new Collection(data)
  collection.render()
}

function submitForm() {
  $('#form')
    .on('submit', function (event) {
      let title = $('#form > input[name="title"]').val()
      let description = $('#form > input[name="description"]').val()
      let body = $('#form > input[name="body"]').val()
      let data = {
        "submission": {
          "title": title,
          "description": description,
          "body": body
        }
      }
      postNewSubmission(data)
      collection.render()
      event.preventDefault()
    })

}
