class BookShelf {
  constructor() {
    this.arrayOfBooks = [];
    this.searchResults = []
  }
  addBook(newBook) {
    this.arrayOfBooks.push(newBook);
  }
  ///-->render here will use the information from the this.arrayOfBooks and pass it to the render in the book class, to create elements and display on page
  renderShelf() {
    let booksToShow = this.arrayOfBooks;
    const authorListAdd = document.createElement("div");
    authorListAdd.classList = "booksDiv";

    this.searchResults.length ? (booksToShow = this.searchResults) : (booksToShow = this.arrayOfBooks)

    booksToShow.map((book) => {
      authorListAdd.append(book.renderBook());
    });
  }

  sort(value) {
    if (value === 'byAuthorAZ') {
      this.arrayOfBooks.sort((a, b) => (a.author < b.author ? -1 : 1));
    } else if (value === 'byAuthorZA') {
      this.arrayOfBooks.sort((a, b) => (a.author > b.author ? -1 : 1));
    } else if (value === 'byTitleAZ') {
      this.arrayOfBooks.sort((a, b) => (a.title < b.title ? -1 : 1));
    } else if (value === 'byTitleZA') {
      this.arrayOfBooks.sort((a, b) => (a.title > b.title ? -1 : 1));
    } else if (value === 'bySubjectAscending') {
      this.arrayOfBooks.sort((a, b) =>
        a.subject.length < b.subject.length ? -1 : 1
      );
    } else if (value === 'bySubjectsDescending') {
      this.arrayOfBooks.sort((a, b) =>
        a.subject.length > b.subject.length ? -1 : 1
      );
    }
    bookList.innerHTML = ''
    this.renderShelf()
  }

  showFavorites (array) {
   this.searchResults = arrayOfAllFavorites
   bookList.innerHTML = ''
   this.renderShelf()
   this.searchResults = []
  }
  search(searchValue) {
    this.searchResults = this.arrayOfBooks.filter((book) => {
    return (book.author.toString().toLowerCase().includes(searchValue) || book.title.toString().toLowerCase().includes(searchValue) || book.subject.toString().toLowerCase().includes(searchValue))
    })
    bookList.innerHTML = ''
    this.renderShelf()
    this.searchResults = []
  }
  
}
const searchBox = document.querySelector(".searchBox")
searchBox.addEventListener("input", (e) => {
searchValueInput = e.target.value.toLowerCase()
bookShelf1.search(searchValueInput)
})

const bookList = document.querySelector(".booksDiv");

const sortSelector = document.querySelector(".sortSelection");
const sortSelections = document.querySelector(".sortSelection");
sortSelector.addEventListener("change", () => { 
  bookShelf1.sort(sortSelections.value)
})

const showFavoritesSelection = document.querySelector(".showFavoritesOnly")
showFavoritesSelection.addEventListener('change', (e) => {
  if (e.target.checked) {
  bookShelf1.showFavorites()
  }
  else {
    bookList.innerHTML = ''
  bookShelf1.renderShelf()
  }
})
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
///-->book created using the render book function//removed for now
let vinceFlynn = new Book(
  "Flynn, Vince",
  "en",
  ["Spy", "American", "Assasin"],
  "American Assassin"
);
bookShelf1.addBook(vinceFlynn)
vinceFlynn.renderBook(true);
let vinceFlynn1 = new Book(
  "Flynn, Vince",
  "en",
  ["Shooting", "Sniper", "Assasin"],
  "Kill Shot"
);
bookShelf1.addBook(vinceFlynn1)
vinceFlynn1.renderBook(true);
let vinceFlynn2 = new Book(
  "Flynn, Vince",
  "en",
  ["Spy", "Orders", "Consent"],
  "Consent To Kill"
);
bookShelf1.addBook(vinceFlynn2)
vinceFlynn2.renderBook(true);
let vinceFlynn3 = new Book(
  "Flynn, Vince",
  "en",
  ["American", "Government", "Spy"],
  "The Last Man"
);
bookShelf1.addBook(vinceFlynn3)
vinceFlynn3.renderBook(true);
