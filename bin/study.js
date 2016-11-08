'use strict';

// Repeat Ruby Lab for JS
let myArray = [1, 2, 3, 4, 5];
let ind = myArray.length + 1;
myArray[ind] = 20;

myArray[myArray.length - 3];
myArray[9] = 5;
myArray.splice(myArray.length-5, 3, -12, -49);
myArray.slice(1);
// Repeat Ruby Bonus for JS
let myArray = Array.apply(null, Array(10))
myArray.map(function (x, i) {return i * 2});
