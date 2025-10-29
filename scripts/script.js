// Buttonin klikkaus
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("clickButton");
  const message = document.getElementById("message");

  // Haetaan CSS-muuttuja (design token) :root-elementistä
  const rootStyles = getComputedStyle(document.documentElement);
  const primaryColor = rootStyles.getPropertyValue('--color-primary').trim();

  let isVisible = false;

  button.addEventListener("click", function () {
    if (isVisible) {
      message.textContent = "";
    } else {
      message.textContent = "Painiketta klikattiin! 🎉";
      message.style.color = primaryColor;
    }
    isVisible = !isVisible; // Vaihda tila
  });
});