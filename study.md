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
<!-- The push methods are similar in JS and Ruby in the way the method is called
(.push). -->
```

Differences:

```md
<!-- The push methods are different in JS and Ruby in that no parens are needed
in Ruby.
 -->
```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
<!-- The pop methods are similar in JS and Ruby in the way the method is called
(.pop). -->
```

Differences:

```md
<!-- The pop methods are different in JS and Ruby in that no parens are needed
in Ruby. -->
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
<!-- your answer here -->
```

Differences:

```md
<!-- your answer here -->
```

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
<!-- they both remove the 0th element from an array and shift the rest of the
elements-->
```

Differences:

```md
<!-- JS returns undefined if the array is empty when shifting.  Ruby returns nil. -->
```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
square_array = array.map { |n| n ** 2 }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function PowerTwo(element) {
    let squareVal = Math.pow(element)
    return element*element
}

squareArray = array.map(PowerTwo)

console.log(squareArray)
```

## Array#reduce vs. Array.prototype.reduce()

Using Ruby's and JavaScript's `reduce` Array methods, find the product of the
numbers in the given array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# no time to complete this

```

JavaScript:

```javascript

// I didn't get this.  My brain is shot.  way over on time limit.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let product = array.reduce(function (prev, curr) {
  return prev * curr
}, 0)

console.log(product)
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby


# run out of time
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// I've run out of time
```
