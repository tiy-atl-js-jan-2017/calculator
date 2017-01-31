var left = "";
var right = "";
var op = "";

var display = document.getElementById("display");
var controls = document.getElementById("content");

controls.addEventListener('click', processClick);

function processClick (event) {
  var target = event.target;
  console.log(event);
  console.log(target);
  var buttonType = target.dataset.type;
  console.log(target.dataset);

  if (buttonType === "op") { processOp(target); }
  if (buttonType === "num") { processNum(target); }
  if (buttonType === "clear") { processClear(target); }
  if (buttonType === "equals") { processEquals(target); }

  updateDisplay();
}

function updateDisplay () {
  display.innerHTML = left + " " + op + " " + right;
}

function processOp (target) {
  if (op === "") {
    op = target.innerHTML;
  } else {
    doMath();
    op = target.innerHTML;
  }
}

function processNum (target) {
  if (op === "") {
    left += target.innerHTML;
  } else {
    right += target.innerHTML;
  }
}

function processClear (target) {
  left = "";
  right = "";
  op = "";
}

function processEquals (target) {
  doMath();
}

function doMath () {
  if (op === "+") {
    left = Number(left) + Number(right);
  } else if (op === "-") {
    left = Number(left) - Number(right);
  } else if (op === "X") {
    left = Number(left) * Number(right);
  } else if (op === "/") {
    left = Number(left) / Number(right);
  }
  right = "";
  op = "";
}
