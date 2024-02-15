// Pizza Place Homework

// Inside your JS file, create two variables: pizzaPlace and numberOfToppings
let pizzaPlace;
let numberOfToppings;
// Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.
pizzaPlace = "DOUGHerty's Pies";
numberOfToppings = 9;
// Print the variables and their types.
console.log(pizzaPlace);
console.log(numberOfToppings);
console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);

// Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
let greeting = `Welcome to ${pizzaPlace}! We have ${numberOfToppings} toppings to choose from.`;
console.log(greeting);

// Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.

if(numberOfToppings < 10){
console.log("Quality, not quantity.");
} else {
 console.log("A whole lot of pizza.");
}




// Add, commit, and push your JS file to your GitHub repo.
// Send your TA a link to your GitHub Homework repo when finished.
