let page = 1

$(document)
  .ready(function () {
    // call functions here

    getAllSubmissions(displayContent)
    getAllCategories(renderCategoryDropDown) //move out of document ready when we move the form
    getAllContentTypes(renderContentTypeDropDown) //move out of document ready when we move the form
    submitForm()
    loadMore()
    heartListener()

  })

  function loadMoreSubmissions(data){
    let collection = new Collection(data)
    let array = collection.submissionsPage(page)
    collection.render(array)
    page += 1

  }

function loadMore () {
  $('#loadMoreButton').on('click', function(event) {
    getAllSubmissions(loadMoreSubmissions)
  })

}

function renderCategoryDropDown(data) {
  let categories = new CategoryCollection(data)
  $('.ui.dropdown.categories').dropdown(() => {});
  categories.renderForDropDown()
}

function renderContentTypeDropDown(data) {
  let contentTypes = new ContentTypeCollection(data)
  $('.ui.dropdown.contentTypes').dropdown(() => {});
  contentTypes.renderForDropDown()
}

function displayContent(data) {
  $('#results > div').html('')
  let collection = new Collection(data)
  let array = collection.submissionsPage(page)
  collection.render(array)
  page += 1
}

function submitForm() {
  $('#form')
    .on('submit', function (event) {
      let title = $('#form > > input[name="title"]').val()
      let description = $('#form > > input[name="description"]').val()
      let body = $('#form > > textarea[name="body"]').val()
      let category_id = $('#category-selection').val()
      let content_type_id = $('#content-type-selection').val()
      let data = {
        "submission": {
          "title": title,
          "description": description,
          "body": body,
          "category_id": category_id,
          "content_type_id": content_type_id
        }
      }
      postNewSubmission(data)
      collection.render()
      event.preventDefault()
    })
}

function heartListener () {
    $('#results').on('click', '#heart', function (event) {
      event.preventDefault()
      let data = {
        "submission": {id: $(this).children()[0].value}
      }
      incrementLikes($(this).children()[0].value, data)
      console.log("I was clicked")
      page = 1
      getAllSubmissions(displayContent)
    })
}
