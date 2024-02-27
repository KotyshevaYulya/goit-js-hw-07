'use strict';

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    // console.log(elements);

    const info = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim(),
    };
    console.log(info);
    
    if (info.email === "" || info.password === "") {
        console.log(alert('All form fields must be filled in'));
    }

  event.currentTarget.reset();
}