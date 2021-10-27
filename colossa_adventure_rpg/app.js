let userName = 'dead adventurer';
let walk = 'W';
let stopWalking = 'D';
let yes = 'Y';
let no = 'N';
let death = 'Game Over! You were eaten by monsters... very slowly';
let whatDoYouWantToDo = "What would you like to do? Walk = 'W' or die = 'D' or see player stats 'P'";
let playAgainQuestion = "Do you want to play again? 'Y' = Yes or 'N' = No";
let gameOverMessage = `I am sorry ${userName}, you failed yourself and no one ever will hear or see you again.`;
let monstersArr = [];
let heroAttach = Math.floor(Math.random() * 25) + 1;
let enemyAttach = Math.floor(Math.random() * 25) + 1;
let playerStats = 'P';
let fight = 'F';
let run = 'R';
let escapeChance = Math.floor(Math.random() *2 ) + 1;
let bonusHp = Math.floor(Math.random() * 30) + 1;
let walkingCounter = 0;

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
// alert(`Be careful where you walk. You could meet ${monsterOne.name}, ${monsterTwo.name}, ${monsterThree.name}, ${monsterFour.name}, or ${monsterFive.name}. All of these monsters want to end your life...`);

let incrementCounter = function(){
    walkingCounter += 1
}

let playAgain = function(){
    let question = prompt(playAgainQuestion);
    if (question == yes.toLowerCase()){
        alert(`too bad... you died, no do overs in life`);
    } else if (question == no.toLowerCase()){
        alert(gameOverMessage);
    } else {
        playAgain();
    }
}

let youWin = function(){
    alert(`Behold ${userName}, you have the bravest heart and a spirit of a lion. You made it out of the forest to which you now enjoy the rest of your days in peace.`);
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


let chanceOfEscape = function(){
    if (escapeChance == 2){
        alert(`Oh Noooo. ${userName} the monster caught up to you due to your poor cardio endurance and now you have to fight`)
        fightMonsters();
    } else{
        alert(`${userName} that monster was so slow you were able to out run the monster. Good job`)
        walking();
    }
}


let fightMonsters = function(){
    while((heroOne.hp > 0) && (randomEnemy.hp > 0)){
        randomEnemy.hp = randomEnemy.hp - heroAttach;
        heroOne.hp = heroOne.hp - enemyAttach;
    }
    if (randomEnemy.hp <= 0){
        alert(`You barely survived that attack. You have cuts all over your body which blood pours out. You are weak and nigh unto death. However, you received ${randomEnemy.specialItem} from the monster and some of your health regained. Onward ${userName} and fight again until you are able to leave the forest.`);
        heroOne.addItem(randomEnemy.specialItem);
        heroOne.hp = heroOne.hp + bonusHp;
        walking();
    } else {
        alert(death);
    }
}



let runAway = function(){
    alert('You escaped the monster this time but you must continue your journey to leave this wretched forest.');
    walking();
}

let fightOrRunAwayQuestion = function(){
    let fightOrRunQuestion = prompt('please press F or R');
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
        let fightingPrompt = prompt(`${userName}, you encountered ${randomEnemy.name}!!! Do you want to fight or run? Press F to fight and R to run`)
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
    let question = prompt(whatDoYouWantToDo);
    incrementCounter();
    if (walkingCounter == 20){
        youWin();
    } else if (question == walk.toLowerCase()){
        numberRandomizer();
    } else if (question == stopWalking.toLowerCase()){
            alert(death);
            playAgain();
        } else if (question == playerStats.toLowerCase()){
            alert(`Adventurer Name: ${heroOne.name}, hp: ${heroOne.hp}, Special Items: ${heroOne.specialItems}`);
            walking();
        } else {
            alert('you didnt push the right button');
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