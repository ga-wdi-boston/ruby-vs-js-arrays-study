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
In both Ruby and Javascript, the push method will append an element (or multiple elements) to the end of an array.
```

Differences:

```md
In Ruby, << will only accept a single argument. The push method, however, will accept multiple arguments.
```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
In both languages, `pop` will let you remove elements from an array. If you type array.pop(), the last element will be removed from the array in both languages.
```

Differences:

```md
In Ruby, you can specify how many elements you'd like to remove from the array. If you run array.pop(1, 2), Ruby will remove two elements starting from index 1. In Javascript, .pop() will just remove the last element from the array. You cannot specify how many elements get removed.
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's `shift` Array methods?

Similarities:

```md
In both methods, `shift` will take the first element of an array and return it in the console.
```

Differences:

```md
In Ruby, that first element will be returned as an array. In Javascript, that first element will be returned as an integer or an array.
```

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
In both languages, the unshift method will append the input to the beginning of the array.
```

Differences:

```md
In Javascript, the unshift method will first return the length of the new array. You have to call the array again to see the new value appended to the beginning of the array. In Ruby, the unshift method will immediately return the new array with the given value appended to the front.
```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# your answer here
array.map { |n| n * n }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// your answer here
array.map(e => e * e)
```

## Array#reduce vs. Array.prototype.reduce()

Using Ruby's and JavaScript's `reduce` Array methods, find the product of the
numbers in the given array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.reduce(1, :*)
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.reduce ((e, i) => e * i)
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.select { |n| n if n % 2 != 0 }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.filter(e => e % 2 !== 0)
```
