// variable 
const menuToggle = document.querySelector("#menu-toggle");

const kategori = document.querySelector("#kategori");
const ulLiA = document.querySelectorAll("#kategori ul li a");

// aksi
menuToggle.addEventListener("click", () => {
    kategori.classList.toggle("active");
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
    kategori.classList.remove("active");
}