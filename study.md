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
Both Ruby and JS can use variable.push()
```

Differences:

```md
Ruby: variable = ["1", "5"]
JS: const variable = ["1", "5"]
```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
Both use 'pop' to remove the last element in the array
```

Differences:

```md
syntax:
Ruby:
a = ["a", "r", "r", "a", "y"]
a.pop
returns nil if not in array

JS:
const a = ["a", "r", "r", "a", "y"]
a.pop()
returns undefined if not in array
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
Both use 'shift' to remove the first element of an array
```

Differences:

```md
Syntax
Ruby:
a = ["a", "r", "r", "a", "y"]
a.shift

JS:
const a = ["a", "r", "r", "a", "y"]
const b = a.shift()
```

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
Both use 'unshift' to move elements to the beginning of the array.
```

Differences:

```md
Ruby:
a = ["1", "2"]
a.unshift(81)
JS has 2 ways of moving elements to the beginning of the array:
const a = ["1", "2"]
a.unshift(81)
or
[81].concat(a)

```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.map { |array| array ** 2  }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredArray = array.map(function (array) {
  return array ** 2
})
```

## Array#reduce vs. Array.prototype.reduce()

Using Ruby's and JavaScript's `reduce` Array methods, find the product of the
numbers in the given array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.reduce(1, &:*)
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayProduct = array.reduce(function (acc, val) {
  return acc * val
})
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.find_all {|i| i % 2 != 0}
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddArray = array.filter(function(array) {
  return array % 2 !== 0
})
```
