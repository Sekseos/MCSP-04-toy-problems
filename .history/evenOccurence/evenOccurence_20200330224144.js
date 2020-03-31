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
//** NEW SOLUTION - Time Complexity 0(n) because both loops iterate only once for each element of an n-sized array */
var evenOccurrence = (arr) => {
  // Create an object that counts each array element
  let arrObj = new Object;
  arr.forEach((val) => {
    arrObj[val] = arrObj[val] + 1 || 1;
  })
  // Iterate through the original array and check the count for the current element on the object
  for (let i = 0; i < arr.length; i++) {
    // Store the current array-value
    let currIndex = arr[i];
    // Check that new value's property counterpart in the object for an even property-value
    if (arrObj[currIndex] % 2 === 0) {
      // The first value to come up "true" on the even-occurrence test gets returned
      return currIndex;
    }
  }
  // If nothing is returned from the loop, return null
  return null;
};

// Testing expected outcome
var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4

// Testing null
console.log(evenOccurrence([1,2,3,4,5,6,7]));

// Attempting to break the test
console.log(evenOccurrence([1,2,3,3,3,3,5,2,1,3,4,4])); //  1



 //* Original Answer Below *//
 //* Time complexity is 0(n^2) because each element of the first iteration iterates the entire n-sized array *//
/*
var evenOccurrence = function(arr) {

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
*/

