function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elementsInput = document.querySelector('input');
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const controls = document.querySelector("#controls");


create.addEventListener('click', handleClick);

function handleClick() {
  if (elementsInput.value > 0 && elementsInput.value <= 100) {
    createBoxes(elementsInput.value);
    elementsInput.value = '';
  } else {
    alert('Amount is not correct')   
  }
};

destroy.addEventListener("click", () => {
  elementsInput.value = '';    
   boxes.innerHTML = "";   
  });
  
function createBoxes(amount) {
  boxes.innerHTML = "";
  let boxSize = 30;
    for (let i = 1; i <= amount; i += 1) {
     const newDiv = `<div style="width: ${boxSize}px; height: ${boxSize}px; background: ${getRandomHexColor()}"></div>`;
      boxes.insertAdjacentHTML("beforeend", newDiv);
      boxSize += 10;
  }
};