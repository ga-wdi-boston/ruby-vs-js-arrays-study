'use strict';

// Repeat Ruby Lab for JS

let array = [1, 2, 3, 4, 5]; // undefined

array[array.length + 1] = 20; // 20

array[array.length - 3]; // 5

array[9]; // undefined

array.splice(array.length-5, 3, [-12, -49]); // [ 1, 2, [ -12, -49 ], , 20 ]

for (let i = 1; i < array.length; i++) { // 2 -12 -49 undefined 20
  return array[i]
};




let arrayTimesTwo = new Array(10).fill(1).map((e, i) => i *2);
