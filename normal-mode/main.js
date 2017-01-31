var button = document.getElementById("calculate-button");

button.addEventListener('click', calculate);

var input1 = document.getElementById("value-one");
var input2 = document.getElementById("value-two");
var answerBox = document.getElementById("answer");

function calculate (event) {
  event.preventDefault();
  var total = Number(input1.value) + Number(input2.value);
  answerBox.innerHTML = total;
}
