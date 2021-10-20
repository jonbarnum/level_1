let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphabetArr = alphabet.split('');

let forception = function(people, alphabetArr){
    let resultsArr = [];
    for (let i = 0; i < people.length; i++){
        resultsArr.push(people[i] + ":");
        for (let j = 0; j < alphabetArr.length; j++){
            resultsArr.push(alphabetArr[j].toUpperCase());
        }
    }
    return resultsArr;
}
console.log(forception(people, alphabetArr));

