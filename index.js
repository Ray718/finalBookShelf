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
    
      for (const subjects of element.subject) {
        const bookSubject = document.createElement("li");
        bookSubject.classList = "bookSubject";
        bookSubject.textContent = subjects;
        bookSubjectList.append(bookSubject);
      }
      favoriteRow.textContent = "\u2764";
      authorName.textContent = element.author;
      authorTitle.textContent = element.title;
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