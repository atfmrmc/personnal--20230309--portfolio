const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("onScreen");
    } else {
      entry.target.classList.remove("onScreen");
    }
  });
});

const scrollAnimatedElements = document.querySelectorAll(".scrollAnimated");
scrollAnimatedElements.forEach((el) => observer.observe(el));
