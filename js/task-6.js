function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userInput = document.querySelector('input');
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const controls = document.querySelector("#controls");


create.addEventListener('click', handleClick);

function handleClick() {
  if (userInput.value > 0 && userInput.value <= 100) {
    createBoxes(userInput.value);
    userInput.value = '';
  } else {
    alert('Amount is not correct')   
  }
};

destroy.addEventListener("click", () => {
  userInput.value = '';    
   boxes.innerHTML = "";   
  });
  
let boxsize
let newDiv 

function createBoxes(amount) {
  boxes.innerHTML = "";
  boxsize = 30;
  for (let i = 1; i <= amount; i += 1) {
    newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML("beforeend", newDiv);
    boxsize += 10;
  }
};