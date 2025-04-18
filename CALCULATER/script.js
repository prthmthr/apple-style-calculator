let current = '';
let operator = '';
let previous = '';

const display = document.getElementById('display');

function append(value) {
  if (value === '.' && current.includes('.')) return;
  current += value;
  updateDisplay();
}

function clearDisplay() {
  current = '';
  previous = '';
  operator = '';
  updateDisplay('0');
}

function updateDisplay(value) {
  display.innerText = value || current || '0';
}

function setOperator(op) {
  if (current === '') return;
  if (previous !== '') calculate();
  operator = op;
  previous = current;
  current = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = prev / curr;
      break;
    default:
      return;
  }

  current = result.toString();
  operator = '';
  previous = '';
  updateDisplay();
}

function toggleSign() {
  if (current) {
    current = (parseFloat(current) * -1).toString();
    updateDisplay();
  }
}