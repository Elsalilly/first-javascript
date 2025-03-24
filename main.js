/* Assignment 1
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
*/


/* Assignment 2
let answer = prompt("Please enter the price tag for bananas");

console.log(answer);

let price = answer.replace("$", "");

const newPrice = parseFloat(price);

let percentage = 0.9;

let totalValue = (newPrice * percentage);

console.log(`Your new price after the discount is $${totalValue.toFixed(2)}.`);
*/


/* Assignment 3 */


function isValidUsername (username) {
    if(!(username.length >= 8)) {
        return false;
    }
    if (username.indexOf(" ") !== -1) {
        return false;
    }
    return true;
}

function isValidPassword (password) {
    if(!(password.length >= 8)) {
        return false;
    }
    if (password.indexOf(" ") !== -1) {
        return false;
    }
    if (password == "hellohello") {
        return false;
    }
    return true;
}

console.log(isValidUsername("hellohello"));
console.log(isValidPassword("hellohello"));


/*
    if(!(password.length >= 8)) {
        return false;
    }
}

    return password.includes ("hellohello") ? true : false;
const password1 = "helloeverybody";
if (isValidPassword(password1)) {
    console.log(`${password1} - Valid Password!`);
} else {
    console.log(`${password1} - Invalid Password!`);
}
*/