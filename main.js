let message = "Hello, World!";
console.log(`${message}`);

let firstName = "Elsa";
let age = 30;
let favouriteColour = "green";

console.log(`My names is ${firstName}, I am ${age} years old and my favourite colour is ${favouriteColour}.`);

num1 = 7;
num2 = 3;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

let answer = prompt("Please enter the price tag for bananas");

console.log(answer);

let price = answer.replace("$", "");

const newPrice = parseFloat(price);

let percentage = 0.9;

let totalValue = (newPrice * percentage);

console.log(`Your new price after the discount is $${totalValue.toFixed(2)}.`);



/*
console.log(Number("answer"));
*/

