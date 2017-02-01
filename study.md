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
you can use '.push' for both and specify the index and element```

Differences:

```md
in ruby, you can use also do name_of_array[4] = 'max'  ||   name_of_array.push[4] = 'max'
js would be nameOfArray.push(4, 'max');
```

## Array#pop vs. Array.prototype.pop()

What are the similarities and differences between Ruby's and JavaScript's `pop`
Array methods?

Similarities:

```md
both use '.pop'
```

Differences:

```md
you have to use write '.pop();' for js but ruby you don't, just .pop is fine.
```

## Array#shift vs. Array.prototype.shift()

What are the similarities and differences between Ruby's and JavaScript's
`shift` Array methods?

Similarities:

```md
both use '.shift'
```

Differences:

```md
you have to use write '.shift();' for js but ruby you don't: just .shift is fine.
```

## Array#unshift vs. Array.prototype.unshift()

What are the similarities and differences between Ruby's and JavaScript's
`unshift` Array methods?

Similarities:

```md
both use '.unshift'
```

Differences:

```md
the only difference is that js needs ';' at the end.'```

## Array#map vs. Array.prototype.map()

Using Ruby's and JavaScript's `map` Array methods, create a new array consisting
of the squares of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.map { |i| o * o }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.map((x) => x * x)
```

## Array#reduce vs. Array.prototype.reduce()

Using Ruby's and JavaScript's `reduce` Array methods, find the product of the
numbers in the given array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.inject(0) { |m, o| m + o }
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.reduce((m, o) => m + o, 0)
```

## Array#select vs. Array.protoype.filter()

Using Ruby's `select` Array method and JavaScript's `filter` method, create a
new array consisting of the odd numbers of the existing array.

Ruby:

```ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.select { |o| o > 1 }

the below code is for me for a later reference:
def create_1_to_10_odd_array
    array = [1]
    i = 3
    while i < 10
        array.push i
        i += 2
    end

    array
end
```

JavaScript:

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.filter((x) => x % 2 != 0)
```
