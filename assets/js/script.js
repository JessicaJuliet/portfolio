
/* function activeNavItem() {
    var navItem = document.querySelectorAll(".nav-item");
    for (let i = 0; i < navItem.length; i++) {
        navItem[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
    }
}
activeNavItem(); */


var overlay = document.getElementById("overlay");
console.log(overlay);

// overlay.onmouseover = function() {
//   console.log("Mouse over!");
//   this.style.display= "block";
// }

// Project work overlay
function overlayOn() {
  overlay.style.display= "block";
}

function overlayOff() {
  overlay.style.display= "none";
}