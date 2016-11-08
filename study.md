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

```txt
The similairties between the push method is that it will only add an item onto the end of an array. In regards to push and javascript, you can add multiple elements to an array i.e. array.push(6, 7, 8). In Ruby you can do the same thing but you do not need to use parentheses.

The '<<' functionality is not available in JS when it comes to arrays. You use it in Ruby but you can only add elements one at a time unles you chain the '<<'

The 'pop' functionality removes elements from the ends of arrays in both languages. In Ruby you can specify the amount of elements you want to remove. In JS you can only remove the last element from the array as opposed to multiple elements.

In Ruby, 'unshift' will add  elements to the beginning of the array. It enables you to add more than one element at a time. It is the same in JS but parentheses are required.

The 'shift' method will report and remove the first element in an array in Ruby. It does not have chaining capabilities so only the first element can be removed. In Javascript it has the same functionality but it requires parantheses to be used
```


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
