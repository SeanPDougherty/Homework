// Pizza Place Functions

function sendAlert(event) {
  console.log(event);
  alert("A message was alerted");
}

document.getElementById("logButton".addEventListener("click, event => console.log(event));

// Create an array of pizzaToppings with at least four different toppings

let pizzaToppings = ["pepperoni", "pineapple", "mushrooms", "olives"];


/* Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..." */


/*for (let pizzaTopping of pizzaToppings) {
    console.log(pizzaToppings);
}




function greetCustomer() {
let greeting = "Welcome to Patrick's Pies! Our pizza toppings are:";
for (let pizzaTopping of pizzaToppings) {
greeting += `${" " + pizzaToppings +  ","}`;
}
console.log(greeting);
} */

function greetCustomer(toppings) {
  let greeting ="Welcome to Patrick's Pies!, our toppings are: ";
 
 
 for(let topping of toppings) {
   greeting += `${toppings}, `;
 }
 
 console.log(greeting);
 }
 greetCustomer(pizzaToppings);
 

/* Create a getPizzaOrder function that has the parameters size, crust, and an indefinite amount of toppings as inputs
prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
outputs a list with the size, crust, and toppings */

/*function getPizzaOrder(size, crust, toppings) {
console.log(
  "One " + size + ", " + crust,
  "crust pizza with" + toppings,
  "coming up!"
);
return [size, crust, toppings]
} */

function getPizzaOrder(size, crust, ...toppings) {
  for (let topping of toppings) {
      list += `${topping}, `;
  }

  let output = `One ${size} ${crust} crust pizza with ${list} ... coming up!`;

  console.log(output);

  return [size, crust, toppings];
  }

  getPizzaOrder("small", "pan", "pineapple", "sausage");



/* Create a preparePizza function that
has an array as its parameter with three items: a size, a crust, and a list of toppings
prints something like "...Cooking pizza..."
outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings */

/*function preparePizza([size, crust, toppings]) {
  let pizzaOrder = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  console.log("Your pizza is almost ready!");
  return pizzaOrder;
}*/

function preparePizza(pizza) {

}
preparePizza(["large", "thin", ["provel", "cheddar"]]);



/* Create a servePizza function that
has a parameter of a pizza Object
logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
outputs the same pizza Object that was passed in */

/*function servePizza(pizzaOrder) {
  console.log(
    `Order up! Here's your ${pizzaOrder.size}, ${pizzaOrder.crust} crust pizza, with ${pizzaOrder.toppings}. Enjoy!`
  );
  return pizzaOrder;
} */

function servePizza(pizza) {

}



/* Call each function and (starting with preparePizza) use the returned value from the previous function as its input */

/*greetCustomer();

getPizzaOrder();

preparePizza(getPizzaOrder());

servePizza(preparePizza(getPizzaOrder()));
*/

preparePizza(getPizzaOrder("small", "pan", "pineapple", "sausage));   