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