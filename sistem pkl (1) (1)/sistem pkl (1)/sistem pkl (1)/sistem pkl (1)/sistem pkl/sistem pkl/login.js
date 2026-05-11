const form = document.getElementById("formLogin");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    localStorage.setItem("login", "true");

    window.location.href = "index.html";
});