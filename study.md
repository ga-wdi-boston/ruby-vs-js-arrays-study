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
<!-- They both add elements to the end of an array-->
```

Differences:

```md
<!-- you can chain .push's in ruby, which is due to both the
funciton chaining logic AND the fact that push returns teh updated array in ruby but by default in Javascript returns the new length of the array -->
```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
<!-- Both are used to remove the last items of an array, and both will return the REMOVED elements if you assign it to a new variable(not the array with the updated array with removed elements) -->
```

Differences:

```md
<!-- Ruby will allow you specify a number of array elements to remove. -->
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
<!-- Shift is similar to POP but basically the reverse b/c it
removes the elements at the begining of the array instead of the end.
By default it removes only one array element -->
```

Differences:

```md
<!-- ruby lets you specify an amount of elements to remove from the front-->
```

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
<!-- Both prepends the new value to the front of the array -->
```

Differences:

```md
<!-- your answer here -->
```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

squared_array = array.map { |num| num * num}
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// your answer here
let squared_array = array.map( (num) => { return num*num })

console.log(squared_array)
```

## Array#reduce vs. Array.prototype.reduce()

Using Ruby's and JavaScript's `reduce` Array methods, find the product of the
numbers in the given array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.reduce(1, :*)
# your answer here
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// your answer here//I'm not sure whe this needs the second paremater for the input but I couldn't get it to work wiht only one parameter
const array_product = array.reduce((acc, num) => {return num * acc})

console.log(array_product)
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


# your answer here
```
array.select{ |num| num.odd? }
JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddOnly = (num) => {if(num % 2 === 1){return num}}
const oddOnlyArray = array.filter(oddOnly)
// your answer here
console.log(oddOnlyArray)
```
