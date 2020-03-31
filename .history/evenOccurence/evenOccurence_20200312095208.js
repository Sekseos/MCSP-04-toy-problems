/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
 */

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 */



var evenOccurrence = function(arr) {
  // Two Loops. One nested. therefore this equation uses 
  // exponential time complexity to check each element against one another, 
  // it then adds to the count and checks the count for an even number. It returns that number if it is.
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        count++;
      }
    }
    if (count === 0) {
      return null;
    }
    if (count % 2 === 0) {
      return arr[i];
    }
  }
};

var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4
