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
      bookShelf1.addBook(addedBook);
      addedBook.renderBook(true);
      clearInput();
    }
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