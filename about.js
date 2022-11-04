const darkmodeToggle = document.querySelector("#darkmode-toggle");
darkmodeToggle.onclick = (e) => {
  e.preventDefault();
  const body = document.querySelector("body");
  body.classList.toggle("dark");
  darkmodeToggle.innerHTML = body.classList.contains("dark")
    ? "Lightmode"
    : "Darkmode";
};