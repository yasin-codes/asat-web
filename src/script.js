const hamburger = document.getElementById("hamburger");
const hamburgerList = document.getElementById("hamburgerList");

hamburger.addEventListener("click", () => {
  console.log(hamburgerList);
  hamburgerList.classList.toggle("hidden");
});
