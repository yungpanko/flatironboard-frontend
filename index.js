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
      case 'Music':
        $('.item.active').removeClass('active')
        $('.music').addClass('active')
        $('#search').val("")
        category = 'music'
        getAllSubmissions(categoryFilter)
        break;
      case 'Health':
        $('.item.active').removeClass('active')
        $('.health').addClass('active')
        $('#search').val("")
        category = 'health'
        getAllSubmissions(categoryFilter)
        break;
      case 'Decor':
        $('.item.active').removeClass('active')
        $('.decor').addClass('active')
        $('#search').val("")
        category = 'decor'
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
  $('#results').html('')
  collection.render(array)
  page += 1
}

function searchFilter(data) {
  page = 1
  let collection = new Collection(data)
  collection.searchResults(term)
  let array = collection.submissionsPage(page)
  $('#results').html('')
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
  $('#results').html('')
  let collection = new Collection(data)
  let array = collection.submissionsPage(page)
  collection.render(array)
  page += 1
}

function submitForm() {
  $('#form')
    .on('submit', function (event) {
      let title = $('#form > > > input[name="title"]').val()
      let description = $('#form > > > input[name="description"]').val()
      let body = $('#form > > > textarea[name="body"]').val()
      let src_url = $('#form > > > input[name="src_url"]').val()
      let link_url = $('#form > > > input[name="link_url"]').val()
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
      debugger
      postNewSubmission(data)
      collection.render()
      event.preventDefault()
    })
}

function likedCard(item) {
  let data = {
    "submission": {
      id: item.dataset.id
    }
  }
  incrementLikes(item.dataset.id, data, updateLikesOnSubmission)
  console.log("I was clicked")
  // page = 1
  // getSingleSubmission(item.dataset.id, updateLikesOnSubmission)
}

function updateLikesOnSubmission(data) {
  let submission = new Submission(data)
  let cards = $('.ui.fluid.card')
  cards = Array.from(cards)
  let submssionToBeUpdated = cards.filter(card => {
    return card.dataset.id === submission.id.toString()
  })
  $(submssionToBeUpdated).find('.ui.basic.red.left.pointing.label')[0].innerText = submission.likes
}

function loadCardModal() {
  $('#results').on('click', '.card', function (event) {
    event.preventDefault()
    if (event.target.id === "heart") {
      likedCard(this)
    } else {
      let id = this.dataset.id
      $(`.ui.modal.${id}`).modal('show')
    }
  })
}

function loadSubmissionModal() {
  $('body > div.ui.secondary.menu > div > button').on('click', function (event) {
    event.preventDefault()
    $('.ui.modal.submission')
      .modal('show')
  })
}



function viewSource() {
  $(document).on('click', 'div.ui.right.labeled.icon.button', function (event) {
    event.preventDefault()
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
