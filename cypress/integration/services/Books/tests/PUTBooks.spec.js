import * as PUTBooks from "../requests/PUTBooks.request";
import * as GETBooks from "../requests/GETBooks.request"
import * as POSTBooks from "../requests/POSTBooks.request"

describe('PUT Books', () => {
  it('Alterar um livro', () => {
    GETBooks.allBooks().then((responseAllBooks) => {
      PUTBooks.editBook(responseAllBooks.body[0].id).should((responseChangeBook) => {
        expect(responseChangeBook.status).to.eq(200);
        expect(responseChangeBook.body).to.be.not.null;
        expect(responseChangeBook.body.title).to.eq("Livro de Teste Alterado")
      })
    })
  });

  it('Criar e alterar um livro', () => {
    POSTBooks.addBook().then((responseAddBook) => {
      PUTBooks.editBook(responseAddBook.body.id).should((responseChangeBook) => {
        expect(responseChangeBook.status).to.eq(200);
        expect(responseChangeBook.body).to.be.not.null;
        expect(responseChangeBook.body.title).to.eq("Livro de Teste Alterado")
      })
    })
  });
});