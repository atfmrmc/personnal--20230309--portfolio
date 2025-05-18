const copyBtns = document.querySelectorAll(".contactInfoNoLink");

copyBtns.forEach((copyBtn) => {
  copyBtn.addEventListener("click", () => {
    const textToCopy = copyBtn.querySelector("p").innerText;
    navigator.clipboard.writeText(textToCopy);
    copyBtn.classList.add("copied");
    setTimeout(() => {
      copyBtn.classList.remove("copied");
    }, 1000);
  });
});
