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
