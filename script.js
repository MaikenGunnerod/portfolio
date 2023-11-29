// Make mobile navigation work

const buttonNavEl = document.querySelector(".button-mobile-nav");
const headerEl = document.querySelector(".header");

buttonNavEl.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});
