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
Both methods add an element to the end of the array.
```

Differences:

```md
JS returns the length of the new array while Ruby returns the array itself.
```

JS MDN for Array
Ruby Docs for Array

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
Both methods can be used to remove the last element of an Array.
```

Differences:

```md
Ruby's `pop` method can take an argument of `n` and it will remove that number of elements from the end of the array.
JS returns the deleted element and Ruby returns the array itself.
If the array is empty, JS will return `undefined` while Ruby will return `nil`.
```

JS MDN for Array
Ruby Docs for Array

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
Both methods remove the first element of the array.
```

Differences:

```md
JS returns the deleted item and returns `undefined` if the array is empty.
Ruby returns the array itself and `nil` if the array is empty.
Ruby's `shift` can take a number argument and the first `n` items will be deleted from the array.
```

JS MDN for Array
Ruby Docs for Array

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
Both methods add something to first position in an array.
```

Differences:

```md
In JS the `unsift()` method can also be used on "array-like-objects" such as `arguments`.
```

JS MDN for Array
Ruby Docs for Array

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.map do |num|
  num * num
end
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.map(number => {
  return number ** 2;
});
```

## Array#reduce vs. Array.prototype.reduce()

Using Ruby's and JavaScript's `reduce` Array methods, find the product of the
numbers in the given array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.reduce(:+)
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.reduce((prev, curr) => {
  return prev + curr;
});
```

- Ruby Docs for Enumerable
- JS MDN for Array.prototype.reduce()

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.select do |e|
  e % 2 == 1
end
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.filter((e) => {
  return e % 2 === 1;
});
```

Used Node and Pry for all problems in this section.
