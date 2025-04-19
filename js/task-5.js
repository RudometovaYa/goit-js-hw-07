function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elemColor = document.querySelector(".change-color");

elemColor.addEventListener("click", handelColorCgange);
const colorSpan = document.querySelector(".color");

function handelColorCgange(e) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
}
