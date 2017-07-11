class Collection {
  constructor(array) {
    this.submissions = []
     array.map(object => {
       this.submissions.push(new Submission(object))
      })
  }

  render() {

    this.submissions.map(submission => {
      $('#results > div.ui.link.cards').append(submission.render())
    })

  }
}
