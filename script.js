// var happy = true;
// var sad = false;

// if(happy){
//     console.log('happy');
// } else {
//     console.log('sad');
// }


// for(var i = 0; i < 10; i++){
//     console.log(i);
// }

// var incrementor = 0;
// var text = "";

// while(incrementor < 10){
//     text += `The incrementor has gone up to ${incrementor} \n `  ;
//     incrementor ++ ;
// }

// console.log(text);

var myString = "I am really hungry for some";
// console.log(myString);

// var myUpperString = myString.toUpperCase();
// console.log(myUpperString)

// var myString = "I am really hungry for some";
// console.log(myString);

// var myUpperString = myString.toUpperCase();
// console.log(myUpperString);

// var reallyLocation = myString.search('really');
// console.log(reallyLocation);

// var specialWord = myString.substr(reallyLocation,6);
// console.log(specialWord);

// specialWord = specialWord.toUpperCase();

// var newString = myString.replace('really',specialWord);

// console.log(newString);

// var arr = ['pizza','burger','chicken','fries'];
// for(var element in arr){
//     if(element % 2 === 0){
//         console.log(`${myString} ${arr[element].toUpperCase()}`);
//     } else {
//         console.log(`${myString} ${arr[element]}`);
//     }
// }

// function doStuff(){
//     var myString = "here is";
//     console.log(myString);
// }

// doStuff();

// function checkNum(){
//     var userNum = prompt("Enter Whole No. ");
//     if(userNum < 10){
//         console.log(`Less then 10: ${userNum}`);
//     }
// }


// var foods = ["cheese","chicken","grapes","hamburgers"];

// function randomInt(min,max){
//     var numOfValues = max - min + 1;
//     var randomNum = Math.random();
//     var randomVal = randomNum * numOfValues;
//     var roundedRandomVal = Math.floor(randomVal);
//     var finalNum = min + roundedRandomVal;
//     return finalNum;
// }

// console.log(foods[randomInt(0,3)]);

var greeting = "Hello and good morning!";

function capitalizeFunction(anyString){
    anyString = anyString.toUpperCase();
    return anyString;
}

var capitalizeExpression = function(anyString){
    anyString = anyString.toUpperCase();
    return anyString;
}

var capitalizeArrow = anyString => anyString.toUpperCase();


console.log(capitalizeFunction(greeting));
console.log(capitalizeExpression(greeting));
console.log(capitalizeArrow(greeting));