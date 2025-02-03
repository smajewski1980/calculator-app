const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const themeToggle = document.querySelector(".toggle");

let themeTogglePosition = 1;

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

function calculate() {
  const numOne = parseFloat(operandOne.join(""));
  const numTwo = parseFloat(operandTwo.join(""));
  result = operators[operator](numOne, numTwo);
  display.innerHTML = result.toLocaleString();
  operandOne = [result];
  operandTwo = [];
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
        break;
      case "+":
        if (!operator) {
          operator = "+";
          isFloat = false;
        } else if (operandTwo.length) {
          calculate();
          operator = "+";
        }
        break;
      case "-":
        if (!operandOne.length) {
          operandOne.push("-");
        } else if (operandOne.length && !operator) {
          operator = "-";
          isFloat = false;
        } else if (!operandTwo.length) {
          operandTwo.push("-");
        } else if (operandTwo.length) {
          calculate();
          operator = "-";
        }
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
        break;
      case "/":
        if (!operator) {
          operator = "/";
          isFloat = false;
        } else if (operandTwo.length) {
          calculate();
          operator = "/";
        }
        break;
      case "*":
        if (!operator) {
          operator = "*";
          isFloat = false;
        } else if (operandTwo.length) {
          calculate();
          operator = "*";
        }
        break;
      case "RESET":
        operator = "";
        operandOne = [];
        operandTwo = [];
        isFloat = false;
        updateDisplay(false);
        break;
      case "=":
        if (operator) {
          calculate();
          operator = "";
        }
        break;
      default:
        break;
    }
  } else {
    if (!operator) {
      operandOne.push(btnValInt);
      updateDisplay(operandOne);
    } else {
      display.innerHTML = "";
      operandTwo.push(btnValInt);
      updateDisplay(operandTwo);
    }
  }
}

function handleThemeToggle() {
  updatethemeTogglePosition();
  themeTogglePosition === 3 ? (themeTogglePosition = 1) : themeTogglePosition++;
}

function updatethemeTogglePosition() {
  switch (themeTogglePosition) {
    case 1: {
      themeToggle.style.paddingLeft = "1.25rem";
      break;
    }
    case 2: {
      themeToggle.style.paddingLeft = "2.35rem";
      break;
    }
    case 3: {
      themeToggle.style.padding = ".125rem";
      break;
    }
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", handleBtnClick);
});

themeToggle.addEventListener("click", handleThemeToggle);

// when writing a float problem after 4th digit
// still need to test negative stuff
