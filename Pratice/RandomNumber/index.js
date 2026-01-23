let number = 0;
const randomNumber = document.getElementById("randomLabel");
const rollButton = document.getElementById("rollBtn");

let min = 10;
let max = 16;

rollButton.onclick = function () {
  number = Math.floor(Math.random() * (min - max) + max);

  randomNumber.textContent = number;
};

const peoples = [
  { name: "sponge bob", age: 12, gpa: 4 },
  { name: "patricK", age: 3, gpa: 2 },
  { name: "sandy", age: 45, gpa: 1 },
  { name: "rocky", age: 10, gpa: 5 },
];

peoples.sort((a, b) => a.age - b.age);
console.log(peoples);
// {name: 'patricK', age: 3, gpa: 2}
// {name: 'rocky', age: 10, gpa: 5}
// {name: 'sponge bob', age: 12, gpa: 4}
// {name: 'sandy', age: 45, gpa: 1}

peoples.sort((a, b) => b.age - a.age);

console.log(peoples);
// {name: 'sandy', age: 45, gpa: 1}
// {name: 'sponge bob', age: 12, gpa: 4}
// {name: 'rocky', age: 10, gpa: 5}
// {name: 'patricK', age: 3, gpa: 2}
peoples.sort((a, b) => a.name.localeCompare(b.name));

console.log(peoples);

// {name: 'patricK', age: 3, gpa: 2}
// {name: 'rocky', age: 10, gpa: 5}
// {name: 'sandy', age: 45, gpa: 1}
// {name: 'sponge bob', age: 12, gpa: 4}
