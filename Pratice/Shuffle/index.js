const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

shuffle(cards);

function shuffle(array) {
  for (i = array.length - 1; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomNumber]] = [array[randomNumber], array[i]];
  }
}

console.log(cards);
