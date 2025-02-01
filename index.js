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
let isFloat;

function updateDisplay(toShow) {
  if (toShow) {
    display.innerHTML = parseFloat(toShow.join("")).toLocaleString();
  } else if (!toShow) {
    display.innerHTML = "";
  }
}

function handleBtnClick(e) {
  const btnVal = e.target.innerHTML;
  const btnValInt = parseFloat(e.target.innerHTML);
  if (isNaN(btnValInt)) {
    switch (btnVal) {
      case "DEL":
        if (!operator) {
          operandOne.pop();
          if (operandOne.length) {
            updateDisplay(operandOne);
          } else {
            display.innerHTML = "";
          }
        } else {
          operandTwo.pop();
          if (operandTwo.length) {
            updateDisplay(operandTwo);
          } else {
            display.innerHTML = "";
          }
        }
        console.log("DEL");
        break;
      case "+":
        operator = "+";
        isFloat = false;
        break;
      case "-":
        operator = "-";
        isFloat = false;
        break;
      case ".":
        if (!isFloat) {
          if (!operator) {
            operandOne.push(".");
            isFloat = true;
            if (operandOne.length > 1) {
              updateDisplay(operandOne);
            }
          } else {
            operandTwo.push(".");
            isFloat = true;
            if (operandTwo.length > 1) {
              updateDisplay(operandTwo);
            }
          }
        }
        // console.log(".");
        break;
      case "/":
        operator = "/";
        isFloat = false;
        break;
      case "*":
        operator = "*";
        isFloat = false;
        break;
      case "RESET":
        operator = "";
        operandOne = [];
        operandTwo = [];
        isFloat = false;
        updateDisplay(false);
        console.log("reset");
        break;
      case "=":
        const numOne = parseFloat(operandOne.join(""));
        const numTwo = parseFloat(operandTwo.join(""));
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
