const inputEl = document.getElementById("inputNumber");
const celToFar = document.getElementById("toF");
const farToCel = document.getElementById("toC");
const resultMessage = document.getElementById("result");

function convert() {
  const degree = Number(inputEl.value);

  if (Number.isNaN(degree)) {
    console.log("Please enter a valid number");
    return;
  }

  let result;
  if (celToFar.checked) {
    result = (9 / 5) * degree + 32;
    resultMessage.textContent = `${degree}° Celsius is ${result.toFixed(
      2
    )}° Fahrenheit`;
  } else if (farToCel.checked) {
    result = ((degree - 32) * 5) / 9;
    resultMessage.textContent = `${degree}° Fahrenheit is ${result.toFixed(
      2
    )}° Celsius`;
  } else {
    resultMessage.textContent = "Select a conversion type";
  }

  console.log(result);
}
