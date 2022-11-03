class Book {
  constructor(author, language, subject, title, isFavorite) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
    this.isFavorite = false;
  }
  ///--> render will create the elements needed to display the information on the page
  renderBook(prepend) {
    const bookList = document.querySelector(".booksDiv");

    const authorList = document.createElement("section");
    authorList.classList = "books";

    const imageHolder = document.createElement("img");
    imageHolder.classList = "imageHolder";
    imageHolder.src =
      "./images/" + Math.floor(Math.random() * (3 - 1) + 1) + ".png";

    const authorName = document.createElement("h2");
    authorName.classList = "authorName";

    const authorTitle = document.createElement("h4");
    authorTitle.classList = "authorTitle";

    const bookLanguage = document.createElement("p");

    const bookSubjectList = document.createElement("ul");
    // const bookSubject = document.createElement("li");
    // bookSubject.classList = 'bookSubject'

    // for (const subjects of this.subject) {
    // // this.subject.map((subjects) => {
    // const bookSubject = document.createElement("li");
    // bookSubject.classList = 'bookSubject'
    // bookSubject.textContent = subjects;
    // bookSubjectList.append(bookSubject)
    // }

    console.log(this.subject);

    // bookSubjectList.append(bookSubject)

    const favoriteRow = document.createElement("span");

    // const commentBox = document.createElement('input')
    // commentBox.type = 'text'
    // commentBox.setAttribute('placeholder','Enter Comment')
    // commentBox.setAttribute('id','comment-box')
    // const commentButton = document.createElement('button')
    // commentButton.id = 'post'
    // const commentUl = document.createElement('ul')
    // commentUl.setAttribute('id','unordered')

    // commentBox.appendChild(commentButton)
    // commentUl.appendChild(commentBox)

    authorName.textContent = this.author;
    authorTitle.textContent = this.title;
    // bookSubject.textContent = this.subject;
    bookLanguage.textContent = this.language;
    favoriteRow.textContent = "\u2764";

    const commentBox = document.createElement('input')
    commentBox.setAttribute("type","text")
    commentBox.setAttribute('placeholder','Enter Comment')
    commentBox.setAttribute('id','comment-box')

    const commentButton = document.createElement('button')
    // commentButton.setAttribute('type','submit')
    // commentButton.id = 'post'
    const commentUl = document.createElement('ul')
    commentUl.setAttribute('id','unordered')

    // commentButton.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   const commentBoxValue= document.getElementById("comment-box").value;
    //   const commentListItem = document.createElement("li");
    //   const commentListText = document.createTextNode(commentBoxValue);
    //   commentListItem.appendChild(commentListText);
    //   const commentInUl = document.getElementById("unordered")
    //   commentInUl.appendChild(commentListItem);
    //   // clearCommentBox()
     
    // });
    // const clearCommentBox = () => {
    //   document.getElementById("comment-box").value = ''
    //   commentButton.disabled = true
    //   }

    for (const subjects of this.subject) {
      // this.subject.map((subjects) => {
      const bookSubject = document.createElement("li");
      bookSubject.classList = "bookSubject";
      bookSubject.textContent = subjects;
      bookSubjectList.append(bookSubject);
    }
    ///-->creating a table data with a heart in it, that will be red with the class of on
    ///-->event listener will add the class of on and add to an array for the count
    favoriteRow.addEventListener("click", (e) => {
      console.log(e)
      e.preventDefault();
      if (!this.isFavorite) {
        favoriteRow.classList = "on";
        this.isFavorite = true;
        addToFavoriteArray(this);
        console.log(arrayOfAllFavorites);
        countFavorites();
        return;
      }
      if (this.isFavorite) {
        favoriteRow.classList = "";
        this.isFavorite = false;
        removeFromFavorite(this);
        countFavorites();
        return;
      }
    });

    // commentButton.addEventListener("click", (e) => {
    //   console.log(this.name)
    //   e.preventDefault();
    // const commentBoxValue= document.getElementById("comment-box").value;
    // const commentListItem = document.createElement("li");
    // const commentListText = document.createTextNode(commentBoxValue);
    // commentListItem.appendChild(commentListText);
    // document.getElementById("unordered").appendChild(commentListItem);
//     // clearCommentBox();
//     // const post = document.getElementById("post").disabled = true
// });

// commentButton.addEventListener("click", (e) => {
//   console.log(this.name)
//   e.preventDefault();
// });
// const clearCommentBox = () => {
// document.getElementById("comment-box").value = ''
// }
    ///-->can use innerHTML as well, both work
    // authorList.innerHTML =
    // `<td>${this.author}</td>
    // <td>${this.title}</td>`
    ///-->prepend will insert the book I want to add from the book from on top of the current list
    if (prepend) {
      authorList.prepend(
        imageHolder,
        authorName,
        authorTitle,
        bookSubjectList,
        bookLanguage,
        favoriteRow,
        commentBox,
        commentButton,
        commentUl,
      );
      bookList.prepend(authorList);
      ///-->if prepend is not true, will continue and append, prepend will be true when adding using the book form
    } else {
      authorList.append(
        imageHolder,
        authorName,
        authorTitle,
        bookSubjectList,
        bookLanguage,
        favoriteRow,
        commentBox,
        commentButton,
        commentUl,
      );
      bookList.append(authorList);
    }

  }
}
const commentButton = document.createElement('button')
commentButton.addEventListener("click", (e) => {
  e.preventDefault();
  const commentBoxValue= document.getElementById("comment-box").value;
  const commentListItem = document.createElement("li");
  const commentListText = document.createTextNode(commentBoxValue);
  commentListItem.appendChild(commentListText);
  const commentInUl = document.getElementById("unordered")
  commentInUl.appendChild(commentListItem);
  // clearCommentBox()
 
});
// const commentButton = document.createElement('button')
// commentButton.addEventListener("click", (e) => {
//   console.log(this.name)
//   e.preventDefault();
// const commentBoxValue= document.getElementById("comment-box").value;
// const commentListItem = document.createElement("li");
// const commentListText = document.createTextNode(commentBoxValue);
// commentListItem.appendChild(commentListText);
// document.getElementById("unordered").appendChild(commentListItem);
// //     // clearCommentBox();
// //     // const post = document.getElementById("post").disabled = true
// });
///-->this is the array that will keep track of my favorites
const arrayOfAllFavorites = [];
const addToFavoriteArray = (a) => {
  arrayOfAllFavorites.push(a);
};
///-->this function will slice the now removed favorite from the array
const removeFromFavorite = (a) => {
  let indexOfCut = arrayOfAllFavorites.indexOf(a);
  arrayOfAllFavorites.splice(indexOfCut, indexOfCut + 1);
};
///-->using reduce to count how many favorites are in the array
const countFavorites = () => {
  document.querySelector(".favoriteCountAdjust").textContent =
    arrayOfAllFavorites.reduce((acc) => acc + 1, 0);
};

const onlyFavoritesCheckBox = document.querySelector(".showFavoritesOnly");
onlyFavoritesCheckBox.addEventListener("change", (e) => {
  if (e.target.checked) {
    showOnlyFavorites();
    // alert("test checked")
  } else {
    // alert("test unchecked")
    // location.reload()
  }
});
const showOnlyFavorites = (arrayOfAllFavorites) => {
  arrayOfAllFavorites.map((favs) => {
    // for (const book of bookData) {
    const bookFavoritesBook = new Book(
      favs.author,
      favs.language,
      favs.subject,
      favs.title
    );
    console.log(bookFavoritesBook);
  });
};
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
      book.title
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

///-->book created using the render book function//removed for now
let vinceFlynn = new Book(
  "Flynn, Vince",
  "en",
  ["killing", "Kill", "Killed"],
  "American Assassin"
);
vinceFlynn.renderBook();
let vinceFlynn1 = new Book(
  "Flynn, Vince",
  "en",
  ["killing", "Kill", "Killed"],
  "Kill Shot"
);
vinceFlynn1.renderBook();
let vinceFlynn2 = new Book(
  "Flynn, Vince",
  "en",
  ["killing", "Kill", "Killed"],
  "Consent To Kill"
);
vinceFlynn2.renderBook();
let vinceFlynn3 = new Book(
  "Flynn, Vince",
  "en",
  ["killing", "Kill", "Killed"],
  "The Last Man"
);
vinceFlynn3.renderBook();
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
///-->this clear input will clear the form's value after adding a book
function clearInput() {
  document.querySelector("#author").value = "";
  document.querySelector("#language").value = "";
  document.querySelector("#subject").value = "";
  document.querySelector("#title").value = "";
}
///-->this is the function for the submit button to add a book
document.querySelector("#bookForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const newAuthor = document.querySelector("#author").value;
  const newLanguage = document.querySelector("#language").value;
  const newSubject = document.querySelector("#subject").value;
  const newTitle = document.querySelector("#title").value;
  if (
    newAuthor === "" ||
    newLanguage === "" ||
    newSubject === "" ||
    newTitle === ""
  ) {
  } else {
    ///-->will create a new book and use the renderbook with true, which use the append option
    const addedBook = new Book(newAuthor, newLanguage, [newSubject], newTitle);
    console.log(addedBook);
    bookShelf1.addBook(addedBook);
    addedBook.renderBook(true);
    clearInput();
  }
});

///-->search box for the search function on the page
const searchBox = document.querySelector(".searchBox");
// const bookSearch = BookShelf.arrayOfBooks;
searchBox.addEventListener("input", (e) => {
  ///-->convert the search box value to lowercase
  const searchValueInput = e.target.value.toLowerCase();
  if (searchValueInput === "") {
    // table.innerHTML = '';
    ///-->once the value is empty it will reload the page
    location.reload();
    return;
  }
  ///-->this will filter through the arrayOfBooks for the search term
  ///-->can use Array.from() and use different values/date from different arrays
  const searchBookArray = bookShelf1.arrayOfBooks;
  const searchResults = searchBookArray.filter((searchBookArrays) => {
    return searchBookArrays.author
      .toString()
      .toLowerCase()
      .includes(searchValueInput);
  });
  bookList.innerHTML = "";
  ///-->for each result in the searchResults it will create a table with the information on it, if it matches the search terms/ ///-->changed to map
  searchResults.map((element) => {
    const bookList = document.querySelector(".booksDiv");
    const authorList = document.createElement("section");
    authorList.classList = "books";

    const imageHolder = document.createElement("div");
    imageHolder.classList = "imageHolder";

    const authorName = document.createElement("h2");
    authorName.classList = "authorName";

    const authorTitle = document.createElement("h4");
    authorTitle.classList = "authorTitle";

    const bookLanguage = document.createElement("p");

    const bookSubjectList = document.createElement("ul");
    const favoriteRow = document.createElement("span");
    // const authorList = document.createElement("div");
    // authorList.classList = 'books'
    // const imageHolder = document.createElement("div");
    // imageHolder.classList = 'imageHolder'

    // const authorName = document.createElement("p");
    // const authorTitle = document.createElement("p");
    // const bookLanguage = document.createElement('p')
    // // const bookSubjectList = document.createElement("ul");
    // const bookSubject = document.createElement("li");

    // const favoriteRow = document.createElement("span");
    for (const subjects of element.subject) {
      // this.subject.map((subjects) => {
      const bookSubject = document.createElement("li");
      bookSubject.classList = "bookSubject";
      bookSubject.textContent = subjects;
      bookSubjectList.append(bookSubject);
    }
    favoriteRow.textContent = "\u2764";
    authorName.textContent = element.author;
    authorTitle.textContent = element.title;
    // bookSubject.textContent = element.subject;
    bookLanguage.textContent = element.language;
    authorList.append(
      authorName,
      authorTitle,
      bookSubjectList,
      bookLanguage,
      favoriteRow
    );
    bookList.append(authorList);
  });
});

const darkmodeToggle = document.querySelector("#darkmode-toggle");
darkmodeToggle.onclick = (e) => {
  e.preventDefault();
  const body = document.querySelector("body");
  body.classList.toggle("dark");
  darkmodeToggle.innerHTML = body.classList.contains("dark")
    ? "Lightmode"
    : "Darkmode";
};

// const post = document.getElementById("post");
// post.addEventListener("click", function(){
//     const commentBoxValue= document.getElementById("comment-box").value;
//     const commentListItem = document.createElement("li");
//     const commentListText = document.createTextNode(commentBoxValue);
//     commentListItem.appendChild(commentListText);
//     document.getElementById("unordered").appendChild(commentListItem);
//     clearCommentBox();
//     const post = document.getElementById("post").disabled = true
// });
// const clearCommentBox = () => {
// document.getElementById("comment-box").value = ''
// }