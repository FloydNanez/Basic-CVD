const burgir = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header .header__nav");
burgir.addEventListener("click", () => {
burgir.classList.toggle("open");
headerNav.classList.toggle("open");
});
