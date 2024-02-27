'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
btn.addEventListener("click", handleClick);

function handleClick(event) {
  const color = getRandomHexColor();
  const nameColor = document.querySelector(".color");
  nameColor.textContent = `${color}`;
  const colorBody = document.querySelector("body");
  colorBody.style = `background-color: ${color}`
}
