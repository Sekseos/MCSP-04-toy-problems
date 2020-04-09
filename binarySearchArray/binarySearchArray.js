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

var binarySearch = function(array, target) { //LOGARITHMIC : O(logn)
  // Binary Search Algorithm
  /* 
  * Binary search compares the target value 
  *  to the middle element of the array.
  */
    //** ALWAYS AVOID RECURSION **/

  /* NOTES:
  * 1. Checkiong if greater or less than.
  * 2. Split the array on each iteration
  * 3. Hold vars for first and last index
  * 
  */
  
  //Get the first index - create a var
  //Get the last index - create a var

  
  // let last = array.length - 1;
  // let first = 0;
  // let result = null;
  // while (middle !== target) {
  //   let middle = Math.floor(last / 2);
  //   console.log("Current Guess:", array[middle]);
  //   console.log("Last:", last, " First:", first, " middle:", middle);
  //   if (target < array[middle]) {
  //     last = middle;
  //   } 
  //   if (target > array[middle]) {
  //     first = middle;
  //   } 
  //   if (target === array[middle]){
  //     result = array[middle];
  //   }
  // }
  // return result;
};

var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // 3
var index = binarySearch([1, 2, 3, 4, 5], 8);
console.log(index); // null
