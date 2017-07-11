class Submission {
  constructor(object) {
    this.id = object.id
    this.title = object.title
    this.description = object.description
    this.body = object.body
    this.src_url = object.src_url
    this.link_url = object.link_url
    this.category = object.category.name
    this.content_type = object.content_type.name
  }

  render() {
    return `<div>${this.title}</div>`
  }
}
