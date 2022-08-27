const inputs = document.querySelectorAll(".questions .question");
// const input = document.querySelector(".quiz-form");
const quizBtn = document.getElementById("quiz-btn");
const output = document.getElementById("output");
const ansArray = [
  "A geometric figure",
  "Polygon",
  "3",
  "Equilateral",
  "Geometry",
  "2",
  "Scalene",
  "3",
  "Isosceles",
  "Hypotenuse",
];

// console.log(inputs);
// console.log(input);

quizBtn.addEventListener("click", calculateScore);

function calculateAnsCount() {
  var ansCount = 0;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      ansCount++;
    }
  }
  return ansCount;
}
function calculation() {
  var score = 0;
  var index = 0;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      if (inputs[i].value === ansArray[index]) {
        score++;
      }
      index++;
    }
  }
  console.log(score);
  output.innerText = score;

  //   output.innerHTML =
  //     "<p> Your total score: " +
  //     score +
  //     "<br> No of Correct Answers: " +
  //     score +
  //     "<br>No of Incorrect Answers: " +
  //     (10 - score) +
  //     "</p>";
}

function calculateScore() {
  var ansCount = calculateAnsCount();
  if (ansCount) {
    calculation();
  } else {
    alert("please ans all the questions");
  }
}
