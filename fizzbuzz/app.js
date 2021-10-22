let fizzCount = 0;
let buzzCount = 0;
let fizzBuzzCount = 0;

let funFizzBuzz = function(){
    for (i = 1; i <= 100; i++){
        if (i % 15 === 0){
            console.log('fizzbuzz');
            fizzBuzzCount += 1;
        } else if (i % 3 === 0){
            console.log('fizz');
            fizzCount += 1;
        }else if (i % 5 === 0){
            console.log('buzz');
            buzzCount += 1;
        } else{
            console.log(i);
        }
    }
    let results = {
        fizz: fizzCount,
        buzz: buzzCount,
        fizzBuzz: fizzBuzzCount
    }
    console.log(results);
}

funFizzBuzz();
