## Compare and Contrast ##

Briefly describe the similarities and differences between `push`, `pop`,
`unshift`, `shift` in Ruby and JavaScript.

Include differences in return value and chain-ablilty

| method
|-------------------------|--------------------|-----------------------|
| `push`
      Differences: no () or ; in ruby.
      Similarities: takes multiple arguments. Both return newly modified array.
          Chain-ability.
| `<<` (compare to`push`)
      Differences: An equivalent shortend version of push does not exist in JS.
      Similarties: Its like a push function in every way(as described above)
          except it doesnt multiple arguments.
| `pop`
      Differences: no () or ; in ruby. You can specify multiple entries to be
          popped in ruby.
      Similarities: In both, pop removes the last entry(s). Chain-able.
| `unshift`
      Differences: no () or ; in ruby. JS returns the new length.
      Similarities: Add elements at the beginning of arrays.

| `shift`
      Differences: no () or ; in ruby. Returns array in ruby, returns removed
      element in JS.
      Similarities: no chaining.


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
