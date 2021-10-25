let userName = 'dead adventurer';
let walk = 'W';
let stopWalking = 'D';
let yes = 'Y';
let no = 'N';
let death = 'Game Over! You stopped and were eaten by monsters... very slowly';
let whatDoYouWantToDo = "What would you like to do? Walk = 'W' or die = 'D' or see player stats 'P'";
let playAgainQuestion = "Do you want to play again? 'Y' = Yes or 'N' = No";
let gameOverMessage = `I am sorry ${userName}, you failed yourself and no one ever will hear or see you again.`;
let monstersArr = [];
let heroArr = [];
let heroAttach = Math.floor(Math.random() * 25) + 1;
let enemyAttach = Math.floor(Math.random() * 25) + 1;
let playerStats = 'P';

let greeting = function (){
    userName = prompt('What is your name');
    if (userName != ''){
        return userName;
    }else{
        userName = 'Great One';
    }
}
// greeting();
// alert(`Welcome ${userName}!!! You must be the most awesome adventurer or else you will not escape death!!!`)


// alert(`You wandered in the forest of forbiddenness and became lost. There are monsters all around you ready to bite your head off for lunch. To escape the forest of forbiddenness you must fight like a demon and slay the monsters. Good luck ${userName.toUpperCase()}, don't let the monsters bite!`);

// alert(`${userName} your options are to walk or lay down and suffer by being eaten alive by mosters!`)

function Hero (name, hp, specialItem){
    this.name = name;
    this.hp = hp;
    this.specialItem = specialItem;
}

let heroOne = new Hero(userName, 100, "Hero's Heart");

let playableHero = function(){
    heroArr.push(heroOne);
}

playableHero();

function Monsters (name, hp, specialItem){
    this.name = name;
    this.hp = hp;
    this.specialItem = specialItem;
}

let monsterOne = new Monsters ('Dreadnought', 125, "Monster's Heart");
let monsterTwo = new Monsters ('Hotspur', 100, 'Katana Sword');
let monsterThree = new Monsters ('Kreml', 75, 'Speed');
let monsterFour = new Monsters ('Monitor', 50, 'Fury');
let monsterFive = new Monsters ('Smerch', 25, 'Flowers');

let playableMonster = function(){
    monstersArr.push(monsterOne);
    monstersArr.push(monsterTwo);
    monstersArr.push(monsterThree);
    monstersArr.push(monsterFour);
    monstersArr.push(monsterFive);
}
playableMonster();

let randomEnemySelector = monstersArr[Math.floor(Math.random() * monstersArr.length)];

// alert(`Be careful where you walk. You could meet ${monsterOne.name}, ${monsterTwo.name}, ${monsterThree.name}, ${monsterFour.name}, or ${monsterFive.name}. All of these monsters want to end your life...`);


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
    let askQuestion = prompt("Your options are 'W' or 'D'");
    if (askQuestion == walk.toLowerCase()){
        walking();
    } else if (askQuestion == stopWalking.toLowerCase()){
        alert(gameOverMessage)
        playAgain();
    } else{
        askQuestionAgainWalkOrDie();
    }
}

let numberRandomizer = function(){
    let number = Math.floor(Math.random() * 4) + 1;
    if (number == 4){
        console.log(`oh no ${userName}, you ran into ${randomEnemySelector.name}. Do you want to fight or run`)
    } else {
        walking();
    }
}

let walking = function(){
    let question = prompt(whatDoYouWantToDo);
    if (question == walk.toLowerCase()){
        numberRandomizer();
    } else if (question == stopWalking.toLowerCase()){
        alert(death);
        playAgain();
    } else if (question == playerStats.toLowerCase()){
                alert(`Adventurer Name: ${heroArr[0].name}, hp: ${heroArr[0].hp}, Items: ${heroArr[0].specialItem}`);
            walking();
    } else {
        alert('you didnt push the right button');
        askQuestionAgainWalkOrDie();
    }
}

// walking();




// let sum = function(x , y){
    //     return x + y;
// }

// console.log(sum(2, 4))
// console.log(sum(10, 10))

// let twentyFour = sum(12 , 12);
// console.log(twentyFour);

// console.log(sum(twentyFour, 2))