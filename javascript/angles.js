const angle1 = document.getElementById("angle-1");
const angle2 = document.getElementById("angle-2");
const angle3 = document.getElementById("angle-3");
const output = document.querySelector(".output");
const checkBtn = document.getElementById("check-angles");

checkBtn.addEventListener("click", function () {
  let sum = Number(angle1.value) + Number(angle2.value) + Number(angle3.value);

  console.log(sum);

  if (angle1.value <= 0 || angle2.value <= 0 || angle3.value <= 0) {
    alert("Angles can not be negative or zero.");
  } else {
    if (sum > 180) {
      output.innerText = "Sum of angles is more than 180°";
    } else if (sum < 180) {
      output.innerText = "Sum of angles is less than 180°";
    } else if (sum === 180) {
      output.innerText = " Yes! they are  angles of a Triangle";
    }
  }
});
