let display = document.getElementById("result");
let expression = "";

function onButtonClicked(button) {
  let value = button.innerHTML;
  if (value === "=") {
    evaluate();
  } else {
    expression += value;
    display.innerHTML = expression;
  }
}

function evaluate() {
  try {
    let result = eval(expression);
    display.innerHTML = result;
    expression = result.toString();
  } catch (e) {
    display.innerHTML = "Error";
    expression = "";
  }
}

function clearDisplay() {
  display.innerHTML = "";
  expression = "";
}
