$(document)
  .ready(function () {
    // call functions here
    getAllSubmissions(displayContent)
    submitForm()
    viewSourceLink()
  })

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

function viewSourceLink() {
  $('.ui.link.cards > card').on("click", function(){
    event.preventDefault()
    console.log(event)
    // let name = event.target.attributes.itemName.value
    // let price = event.target.attributes.itemPrice.value
    // let listItem = new Item(name, price)
    // cart.addItem(listItem)
    // list.removeItem(listItem)
    // list.renderList()
    // cart.renderCart()
  })
}
