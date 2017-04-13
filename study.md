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
Both the Ruby and JavaScript `push` methods adds one or more elements to the end
of an array.
```

Differences:

```md
The JavaScript `push` method returns the new length of the array after it adds
one or more elements to the end of an array.

The Ruby `push` method returns the array itself after it adds one of more elements
to the end of an array.
```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
Both the Ruby and JavaScript `pop` methods remove the last element from an array
and returns that element.
```

Differences:

```md
The JavaScript `pop` method contains no parameters.

The Ruby `pop` method can contain either no parameters or one `n` parameter.
If a `n` parameter is given to the Ruby `pop` method, it returns an array of the
last `n` elements or less.
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
Both the Ruby and JavaScript `shift` methods remove the first element from an array
and returns that element.
```

Differences:

```md
The Ruby `shift` method can contain either no parameters or one `n` parameter.
If a `n` parameter is given to the Ruby `shift` method, it returns an array of the
first `n` elements or less (shifting all remaining elements down by one).
```

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
Both the Ruby and JavaScript `unshift` methods adds one or more elements to the
beginning of an array.
```

Differences:

```md
The JavaScript `unshift` method returns the new length of the array after it adds
one or more elements to the beginning of an array (moving other elements
upwards).

The Ruby `unshift` method returns the array itself after it adds one of more elements
to the beginning of an array.
```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

squares_array = array.map { |num| num * num }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const squares_array = array.map(function (x) {
  return x * x
})
```

## Array#reduce vs. Array.prototype.reduce()

Using Ruby's and JavaScript's `reduce` Array methods, find the product of the
numbers in the given array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

product_array = array.reduce { |accumulator, element| accumulator * element }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const product_array = array.reduce(function (accumulator, element) {
  return accumulator * element
})
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

oddarray = array.select { |num| num.odd? }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const oddarray = array.filter(number => number % 2 === 1)
```
