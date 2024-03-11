function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const button = document.querySelector(".btn-green");
button.addEventListener("click", function(e) {
    e.preventDefault();
    curName = document.getElementById("name").value;
    curLastName = document.getElementById("last-name").value;
    curEmail = document.getElementById("email").value;
    curPassword = document.getElementById("password").value;
    if (!curName) {
        document.getElementsByClassName("hidden-warning")[0].style.visibility = "visible";
        document.getElementById("name").style.borderColor = "var(--red)";
        document.getElementById("name").classList.remove("transparent");
        document.getElementById("name").placeholder = "";
    } else {
        document.getElementsByClassName("hidden-warning")[0].style.visibility = "hidden";
        document.getElementById("name").style.borderColor = "var(--gray-blue)";
        document.getElementById("name").classList.add("transparent");
    }
    if (!curLastName) {
        document.getElementsByClassName("hidden-warning")[1].style.visibility = "visible";
        document.getElementById("last-name").style.borderColor = "var(--red)";
        document.getElementById("last-name").classList.remove("transparent");
        document.getElementById("last-name").placeholder = "";
    } else {
        document.getElementsByClassName("hidden-warning")[1].style.visibility = "hidden";
        document.getElementById("last-name").style.borderColor = "var(--gray-blue)";
        document.getElementById("last-name").classList.add("transparent");
    }
    if (!validateEmail(curEmail)) {
        document.getElementsByClassName("hidden-warning")[2].style.visibility = "visible";
        document.getElementById("email").style.borderColor = "var(--red)";
        document.getElementById("email").classList.remove("transparent");
        document.getElementById("email").style.color = "var(--red)";
        document.getElementById("email").placeholder = "";
    } else {
        document.getElementsByClassName("hidden-warning")[2].style.visibility = "hidden";
        document.getElementById("email").style.borderColor = "var(--gray-blue)";
        document.getElementById("email").classList.add("transparent");
        document.getElementById("email").style.color = "var(--dark-blue)";
    }
    if (!curPassword) {
        document.getElementsByClassName("hidden-warning")[3].style.visibility = "visible";
        document.getElementById("password").style.borderColor = "var(--red)";
        document.getElementById("password").classList.remove("transparent");
        document.getElementById("password").placeholder = "";
    } else {
        document.getElementsByClassName("hidden-warning")[3].style.visibility = "hidden";
        document.getElementById("password").style.borderColor = "var(--gray-blue)";
        document.getElementById("password").classList.add("transparent");
    }
});

//# sourceMappingURL=index.672d4772.js.map
