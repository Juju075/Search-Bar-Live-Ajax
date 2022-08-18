const inputBox = document.querySelector(".input-box"),
  search = document.querySelector(".search"),
  closeIcon = document.querySelector(".close-icon");

console.log(inputBox, search, closeIcon);

// Click sur le search pour maximiser l'input. + .open
search.addEventListener("click", (ev) => {
  inputBox.classList.add("open");
});

// Click sur le X pour minimiser l'input. - .open
closeIcon.addEventListener("click", (ev) => {
  inputBox.classList.remove("open");
});
