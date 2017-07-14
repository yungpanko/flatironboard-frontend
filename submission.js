class Submission {
  constructor(object) {
    this.id = object.id
    this.user = object.user
    this.title = object.title
    this.description = object.description
    this.body = object.body
    this.src_url = object.src_url
    this.link_url = object.link_url
    this.likes = object.likes
    this.category = object.category.name
    this.content_type = object.content_type.name

  }

  render() {
    return `
      <div class="column">
        <div class="ui fluid card" data-id=${this.id}>
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
            <div class="ui bottom attached button">
              <p>View More</p>
            </div>
            <div class="center aligned extra content">
            <div class="ui labeled button" tabindex="0">
              <div class="ui red button" id="heart">
                <input type="hidden" value="${this.id}">
                <i class="heart icon"></i> Like
              </div>
              <a class="ui basic red left pointing label">
                ${this.likes}
              </a>
            </div>
          </div>
        </div>

        <div class="ui fullscreen modal ${this.id}">
          <i class="close icon"></i>
          <div class="header">
            ${this.title}
          </div>
          <div class="image content">
            <div class="ui image">
              <img src=${this.src_url}>
            </div>
            <div class="description">
              <div class="ui header">${this.description}</div>
              <div><p>${this.body}</p></div>
            </div>
          </div>
          <div class="actions">
            <div class="ui black right labeled icon button" data-value="source" data-url="${this.link_url}">
              View Source
              <i class="external icon"></i>
            </div>
            <div class="ui red right labeled icon button" data-value="delete">
              Delete
              <i class="remove icon"></i>
            </div>
          </div>
        </div>
      </div>

    `
  }
}
