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
They are pretty similar, both allow for push to add an element to the end of an array.  Ruby requires less notation, you can write new_array.push "new thing" that will be added, but in javascript you have to write newArray.push("new thing").  The also both allow you to pass multiple thigns at once into .push(), like .push(1, 3, "shoes")

```

Differences:

```md
One of the best things about Ruby is there are a lot of ways to push new elements, including by using << which isn't available at all in js. In Ruby new_array << "new thing" << "more things"
will add two new items to the array.

You can also do new_array.push("thing").push("socks") in Ruby but not in js.

In Ruby you can also use .push *other_array to append an array to another array without having to use .flatten, which you also cannot do in js.
```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
They both allow you to use .pop to removed elements from the end of an array, but in Ruby it is .pop and in js it is .pop().
```

Differences:

```md
In ruby you can pass a parameter to .pop(num) and return the number of element you want removed from the end of the array.
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
For both you can use .shift to remove elements from an array from the start of the array.```

Differences:

```md
In ruby you can use new_array.shift(2) to remove multipe items from an array, like the first two elements.

In js you can only use .shift() to remove one element at a time.
```

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
You can use .unshift() in both ruby and js to add one element or multiple elements by doing array.unshift(1, 2, 3), to add as many things as you like, in order, to the start of an array.
```

Differences:

```md
I can't find anythign else interesting that seperates the two. ```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.map! {|x| x**2}
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArray = array.map(function(x) {return x*x})
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
newArray = array.reduce(function(acc, val){return acc*val})
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.select { |num| num.odd? }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
.filter(function(num){return num%2 === 1})
```
