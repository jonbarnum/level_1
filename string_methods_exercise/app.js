// using to upper case and to lower case to capitalize all letters and vise versa
let greeting = "Hello World";

let upperAndLowerCasePractice = function(greeting){
    let upperCaseGreeting = greeting.toUpperCase();
    let lowerCaseGreeting = greeting.toLowerCase();
    return upperCaseGreeting + lowerCaseGreeting;
}

console.log(upperAndLowerCasePractice(greeting));

// creating a long string then finding the length of long string, then dividing it half and rounding down
let longString = 'Hello, this is a long string and I will find the middle index';

let findingIndex = function(longString){
    let stringLength = longString.length;
    let halfOfString = Math.floor(stringLength / 2)
    return halfOfString;
}

console.log(findingIndex(longString));

// using the slice method to return half of the string
let slicingTheString = function(longString){
    let halfLongString = longString.slice(0 , 32);
    return halfLongString;
}

console.log(slicingTheString(longString));

// using splice and to upper case and to lower case to have hald the sentence uppercase and half lowercase
let halfUpAndHalfDown = function(longString){
    let halfStringUp = longString.slice(0, 32);
    let halfStringDown = longString.slice(33, 61);
    let upperCaseHalf = halfStringUp.toUpperCase();
    let lowerCaseHalf = halfStringDown.toLowerCase();
    return `${upperCaseHalf} ${lowerCaseHalf}`;
}

console.log(halfUpAndHalfDown(longString));