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
