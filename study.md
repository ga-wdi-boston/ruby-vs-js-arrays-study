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

```md
Similarities:
They both use dot notation
they both add an argument on to the end of an array


```

Differences:

```md
You dont nessarily need to put the parenthases in Ruby
there is also short hand in ruby to 'Shovel' something onto and array '<<' which
is the same thing as push
```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
They both use dot notation
they both remove the last item in an array
```

Differences:

```md
You dont nessarily need to put the parenthases in Ruby
you can pass a number in ruby within the parens and that will remove the nth
number that you specify. Rather than referencing it by index.
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
They both use dot notation
the both remove items from an array.
both start at the beginning of the array if its not specified
```

Differences:

```md
You dont nessarily need to put the parenthases in Ruby
Ruby returns the array elemeents that were removed where js returns the array
that is still left
```

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
They both use dot notation
the both add items to an array.
both start at the beginning of the array if its not specified
you can pass more that one thing in both using parens
```

Differences:

```md
You dont nessarily need to put the parenthases in Ruby
ruby returns the array. where as js returns the new length value of the array
```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.map {|num| num ** 2}
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.map((num) => {
  return num ** 2
})
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

array.reduce((p,n) => {
  return p += n
})
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.select { |num|  num.odd?  }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.filter((n)=> {
  if (n % 2 != 0) {
    return n
  }
})
```
