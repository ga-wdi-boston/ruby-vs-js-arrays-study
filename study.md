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

push - differences
In Javascript, push returns the length of the array.
In Ruby, it returns the array, so several appends may be chanined together.
  similarities -
In both JS and Ruby, .push appends a value to the end of the array.


pop - differences
In Javascript, it deletes the last element in the array and returns the deleted
element.
In Ruby, it removes the last element in the array and returns the array
  similarities -
In both Ruby and JS, pop deletes the last element from the array.

unshift - differences
In Ruby, it will add a new item to the beginning of the array.
In JS, it adds one or more elements of the array and returns the new length.

shift - difference
In Ruby - to retreive and remove the first item of the array, we use shift.
In JS, shift is like pop, except it works for the beginning of the array. It
pulls the first elements off and returns it.

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
