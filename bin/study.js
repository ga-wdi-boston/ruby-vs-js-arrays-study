'use strict';
// Repeat Ruby Lab for JS
let myArray = [1, 2, 3, 4, 5];

// Assign `20` to the element at `length+1`
myArray[myArray.length + 1] = 20;

// Access the 3rd element from the end of an array length of 5.
myArray = [1, 2, 3, 4, 5];
myArray[myArray.length - 3];

// Access element 9 for a length of 5 elements.
myArray[9];  // returns undefined

// Assign [-12, -49] to the range starting from the 5th element from the end,
// for a length of 3.

// Can't be done the same way as in Ruby so you would have to shift and unshift the values (shown below) or use something
// like slice or splice maybe
myArray.shift();
myArray.shift();
myArray.shift();
myArray.unshift(-49);
myArray.unshift(-12);

// Access all the elements starting at index 1.

// Again, can't be done the same way as in Ruby so you would have to use a loop to iterate through and return the values
for (let i = 1; i < myArray.length; i++) {
  return myArray[i];
}


// Repeat Ruby Bonus for JS
// Use block initializer with Array.new to create an array with ten
// elements where elements are equal to their index multiplied by 2
myArray = new Array(10).fill(1).map((e, i) => e * (i * 2));
