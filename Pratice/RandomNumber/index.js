let number = 0;
const randomNumber = document.getElementById("randomLabel");
const rollButton = document.getElementById("rollBtn");

let min = 10;
let max = 16;

rollButton.onclick = function () {
  number = Math.floor(Math.random() * (min - max) + max);

  randomNumber.textContent = number;
};

const lotteryNumber = [12321, 4234, 4564, 56, 786, 3123, 546, 123, 6767, 12312];

const smallestNumber = lotteryNumber.reduce(minNumber, Infinity);
console.log(smallestNumber);

const biggestNumber = lotteryNumber.reduce(maxNumber, -Infinity);
console.log(biggestNumber);

const sumLottery = lotteryNumber.reduce(sum, 0);
console.log(sumLottery);

function minNumber(accumulator, nextElement) {
  return Math.min(accumulator, nextElement);
}

function maxNumber(a, n) {
  return Math.max(a, n);
}

function sum(prev, nex) {
  return prev + nex;
}
