class ContentTypeCollection {
  constructor(array) {
    this.contentTypes = []
    array.map(object => {
      this.contentTypes.push(new ContentType(object))
    })
  }

  renderForDropDown() {

    this.contentTypes.map(contentType => {
      $('#content-type-menu').append(contentType.renderForDropDown())
    })
  }

}
