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
    <div class="column">
      <div class="ui fluid card">
        <div class="image">
          <img src=${this.src_url}>
        </div>
        <div class="center aligned content">
          <div class="header">${this.title}</div>
          <div class="meta">
            <a>${this.description}</a>
          </div>
          <div class="description">
            ${this.body.substring(0,150)} ...
          </div>
          <a href="${this.link_url}" target="_blank" >
          <div class="ui bottom attached button">
            <p>View Source</p>
          </div>
          </a>
        </div>
      </div>
      </div>
    `

  }
}
