## Compare and Contrast ##

Briefly describe the similarities and differences between `push`, `pop`,
`unshift`, `shift` in Ruby and JavaScript.

Include differences in return value and chain-ablilty

| method                  | Differences | Similarities |
|-------------------------|-------------|--------------|
| `push`                  | js returns length, ruby returns whole aray       | both push to the end, takes many args|
| `<<` (compare to`push`) | js returns length, ruby returns whole array      | both push to end, take many args |
| `pop`                   | none        | remove last element, both return popped element |
| `unshift`               |  js returns length, ruby returns whole array           |              |
| `shift`                 |  js only takes 1 param           |              |


## Repeat Lab for JS ##

Working in [bin/study.js](bin/study.js) (storing the results of any access in `tmp`
for display):

-   Assign `20` to the element at `length+1`.

myArray[myArray.length + 1] = '20';

-   Access the 3rd element from the end of an array length of 5.

myArray[myArray.length - 3]

-   Access element 9 for a length of 5 elements.

myArray.slice(8, 5) // will return undefined

-   Assign [-12, -49] to the range starting from 5th element from the end,
    for a length of 3.

myArray.splice(my.Array.length-5, 3, [-12, -49])

-   Access all the elements starting at index 1.

myArray.shift


## Repeat Bonus for JS ##

In [bin/study.js](bin/study.js), use a block initializer with new Array to create a
JavaScript array with ten elements where elements are equal to their index
multiplied by 2.

myArray = []
