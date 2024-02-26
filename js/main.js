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
    colorBox.style.background = finalColor;
    cbtn.addEventListener("click", function () {
        navigator.clipboard.writeText(finalColor);
        cbtn.innerHTML = "Copied";
    });
    cbtn.innerHTML = "Copy Color";
});

function generateColor() {
    const red = Math.round(Math.random() * 250);
    const blue = Math.round(Math.random() * 250);
    const green = Math.round(Math.random() * 250);
    const rgb = `rgb(${red},${blue},${green})  `;
    console.log(rgb);
    return rgb;
}
