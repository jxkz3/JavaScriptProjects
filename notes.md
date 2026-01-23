# JavaScript Notes

## JavaScript Basics

### Arithmetic Operation

```js
- // addition

* // subtraction
  % // remainder

- // multiplication
  / // division
  \*\* // power

abc++
abc--

abc += 1
abc -= 1
abc /= 1
abc \*= 1
abc \*\*= 1
abc %= 1

Operator precedence

1. parentheses ()
2. exponents \*\*
3. multiplication / division / modulo
4. addition / subtraction

### User Input

Easy way

let username;
username = window.prompt("what's your username");

Professional way

let username;

document.getElementById("myButton").onclick = function () {
username = document.getElementById("myInput").value;
};

### Type Conversion

let age = "23";

age = Number(age); // convert string to number
age = String(age); // convert number to string
age = Boolean(age); // convert string or number to boolean

console.log(age, typeof age);

### Variables

const // cannot be reassigned or redeclared
let // can be reassigned and cannot be redeclared
var // can be reassigned and can be redeclared (avoid using)

## Math

let x = 10.23;

console.log(Math.PI);
console.log(Math.E);

Math.round(x); // round to nearest
Math.floor(x); // round down
Math.ceil(x); // round up
Math.trunc(x); // remove decimal

Math.pow(x, y); // power
Math.sqrt(x); // square root
Math.log(x); // logarithm

Math.sin(x);
Math.cos(x);
Math.tan(x);

Math.abs(x); // absolute value
Math.sign(x); // -1, 0, or 1

Math.max(x, y, z); // largest number
Math.min(x, y, z); // smallest number

Math.random(); // 0 <= number < 1

## Operation

### Ternary Operation

Shortcut for if else statement

condition ? codeIfTrue : codeIfFalse;

### Switch

Efficient replacement for many if else statements

switch (day) {
case 1:
console.log("Monday");
break;
case 2:
console.log("Tuesday");
break;
case 3:
console.log("Wednesday");
break;
case 4:
console.log("Thursday");
break;
case 5:
console.log("Friday");
break;
default:
console.log("Incorrect day");
}
```

### String Methods

```js
let userName = "broCode";

userName.charAt(2); // o
userName.indexOf("o"); // 2
userName.lastIndexOf("o"); // 4
userName.length; // 7

userName = "bro code";
userName = userName.trim(); // brocode

userName = "broCode";

userName.toUpperCase(); // BROCODE
userName.toLowerCase(); // brocode
userName.repeat(2); // broCodebroCode

userName.startsWith(" "); // false
userName.startsWith("b"); // true
userName.endsWith(" "); // false

userName = "broCode";
userName.includes(" "); // false

userName = "bro Code";
userName.includes(" "); // true

let phoneNumber = "+97785-6532-23";
phoneNumber.replaceAll("-", ""); // +97785653223
phoneNumber = "23";
phoneNumber.padStart(4, "0"); //0023
phoneNumber.padEnd(4, "0"); //2300
```

### String slicing

```js
const fullName = "john deo";
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1, fullName.length);
console.log(firstName);
console.log(lastName);
```

### Method Chaning

```js
// no method chainning

let userName = window.prompt("enter your username");
userName = userName.replaceAll(" ", "");
let firstLetter = userName.charAt(0);
firstLetter = firstLetter.toUpperCase();
let extraLetters = userName.slice(1);
extraLetters = extraLetters.toLowerCase();

userName = firstLetter + extraLetters;

console.log(userName);

// Method Chainning

// no method chainning

let userName = window.prompt("enter your username");
userName = userName.replaceAll(" ", "");

userName =
  userName.charAt(0).toUpperCase() + userName.slice(1).toLocaleLowerCase();

console.log(userName);
```

### Logical Operaters

```
AND = &&
OR = ||
NOT = !


```

### assign operators

```
 = assign operator
 == comparison operator
 === strict comparison operator
!=  inequality operator
!== strict inEquality operator

```

## LOOPS

### while Loop

```js
WHILE LOOP
- Checks condition first
- Runs only if condition is true
- May run zero times

Syntax:
while (condition) {
  // code
}

Example:
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}


DO WHILE LOOP
- Runs code first
- Checks condition after
- Always runs at least once

Syntax:
do {
  // code
} while (condition);

Example:
let i = 5;
do {
  console.log(i);
  i++;
} while (i < 3);


Key difference:
- while → check then run
- do while → run then check


```

### FOR Loop

FOR LOOP

- Repeats code a limited number of times
- Best when you know how many iterations you want

```js
Syntax: for (initialization; condition; increment / decrement) {
  // code
}

Example: for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

Output:
0
1
2

break

- Immediately exits the loop

continue

- Skips the current iteration
- Moves to the next loop cycle

### Function

A function is a block of reusable code.
Once a function is declared, it can be called multiple times to execute the same logic.

Example:

```js
function greet() {
  console.log("Hello");
}

greet();
greet();
```

### Variable Scope

Variable scope defines where a variable is accessible in the code.

- Global scope:
  A variable declared outside any function.
  It can be accessed anywhere in the program.

- Local scope:
  A variable declared inside a function or block.
  It can only be accessed within that function or block.

Example:

```js
let globalVar = "I am global";

function test() {
  let localVar = "I am local";
  console.log(globalVar); // works
}

test();
// console.log(localVar); // error
```

## Array

An array is a collection of multiple values stored in a single variable.
Each value is accessed using an index.

```js
let fruits = ["apple", "orange"];
// navigate
frutis[1]; // oranage

// add item in array last
fruits.push("grape"); // ["apple", "orange", "grape"]

// remove last element
fruits.pop(); //["apple", "orange"]

// remove first elemenr
fruits.shift(); // ["orange"]

// add item in the begining
fruits.unshift("apple"); //["apple", "orange"]

// to know length of array
fruits.length; // 2

// index number of specfic item
fruits.indexOf("apple"); // 0
fruits.indexOf("pineapple"); // -1

// to list all items in array

for (let i = 0; i < fruits.lenth; i++) {
  console.log(fruits[i]);
}

// shoter way
for (let fruit of fruits) {
  console.log(fruit);
}

// Array sort based
fruits.sort(); // alphbatical
fruits.sort().reverse(); // reverse alphabatical
```

### spread operator

allow an iterable such as array or string to be expand into seprate elements (more like unpack the elements)

```js
let number = [1, 2, 3, 5, 6, 9];
let biggestNumebr = Math.max(number); // NaN
let biggestNumebr = Math.max(...number); // 9 ()

userName = "sponge";
let letters = [...userName]; // ["s","p","o","n","g","e "]
let letters = [...userName].join("-"); // s-p-o-n-g-e
```

combaining multiple array

```js
let fruits = ["apple", "orange"];
let veg = ["tomato", "potato"];

let food = [...fruits, ...veg]; // ["apple", "orange", "tomato", "potato"]
food = [...fruits, ...veg, "egg"]; // ["apple", "orange", "tomato", "potato", "egg"]
```

### rest operator

it exactly like oposite of spread operator
bundle seprate elements into bundle

example

```js
function getFoods(...foods) {
  return foods;
}

function openFoods(...foodA) {
  return [...foodA].join(" ").replaceAll(" ", "-");
}

const food1 = "apple";
const food2 = "berry";
const food3 = "orange";
const food4 = "pine";
const food5 = "avcoda";

console.log(getFoods(food1, food2, food3, food5));
console.log(openFoods(food1, food2, food3, food5));
```

exampple two

```js
function sum(...numbers) {
  let results = 0;
  for (let numb of numbers) {
    results += numb;
  }
  return results;
}

let total = sum(1, 3, 4);
console.log(`sum of all these number is ${total}`);
```

### Destructring

Destructring is extracting values from array and object and asign them into variables in convenient ways
{} = to perform object destructuring
[] = to perform array destructuring
examples

```js
// when we want swap value of two vaaraibles
const a = 1;
const b = 2;

[a, b] = [b, a];

// swap 2 elemets from a array

const fruits = ["apple", "grape", "orange", "pin apple", "watermelon"];

[fruits[0], fruits[3]] = [fruits[3], fruits[0]];

// Assign  array elements to varaibles
const fruits = ["apple", "grape", "orange", "pin apple", "watermelon"];

const [firstFruit, secondFruit, ...otherFruits] = fruits;

// Extract values from object

const person1 = {
  firstName: "sponge",
  secondName: "bob",
  age: 32,
};

const person2 = {
  firstName: "patric",
  secondName: "jon",
  age: 12,
};

const { firstName, secondName, age } = person2;

console.log(firstName);
console.log(secondName);
console.log(age); // 12

// Destructure in function parameters

function displayPerson({ firstName, secondName, age, job = "unemployed" }) {
  console.log(` ${firstName} ${secondName} he is ${age} years old ${job}`);
}

const person1 = {
  firstName: "sponge",
  secondName: "bob",
  age: 32,
};

const person2 = {
  firstName: "patric",
  secondName: "jon",
  age: 12,
  job: "cook",
};

displayPerson(person1); // sponge bob he is 32 years old unemployed
displayPerson(person2); //  patric jon he is 12 years old cook
```

## Objects

### Nested Objects

Object inside a other object . allows you repersent more complex data structure child object in enclosed parent object

```js
// Simple nexted Object
const pet = {
  animal: "dog",
  name: "rocky",
  age: 12,
  food: ["bone", "meat"],
  address: {
    Owner: "Sponge bob",
    street: "lc street",
    county: "IN WaterLand",
  },
};

console.log(pet.animal);
console.log(pet.age);
console.log(pet.food[1]); // Meat
console.log(pet.address.Owner); //Sponge bob

// nested Object inside Class
class Pet {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(owner, street, country) {
    this.owner = owner;
    this.street = street;
    this.country = country;
  }
}

const dog = new Pet("rocky ", 12, "Patrick", "lc street", "IN waterLand");

console.log(dog); //Pet {name: 'rocky ', age: 12, address: Address}
console.log(dog.address.owner); // Patrick
```

### Array of Objects

```js
const fruits = [
  { name: "apple", color: "red", calories: 52 },
  { name: "bananas", color: "yellow", calories: 89 },
  { name: "kiwi", color: "green", calories: 61 },
  { name: "stawberry", color: "red", calories: 33 },
];

fruits.forEach((fruit) => console.log(fruit.calories)); // 52 , 89 , 61 , 33
fruits.forEach((fruit) => console.log(fruit.color)); // red, yellow , green ,red

// push && pop

console.log(fruits.splice(1));
// filter

const redFruits = fruits.filter((fruit) => fruit.color === "red");

console.log(redFruits); //a apple and stawberry objects

// map method

const caloriesArr = fruits.map((fruit) => fruit.calories);
console.log(caloriesArr); // [52, 89, 61, 33]

// reduce
console.log(fruits[1].name);

const maxFruit = fruits.reduce((max, fruit) =>
  max.calories > fruit.calories ? max : fruit,
);

const minFruit = fruits.reduce((min, fruit) =>
  min.calories < fruit.calories ? min : fruit,
);

console.log(maxFruit); // banana
console.log(minFruit); // {name: 'stawberry', color: 'red', calories: 33}
console.log(minFruit.calories); //  33
```

### Sorting

sorting is method sort elements in array in place
sorts elements in lexicographic order

loxicographic order = ( alaphbet + numbers + symbols)

```js
// Numbers
const oddNumbers = [7, 1, 5, 11, 17, 21, 9, 3];
oddNumbers.sort();

console.log(oddNumbers); //[1, 11, 17, 21, 3, 5, 7, 9]

oddNumbers.sort((a, b) => a - b);

console.log(oddNumbers); // [1, 3, 5, 7, 9, 11, 17, 21]

oddNumbers.sort((a, b) => b - a);
console.log(oddNumbers); //[21, 17, 11, 9, 7, 5, 3, 1]

oddNumbers.sort((a, b) => a + b);
console.log(oddNumbers); //[21, 17, 11, 9, 7, 5, 3, 1]

// objects inside array sorting

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
```

### Date Objects

date object = object that contain values thats represnt of date and time these date object can be changed or formatted
