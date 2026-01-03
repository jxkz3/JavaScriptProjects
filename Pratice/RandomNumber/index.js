let number = 0;
const randomNumber = document.getElementById("randomLabel");
const rollButton = document.getElementById("rollBtn");

let min = 10;
let max = 16;

rollButton.onclick = function () {
  number = Math.floor(Math.random() * (min - max) + max);

  randomNumber.textContent = number;
};

// no method chainning

let userName = window.prompt("enter your username");
userName = userName.replaceAll(" ", "");

userName =
  userName.charAt(0).toUpperCase() + userName.slice(1).toLocaleLowerCase();

console.log(userName);
