'use strict';

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
    const textInput = event.currentTarget.value.trim();

    if (textInput === "") {
        output.textContent = "Anonymous";
    } else {
        output.textContent = textInput;
    }

});
