// variable 
const menuToggle = document.querySelector("#menu-toggle");
const header = document.querySelector("#header");
const navbar = document.querySelector("#my-nav");
const ulLiA = document.querySelectorAll("#my-nav ul li a");

// aksi
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
})
ulLiA.forEach((el) => {
  el.addEventListener("click", () => {
    setTimeout(closeNavbar, 500)
  });
})
window.addEventListener("scroll", () => {
  closeNavbar();
  if (window.pageYOffset > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// function
function closeNavbar() {
    navbar.classList.remove("active");
}