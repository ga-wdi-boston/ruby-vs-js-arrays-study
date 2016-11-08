'use strict';
// Repeat Ruby Lab for JS
// let myArray = [1, 2, 3, 4, 5];
let myArray = [1, 2, 3, 4, 5];
myArray[myArray.length+1] = 20;
myArray[myArray.length-3];
myArray[9];
myArray.splice(myArray.length-5, 3, [-12, -29]);
myArray = [].concat.apply([], myArray);
for (let i = 1; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Repeat Ruby Bonus for JS
