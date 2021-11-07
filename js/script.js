let searchForm = document.querySelector(".search-form");
let loginForm = document.querySelector(".login-form");
let shoppingCart = document.querySelector(".shopping-cart");
let navbar = document.querySelector(".navbar");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
};

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

let slides = document.querySelectorAll(".home .slides-container .slide");
let index = 0;
console.log(slides);

const nextSlide = document.querySelector("#next-slide");
const prevSlide = document.querySelector("#prev-slide");

nextSlide.addEventListener("click", () => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
});
prevSlide.addEventListener("click", () => {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
});

// function next() {
//   slide[index].classList.remove("active");
//   index = (index + 1) % slide.length;
//   slide[index].classList.add("active");
// }

// function prev() {
//   slide[index].classList.remove("active");
//   index = (index - 1 + slide.length) % slide.length;
//   slide[index].classList.add("active");
// }
