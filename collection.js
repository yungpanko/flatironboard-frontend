

class Collection {
  constructor(array) {
    this.submissions = []
     array.map(object => {
       this.submissions.push(new Submission(object))
      })
  }

  submissionsPage(page) {
    return this.submissions.slice((page - 1)*10,(page*10))
  }

  render(array) {
    if (array.length < 10) {
      $('#loadMoreButton').hide()
    }
    array.forEach((submission) => {
      $('#results > div.ui.link.cards').append(submission.render())
    })
  }
}



  // renderMore() {
  //   this.submissions
  // }
