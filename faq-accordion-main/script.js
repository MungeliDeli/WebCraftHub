const toggleButton = document.querySelectorAll(".open-close-buttons");

toggleButton.forEach((toggleButton, index) => {
  toggleButton.addEventListener("click", () => {
    const text = document.querySelectorAll(".text");
   
    const toggleText = text[index];
    if (toggleText) toggleText.classList.toggle("active");

    if (toggleText.classList.contains("active")) {
      toggleButton.src = "assets/images/icon-minus.svg";
    } else {
      toggleButton.src = "assets/images/icon-plus.svg";
    }
  });
});
