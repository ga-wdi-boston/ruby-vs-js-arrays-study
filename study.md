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
.push("somethingHere")
both can do this with "" around or not
adds elements
```

Differences:

```md
use of ;
ruby can use << instead of .push
javascript can only push one element at a time
ruby can push multiple elements

```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
both do the same thing to the array if no parameter
returns the element to the console
```

Differences:

```md
ruby arr.pop removes an element from array
javscript needs .pop(); and can use popped to view popped item
for ruby .pop(#) pops the number of elements put inside () from the right
for javascript, it still just pops off the last element, no matter what number is inside the ()
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
without parametes they do the same thing
```

Differences:

```md
with parameters .shift(#) will remove the number of elements from the array
javascript will still only affect one element from the array

```

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
both add to left side of the array
```

Differences:

```md
ruby can use ( , ) to change the array
```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers_squared = numbers.map{|numbers| numbers ** 2}

# ruby needs .method{|i| i (whatver you're doing to i)}
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squares = numbers.map(number => {
  return number ** 2;
});

// .method (argument =>(or shorthand for function) then return (rules for manipulating))
```

## Array#reduce vs. Array.prototype.reduce()

Using Ruby's and JavaScript's `reduce` Array methods, find the product of the
numbers in the given array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.reduce{|sum, x| sum*x }
# does not need parenthesis
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.reduce((x,y) => x*y)
//use fat arrow shorthand
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

filtered_numbers = number.select{ |number| number.odd? }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filtered = numbers.filter(numbers => numbers % 2 !== 0);
```
