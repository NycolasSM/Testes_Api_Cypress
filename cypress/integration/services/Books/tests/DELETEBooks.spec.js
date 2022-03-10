import * as DELETEBooks from "../requests/DELETEBooks.request";
import * as GETBooks from "../requests/GETBooks.request";
import * as POSTBooks from "../requests/POSTBooks.request"

describe("DELETE Books", () => {
  it("Deletar um livro", () => {
    GETBooks.allBooks().then((responseAllBooks) => {
      DELETEBooks.deleteBook(responseAllBooks.body[0].id).should((responseDeleteBook) => {
        expect(responseDeleteBook.status).to.eq(200);
      })
    })
  });

  it("Criar e excluir um livro", () => {
    POSTBooks.addBook().then((responseAddBook) => {
      DELETEBooks.deleteBook(responseAddBook.body.id).should((responseAddAndDeleteBook) => {
        expect(responseAddAndDeleteBook.status).to.eq(200);
      })
    })
  })
});
