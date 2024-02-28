/*
=================================
*/
const addBtn = document.querySelector(".addBtn");
const removeBtn = document.querySelector(".removeBtn");
const colorBox = document.querySelector(".colorBox");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

addBtn.addEventListener("click", function () {
    let listItem = `<li><span class="listItem">${input.value}</span></li>`;
    ul.innerHTML += listItem;
    ul.classList.remove("none")
});
removeBtn.addEventListener("click", function () {
    let listItem = `<li><span class="listItem">${input.value}</span></li>`;
    ul.classList.add("none")
});
