$(document).ready(function () {
  // call functions here
  getAllSubmissions(displayContent)
});

function displayContent(data) {
  let collection = new Collection(data)
  collection.render()
}
