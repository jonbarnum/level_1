const readlineSync = require('readline-sync');

let yes = 'Y';
let no = 'N';

let youWin = function(){
    console.log('You found the key and unlocked the door. You find a room full of gold and table full of food large enough for a feast.')
}

let foundKey = function(){
    let nextStep = readlineSync.question('Now that you found the key, what do you want to do? Option 1-use the key to unlock the door or 2-jump out the window ')
    if( nextStep == 1){
        youWin();
    } else if (nextStep == 2){
        gameOver();
    } else {
        foundKey();
    }
}

let firstQuestion = function(){
    let begin = readlineSync.question('You\'re options! 1-Put Hand in hole, 2-Find the key, or 3-Open the door. Choose 1 , 2 , 3: ');
    if(begin == 1){
        console.log('You died');
        startOver();
    } else if (begin == 2){
        foundKey();
    } else if (begin == 3){
        console.log('Nothing happened');
        firstQuestion();
    } else {
        console.log('Try again');
        firstQuestion();
    }
}

let gameOver = function(){
    console.log('Game Over, You lost, You died')
}

let startOver = function(){
    let start = readlineSync.question('Do you want to play again? Y or N? ');
    if(start == yes.toLowerCase()){
        firstQuestion();
    } else if (start == no.toLowerCase()){
        gameOver();
    } else {
        firstQuestion();
    }
}

let userAnswer = function(){
    let answer = readlineSync.question('Do you want to play a game? Y or N? ');
    if(answer == yes.toLowerCase()){
        console.log('Let\'s Begin. You are stuck in a room, what should you do? ')
        firstQuestion();
    } else if (answer == no.toLowerCase()){
        console.log('You lost');
        startOver();
    } else {
        console.log('Try again');
        startOver();
    }
}

userAnswer();



