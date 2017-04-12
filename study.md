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
For both, we are adding to an an array.
```

Differences:

```md
In ruby, you can push mulitple elements at a time.
```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
In Ruby and Javscript, pop removes the last element and returns it.
```

Differences:

```md
The biggest difference I noticed is thatPop in javascript does not take
any arguments like Ruby does. 
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
Both remove the first element from an array.
```

Differences:

```md
Shift in ruby will return the first element of the array
```

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
They both add elements to the beginning of an array.
```

Differences:

```md
Ruby returns a modified array, so more methods can still be added (chained). Javascript just returns the
length of the array and can not be modified.
```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.map {|i| i * i}
```

JavaScript:

```javascript

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let square = function(num){
  return num * num
};
array.map(square);
```

## Array#reduce vs. Array.prototype.reduce()

Using Ruby's and JavaScript's `reduce` Array methods, find the product of the
numbers in the given array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


array.reduce {|sum, n| sum + n}


```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.reduce(function(a, b){
  return a + b;
  }, 0);
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.select{|item| item%2 !== 0 }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.filter(function(value){
  return value % 3 == 0;
  })
```
