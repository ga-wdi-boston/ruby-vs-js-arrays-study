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
<!-- your answer here -->
The method can be used to insert a value to both languages.
```

Differences:

```md
<!-- your answer here -->
In ruby, we can also use "<<" instead of .push to push a value. The method is also not limited to one value, and
can be increased using multiple "<<" or some kind of operator
```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
<!-- your answer here -->
both will delete the last item/value in the array
```

Differences:

```md
<!-- your answer here -->
JS will only remove one item at the end while Ruby doesn't have such limitations; we can pass
in some kind of parameter to state how many we want to remove, or explicitly state what we want to remove.
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
<!-- your answer here -->
both will remove the first item from the array
```

Differences:

```md
<!-- your answer here -->
similar to differences in pop()
```

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
<!-- your answer here -->
both will add the something to the beginning of the array, and can take as many arguments
as desired
```

Differences:

```md
<!-- your answer here -->
not sure about this one
```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# your answer here
new_array = array.map { |num| num**2 }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// your answer here
const newArray = array.map(function(num){
  num * num
})
```

## Array#reduce vs. Array.prototype.reduce()

Using Ruby's and JavaScript's `reduce` Array methods, find the product of the
numbers in the given array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# your answer here
new_array = (1..10).reduce(:+)
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// your answer here
array.reduce(function(acc, val){
  return acc + val
})
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# your answer here
array.select { |num| num.odd? }
```

JavaScript:
not sure if I did this right
```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const oddNum = array.filter(function(array){
  for (let i = 0; i < array.length; i++) {
    return array[i] % 2 !== 1
  }
})
// your answer here
```
