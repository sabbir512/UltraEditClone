let menu = document.querySelector(".lists");
let menuBtn = document.querySelector(".lists button");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("opened");
});
