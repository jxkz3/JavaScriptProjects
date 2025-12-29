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


```
