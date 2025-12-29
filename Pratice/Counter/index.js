let count = 0;

const increaseButton = document.getElementById("increaseBtn");
const decreaseButton = document.getElementById("decreaseBtn");
const resetButton = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

increaseButton.onclick = function () {
  count++;
  countLabel.textContent = count;
};

decreaseButton.onclick = function () {
  count--;
  countLabel.textContent = count;
};

resetButton.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
