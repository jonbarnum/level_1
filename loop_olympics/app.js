// console log 0 through 9
for (let i = 0; i <= 9; i++){
    console.log(i);
}

// console log 9 through 0
for (let i = 9; i > 0; i--){
    console.log(i);
}

// console log each fruit one time
let fruit = ['banana', 'orange', 'apple', 'kiwi'];

for (let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

// pushing numbers 0 through 9 into an array
let countingUp = [];

for (let i = 0; i <= 9; i++){
    countingUp.push(i);
}
console.log(countingUp);

// console log even numbers 0 to 100
for (let i = 0; i <= 100; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

// putting every other fruit into a new array
let fruitList = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
let everyOtherFruit = [];

for (let i = 0; i < fruitList.length; i +=2){
        everyOtherFruit.push(fruitList[i]);
}
console.log(everyOtherFruit);
