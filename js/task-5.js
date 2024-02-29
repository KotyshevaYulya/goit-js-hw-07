'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorDisplaySpan = document.querySelector(".color");
const pageBody = document.querySelector("body");
changeColorButton.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor(event) {
  const color = getRandomHexColor();
  colorDisplaySpan.textContent = color;
  pageBody.style.backgroundColor = color;
}
