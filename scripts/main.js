let operandOne, operandTwo, operator;
let displayValue = "";

function operate(firstOperand, operator, secondOperand) {
  if (operator === "+") {
    return add(firstOperand, secondOperand);
  } else if (operator === "-") {
    return subtract(firstOperand, secondOperand);
  } else if (operator === "*") {
    return multiply(firstOperand, secondOperand);
  } else if (operator === "/") {
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

let displayUpdateTriggers = document.querySelectorAll(".number, #comma");

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
