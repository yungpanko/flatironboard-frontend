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
        <div class="card" data-id=${this.id}>
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
            <a href="${this.link_url}" target="_blank" >
            <div class="ui bottom attached button">
              <p>View Source</p>
            </div>
            </a>
          </div>
        </div>

        <div class="ui modal ${this.id}">
          <i class="close icon"></i>
          <div class="header">
            Photo
          </div>
          <div class="image content">
            <div class="ui medium image">
              <img src=${this.src_url}>
            </div>
            <div class="description">
              <div class="ui header">${this.description}</div>
              <div class="scrolling content">
                <p>${this.body}</p>
              </div>
            </div>
          <div class="description">
            ${this.body.substring(0,150)} ...
          </div>
          <div class="actions">
            <div class="ui black right labeled icon button">
              Edit
              <i class="edit icon"></i>
            </div>
            <div class="ui red right labeled icon button">
              Delete
              <i class="remove icon"></i>
            </div>
          </div>
        </div>
    `
  }
}
