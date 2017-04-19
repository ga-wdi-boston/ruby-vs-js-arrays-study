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
Both pushes value/s from an array and values needs "" when using pop
```

Differences:

```md
array = [a, b, c, d, e]
Ruby: array.push("f", "g", "h", "i") <!--pushes the new valuesinto the array-->
[a, b, c, d,].push(e).push(f) <!--creates a nameless array and pushes e and f into abcd array-->
http://ruby-doc.org/core-2.3.1/Array.html#method-i-push

Js: array.push('f') <!--pushes the f into the array-->
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
Both removes value/s from an array and values needs "" when using pop
```

Differences:

```md
array = [a, b, c, d, e]

Rub: array.pop #=> "d" <!--removes the d value from the array-->
array #=> "a" <!--removes the a value without .pop-->
array.pop(2) #=> ["b", "c"] <!--removes 2 values b & c-->
http://ruby-doc.org/core-2.3.1/Array.html#method-i-pop

Js: array.pop()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
Both remvoes value/s from an array and values needs "" when using pop
```

Differences:

```md
array = ["a", "b", "c", "d", "e"]

Ruby: array.shift #=> "a" <!--removes a from the array-->
array.shift(2) #=> ["c", "e"] <!--removes c & e values from the array-->
http://ruby-doc.org/core-2.3.1/Array.html#method-i-shift

Js: .shift() <!--removes a from the array-->
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
```

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
Both add values to the beginning of the array and values needs "" when using pop unless its a number
```

Differences:

```md
array = [b", "c"]

Ruby: array.unshift("a") <!--adds a to the beginning of the array-->
array.unshift(1, 2, 3) <!--adds 1 2 3 to the beginning of the array-->
http://ruby-doc.org/core-2.3.1/Array.html#method-i-unshift

Js: array.unshift(1, 2, 3, "a") <!-- adds 1 2 3 a to the beginning of the array-->
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:
http://ruby-doc.org/core-2.3.1/Array.html#method-i-map
<!--the items x & i are in the || and next to || the block invokes each element in the array-->
```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.map.with_index { |x, i| x +,-,*,/ i }
# your answer here
```

JavaScript:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
<!-- numbers is calling the arrays array and the callback function takes the arguement and returns a new array and each value multipled by 2.-->
```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers = array.map(function(x) {
  return x * 2;
})
// your answer here
```

## Array#reduce vs. Array.prototype.reduce()

Using Ruby's and JavaScript's `reduce` Array methods, find the product of the
numbers in the given array.

Ruby:
http://ruby-doc.org/core-2.1.0/Enumerable.html#method-i-reduce
<!--returns the product of the array-->
```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.reduce { |num, a| num +,-,*,/ a }
# your answer here
```

JavaScript:
<!--rreduces the array to 55-->
```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const number = array.reduce(function(acc, val) {
  return acc + val;
}, 0);
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// your aswer here
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:
http://ruby-doc.org/core-2.3.1/Array.html#method-i-select-21
<!--returns the odd numbers in the array-->
```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.select { |num| num.odd? }
```

JavaScript:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
<!--returns the odd numbers in the array-->
```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers = array.filter(function(arrays) {
  return arrays % 2
})
your answer here
```
