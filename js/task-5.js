'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const nameColor = document.querySelector(".color");
const colorBody = document.querySelector("body");
btn.addEventListener("click", handleClick);

function handleClick(event) {
  const color = getRandomHexColor();
  nameColor.textContent = color;
  colorBody.style.backgroundColor = color;
}
