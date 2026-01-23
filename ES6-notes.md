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

class own anything static not object

```js
class User {
  static userCount = 0;
  constructor(name, age, degree) {
    this.name = name;
    this.age = age;
    this.degree = degree;
    User.userCount++;
  }

  static getCount() {
    console.log(this.userCount);
  }
  getDetails() {
    console.log(
      `I am ${this.name} and ${this.age} years old. I completed my ${this.degree} in Unversity.`
    );
  }
}

const user1 = new User("Rose", 23, "BSC");
const user2 = new User("Tommy", 22, "BCA");
const user3 = new User("Arthur", 25, "MCA");

user1.getDetails(); //I am Rose and 23 years old. I completed my BSC in Unversity
user2.getDetails();
user3.getDetails();

User.getCount(); //3
```

### Inheritence class

inheritence is javascript is more like a new class is inherit property and method from existing class (parent -> child) help with code reusabltiy

```js
class Animal {
  aliive = true;

  sleep() {
    console.log(`The ${this.name} sleep at night`);
  }

  eat() {
    console.log(`The ${this.name} eat at three times`);
  }

  run() {
    console.log(`The ${this.name} dont run`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";

  run() {
    console.log(`The ${this.name} run fast`);
  }
}

class Fish extends Animal {
  name = "fish";

  swim() {
    console.log(`The ${this.name} swim on ocean`);
  }
}

const fish = new Fish();
const rabbit = new Rabbit();

fish.run(); // The fish dont run
rabbit.run(); // The fish dont run
rabbit.eat(); // Rabbit eat three times
// rabbit.swim(); // error
fish.swim(); // The fish swim on ocean
```

### Super

Super keyword is used in Classes to call the constructor or access the methods and properties from parent Class (super class)
this = this object
super = the parent

```js
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`${this.name} will move at ${speed} mph`);
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  run() {
    console.log(`This ${this.name} can swim`);
    super.move(this.swimSpeed);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);

    this.runSpeed = runSpeed;
  }
  run() {
    console.log(`This ${this.name} can run`);
    super.move(this.runSpeed);
  }
}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);

    this.flySpeed = flySpeed;
  }
  fly() {
    console.log(`This ${this.name} can swim`);
    super.move(this.flySpeed);
  }
}

const hawk = new Hawk("kayukan", 12, 3);
const rabby = new Rabbit("Bugs Bunny", 3, 23);
const meen = new Fish("Challa", 3, 46);

hawk.fly();
rabby.run();
meen.run();
```

### Getter & setter

getter is method that make a property readable
setter is method that make a property writeable

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("must be Postive Number");
    }
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("must be Postive Number");
    }
  }

  get height() {
    return this._height;
  }
  get width() {
    return this._width;
  }

  get area() {
    return this._height * this._width;
  }
}

const rectangle = new Rectangle(12, 2);

console.log(rectangle.height); //12
console.log(rectangle); // Rectangle {_height: 12, _width: 2}
console.log(rectangle.area); // 24
```
