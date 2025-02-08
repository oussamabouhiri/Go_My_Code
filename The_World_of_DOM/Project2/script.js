document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  function getRandomColor() {
    // Generate random hex color
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
    );
  }

  changeColorBtn.addEventListener("click", () => {
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
  });
});
