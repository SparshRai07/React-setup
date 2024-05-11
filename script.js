const searchBarContainerEl = document.querySelector(".search-bar-container");
const inputEl = document.querySelector(".input");
const magnifierEl = document.querySelector(".magnifier");
const micIconEl = document.querySelector(".mic-icon");

// Toggle the 'active' class on all elements when the magnifier icon is clicked
magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
  inputEl.classList.toggle("active");
  micIconEl.classList.toggle("active");
});
