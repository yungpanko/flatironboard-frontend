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
    return `
      <div class="card">
        <div class="image">
          <img src=${this.src_url}>
        </div>
        <div class="content">
          <div class="header">${this.title}</div>
          <div class="meta">
            <a>${this.description}</a>
          </div>
          <div class="description">
            ${this.body}
          </div>
          <div class="ui bottom attached button">
            View Source
          </div>
        </div>
      </div>
    `

  }
}
