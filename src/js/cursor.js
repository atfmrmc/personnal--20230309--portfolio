const cursorSmallCircle = document.querySelector(".cursorSmallCircleDiv");
const cursorSmallCircleWidth = cursorSmallCircle.offsetWidth;
const cursorSmallCircleHeight = cursorSmallCircle.offsetHeight;
const cursorBigCircle = document.querySelector(".cursorBigCircleDiv");
const cursorBigCircleWidth = cursorBigCircle.offsetWidth;
const cursorBigCircleHeight = cursorBigCircle.offsetHeight;
const hoverTriggerS = document.querySelectorAll("a");

let mousePosition = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (event) => {
  mousePosition.x = event.clientX;
  mousePosition.y = event.clientY;
  updateCircles();
});

function updateCircles() {
  cursorSmallCircle.style.top =
    mousePosition.y - cursorSmallCircleHeight / 2 + "px";
  cursorSmallCircle.style.left =
    mousePosition.x - cursorSmallCircleWidth / 2 + "px";
  cursorBigCircle.style.top =
    mousePosition.y - cursorBigCircleHeight / 2 + "px";
  cursorBigCircle.style.left =
    mousePosition.x - cursorBigCircleWidth / 2 + "px";
}

hoverTriggerS.forEach((hoverTrigger) => {
  hoverTrigger.addEventListener("mouseover", () => {
    cursorSmallCircle.classList.add("cursorSmallCircleDivHover");
    cursorBigCircle.classList.add("cursorBigCircleDivHover");
  });
  hoverTrigger.addEventListener("mouseleave", () => {
    cursorSmallCircle.classList.remove("cursorSmallCircleDivHover");
    cursorBigCircle.classList.remove("cursorBigCircleDivHover");
  });
});
