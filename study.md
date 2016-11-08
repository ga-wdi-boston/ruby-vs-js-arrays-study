## Compare and Contrast ##

Briefly describe the similarities and differences between `push`, `pop`,
`unshift`, `shift` in Ruby and JavaScript.

Include differences in return value and chain-ablilty

| method                  | Differences | Similarities |
|-------------------------|-------------|--------------|
| `push`                  |  Essentially the same           | both add element to end of array and return that element.  Both modify element in place.             |
| `<<` (compare to`push`) |  Returns the array in ruby (allowing for chainability.)           |      Push in javascript does not return array.        |
| `pop`                   |             | Essentially te same.             |
| `unshift`               |In JS, unshift returns length of the array.  In ruby returns the array (allowing for chainability.)             |  Both add argument to beginning of array.            |
| `shift`                 |             |  Both remove the first value from the array and return the value            |


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
