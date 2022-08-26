const height = document.getElementById("height");
const base = document.getElementById("base");
const checkBtn = document.getElementById("check-area");
var output = document.querySelector(".output");

checkBtn.addEventListener("click", checkHypotenuse);

function checkHypotenuse() {
  if (height.value > 0 && base.value > 0) {
    let a = Number(height.value);
    let b = Number(base.value);
    const hypotenuse = (a ** 2 + b ** 2) ** (1 / 2);
    output.innerText = `length of Hypotenuse is: ${hypotenuse}`;
  } else {
    alert("length is always a positive value");
  }
}
