let about = document.querySelector(".header__about"),
    category = document.querySelector(".header__category"),
    burger = document.querySelector(".burger"),
    header = document.querySelector(".header__inner"),
    mobileMenu = document.querySelector(".mobile-menu"),
    auth = document.querySelector(".header__auth");

window.addEventListener("DOMContentLoaded", () => mobileTransform());

let nodesArray = [
  Array.from(auth.childNodes),
  Array.from(about.childNodes), 
  Array.from(category.childNodes)
];

function mobileTransform() {
  if (window.matchMedia("(max-width: 768px)").matches === true) {
    burger.style.display = "block";
    if (nodesArray) {
      nodesArray.map(nodes => {
        for (let node of nodes) {
          mobileMenu.appendChild(node);
        }
      });
    }
  } 
}

burger.addEventListener("click", function() {
  burger.classList.toggle("burger-active");
  if (burger.classList.contains("burger-active")) {
    document.body.style.overflow = "hidden";
    
  } else {
    document.body.style.overflow = "auto";
  }
})