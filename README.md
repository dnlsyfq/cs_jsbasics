### Switch
```
var colors = ['red','blue','green','yellow'];

var selectedColor = colors[3];

switch(selectedColor){
    case "red":
        console.log("the color is red");
        break;
    case "blue":
        console.log("the color is blue");
        break;
    case "green":
        console.log("the color is green");
        break;
    case "yellow":
        console.log("the color is yellow");
        break;
    default:
        console.log("there was an error");
```

### Loops 

```
for(var i = 0; i < 10; i++){
    console.log(i);
}
```

```
for(var i of array){
    console.log(i);
}
```

```
var incrementor = 0;
var text = "";

while(incrementor < 10){
    text += `The incrementor has gone up to ${incrementor} \n `  ;
    incrementor ++ ;
}

console.log(text);
```

### Anonymous Function Express

```
var greeting = function(){
    var name = prompt("Tell me your name","");
    console.log(`Hello ${name}, how are you today?`);
}

greeting();
```

### Anonymous , Express and Arrow Function 
```
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
```