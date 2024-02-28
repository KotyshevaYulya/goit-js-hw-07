'use strict';

const listItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(function (element) {
    const title = element.querySelector("h2");
    console.log(`Category: ${title.textContent}`);
    const list = element.querySelectorAll("ul > li");
    console.log(`Elements: ${list.length}`);
 });
