## Compare and Contrast ##

Briefly describe the similarities and differences between `push`, `pop`,
`unshift`, `shift` in Ruby and JavaScript.

Include differences in return value and chain-ablilty

| method                  | Differences | Similarities |
|-------------------------|-------------|--------------|
| `push`                  | ruby returns| both mutate
                            array, js   |
                            returns     |
                            length
| `<<` (compare to`push`) | << can only
                            accept one
                            value, push
                          | can be chained             |
| `pop`                   | syntax -- no| both return the last value, both
                            () on ruby     chain the return only and mutat
| `unshift`               | js returns length,
                          | ruby returns array             |
| `shift`                 | ruby can      both return removed values
                            shift more
                            than one space


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
