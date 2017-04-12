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
They both add the specified value onto the end of the array.
```

Differences:

```md
In Ruby, .push() returns the new array after the addition, while in JS .push() returns the length of the resulting array.

In Ruby, can only add one object onto the array, but .push can be chained.  In JS, can add multiple objects to the array.
```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
They both remove the last element of the array and return it.


```

Differences:

```md
If array is empty, Ruby .pop() returns nil and JS .pop() returns undefined.

Ruby .pop(num) returns an array containing the last num elements of the array.
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
They both take the first element from the array and return it, shifting the remaining elements down one element.
```

Differences:

```md
In Ruby, can add an argument .pop(num) which will remove the first num elements from the array and return them as their own array.  The original array will contain all the old elements that are not contained in the returned array.

Returns nil in Ruby, undefined in JS.
```

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
They both add one or more elements onto the beginning of the array.
```

Differences:

```md
In JS, .unshift() returns the length of the new array.
In Ruby, .unshift() returns the resulting array.
```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
new_array = array.map{ |i| i * i }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.map((x) => x * x));
```

## Array#reduce vs. Array.prototype.reduce()

Using Ruby's and JavaScript's `reduce` Array methods, find the product of the
numbers in the given array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
newArray = array.reduce{ |x, i| x *= i }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.reduce((x, y) => x * y);
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
new_array = array.select{ |i| i % 2 == 1 }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
new_array = array.filter((i) => i % 2 == 1)
```
