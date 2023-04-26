const menuOpen = document.querySelector(".menuBtn");
const menuNav = document.querySelector(".menuNav");

menuOpen.addEventListener("click", () => {
  menuNav.classList.replace("menuNavClosed", "menuNavOpened");
  menuNav.classList.remove("firstClick");
  setTimeout(() => {
    if (menuNav.classList.contains("menuNavOpened")) {
      document.addEventListener(
        "click",
        () => {
          menuNav.classList.replace("menuNavOpened", "menuNavClosed"), 200;
        },
        { once: true }
      );
    }
  });
});
