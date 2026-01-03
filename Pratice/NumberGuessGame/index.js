const minNum = 10;
const maxNum = 20;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attemptsLeft = 10;

const attemptMessage = document.getElementById("attempts");
const submitButton = document.getElementById("submitBtn");
const message = document.getElementById("message");

attemptMessage.textContent = `You have ${attemptsLeft} attempts left`;

submitButton.onclick = function () {
  if (attemptsLeft === 0) {
    message.textContent = "Game over. Reload to try again.";
    submitButton.disabled = true;
    return;
  }

  const guess = Number(document.getElementById("textInput").value);

  if (Number.isNaN(guess)) {
    message.textContent = "Please enter a valid number";
    return;
  }

  attemptsLeft--;

  if (guess > answer) {
    message.textContent = "Answer is lower than your guess";
  } else if (guess < answer) {
    message.textContent = "Answer is higher than your guess";
  } else {
    message.textContent = "You guessed right. Congrats!";
    submitButton.disabled = true;
  }

  attemptMessage.textContent = `You have ${attemptsLeft} attempts left`;
};
