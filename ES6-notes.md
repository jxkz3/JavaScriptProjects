# ES6

## Class

class is es6 feature provide more structered and cleaner way to work with objects compared to construct function

class in javascript is creating multiple object with same structure and behavuiour

class in java script is blueprint for creating object with predefined propertiers and method

```js
class Car {
  constructor(name, price, model) {
    (this.name = name), (this.price = price), (this.model = model);
  }
  display() {
    console.log(`The ${this.name} is made ${this.model} at $${this.price}`);
  }
}

const car1 = new Car("bmw", 122200, 2000);
const car2 = new Car("ferrari", 1434200, 1999);
const car3 = new Car("ducatti", 17782, 1905);
const car4 = new Car("fortuner", 3000, 2022);

car1.display(); // The bmw is made 2000 at $122200
car2.display(); //The ferrari is made 1999 at $1434200
car3.display();
car4.display();
console.log(car1.price, car1.name); // 122200 'bmw'
```

### Static class

static is key that defines property or method that belond to the class itself rather than object that created from class
