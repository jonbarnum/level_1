let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
console.log('vegetables: ', vegetables);

fruit.shift();
console.log('fruit: ', fruit);

let orangeIndex = fruit.indexOf('orange');
console.log(orangeIndex);

fruit.push('1');
console.log('fruit: ', fruit);

console.log('vetables: ', vegetables.length);

vegetables.push('3');
console.log('vegetables: ', vegetables)

let food = fruit.concat(vegetables);
console.log(food);

food.splice(4, 2);
console.log(food);

food.reverse();
console.log(food);

let foodString = food.join();
console.log(foodString);
