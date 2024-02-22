// Javascript Classes. They are blueprints to create new objects.

class Pizza {
  //to pass arguments into object need to pass them in constructor
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    // or hard code parameters that will not change in the future.
    this.crust = "original";
    this.toppings = [];
  }
  // to change or get parameters from the object better practice is to use getters and setters.

  get pizzaCrust() {
    return this.crust;
  }

  set pizzaCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  // or can define methods to get or set parameters

  getCrust() {
    return this.crust;
  }

  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  getToppings() {
    return this.toppings;
  }

  setToppings(topping) {
    this.toppings.push(topping);
  }

  // creating methods, like functions
  bake() {
    console.log(`Baking a ${this.size} ${this.crust} ${this.type} pizza.`);
  }
}

//creating new object.

const myPizza = new Pizza("pepperoni", "medium");

myPizza.pizzaCrust = "thin";
myPizza.setCrust("thin");
myPizza.setToppings("cheese");
myPizza.bake();
console.log(myPizza.getToppings());

// we can use parent class (Super class) to create children classes from it.

class Pizza1 {
  //to pass arguments into object need to pass them in constructor
  constructor(pizzaSize) {
    this.size = pizzaSize;
    // or hard code parameters that will not change in the future.
    this.crust = "original";
  }
  // to change or get parameters from the object better practice is to use getters and setters.

  get pizzaCrust() {
    return this.crust;
  }

  set pizzaCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
}

class SpecialityPizza extends Pizza1 {
  // to set argument for child class we need to pass it to super class first
  constructor(pizzaSize) {
    super(pizzaSize);
    this.type = "american";
  }

  slice() {
    console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
  }
}

// creating new object.

const mySpecial = new SpecialityPizza("medium");
mySpecial.slice();

//or we can create object with Factory function. This way object variables cannot be changed or accesed outside the function.

function pizzaFactory(pizzaSize) {
  const crust = "thin";
  const size = pizzaSize;
  return {
    bake: () => console.log(` baking ${size} ${crust} crust pizza`),
  };
}

const newPiza = pizzaFactory("medium");
newPiza.bake();

// new improved ways to set variables in the objects.

class Pizza2 {
  // set public properties before constructor.They can be accessed from anywhere
  crust = "original";
  // set private properties with #.
  // if we want variables from constructor be private we need to declare them before constructor.
  #sauce = "tomato";
  #size;
  constructor(pizzaSize) {
    this.size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  makingPizza() {
    console.log(` making ${this.crust} ${this.size} ${this.#sauce} pizza`);
  }
}

const favotitePizza = new Pizza2("large");
favotitePizza.makingPizza();
