class Book {
  constructor(author, language, subject, title, isFavorite) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
    this.isFavorite,
    this.comment = '';
    this.isCommented = false;
  }

  renderBook(prepend) {
    const bookList = document.querySelector(".booksDiv");

    const authorList = document.createElement("section");
    authorList.classList = "books";

    const imageHolder = document.createElement("img");
    imageHolder.classList = "imageHolder";
    imageHolder.src =
      "./images/2.jpeg";

    const authorName = document.createElement("h3");
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
    commentBox.setAttribute('maxLength', '280')
    commentBox.setAttribute('spellcheck', 'true')

    const commentButton = document.createElement("button");
    commentButton.setAttribute('type','submit')
    commentButton.setAttribute('id','post')
    commentButton.textContent = 'Post'

    const commentUl = document.createElement("ul");
    commentUl.setAttribute("id", "unordered");

    const commentListItem = document.createElement("li");
    commentListItem.setAttribute('id','commentListItem')
  
    commentButton.addEventListener(('click'), (e) => {
      this.comment = commentBox.value
      if (this.comment === '') {
        alert('Please enter a comment')
      } else {
      this.ul = commentUl
      this.li = document.createElement('li')
      this.li.setAttribute('word-wrap','break-word')
      this.li.textContent = this.comment
      commentUl.append(this.li.textContent)
      this.isCommented = true;
      clearCommentBox(e)
      }
    });
    const clearCommentBox = (e) => {
      if (this.isCommented) {
      commentBox.value = '';
      // commentBox.setAttribute('visibility','hidden')
      commentBox.style.visibility = 'hidden'
      commentButton.disabled = true;
      commentButton.style.visibility = 'hidden'
      // commentBox.setAttribute("placeholder", "Comment Posted");
      // commentBox.disabled = true;
      }
      }

    for (const subjects of this.subject) {
      const bookSubject = document.createElement("li");
      bookSubject.classList = "bookSubject";
      bookSubject.textContent = subjects;
      bookSubjectList.append(bookSubject);
    }

    if (this.isFavorite) { 
    favoriteRow.classList = "on";
    authorList.classList.add("on");
  }

  if (this.isCommented) { 
    this.ul = commentUl
    this.li = document.createElement('li')
    this.li.textContent = this.comment
    commentUl.append(this.li.textContent)
    clearCommentBox(this)
  }
    ///-->event listener will add the class of on and add to an array for the count
    favoriteRow.addEventListener("click", (e) => {
      e.preventDefault();
      if (!this.isFavorite) {
        favoriteRow.classList = "on";
        authorList.classList.add("on");
        this.isFavorite = true;
        addToFavoriteArray(this);
        countFavorites();
        return;
      }
      if (this.isFavorite) {
        favoriteRow.classList = "";
        authorList.classList.remove("on");
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
    if (document.querySelector(".favoriteCountAdjust").textContent >= 1) {
      document.querySelector('.favoriteCountAdjust').classList.add('on')
    } else {
      document.querySelector('.favoriteCountAdjust').classList.remove('on')
    }
};