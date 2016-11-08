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

`push`:
Push works the same in both Javascript and Ruby with the only real difference
being syntax; i.e. Javascript requires parethesis around the arguments you give
the function while with Ruby you can either include them or simply use spaces in
place of them. Both methods push an element onto the end of the array and both
methods can push multiple elements onto the end of the array by supplying
multiple arguments to the method.

`<<`:
This syntax/method is a Ruby-specific functionality that does not exist in a
similar way in Javascript. In Ruby, this function allows you to push a single
item onto the end of the array. Multiple arguments cannot be supplied to it,
as it only pushes one element.

`pop`:
In both Ruby and Javascript the pop element will remove an element from the end
of an array and return it to you. However, while in Javascript you can only use
pop to remove and return a single value in Ruby you can supply an argument that
specifies how many elements to remove and return to you. It returns them in
an array of the length you specified with the argument.

`unshift`:
Once again, `unshift` works the same in both Javascript and Ruby by allowing you
to place one or more new elements at the beginning of an array and 'shift' the
elements originally in the array to further indexes. Once again, you can replace
the parenthesis surrounding your passed arguments for the unshift method in Ruby
with spaces.

`shift`:
In both Ruby and Javascript if you run the shift method on an array with no
arguments it will return the first element from that array, remove it, and shift
the remainder of the array 'forward' to lower indexes, thus creating a shortened
array. However, in Javascript if you supply any number argument to `shift` it will
still only return the first element and shift the array, while in Ruby if you supply
a number argument it will return an array of the length you supplied `shift` starting
from the first element and moving to the last element contained in the length you
supplied while also removing those elements from the array and shifting the rest of the array into their place.

## Repeat Lab for JS ##

Working in [bin/study.js](bin/study.js) (storing the results of any access in `tmp`
for display):

-   Assign `20` to the element at `length+1`.
-   Access the 3rd element from the end of an array length of 5.
-   Access element 9 for a length of 5 elements.
-   Assign [-12, -49] to the range starting from 5th element from the end,
    for a length of 3.
-   Access all the elements starting at index 1.

```
// Q1
let marr = [1, 2, 3, 4, 5];
marr[marr.length + 1] = 20; // [ 1, 2, 3, 4, 5, , 20 ]

// Q2
let marr = [1, 2, 3, 4, 5];
marr[2]; // 3 (Javascript does not work with negative indexes)

// Q3
marr.slice(8, 5); // [] (Since there is no 9th element, JS returns empty array)

// Q4 (I don't think there is a "good" or "elegant" way to do this like in Ruby)
let marr_sliced = marr.slice(0, 5);
let put_in = [-12, -49];
for(let i = 0; i < put_in.length; i++){
  marr_slice[i] = put_in[i];
}

// Q5
marr.slice(1, marr.length) // Doesn't matter if we supply a 'range' too long; it'll just stop.




## Repeat Bonus for JS ##

In [bin/study.js](bin/study.js), use a block initializer with new Array to create a
JavaScript array with ten elements where elements are equal to their index
multiplied by 2.
