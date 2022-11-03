class BookShelf {
  constructor() {
    this.arrayOfBooks = [];
  }
  addBook(newBook) {
    this.arrayOfBooks.push(newBook);
  }
  ///-->render here will use the information from the this.arrayOfBooks and pass it to the render in the book class, to create elements and display on page
  renderShelf() {
    const authorListAdd = document.createElement("div");
    authorListAdd.classList = "booksDiv";
    this.arrayOfBooks.map((book) => {
      authorListAdd.append(book.renderBook());
    });
    // for (const books of this.arrayOfBooks) {
    //   authorListAdd.append(books.renderBook());
    // }
  }
  // SortEdBooksList(book){
  //   const bookShelf1 = new BookShelf();
  //   ///-->creates a new book, this is the information used in the new bookShelf1
  //   bookData.map((book) => {
  //     // for (const book of bookData) {
  //     const bookInstance = new Book(
  //       book.author,
  //       book.language,
  //       book.subject,
  //       book.title
  //     );
  //     bookShelf1.addBook(bookInstance);
  //   });
  //   bookShelf1.renderShelf();
  // };
}
const SortEdBooksList = (book) => {
  const bookShelf1 = new BookShelf();
  ///-->creates a new book, this is the information used in the new bookShelf1
  bookData.map((book) => {
    // for (const book of bookData) {
    const bookInstance = new Book(
      book.author,
      book.language,
      book.subject,
      book.title,
    );
    bookShelf1.addBook(bookInstance);
  });
  bookShelf1.renderShelf();
};

const bookList = document.querySelector(".booksDiv");
const sortSelector = document.querySelector(".sortSelection");
const selections = document.querySelector(".sortSelection");
sortSelector.addEventListener("change", () => {
  if (selections.value === "byAuthorAZ") {
    bookData.sort((a, b) => {
      if (a.author < b.author) {
        return -1;
      }
      if (a.author > b.author) {
        return 1;
      }
      return 0;
    });
    bookList.innerHTML = "";
    SortEdBooksList(bookData);
  }
  if (selections.value === "byAuthorZA") {
    bookData.sort((a, b) => {
      if (a.author < b.author) {
        return 1;
      }
      if (a.author > b.author) {
        return -1;
      }
      return 0;
    });
  }
  bookList.innerHTML = "";
  SortEdBooksList(bookData);
  if (selections.value === "byTitleAZ") {
    bookData.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }
  bookList.innerHTML = "";
  SortEdBooksList(bookData);
  if (selections.value === "byTitleZA") {
    bookData.sort((a, b) => {
      if (a.title < b.title) {
        return 1;
      }
      if (a.title > b.title) {
        return -1;
      }
      return 0;
    });
  }
  bookList.innerHTML = "";
  SortEdBooksList(bookData);
  if (selections.value === "bySubjectAscending") {
    bookData.sort((a, b) => {
      if (a.subject.length < b.subject.length) {
        return -1;
      }
      if (a.subject.length > b.subject.length) {
        return 1;
      }
      return 0;
    });
  }
  bookList.innerHTML = "";
  SortEdBooksList(bookData);
  if (selections.value === "bySubjectsDescending") {
    bookData.sort((a, b) => {
      if (a.subject.length < b.subject.length) {
        return 1;
      }
      if (a.subject.length > b.subject.length) {
        return -1;
      }
      return 0;
    });
  }
  bookList.innerHTML = "";
  SortEdBooksList(bookData);
});

///--> creating a bookshelf, basically extracting information from the data file and pushing it into the this.arrayOfBooks
const bookShelf1 = new BookShelf();
///-->creates a new book, this is the information used in the new bookShelf1
bookData.map((book) => {
  // for (const book of bookData) {
  const bookInstance = new Book(
    book.author,
    book.language,
    book.subject,
    book.title
  );
  bookShelf1.addBook(bookInstance);
});
bookShelf1.renderShelf();