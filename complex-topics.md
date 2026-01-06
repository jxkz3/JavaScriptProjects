# Advance Topics

### Callbacks

A callback is a function passed as an argument to another function, to be executed later or after a specific task is completed.

used to handle asycnronis functions operation

1. reading file
2. network request
3. Intracting with database

```js
iamCalling(hai); // who am i? i am you
iamCalling(hello); // who am i? i am me

function iamCalling(fun) {
  console.log("who am i ?");
  fun();
}

function hello() {
  console.log("I am me");
}
function hai() {
  console.log("I am you");
}
```

```js
sum(display, 1, 4);

function sum(callback, x, y) {
  const total = x + y;
  callback(total);
}

function display(total) {
  console.log(total);
}
```

## Array Methods

```js

.map()
.forEach()
.filter()
.reduce()

```

### ForEach Methods

forEach is an array Method that excutes a function once for each elemenet in array . you dont control the loop, The array does

```js
let fruits = ["apple", "oranage", "kiwi", "mango", "lemon"];

fruits.forEach(capitalFruit);
fruits.forEach(twoFruit);
fruits.forEach(display);

function display(fruit) {
  console.log(fruit);
}

function twoFruit(fruit, index, array) {
  array[index] = fruit + " " + fruit;
}

function capitalFruit(fruit, index, array) {
  array[index] = fruit.toUpperCase();
}
```

### Map Method

The map() method create a newarray by calling a function on everyelement in a exisiting array and create new elemnets of array by using returned value
very similar to for each array but its create new array
it doesnt modify orginal array

```js
const fruits = ["apple", "oranage", "kiwi", "mango", "lemon"];

const fruitCapital = fruits.map(capitalFruits);
console.log(fruitCapital);

function capitalFruits(items) {
  return items.toUpperCase();
}

// Date Formatiing

const dates = ["31-02-2022", "17-06-2002", "19-12-2024", "27-03-2022"];

const formatedDates = dates.map(dateFormat);
console.log(formatedDates);
function dateFormat(date) {
  const parts = date.split("-");
  return `Year ${parts[2]} Month ${parts[1]} Date ${parts[0]}`;
}
```

### Filter Method

The `filter()` methoid create a new array of elements by filtering out elements

```js
const randomNum = [
  11, 33, 44, 566, 77, 233, 234, 234, 56, 1324, 6645, 1233, 12, 45, 99,
];

const evenNum = randomNum.filter(isEven);
console.log(evenNum);
const oddNum = randomNum.filter(isOdd);
console.log(oddNum);

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(elements) {
  return elements % 2 !== 0;
}
```

### Reduce Method

The `reduce()` method reduce the elements in array to single value

normal reduce had 2 arguments compare to others

```js
const lotteryNumber = [12321, 4234, 4564, 56, 786, 3123, 546, 123, 6767, 12312];

const smallestNumber = lotteryNumber.reduce(minNumber, Infinity);
console.log(smallestNumber); //56

const biggestNumber = lotteryNumber.reduce(maxNumber, -Infinity);
console.log(biggestNumber); //12321

const sumLottery = lotteryNumber.reduce(sum, 0);
console.log(sumLottery); //44832

function minNumber(accumulator, nextElement) {
  return Math.min(accumulator, nextElement);
}

function maxNumber(a, n) {
  return Math.max(a, n);
}

function sum(prev, nex) {
  return prev + nex;
}
```

## Functions

### function declaration

function declration is way of declaring a function
A function declaration defines a named function using the `function` keyword.
It is hoisted, meaning the function can be called before it is defined in the code.

### function express

function expression is a way of define function as value or varaibles

A function expression defines a function as a value and assigns it to a variable.
It is not hoisted in the same way, so it can only be used after it is defined.

```js

const sum = function(){
  reutrn tota = a + b
}

// OR

const lotteryNumber = [12321, 4234, 4564, 56, 786, 3123, 546, 123, 6767, 12312];

const smallestNumber = lotteryNumber.reduce(function (accumulator, currentElement) {
  return Math.min(accumulator, nextElement);
}, Infinity);

const biggestNumber = lotteryNumber.reduce(function (a,n){
  return Math.max(a,n);
}, -Infinity);

const sumLottery = lotteryNumber.reduce(function (p,c){
  return a + c;
}, 0);

console.log(smallestNumber); //56
console.log(biggestNumber); //12321

console.log(sumLottery); //44832

// or

const hello = function()[
  console.log("helo");
]


```

### arrow function

arrow function is strict and shoter way to write a function in javaScript that does not create its own this , and making behvaiour more predicatble

```js
const guessNumber = [123, 343, 5464, 3213, 14, 56, 76];
// function declartaion

const squareResult = guessNumber.map(squares);
console.log(squareResult);

function squares(e) {
  return Math.pow(e, 2);
}

// function expression

// function expression

const squareResult = guessNumber.map(function (e) {
  return Math.pow(e, 2);
});
console.log(squareResult);

// arrow function
const squareResult = guessNumber.map((e) => Math.pow(e, 2));
console.log(squareResult);
```

different secenerio

```js
// function declare

setTimeout(hello, 3000);

function hello() {
  console.log("hello now i am 4 second passed");
}

// function expression

setTimeout(function () {
  console.log("again waiting now 3 second passed");
}, 5000);

// arrow function
setTimeout(
  () => console.log("now using 6 second for checking arrow function"),
  6000
);
```

## Objects oreinted Programing

### Objects

Object in javaScript is collection of relational data and function stored as key value pair

Object in JavaScript: a collection of key–value pairs used to group related data and behavior into a single unit.

Small note:
An object can store properties (data) and methods (functions). Methods let the object act on its own data using this.

```js
const user = {
  name: "Alex",
  age: 22,
  greet: function () {
    return `Hi, I am ${this.name} and I am ${this.age} years old`;
  },
};

user.greet(); // "Hi, I am Alex and I am 22 years old"
```

### `.this` method

this in JavaScript refers to the object that is calling the function.

this in JavaScript is a reference to the objkect where this is used

this in JavaScript: a keyword that points to the object that is executing the current function.
this is decided at runtime, based on how a function is called, not where it is written.

```js
const user = {
  name: "spongebob",
  showName: function () {
    return this.name;
  },
};

user.showName(); // "SpongeBob"

// mistake or trap

const user = {
  name: "patrick",
  showName: () => {
    return this.name;
  },
};

user.showName(); // "undefined"
```

### Construters

A constructor function is a regular javaScript function used with new keyword to create mutliple object in same structore
A constructor function is just a function used to create objects.

```js
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
bikeTwo.motto(); //The porsche is the best brand in 1922 you must choose red
```
