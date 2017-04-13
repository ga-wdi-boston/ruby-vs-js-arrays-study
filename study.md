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
Both insert an object to the end of an array
```

Differences:

```md
Syntax for Ruby can be written in shorthand as <<. For JavaScript the method is called using .push()
```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
Both remove the last element in an array.
```

Differences:

```md
When using pop method in Ruby you can enter an argument to specify which element to remove wheras JavaScript will always remove the last element.
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
Both will remove the first element in an array.
```

Differences:

```md
Similar to pop, when using shift in Ruby you can include an argument to specify element(s) relative to the first element whereas JavaScript will always rmeove the first element.
```

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
Both add elements to the beginning of an array.
```

Differences:

```md
JavaScript's unshift method returns the length of the updated array:
> array = [1,2,3,4]
[ 1, 2, 3, 4 ]
> array.unshift(9,8)
6
> array
[ 9, 8, 1, 2, 3, 4 ]

Ruby's unshift method returns the updated array:
[1] pry(main)> array = [1,2,3,4]
=> [1, 2, 3, 4]
[2] pry(main)> array.unshift(9,8)
=> [9, 8, 1, 2, 3, 4]
```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

newArray = array.map { |num| num ** 2}
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArray = array.map(function(num){
  num = num ** 2
})
```

## Array#reduce vs. Array.prototype.reduce()

Using Ruby's and JavaScript's `reduce` Array methods, find the product of the
numbers in the given array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

product = array.reduce(:*)
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const product = array.reduce(function(a, b){
  return a * b
})
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

odd_num_array = array.select(&:odd?)
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumArray = array.filter(function(num){
  if (num % 2 !== 0)
  return num
})
```
