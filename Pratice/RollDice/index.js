function rollDice() {
  const numberOfDIce = document.getElementById("inputNumber").value;
  const diceResult = document.getElementById("diceResult");
  const diceImage = document.getElementById("diceImages");
  let images = [];
  let numbers = [];

  for (let i = 0; i < numberOfDIce; i++) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    numbers.push(randomNumber);
    images.push(`<img src="./dice/${randomNumber}.png" alt="dice">
`);
  }

  diceResult.textContent = numbers.join(", ");
  diceImage.innerHTML = images.join("");
}
