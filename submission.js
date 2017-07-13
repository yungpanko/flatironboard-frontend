class Submission {
  constructor(object) {
    this.id = object.id
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
    </div>
    `

  }
}
