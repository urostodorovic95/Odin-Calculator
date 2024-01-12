let operandOne, operandTwo, operator;
let displayValue;

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

function populateDisplay() {
  
}