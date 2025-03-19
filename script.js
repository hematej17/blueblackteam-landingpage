document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".nav-links");
    const toggleButton = document.createElement("button");

    toggleButton.innerText = "☰";
    toggleButton.classList.add("nav-toggle");

    document.querySelector(".navbar").insertBefore(toggleButton, nav);

    toggleButton.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});
function toggleBio(id) {
    var bio = document.getElementById(id);
    if (bio.style.display === "none") {
        bio.style.display = "block";
    } else {
        bio.style.display = "none";
    }
}
