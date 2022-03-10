function deleteBook(idBook) {
  return cy.request({
    method: "DELETE",
    url: `Books/${idBook}`,
    failOnStatusCode: false
  })
}

export { deleteBook }