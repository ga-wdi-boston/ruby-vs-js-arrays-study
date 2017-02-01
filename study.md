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
The syntax is nearly identical. For instance:
js:
let a = []
a.push('5') => ['5']
Ruby:
a = []
a.push('5') => ['5']
```

Differences:

```md
In Ruby the return value is the array itself whereas in JavaScript the return
value is the length of the array.
```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
Both methods remove the last element of an array and return an array of the removed
elements.
```

Differences:

```md
In Ruby the .pop method has a parameter specifying the amount of elements
one wants removed from the end of an array where as in JavaScript the .pop()
method takes no arguments.
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
In both languages the .shift method removes the first element of an array
permenantly altering it and returns the removed element.
```

Differences:

```md
As in .pop() the shift method in JavaScript takes no arguments whereas in Ruby
the method takes an argument specifying the amount of elements one wants removed
from the beginning of the array.
```

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
Both methods add elements to the beginning of an array and both methods have
virtually the same syntax.
```

Differences:

```md
As in the .push method in Ruby the method returns the newly formed array whereas
in JavaScript the method returns the length of the new array.
```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

new_array = array.map { |i| i ** 2 }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArray = array.map(function (i) {
  return i ** 2;
});
```

## Array#reduce vs. Array.prototype.reduce()

Using Ruby's and JavaScript's `reduce` Array methods, find the product of the
numbers in the given array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.reduce {|a, b| a * b}
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.reduce(function (a, b) {
  return a * b;
});
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.select {|i| i % 2 == 1}
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.filter(function (i) {
  return i % 2 === 1;
});
```
