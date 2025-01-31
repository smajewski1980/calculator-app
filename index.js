const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

const displayValue = [];
let operator;
let operandOne = [];
let operandTwo = [];
const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};
let result;

function updateDisplay(toShow) {
  if (toShow) {
    display.innerHTML = parseInt(toShow.join("")).toLocaleString();
  } else if (!toShow) {
    display.innerHTML = "";
  }
}

function handleBtnClick(e) {
  const btnVal = e.target.innerHTML;
  const btnValInt = parseInt(e.target.innerHTML);
  if (isNaN(btnValInt)) {
    switch (btnVal) {
      case "DEL":
        console.log("DEL");
        break;
      case "+":
        operator = "+";
        break;
      case "-":
        operator = "-";
        break;
      case ".":
        console.log(".");
        break;
      case "/":
        operator = "/";
        break;
      case "*":
        operator = "*";
        break;
      case "RESET":
        operator = "";
        operandOne = [];
        operandTwo = [];
        updateDisplay(false);
        console.log("reset");
        break;
      case "=":
        const numOne = parseInt(operandOne.join(""));
        const numTwo = parseInt(operandTwo.join(""));
        console.log("=");
        result = operators[operator](numOne, numTwo);
        display.innerHTML = result;
        console.log(operators[operator](numOne, numTwo));
        break;
      default:
        break;
    }
  } else {
    if (!operator) {
      operandOne.push(btnValInt);
      updateDisplay(operandOne);
      console.log("op1: " + operandOne.join(""));
    } else {
      display.innerHTML = "";
      operandTwo.push(btnValInt);
      updateDisplay(operandTwo);
      console.log("op2: " + operandTwo.join(""));
    }
  }
}
buttons.forEach((button) => {
  button.addEventListener("click", handleBtnClick);
});
