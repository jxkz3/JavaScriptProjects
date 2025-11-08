let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let player = {
  name: "Player",
  chips: 20,
};

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  hasBlackJack = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    messageEl.style.color = "white";
  } else if (sum === 21) {
    message = "You've got Blackjack! You did win $ 10";
    hasBlackJack = true;
    player.chips += 10;
    messageEl.style.color = "blue";
  } else {
    message = "You're out of the game! you did lose $ 3";
    isAlive = false;
    player.chips -= 3;
    messageEl.style.color = "red";
  }
  messageEl.textContent = message;
  playerEl.textContent = player.name + " : $" + player.chips;
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();

    sum += card;
    cards.push(card);
    renderGame();
  }
}
