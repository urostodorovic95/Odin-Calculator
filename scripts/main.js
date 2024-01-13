let operandOne, operandTwo;
let operatorsArray = [];
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

const operators = document.querySelectorAll(".operator, #equals");
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (e.currentTarget.id !== "equals") {
      // memorize the used operator by storing in an array (in the future perhaps implement history view)
      let operatorSelected = e.currentTarget.id;
      operatorsArray.push(operatorSelected);
    } else {
      // if equals is used, still do the math but memorize the last operator
      operatorsArray.push(operatorsArray.at(-1));
    }
    operatorsArray.length >= 2
      ? (operator = operatorsArray.at(-2))
      : (operator = operatorsArray.at(0));
    if (operandOne) {
      operandTwo = +displayValue;
    } else {
      operandOne = +displayValue;
    }
    displayValue = "";
    // if all conditions are good, do the math
    if (operandOne && operator && operandTwo) {
      // reduce number of decimals
      const result = parseFloat(
        operate(operandOne, operator, operandTwo).toFixed(4)
      );
      document.querySelector(".display").textContent = operandOne = result;
      operandTwo = operator = "";
    }
  });
});
