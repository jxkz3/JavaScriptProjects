 let firstCard = 10
  let secondCard = 11
  let sum = firstCard + secondCard 

  let message = ""

function startGame() {
  const messageEl = document.getElementById("message-el")
  const sumEl = document.getElementById("sum-el")
  const cardEl = document.querySelector("#card-el")

 

  sumEl.textContent = "Sum: " + sum
  cardEl.textContent = "Card :" + firstCard + "+ " + secondCard

  if (sum <= 20) {
      message = "You still have a move"
  } else if (sum === 21) {
      message = "You win!"
      hasBlackJack = true
  } else {
      message = "You lose!"
      isAlive = false
  }

  messageEl.textContent = message
  
}

function newCard(){
   console.log("jas")
}