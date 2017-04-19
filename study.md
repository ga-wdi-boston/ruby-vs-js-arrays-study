# Ruby vs. JavaScript: Arrays Study

Use your favorite search engine and the provided readings to research and
respond to the following questions.

In your responses, be sure to cite any relevant sources you consulted in your
search. We ask you to write responses in your own words in order to see how you
process what you've read. Please do not respond with direct quotes from source
material. Instead, digest what you've read and repeat it in your own voice.

## Required Readings

-   [Ruby](https://github.com/ga-wdi-boston/ruby)
-   [Ruby Arrays](https://github.com/ga-wdi-boston/ruby-arrays)
-   [JavaScript Reference Types](https://github.com/ga-wdi-boston/js-reference-types)
-   [JavaScript Array Methods](https://github.com/ga-wdi-boston/js-array-methods)

## Array#push vs. Array.prototype.push()

What are the similarities and differences between Ruby's and JavaScript's `push`
Array methods?

Similarities:

```md
<!-- .Pushing in JS and Ruby appends whatever element is being .pushed right to the end of an array. You can also chain multiple appends to the end of an array you are .pushing to-->
```

Differences:

```md
<!-- The .push array method in JS and Ruby are mostly similar aside from the fact that when appending strings to an array in Ruby, you use "double quotes" around the elements, where in JS you can use 'single' or "double quotes". -->
```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
<!-- The pop method in Ruby works very similar to the way it does in does in JS, removing the last element of the array (unless otherwise specified). -->
```

Differences:

```md
<!-- The syntax for .popping and element is an array differs between JS and Ruby
One way you can push to an array in Ruby: #=> ["a"]
How you push to an array in JS: myFlavors.pop()
-->
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
<!-- The shift method in Ruby works very similar to the way it does in does in JS, removing the first element of the array-->
```

Differences:

```md
<!-- In Ruby, the shift method will returns nil if the array is empty, while this is not the case for JS. -->
```

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
<!-- In Ruby and JS, the .unshift method adds elements to the beginning of an array. -->
```

Differences:

```md
<!-- .Unshift in JS will return the length of the array, while in Ruby, the array itself is returned. -->
```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# squares = array.map {|number| number *= 2}
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const squares = array.map(number => number ** 2);
```

## Array#reduce vs. Array.prototype.reduce()

Using Ruby's and JavaScript's `reduce` Array methods, find the product of the
numbers in the given array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Not sure how to do on my own yet.
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Still not sure how to do on my own yet.
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Not sure how to do on my own yet.
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Still not sure how to do on my own yet.
```
