'use strict';

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
    const textInput = event.currentTarget.value.trim();
    output.textContent = textInput;

    if (textInput === "") {
        output.textContent = "Anonymous";
    }

});
