## Compare and Contrast ##

Briefly describe the similarities and differences between `push`, `pop`,
`unshift`, `shift` in Ruby and JavaScript.

'push' - Ruby returns the array while JS does not.Both push the new item to the end of an array
'pop'  - Both Ruby & JS remove the last item in anarray and return it
'unshift' - In both Ruby & JS it prepends the object to the front of the array.
'shift' - In both Ruby & JS it removes the first item of an array.  Ruby returns it


Include differences in return value and chain-ablilty

| method                  | Differences                              | Similarities      |
|-------------------------|-------------                             |--------------     |
| `push`                  | Ruby returns                             |                   |
| `<<` (compare to`push`) | Cannot handle more than 1 item at a time |                   |
| `pop`                   |                                          |Ruby & JS Returns  |
| `unshift`               | Ruby returns                             |                   |
| `shift`                 | Ruby returns                             |                   |


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
