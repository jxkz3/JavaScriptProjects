let number = 0;
const randomNumber = document.getElementById("randomLabel");
const rollButton = document.getElementById("rollBtn");

let min = 10;
let max = 16;

rollButton.onclick = function () {
  number = Math.floor(Math.random() * (min - max) + max);

  randomNumber.textContent = number;
};
