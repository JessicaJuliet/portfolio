// Index js

const hamburgerIcon = document.getElementById("hamburger-icon");
var navMenu = document.getElementById("nav");

// Toggle nav menu
hamburgerIcon.addEventListener("click", function() {
  navMenu.classList.toggle("active");
})