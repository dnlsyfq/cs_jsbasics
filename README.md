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

### Async 

* allows the computer to “move on” to other tasks while waiting for the asynchronous operation to complete

JavaScript allows us to execute other tasks while awaiting their completion.
* Operations like making a network request or 
* querying a database can be time-consuming, but 


Promises are objects that represent the eventual outcome of an asynchronous operation. 
A Promise object can be in one of three states:
* Pending: The initial state— the operation has not completed yet.
* Fulfilled: The operation has completed successfully and the promise now has a resolved value. For example, a request’s promise might resolve with a JSON object as its value.
* Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.

We refer to a promise as settled if it is no longer pending— it is either fulfilled(resolve) or rejected .

e.g. 

Pending: The dishwasher is running but has not completed the washing cycle.
Fulfilled: The dishwasher has completed the washing cycle and is full of clean dishes.
Rejected: The dishwasher encountered a problem (it didn’t receive soap!) and returns unclean dishes.

```
const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);
```
```
const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
}
const myFirstPromise = new Promise(executorFunction);
```

```
const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000);
  });
};
 
const prom = returnPromiseFunction();
```

.then() is a higher-order function— it takes two callback functions as arguments. We refer to these callbacks as handlers. When the promise settles, the appropriate handler will be invoked with that settled value.

* The first handler, sometimes called onFulfilled, is a success handler, and it should contain the logic for the promise resolving.
* The second handler, sometimes called onRejected, is a failure handler, and it should contain the logic for the promise rejecting.

We can invoke .then() with one, both, or neither handler! 

```
const prom = new Promise((resolve, reject) => {
  resolve('Yay!');
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
prom.then(handleSuccess); // Prints: 'Yay!'
```

```
let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};
 
prom.then(handleSuccess, handleFailure);
```

