## Compare and Contrast ##

Briefly describe the similarities and differences between `push`, `pop`,
`unshift`, `shift` in Ruby and JavaScript.

Include differences in return value and chain-ablilty

| method                  | Differences | Similarities |
|-------------------------|-------------|--------------|
| `push`                  |             |              |
| `<<` (compare to`push`) |             |              |
| `pop`                   |             |              |
| `unshift`               |             |              |
| `shift`                 |             |              |

'push'
  similarities
    - adds new objects to array in similar manner whether in JS or Ruby
    - both return array with new objects added to end
    - both can chain
    - both accept multiple arguments
  differences
    - Ruby doesn't require semicolon at the end of push statement

'<<'
  similarities
    - shovel operator acts like push in JS
    - returns array with new object added to end
  differences
    - doesn't exist in JS
    - different from push in Ruby because only accepts one argument, not multiple

'pop'
  similarities
    - both work on arrays
  differences
    - Ruby method removes the last element from self and returns it, or returns an array of the last n elements if a number n is given
    - JS method just removes last element from array

'unshift'
  similarities
    - both work on arrays
    - both take in arguments
    - both add items
  differences
    - Ruby method prepends the provided value to the front of the array, moving all other elements up one
    - JS method adds new items to the beginning of an array, and returns the new length

'shift'
  similarities
    - both work on arrays
    - both remove items
  differences
    - Ruby method removes the first element from the array and returns it
    - JS method removes the first item of an array, and returns that item


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
