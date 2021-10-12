const readlineSync = require('readline-sync');

let num1 = parseInt(readlineSync.question("What is your first number? "));

let num2 = parseInt(readlineSync.question("What is your second number? "));

let mathOperation = readlineSync.question("What mathimatical operation do you want performed? add, sub, mult, div ");

let addition = function(num1, num2){
    return num1 + num2;
}

let subtraction = function(num1, num2){
    return num1 - num2;
}

let multiplication = function(num1, num2){
    return num1 * num2;
}

let division = function(num1, num2){
    return num1 / num2
}


if (mathOperation == 'add') {
    console.log(`The result is: ${addition(num1, num2)}`);
} else if (mathOperation == 'sub'){
    console.log(`The result is: ${subtraction(num1, num2)}`);
} else if (mathOperation == 'mult'){
    console.log(`The result is: ${multiplication(num1, num2)}`);
} else if (mathOperation == 'div'){
    console.log(`The result is: ${division(num1, num2)}`);
} else {
    console.log('Try Again');
}