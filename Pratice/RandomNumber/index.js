let number = 0;
const randomNumber = document.getElementById("randomLabel");
const rollButton = document.getElementById("rollBtn");

let min = 10;
let max = 16;

rollButton.onclick = function () {
  number = Math.floor(Math.random() * (min - max) + max);

  randomNumber.textContent = number;
};

function Bike(company, year, color) {
  (this.company = company),
    (this.year = year),
    (this.color = color),
    (this.motto = function () {
      console.log(
        `The ${this.company} is the best brand in ${this.year} you must choose ${this.color}`
      );
    });
}

const bikeOne = new Bike("bmw", 1992, "black");
const bikeTwo = new Bike("porsche", 1922, "red");

console.log(bikeOne.color); // black
bikeOne.motto();
bikeTwo.motto();
