class ContentType {
  constructor(object) {
    this.id = object.id
    this.name = object.name
  }

  renderForDropDown() {
    return `<div class="item" data-value="${this.id}">${this.name}</div>`
  }
}
