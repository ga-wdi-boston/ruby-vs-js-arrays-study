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
They both append something to end of an array. they both use the same syntax.
```

Differences:

```md
push in ruby returns the array with new item appended to the end.
push in js returns the length of the array with the appeneded item.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
https://ruby-doc.org/core-2.2.0/Array.html#method-i-push
```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
They remove the last element from the array. They have the same name
```

Differences:

```md
in ruby pop can take an argument that specifies the number of items to remove
from the end of the array.

https://ruby-doc.org/core-2.2.0/Array.html#method-i-pop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
Removes the first element of the array and returns it.
```

Differences:

```md
In ruby shift can take an argument specifying the number of elements to remove
from the beginning of the array.

https://ruby-doc.org/core-2.2.0/Array.html#method-i-shift
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
```

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
Adds an element to the beginning of an array. To the 0th index.
```

Differences:

```md
unshift in js returns the new length of the array.
unshift in ruby returns the new array.

https://ruby-doc.org/core-2.2.0/Array.html#method-i-unshift
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.map { |number| number ** 2 }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.map(number => number ** 2)

```

## Array#reduce vs. Array.prototype.reduce()

Using Ruby's and JavaScript's `reduce` Array methods, find the product of the
numbers in the given array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.reduce(:*)

# your answer here
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.reduce((a, e) => n * e)
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.select { |e| e.odd? }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.filter(e => e % 2 !== 0)

```
