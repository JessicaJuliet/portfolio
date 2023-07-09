// Index js



const screenWidth = screen.width;
const nav = document.getElementById("nav");
const hamburgerIcon = document.getElementById("hamburger-icon");
const navOverlay = document.querySelector(".nav-overlay");
var navItems = document.querySelectorAll(".nav-item");


hamburgerIcon.addEventListener("click", function() {
  nav.classList.toggle("active")
  navOverlay.classList.toggle("active");
})

// Close nav menu on link click
for (let i = 0; i < navItems.length; i++){
  navItems[i].addEventListener("click", function() {
    nav.classList.remove("active")
    navOverlay.classList.remove("active");
  })
}