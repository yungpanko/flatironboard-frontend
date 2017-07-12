class CategoryCollection {
  constructor(array) {
    this.categories = []
    array.map(object => {
      this.categories.push(new Category(object))
    })
  }

  renderForDropDown() {

    this.categories.map(category => {
      $('#category-menu').append(category.renderForDropDown())
    })
  }

}
