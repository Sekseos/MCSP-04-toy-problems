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
  var output;
  var occur = 0;
  for (var i = 0; i < arr.length; i++) {
    var count = arr[i]
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] === count) {
        occur += 1;
      }
    }
    occur -= 1;
    if (occur === 0) {
      console.log(null);
    }
    if (occur % 2 === 0) {
      console.log(arr[i]);
    }
  }
};

var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4
