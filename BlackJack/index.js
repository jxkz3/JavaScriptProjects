let firstCard = 7;
let secondCard = 10;
let sum = firstCard + secondCard;
let cards = [firstCard, secondCard];

let message = "";

function startGame() {
  renderGame();
}

function renderGame() {
  const messageEl = document.getElementById("message-el");
  const sumEl = document.getElementById("sum-el");
  const cardEl = document.querySelector("#card-el");

  cardEl.textContent = "Card :";

  sumEl.textContent = "Sum: " + sum;

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "You still have a move";
  } else if (sum === 21) {
    message = "You win!";
    hasBlackJack = true;
  } else {
    message = "You lose!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  let card = 4;

  cards.push(card);
  sum = sum + card;
  console.log(cards);
  renderGame();
}
