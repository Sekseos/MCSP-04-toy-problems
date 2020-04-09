/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 *
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/

// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.
var testingTransform = function(array) {
  var transform = [];

  for (var i = 0; i < array.length; i++) {
    transform.push({ value: array[i], i: i });
  }

  return transform;
};

var insertionSort = function(array) {
  //PSEUDO
  // My objective is to check each element against the last sorted element - Starting with element 0.
  // Nested Loops. Outer Loop is (SecondIndex --> Array-Length), Inner Loop is (FirstIndex --> OuterIndex)
  // Check the Outer value against the inner value.
  // Greater than? Nothing
  // Less Than? - 
for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < i; j++) {

  }
}

  return array;
};

// TESTS
let sortedArr = [4,1,5,6,7,8,9];
let unsortedArr = [3,8,5,9,1,7,2,6,4];

console.log("Sorted Test: ", testingTransform(sortedArr)); // Expect [1,4,5,6,7,8,9]
console.log("Unsorted Test: ", testingTransform(unsortedArr)); // Expect [1,2,3,4,5,6,7,8,9]
