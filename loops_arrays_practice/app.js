let officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

for (let i = 0; i < officeItems.length; i++){
    if (officeItems[i] === 'computer'){
        console.log(officeItems[i]);
    }
}

let peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]

for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} can see the movie`);
    } else {
        console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is NOT old enough`);
    }
}