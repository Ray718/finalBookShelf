class Book {
  constructor(author, language, subject, title, isFavorite) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
    this.isFavorite = false;
  }

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

    const favoriteRow = document.createElement("span");

    authorName.textContent = this.author;
    authorTitle.textContent = this.title;
    bookLanguage.textContent = this.language;
    favoriteRow.textContent = "\u2764";
   ///-->creating data with a heart in it, that will be red with the class of on
    const commentBox = document.createElement("input");
    commentBox.setAttribute("type", "text");
    commentBox.setAttribute("placeholder", "Enter Comment");
    commentBox.setAttribute("id", "comment-box");

    const commentButton = document.createElement("button");
    // commentButton.setAttribute('type','submit')
    // commentButton.id = 'post'
    const commentUl = document.createElement("ul");
    commentUl.setAttribute("id", "unordered");

    for (const subjects of this.subject) {
      // this.subject.map((subjects) => {
      const bookSubject = document.createElement("li");
      bookSubject.classList = "bookSubject";
      bookSubject.textContent = subjects;
      bookSubjectList.append(bookSubject);
    }
    ///-->event listener will add the class of on and add to an array for the count
    favoriteRow.addEventListener("click", (e) => {
      // console.log(e);
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
        commentUl
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
        commentUl
      );
      bookList.append(authorList);
    }
  }
}
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
    // showOnlyFavorites();
    alert("test checked")
  } else {
    alert("test unchecked")
    // location.reload()
  }
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
