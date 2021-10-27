const readlineSync = require('readline-sync');

let userName = 'dead adventurer';
const walk = 'W';
const stopWalking = 'D';
const yes = 'Y';
const no = 'N';
const death = 'Game Over! You were eaten by monsters... very slowly';
const whatDoYouWantToDo = "What would you like to do? Walk = 'W' or die = 'D' or see player stats 'P'";
const playAgainQuestion = "Do you want to play again? 'Y' = Yes or 'N' = No";
const gameOverMessage = `I am sorry ${userName}, you failed yourself and no one ever will hear or see you again.`;
let monstersArr = [];
const heroAttach = Math.floor(Math.random() * 25) + 1;
const enemyAttach = Math.floor(Math.random() * 25) + 1;
const playerStats = 'P';
const fight = 'F';
const run = 'R';
const escapeChance = Math.floor(Math.random() *2 ) + 1;
const bonusHp = Math.floor(Math.random() * 30) + 1;
let walkingCounter = 0;

let greeting = function (){
    userName = readlineSync.question('What is your name? ');
    if (userName != ''){
        return userName;
    }else{
        userName = 'Great One';
    }
}
greeting();

readlineSync.keyInPause(`Welcome ${userName}!!! You must be the most awesome adventurer or else you will not escape death!!!`);

readlineSync.keyInPause(`You wandered in the forest of forbiddenness and became lost. There are monsters all around you ready to bite your head off for lunch. To escape the forest of forbiddenness you must fight like a demon and slay the monsters. Good luck ${userName.toUpperCase()}, don't let the monsters bite!`);

readlineSync.keyInPause(`${userName} your options are to walk or lay down and suffer by being eaten alive by mosters!`)

function Hero (name, hp,){
    this.name = name;
    this.hp = hp;
    this.specialItems = [];
    this.addItem = function(item){
        this.specialItems.push(item);
    }
}

let heroOne = new Hero(userName, 100);
heroOne.addItem("Hero's Heart");


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

let randomEnemy;
let randomMonsterChooser = function(){
    randomEnemy = monstersArr[Math.floor(Math.random() * monstersArr.length)];
}
readlineSync.keyInPause(`Be careful where you walk. You could meet ${monsterOne.name}, ${monsterTwo.name}, ${monsterThree.name}, ${monsterFour.name}, or ${monsterFive.name}. All of these monsters want to end your life...`);

let incrementCounter = function(){
    walkingCounter += 1
}

let playAgain = function(){
    let question = readlineSync.question(playAgainQuestion);
    if (question == yes.toLowerCase()){
        readlineSync.keyInPause(`too bad... you died, no do overs in life`);
    } else if (question == no.toLowerCase()){
        readlineSync.keyInPause(gameOverMessage);
    } else {
        playAgain();
    }
}

let youWin = function(){
    readlineSync.keyInPause(`Behold ${userName}, you have the bravest heart and a spirit of a lion. You made it out of the forest to which you now enjoy the rest of your days in peace.`);
}

let askQuestionAgainWalkOrDie = function(){
    let askQuestion = readlineSync.question("Your options are 'W' or 'D'");
    if (askQuestion == walk.toLowerCase()){
        walking();
    } else if (askQuestion == stopWalking.toLowerCase()){
        readlineSync.keyInPause(gameOverMessage)
        playAgain();
    } else{
        askQuestionAgainWalkOrDie();
    }
}


let chanceOfEscape = function(){
    if (escapeChance == 2){
        readlineSync.keyInPause(`Oh Noooo. ${userName} the monster caught up to you due to your poor cardio endurance and now you have to fight`)
        fightMonsters();
    } else{
        readlineSync.keyInPause(`${userName} that monster was so slow you were able to out run the monster. Good job`)
        walking();
    }
}


let fightMonsters = function(){
    while((heroOne.hp > 0) && (randomEnemy.hp > 0)){
        randomEnemy.hp = randomEnemy.hp - heroAttach;
        heroOne.hp = heroOne.hp - enemyAttach;
    }
    if (randomEnemy.hp <= 0){
        readlineSync.keyInPause(`You barely survived that attack. You have cuts all over your body which blood pours out. You are weak and nigh unto death. However, you received ${randomEnemy.specialItem} from the monster and some of your health regained. Onward ${userName} and fight again until you are able to leave the forest.`);
        heroOne.addItem(randomEnemy.specialItem);
        heroOne.hp = heroOne.hp + bonusHp;
        walking();
    } else {
        readlineSync.keyInPause(death);
    }
}



let runAway = function(){
    readlineSync.keyInPause('You escaped the monster this time but you must continue your journey to leave this wretched forest.');
    walking();
}

let fightOrRunAwayQuestion = function(){
    let fightOrRunQuestion = readlineSync.keyInPause('please press F or R');
    if(fightOrRunQuestion == fight.toLowerCase()){
        fightMonsters();
    } else if (fightOrRunQuestion == run.toLowerCase()){
        runAway();
    }else {
        fightOrRunAwayQuestion();
    }
}

let numberRandomizer = function(){
    let number = Math.floor(Math.random() * 4) + 1;
    if (number == 4){
        randomMonsterChooser();
        let fightingPrompt = readlineSync.question(`${userName}, you encountered ${randomEnemy.name}!!! Do you want to fight or run? Press F to fight and R to run`)
        if (fightingPrompt == fight.toLowerCase()){
            fightMonsters();
        } else if (fightingPrompt == run.toLowerCase()){
            chanceOfEscape();
        } else{
            fightOrRunAwayQuestion();
        }
    } else {
        walking();
    }
}


let walking = function(){
    let question = readlineSync.question(whatDoYouWantToDo);
    incrementCounter();
    if (walkingCounter == 20){
        youWin();
    } else if (question == walk.toLowerCase()){
        numberRandomizer();
    } else if (question == stopWalking.toLowerCase()){
            readlineSync.keyInPause(death);
            playAgain();
        } else if (question == playerStats.toLowerCase()){
            readlineSync.keyInPause(`Adventurer Name: ${heroOne.name}, hp: ${heroOne.hp}, Special Items: ${heroOne.specialItems}`);
            walking();
        } else {
        readlineSync.keyInPause('you didnt push the right button');
            askQuestionAgainWalkOrDie();
        }
    }
    
    walking();
    
    
    
    
    // let fightMonsters = function(){
    //     randomEnemy.hp = randomEnemy.hp - heroAttach;
    //     heroOne.hp = heroOne.hp - enemyAttach;
    //     if ((heroOne.hp > 0) && (randomEnemy.hp > 0)){
    //         fightMonsters();
    //     } else {
    //         if (randomEnemy.hp <= 0){
    //             alert(`You barely survived that attack. You have cuts all over your body which blood pours out. You are weak and nigh unto death. However, you received ${randomEnemy.specialItem} from the monster and some of your health regained. Onward ${userName} and fight again until you are able to leave the forest.`);
    //             heroOne.addItem(randomEnemy.specialItem);
    //             heroOne.hp = heroOne.hp + bonusHp;
    //             walking();    
    //         } else {
    //             alert(death);
    //         }
    //     }
    // }


    // let sum = function(x , y){
        //     return x + y;
        // }
        
        // console.log(sum(2, 4))
        // console.log(sum(10, 10))
        
        // let twentyFour = sum(12 , 12);
        // console.log(twentyFour);
        
// console.log(sum(twentyFour, 2))