/*
=================================
*/
const gbtn = document.querySelector(".Gbtn");
const cbtn = document.querySelector(".Cbtn");
const colorBox = document.querySelector(".colorBox");
const colorCode = document.querySelector("input");

gbtn.addEventListener("click", function () {
    const finalColor = generateColor();
    colorCode.value = finalColor;
});

function generateColor() {
    const red = Math.round(Math.random() * 250);
    const blue = Math.round(Math.random() * 250);
    const green = Math.round(Math.random() * 250);
    const rgb = `rgb(${red},${blue},${green})  `;
    console.log(rgb);
    return rgb;
}
