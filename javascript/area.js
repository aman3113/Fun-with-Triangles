const height = document.getElementById("height");
const base = document.getElementById("base");
const checkBtn = document.getElementById("check-area");
var output = document.querySelector(".output");

checkBtn.addEventListener("click", checkArea());

function checkArea() {
  if (height.value > 0 && base.value > 0) {
    let area = (1 / 2) * height.value * base.value;
    output.innerText = area;
  } else {
    alter("Length should be a positive number.");
  }
}
