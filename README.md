# Algorithms and Data Structures in JavaScript &mdash;practice


### Binary Search
- - -



Nice article on [Binary search algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm)

#### My implementation in JavaScript

- [x] Binary Search

- [x] Recursive

### How a recursion function works
- We might describe an implementation of an algorithm as being particulary "elegant" if it solves a problem in way that is both interesting and easy to visualize.

- The technique of recursion is a very common way to implement such an "elegant" solution.

- The definition of a recursive function is one that, as part of its execution, invokes itself.

Example: 
- The factorial function `(n!)` is defined over all positive integers.
- `n!` equals all of the positive integers less than or equal to n, multiplied together.
- Thinking in terms of programming, we'll define the mathematical function `n!` as `fact(n)`

```c
fact(1) = 1
fact(2) = 2 * 1
fact(3) = 3 * 2 * 1
fact(4) = 4 * 3 * 2 * 1
fact(5) = 5 * 4 * 3 * 2 * 1

// more elegant solution
fact(n) = n * fact(n - 1);

```

### Parts of a recursive function
- Every recursive function has two cases that could apply, given any input.
  1. The _base case_, which when triggered will terminate the recursive process
  2. The _recursive case_, which is where the recursion will actually occur

[Here is my code](https://github.com/wehelie/JSAlgDos/blob/master/binarysearch/binarysearch.js)

