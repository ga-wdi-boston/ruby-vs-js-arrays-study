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
For both Ruby and JS, the push method is used to add values to the end of an existing array.  In addition, they both modify an existing array rather than create a new one.
```

Differences:

```md
The only difference I was able to determine is the syntax.  While JS requires a variable be declared (with let) before being applied (and ending with a semicolon), they code is virtually the same.
```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
For both Ruby and JS, the pop method removes an item from the end of an existing array.
```

Differences:

```md
There is one significant difference between the pop method for JS and Ruby

Sample Ruby Code (for reference):
a = [2, 3, 4]
a.pop(2)

For Ruby, the value included within the parentheses indicates how many items to remove.  The example above would return the array [3, 4].  In JS, however, applying the pop method removes a single element of an array and does not work the same way.  For the example above, the JS method a.pop() would only remove the very last item (i.e. it does not take arguments).
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
For both the JS and Ruby shift method, the first element of an array is removed and returned.
```

Differences:

```md
The difference is that JS does not take arguments for the number of elements that is to be removed from the start of an array.  Ruby, on the other hand, allows you to specify the number of elements to be removed from the beginning of the array.

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
For both Ruby and JS, the unshift method adds one or more elements to the beginning of an array.
```

Differences:

```md
I was unable to determine any significant differences for the unshift method with JS and Ruby (aside from syntax).
```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

new_array = array.map { |number| number * number}
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let new_array = array.map(function(x) {
  return x * x;
});
```

## Array#reduce vs. Array.prototype.reduce()

Using Ruby's and JavaScript's `reduce` Array methods, find the product of the
numbers in the given array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.reduce(:*)
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.reduce(function(a, b) {
  return a * b;
});
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.select { |numbers| num.odd? }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let divisibleByTwo = function (number) {
  return number % 2 !== 0;
};

let oddNum = array.filter(divisibleByTwo);
```
