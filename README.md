# Exercises

1. Create two functions: `double` and `square`.
`double` should take a number and return the number times two.
`square` should take a number and return the number squared.
```js
const double = (num) => {
  return num*2;
}
const square = (num) => {
  return num*num;
}
const doubleSquare = (num) => {
  return double(square(num));
}
```

 * Create a third function `doubleSquare` that uses both of the functions to return a number that is first doubled and then squared.

2. Create a function `classyGreeting` that takes as input the strings `firstName`  and `lastName`,
and returns a string with a greeting using the two.
```js
const classyGreeting = (firstName, lastName) => {
  return `Hey there ${firstName} ${lastName}`;
}
```
  * Create a second function `yell`  that takes string as input and returns the string in all capitalized letters.
```js
const yell = (string) => {
  return string.toUpperCase();
}
```
  * Create a third function  `yellGreeting`  that will take the `firstName`  and `lastName`  as inputs and yell a greeting using the two.
```js
const yellGreeting = (firstName, lastName) => {
  return yell(classyGreeting(firstName, lastName));
}
```

3. The [concat](https://www.w3schools.com/jsreF/jsref_concat_array.asp) array method is used to merge two (or more) arrays.
Write a `removeDupes` function that takes an array as an argument and returns a copy without any duplicate elements.
Then, write a function `concatAndRemoveDupes`  that combines two arrays and removes any duplicates.
```js
const removeDupes = (array) => {
for (let j = 0; j<array.length; j++) {
  let counter = 0;
  for (let i = 0; i<array.length; i++) {
    if (array[i] === array[j]&&counter>0) {
      array.splice(i,1);
    } else if (array[i] === array[j]){
     counter+=1
    }
  }
}
return array;
}

const concatAndRemoveDupes = (array1 , array2) => {
  let array3 = [...array1,...array2];
  return removeDupes(array3);
}
```
  _Hint:_ Use the array method `includes`, an object, or a Set. Or the spread operator instead of concat.  

4. Given a list of grades, we can get the median grade by sorting the list and taking the middle element, or the average of the two middle elements.
Create the functions `sort` and `middleElement`, and then use them to create the functions `median`.

let grades = [91, 85, 100, 92, 88];

console.log(median(grades)); // Should log 91

//corey let me know about sort.
```js
const sort = (array) => {
  let newArray = array.sort((a,b)=>(a-b))
return newArray;
}
const middleElement = (array) => {
    return array[Math.floor(array.length/2)];
}
const median = (array) => {
  if (array.length%2) {
    return middleElement(sort(array));
  } else {
    sort(array);
    return array[array.length/2]+array[(array.length/2)-1]
  }
}
```

5. Write a function called `repeat` that takes in a string and numberOfTimes. The function should log to the screen the string however many times as numberOfTimes. If the user does not enter a numberOfTimes it should default to 2.
```js
const repeat = (string, numberOfTimes = 2) => {
  for (let i = 1; i <= numberOfTimes; i++) {
    console.log(string);
  }
}
repeat("yes")
```
6. Using the spread operator, write a function that can take any number of arguments and return the sum of all of them.
```js
function sumAll(...args) {
  let sum = 0;
  for(let i = 0; i < args.length; i++) {
    sum+=args[i];
  }
  return sum;
}
```

7. Write a function called `adder` takes in one number and returns a function that will add that number with another number.
Using `adder` create an `add5` and an `add9` function. Hint: Closures!
```js
const adder = (num1) => {
  return function (num2) {
    return num1+num2;
  }
}
const add5 = adder(5);
console.log(add5(4));
const add9 = adder(9);
console.log(add9(4));
```
