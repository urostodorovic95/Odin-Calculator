let operandOne, operandTwo, operator;
let displayValue = "";

function operate(firstOperand, operator, secondOperand) {
  if (operator === "plus") {
    return add(firstOperand, secondOperand);
  } else if (operator === "minus") {
    return subtract(firstOperand, secondOperand);
  } else if (operator === "times") {
    return multiply(firstOperand, secondOperand);
  } else if (operator === "divide") {
    return divide(firstOperand, secondOperand);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const displayUpdateTriggers = document.querySelectorAll(".number, #comma");

displayUpdateTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    updateDisplay(e);
  });
});

function updateDisplay(e) {
  displayValue.includes(".") && e.target.textContent === "."
    ? {}
    : (displayValue = displayValue + "" + e.target.textContent);
  document.querySelector(".display").textContent = displayValue;
}

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    operator = e.currentTarget.id;
    if (operandOne) {
      operandTwo = +displayValue;
    } else {
      operandOne = +displayValue;
    }
    displayValue = "";
    if (operandOne && operator && operandTwo) {
      console.log(operandOne, operator, operandTwo);
      const result = operate(operandOne, operator, operandTwo);
      console.log(result);
      document.querySelector(".display").textContent = result;
      operandTwo = operator = "";
      operandOne = result;
    }
  });
});
