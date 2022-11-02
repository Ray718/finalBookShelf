const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const forgotPassword = document.getElementById("forgot-password")

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "username" && password === "password") {
        // alert("You have successfully logged in.");
        // location.reload();
        window.location.href=("./home.html")
    } else {
        loginErrorMsg.style.opacity = 2;
    }
})

// forgotPassword.addEventListener("click", (e) => {
//     e.preventDefault();
//     alert('username: username / password: password')
// })