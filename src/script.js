const hamburger = document.getElementById("hamburger");
const hamburgerList = document.getElementById("hamburgerList");

hamburger.addEventListener("click", () => {
  console.log(hamburgerList);
  hamburgerList.classList.toggle("hidden");
});

document.getElementById("open-modal").addEventListener("click", function () {
  document.getElementById("modal").classList.remove("hidden");
});

document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("modal").classList.add("hidden");
});

document.addEventListener("click", function (event) {
  const modal = document.getElementById("modal");
  if (!modal.contains(event.target) && !document.getElementById("open-modal").contains(event.target)) {
    modal.classList.add("hidden");
  }
});

let navToggle = document.querySelector(".nav-toggle");
let bars = document.querySelectorAll(".bar");

function toggleHamburger(e) {
  bars.forEach((bar) => bar.classList.toggle("x"));
}

navToggle.addEventListener("click", toggleHamburger);
