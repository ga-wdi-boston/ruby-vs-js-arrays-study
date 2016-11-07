## Compare and Contrast ##

Briefly describe the similarities and differences between `push`, `pop`,
`unshift`, `shift` in Ruby and JavaScript.

Include differences in return value and chain-ablilty

| method                  | Differences | Similarities |
|-------------------------|-------------|--------------|
| `push`                  |JS - returns the length of the new array.  Ruby - returns the array itself. | can append one or more values to an array |
| `<<` (compare to`push`) |Ruby only. Append one value at a time | Can be chained to append multiple values. Returns the array itself. |
| `pop`                   |JS - Returns undefined if array is empty. Ruby - Returns nil if the array is empty. Ruby - Can pass a number to pop and it will remove/return that number of values from end of array.| Removes last element from array and returns that element|
| `unshift`               |JS - Returns new length of array. Ruby - Returns the new array itself.| Adds one or more elements to the beginning of the array|
| `shift`                 |JS - Returns undefined for empty array. Ruby - Returns nil for empty array. Can remove more than one element. |Removes the first element of the array and returns that element.|


## Repeat Lab for JS ##

Working in [bin/study.js](bin/study.js) (storing the results of any access in `tmp`
for display):

-   Assign `20` to the element at `length+1`.
-   Access the 3rd element from the end of an array length of 5.
-   Access element 9 for a length of 5 elements.
-   Assign [-12, -49] to the range starting from 5th element from the end,
    for a length of 3.
-   Access all the elements starting at index 1.


## Repeat Bonus for JS ##

In [bin/study.js](bin/study.js), use a block initializer with new Array to create a
JavaScript array with ten elements where elements are equal to their index
multiplied by 2.
