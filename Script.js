const burgir = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header .header__nav");
burgir.addEventListener("click", () => {
burgir.classList.toggle("open");
headerNav.classList.toggle("open");
});

const b2Top = document.querySelector(".backtotop");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    b2Top.classList.add("open");
  } else {
    b2Top.classList.remove("open");
  }
});
