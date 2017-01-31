var left = "";
var right = "";
var op = "";

var display = document.getElementById("display");

var clearButton = document.getElementById("clear");
var sevenButton = document.getElementById("seven");
var eightButton = document.getElementById("eight");
var nineButton = document.getElementById("nine");
var divButton = document.getElementById("div");
var fourButton = document.getElementById("four");
var fiveButton = document.getElementById("five");
var sixButton = document.getElementById("six");
var mulButton = document.getElementById("mul");
var oneButton = document.getElementById("one");
var twoButton = document.getElementById("two");
var threeButton = document.getElementById("three");
var subButton = document.getElementById("sub");
var zeroButton = document.getElementById("zero");
var dotButton = document.getElementById("dot");
var equalsButton = document.getElementById("equals");
var addButton = document.getElementById("add");


// clearButton.addEventListener('click', processClear);
sevenButton.addEventListener('click', processSeven);
// eightButton.addEventListener('click', processEight);
// nineButton.addEventListener('click', processNine);
// divButton.addEventListener('click', processDiv);
// fourButton.addEventListener('click', processFour);
// fiveButton.addEventListener('click', processFive);
// sixButton.addEventListener('click', processSix);
// mulButton.addEventListener('click', processMul);
// oneButton.addEventListener('click', processOne);
// twoButton.addEventListener('click', processTwo);
// threeButton.addEventListener('click', processThree);
// subButton.addEventListener('click', processSub);
// zeroButton.addEventListener('click', processZero);
// dotButton.addEventListener('click', processDot);
equalsButton.addEventListener('click', processEquals);
addButton.addEventListener('click', processAdd);

function updateDisplay () {
  display.innerHTML = left + " " + op + " " + right;
}

function processEquals (event) {
  var answer;
  if (op === "+") {
    answer = Number(left) + Number(right);
  } else if (op === "-") {
    answer = Number(left) - Number(right);
  } else if (op === "*") {
    answer = Number(left) * Number(right);
  } else if (op === "/") {
    answer = Number(left) / Number(right);
  }
  left = answer;
  right = "";
  op = "";
  updateDisplay();
}


function processAdd (event) {
  if (op === "") {
    op = "+";
  } else {
    processEquals();
    op = "+";
  }
  updateDisplay();
}

function processSeven (event) {
  if (op === "") {
    left += 7;
  } else {
    right += 7;
  }
  updateDisplay();
}
