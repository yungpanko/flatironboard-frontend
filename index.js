let page = 1
let term
let category

$(document)
  .ready(function () {
    // call functions here

    getAllSubmissions(displayContent)
    getAllCategories(renderCategoryDropDown) //move out of document ready when we move the form
    getAllContentTypes(renderContentTypeDropDown) //move out of document ready when we move the form
    submitForm()
    loadCardModal()
    loadSubmissionModal()
    loadMore()
    heartListener()
    search()
    navBar()
    viewSource()
  })

function navBar() {
  $('.ui.secondary.menu > .item').click((event) => {
    page = 1
    switch (event.target.innerText) {
      case 'Home':
        $('.item.active').removeClass('active')
        $('.home-page').addClass('active')
        $('#search').val("")
        getAllSubmissions(displayContent)
        break;
      case 'Blogs':
        $('.item.active').removeClass('active')
        $('.blogs').addClass('active')
        $('#search').val("")
        category = 'blog'
        getAllSubmissions(categoryFilter)
        break;
      case 'Recipes':
        $('.item.active').removeClass('active')
        $('.recipes').addClass('active')
        $('#search').val("")
        category = 'recipes'
        getAllSubmissions(categoryFilter)
        break;
      case 'News':
        $('.item.active').removeClass('active')
        $('.news').addClass('active')
        $('#search').val("")
        category = 'news'
        getAllSubmissions(categoryFilter)
        break;
    }
  })
}


function search() {
  $('#search').on('search', function (event) {
    $('.item.active').removeClass('active')
    term = $(this).val()
    getAllSubmissions(searchFilter)
    //send term to API and get back results
  })
}

function categoryFilter(data) {
  page = 1
  let collection = new Collection(data)
  collection.categoryResults(category)
  let array = collection.submissionsPage(page)
  $('#results > div').html('')
  collection.render(array)
  page += 1
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
      let src_url = $('#form > > input[name="src_url"]').val()
      let link_url = $('#form > > input[name="link_url"]').val()
      let category_id = $('#category-selection').val()
      let content_type_id = $('#content-type-selection').val()
      let data = {
        "submission": {
          "title": title,
          "description": description,
          "body": body,
          "src_url": src_url,
          "link_url": link_url,
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
  
function loadSubmissionModal() {
  $('body > div.ui.secondary.menu > div > button').on('click', function(event){
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

function viewSource(){
  $(document).on('click', 'div.ui.right.labeled.icon.button',function(event){
    event.preventDefault()
    debugger
    switch ($(this).data("value")) {
    case 'source':
        window.open(this.dataset.url, '_blank')
        $(".ui.modal").modal("hide")
        break
    // case 'delete':
    //     $("#result").html("normal")
    //     $(".ui.modal").modal("hide")
    //     break
    }
  })
}
