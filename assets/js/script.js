// Index js

const hamburgerIcon = document.getElementById("hamburger-icon");
var navMenu = document.querySelector("#nav div.overlay");
var navItems = document.querySelector("nav .content");
var navItem = document.querySelectorAll(".nav-item");


// Toggle nav menu
hamburgerIcon.addEventListener("click", function() {
  navMenu.classList.toggle("active");
  navItems.classList.toggle("active");
})

// Close nav menu on link click
for (let i = 0; i < navItem.length; i++){
  // console.log(i);
  navItem[i].addEventListener("click", function() {
    navMenu.classList.toggle("active"); 
  })
}