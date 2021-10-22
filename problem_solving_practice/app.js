let numArr = [3, 5, 2, 8, 1];
let largestNum = 0;

let numFunction = function(){
    for (let i = 0; i < numArr.length; i++){
        if (numArr[i] > largestNum) {
            largestNum = numArr[i]
        }
    }
    console.log(largestNum);
}
numFunction();


let lettersWithStrings = function(){
    let letterArr = ["#3", "$$$", "C%4!", "Hey!"]
    let wordArr = [];
    for ( let i = 0; i < letterArr.length; i++){
        if (letterArr[i].includes('%') || letterArr[i].includes('!')){
            wordArr.push(letterArr[i]);
        }
    }
    console.log(wordArr);
}
lettersWithStrings();

let ifNumIsInteger = function(num1, num2){
    if (Number.isInteger(num1 / num2)){
        console.log('True');
    }else{
        console.log('False');
    }
}

ifNumIsInteger(4 , 2);
ifNumIsInteger(9 , 3);
ifNumIsInteger(15, 4);