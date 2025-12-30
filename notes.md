# JavaScript Notes

## JavaScripts Basics

### Arthmetic Operation

```
+ // addition
- // substraction
% // reminder
* // mutliplication
/ // division
** // Power

abc++
abc--

abc += 1
abc -= 1
abc /= 1
abc *= 1
abc **= 1
abc %= 1




```

Operator precedence

1. parnthesis ()
2. exponents
3. multipication or division or modulo
4. addition or substraction

### user Input

Easy way

```
let username

username = window.prompt("whats your username")

```

professional way

```
let username

document.getElementId("myButton").onClick = function(){
    username= document.getElementById("myInput").value
}
username = window.prompt("whats your username")

```

### type converstion

```
let age = 23
let name = jxkz

convert string to number
age = Number(age)

convert number to string
age = String(age)

conver string or number into boolean
age = Boolean(age)

console.log(age, typeof age )


```

### variables

```
const // cant be reassgined
let // can be reassigned and cannot be redeclared
var // cant be reassigned but can be redeclared

```

## Math

```
x = 10.23
console.log(Math.PI)
console.log(Math.E)

Math.round(x)  // round  to nearest
Math.floor(x) // round to lowest
Math.ceil(x)  // round to heighst
Math.trunc(x) // remove decimal
Math.pow(x, y)  // power of y
Math.sqrt(x) // square root
Math.log(x) // logorithm
Math.sin(x)
Math.cos(x)
Math.tan(x)
Math.abs(x) // absolute value
Math.sign(x) // Output will be -1 or 1 or 0
Math.max(x. y, z) // biggest number
Math.min(x. y, z) // smallest number

Math.random()








```
