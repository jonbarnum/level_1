let userName = 'dead adventurer';
let walk = 'W';
let stopWalking = 'S';
let yes = 'Y';
let no = 'N';
let death = 'Game Over! You stopped and were eating by monsters... very slowly';
let whatDoYouWantToDo = "What would you like to do? Walk = 'W' or die = 'S'";
let playAgainQuestion = "Do you want to play again? 'Y' = Yes or 'N' = No"
let gameOverMessage = `I am sorry ${userName}, you failed yourself and no one ever heard or saw of you again.`

// let greeting = function (){
//     userName = prompt('What is your name');
//     if (userName != ''){
//         return userName;
//     }else{
//         userName = 'Great One'
//     }
// }

// greeting();
// alert(`Welcome ${userName}!!! You must be the most awesome adventurer or else you will not escape death!!!`)


// alert(`You wandered in the forest of forbiddenness and became lost. There are monsters all around you ready to bite you head off for lunch. To escape the forest the forbiddenness you must fight like a demon and slay the monsters. Good luck ${userName.toUpperCase()}, don't let the monsters bite!`);

// alert(`${userName} your options are to walk or lay down and suffer by being eaten alive by mosters!`)

let playAgain = function(){
    let question = prompt(playAgainQuestion);
    if (question == yes.toLowerCase()){
        walking();
    } else if (question == no.toLowerCase()){
        alert(gameOverMessage);
    } else {
        playAgain();
    }
}


let askQuestionAgainWalkOrDie = function(){
    let askQuestion = prompt("Your options are 'W' or 'S'");
    if (askQuestion == walk.toLowerCase()){
        walking();
    } else if (askQuestion == stopWalking.toLowerCase()){
        alert(gameOverMessage)
        playAgain();
    } else{
        askQuestionAgainWalkOrDie();
    }
}


let walking = function(){
    let question = prompt(whatDoYouWantToDo);
    if (question == walk.toLowerCase()){
        console.log('walk');
    } else if (question == stopWalking.toLowerCase()){
        alert(death);
        playAgain();
    } else{
        alert('you didnt push the right button');
        askQuestionAgainWalkOrDie();
    }
}

// walking();


