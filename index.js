$(document).ready(function () {
  // call functions here
  submitForm()
});

function submitForm() {
  $('#form').on('submit', function (event) {
    let id = $('#test').val();
    getSubmissions(id, displayContent)
    event.preventDefault();
  })
}

function displayContent(data) {
  debugger
}
