$(document)
  .ready(function () {
    // call functions here
    getAllSubmissions(displayContent)
    getAllCategories(renderCategoryDropDown) //move out of document ready when we move the form
    getAllContentTypes(renderContentTypeDropDown) //move out of document ready when we move the form
    submitForm()
    loadCardModal()
    loadSubmissionModal()
  })

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
  collection.render()
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

function loadSubmissionModal() {
  $('body > button').on('click', function(event){
    event.preventDefault()
    $('.ui.modal.submission')
      .modal('show')
  })
}

function loadCardModal(){
  $('#results > div').on('click', '.card', function(event){
    event.preventDefault()
    let id = this.dataset.id
    $(`.ui.modal.${id}`).modal('show')
  })
}
