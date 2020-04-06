/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function(array, target) {
  // Binary Search Algorithm
  /* 
  * Binary search compares the target value 
  *  to the middle element of the array.
  */
    //Iterate (Recurse)
    //create a search variable equal to the middle value OR null
      //BASE CASE: check search var against null
        //YES -> Return the search var
        //NO -> Repeat
    //check the search var against the target var
      //YES -> return the search var's index
      //NO -> Repeat

  /* NOTES:
  * 1. Checkiong if greater or less than.
  * 2. Split the array on each recursion
  * 
  * 
  */

  inner = (arr, tar) => {
    let search = Math.ceil(array[array.length - 1] / 2);
    console.log("Searching... : ", search);
    if (search <= 1) {
      return null;
    }
    if (search === target) {
      return search;
    }
    search < target ? 
        inner(array.splice(array[0], search), target) 
        : inner(array.splice(search, array.length - 1), target);
  }
  return inner(array, target);
};

var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // 3
var index = binarySearch([1, 2, 3, 4, 5], 8);
console.log(index); // null
