## Compare and Contrast ##

Briefly describe the similarities and differences between `push`, `pop`,
`unshift`, `shift` in Ruby and JavaScript.

Include differences in return value and chain-ablilty

push (ruby):
a = [6, 7, 8]
a.append(9)

push (js):
a = [6, 7, 8];
a.push(9)

pop (ruby)
a = [6, 7, 8]
a.pop()

pop (js)
a = [6, 7, 8];
i = a.pop();

<< (ruby)
a = [6, 7, 8]
a << 9 # same as push

<< (js)
Not used like Ruby.

unshift (ruby)
a = [6, 7, 8]
a.unshift(5)

unshift (js)
a = [6, 7, 8];
a.unshift(5);

shift (ruby)
a = [6, 7, 8]
a.shift

shift (js)
a = [6, 7, 8];
i = a.shift();

## Repeat Lab for JS ##

Working in [bin/study.js](bin/study.js) (storing the results of any access in `tmp`
for display):

-   Assign `20` to the element at `length+1`.
-   Access the 3rd element from the end of an array length of 5.
-   Access element 9 for a length of 5 elements.
-   Assign [-12, -49] to the range starting from 5th element from the end,
    for a length of 3.
-   Access all the elements starting at index 1.

# Skipped as duplicate per Ben's clarification in slack.

## Repeat Bonus for JS ##

In [bin/study.js](bin/study.js), use a block initializer with new Array to create a
JavaScript array with ten elements where elements are equal to their index
multiplied by 2.

# Skipped as duplicate per Ben's clarification in slack.
