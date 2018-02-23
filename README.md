## Prototypes & `this`

### Review class

* OOP: Modularity, Encapsulation, Polymorphism, reusability. 

Other lanaguages:

```swift
class HotDog: Food {
  init() {

  }
}
let hotDog = HotDog()
```

```ruby
class HotDog:
end
HotDog.new
```

```java
class HotDog inherits Food {
  HotDog() {

  }
}
```

* Javascript does not have classes, it fakes classes.

Prototypal Inheritance

In JavaScript, unlike other languages, OO is done by linking up objects.

### Object literals 

* A prototype, is an object that another object points to. 
* If we call a method on an object, and that method doesn't exist on the object, it will be called on the object's prototype.

* `Object.setPrototypeOf()`
* `Object.create()`

### `new` and functions

* __proto__ vs prototype

// Constructor function
// 1. creating a brand new empty object {};
// 2. sets that object's prototype to be Food.prototype
// 3. runs the function bind the new object to this.
// 4. return that object

// .__proto__ vs prototype?
// prototype only exists on functions for the purpose of using `new`

```js
function newFood() {
  let food = {};
  Object.setPrototypeOf(food, newFood.prototype);
  food.name =  "🤗";
  food.beEaten = function() {
    console.log("Eating " + this.name);
  };
  return food;
}
```

### `this`

* `this` will get evaluated at runtime, so the context of `this` can change whenever.

* Default Binding
  - `this` will point to the current object in the scope.
* Implicit Binding
  *
* Explicit Binding

* `new` Binding

* `bind`, `call`, `apply`


* is there a right way to do OOP in JavaScript? NO!
* dont use set prototype


## Links

If you want to better understand how prototypes work and how to do OOP in Javascript, these are my prefered resources:

* [You-Dont-Know-JS/this & object prototypes/](https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes)
* [Fun Fun Function](https://www.youtube.com/watch?v=GhbhD1HR5vk)