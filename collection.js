class Collection {
  constructor(array) {
    this.submissions = []
    array.map(object => {
      this.submissions.push(new Submission(object))
    })
  }

  searchResults(searchTerm) {
    this.submissions = this.submissions.filter(submission => {
      return submission.title.toUpperCase().includes(searchTerm.toUpperCase()) ||
        submission.description.toUpperCase().includes(searchTerm.toUpperCase()) ||
        submission.category.toUpperCase().includes(searchTerm.toUpperCase())
    })
  }

  categoryResults(category) {
    this.submissions = this.submissions.filter(submission => {
      return submission.category.toUpperCase().includes(category.toUpperCase())
    })
  }

  submissionsPage(page) {
    return this.submissions.slice((page - 1) * 10, (page * 10))
  }

  render(array) {
    if (array.length < 10) {
      $('#loadMoreButton').hide()
    }
    array.forEach((submission) => {
      $('#results').append(submission.render())
    })
  }
}



// renderMore() {
//   this.submissions
// }
