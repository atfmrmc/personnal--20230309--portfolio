const menuOpen = document.querySelector(".menuBtn");
const menuNav = document.querySelector(".menuNav");

menuOpen.addEventListener("click", () => {
  menuNav.classList.toggle("menuNavOpened");
  menuNav.classList.toggle("menuNavClosed");
});
