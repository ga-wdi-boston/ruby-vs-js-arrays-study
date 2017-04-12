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
array = [] means the same thing in Ruby or Javascript.  It's an empty array.
array[1] = 'b' means the same thing in Ruby or Javascript.  It's referring to the
second item in the array (which is 'b')
```

Differences:

```md
Ruby uses the shovel to add something to the array
array << "a"
Javascript uses the push method
array.push("a")

Ruby uses array[-3] to find the item located in the third position from the end of the array.
With Javascript, you'd use something like array_fragment[array_fragment.length -3]
```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
they both use the .pop method
array.pop() removes the last item in the array (Javascript)
array.pop removes the last item in the array (Ruby)
```

Differences:

```md
You can pop more than one item using Ruby.  If you want to remove the last 5
items, type:
array.pop(5)
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
They both remove the first item in an array
```

Differences:

```md
Ruby:  array.shift
Javascript:  array.shift()    needs parenthesis
```

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
array.unshift("a")  Ruby adds specified items to the beginning of the array
array.unshift("a")  Javascript adds specified items to the beginning of the array
```

Differences:

```md
I don't see any differences!
```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.map { |num| num**2 }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

results = array.map(function (arrayCell) {
    Return arrayCell ** 2}
)
```

## Array#reduce vs. Array.prototype.reduce()

Using Ruby's and JavaScript's `reduce` Array methods, find the product of the
numbers in the given array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def array(array)
  array.reduce(0) {|sum, num| sum + num }
end
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(
  function(total, num){ return total + num }
  , 0)
// your answer here
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr_odd=[]
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) == 1) {
        arr.splice(i, 1);
        i = i-1;
    }
}
```
