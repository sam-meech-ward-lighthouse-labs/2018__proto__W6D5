// class Food {

//   constructor(name) {
//     this.name = name;
//   }

//   beEaten() {
//     console.log("Eating " + this.name);
//   }

// }

// class HotDog extends Food {
//   constructor(quanitity, adjective) {
//     // super('HamBurger');
//     super(adjective + ' 🌭');
//     this.quanitity = quanitity;
//   }

//   goInAHotdogBun() {
//     console.log("going in the bun");
//   }
// }

// let hotDog = new HotDog(24, 'Ball Park');
// hotDog.goInAHotdogBun();
// hotDog.beEaten();
// console.log(hotDog.name);
// console.log(hotDog.quanitity);

// var food = {
//   name: "🤗",
//   beEaten: function() {
//     console.log("Eating " + this.name);
//   }
// };

// var bread = Object.create(food);
// bread.name = "bread";

// Object.setPrototypeOf(bread, food);
// bread.__proto__ = food;

// console.log(food);
// console.log(bread);
// console.log(bread.__proto__);
// bread.beEaten();

// console.log(bread.__proto__ ===  Object.prototype);
// console.log(bread.__proto__ ===  food);

// console.log(Object.prototype);

// var hotDog = {
//   name: "hot dog 🌭",
//   goInAHotdogBun: function() {
//     console.log("going in the bun");
//   }
// }

// console.log(food.__proto__);
// console.log(hotDog.__proto__);

// hotDog.beEaten();
// hotDog.goInAHotdogBun();

// console.log(hotDog);
// console.log(food);

// food.garnish = function() {
//   console.log("Adding ketchup to " + this.name);
// }

// console.log(hotDog.garnish);
// console.log(food.garnish);

function Food() {
  this.name =  "🤗";
}
Food.prototype.beEaten = function() {
  console.log("Eating " + this.quanitity);
};

var food = new Food();

function HotDog(quanitity) {
  this.quanitity = quanitity;
}
HotDog.prototype = Object.create(Food.prototype);
HotDog.prototype.goInAHotdogBun = function() {
  console.log("going in the bun");
}

// Object.setPrototypeOf(HotDog, Food);
var hotDog = new HotDog(24);

// hotDog.__proto__ // HotDog.prototype

hotDog.beEaten();

// We want hotdog.__proto__.__proto__ to be Food.prototype

Food.prototype.animate = function() {
  console.log("🤗");
};

Object.prototype.toString = function() {
  console.log("🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗");
};

let obj = {}
// obj.animate();
obj.toString();

// xx._proto_ = Food.prototype 
// xx._proto_ = Food

console.log(Food);
console.log(Food.prototype);

console.log(hotDog.__proto__ === HotDog.prototype);