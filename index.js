let page = 1
let term

$(document)
  .ready(function () {
    // call functions here

    getAllSubmissions(displayContent)
    getAllCategories(renderCategoryDropDown) //move out of document ready when we move the form
    getAllContentTypes(renderContentTypeDropDown) //move out of document ready when we move the form
    submitForm()
    loadMore()
    search()
  })


function search() {
  $('#search').on('search', function (event) {
    term = $(this).val()
    getAllSubmissions(searchFilter)
    //send term to API and get back results
  })
}

function searchFilter(data) {
  page = 1
  let collection = new Collection(data)
  collection.searchResults(term)
  let array = collection.submissionsPage(page)
  $('#results > div').html('')
  collection.render(array)
  page += 1
}

function loadMoreSubmissions(data) {
  let collection = new Collection(data)
  let array = collection.submissionsPage(page)
  collection.render(array)
  page += 1

}

function loadMore() {
  $('#loadMoreButton').on('click', function (event) {
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
