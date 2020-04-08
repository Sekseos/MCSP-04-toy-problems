// INSTRUCTIONS
// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

//** THIS VERSION is always O(n^2) **/
// function bubbleSort(array) { 
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j] > array[j + 1]) {
//         let curr = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = curr;
//       }
//     }
//   }
//   return array;
// };

// PSEUDO
// Boolean Var initialized at false
// While the boolean is false
  // Boolean = true
  // Iterate
  // Check current element > next element
  //YES? => Switch the two elements && Boolean = false
  //NO? ==> Keep going
// Return the input array

//** THIS VERSION IS BEST-CASE: O(n) WORST-CASE: O(n^2) **/
let bubbleSort = (array) => {
  let sorted = false;
  while (!sorted) { // if(false) = truthy <---> if(!false) = falsey
    sorted = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let current = array[i];
        array[i] = array[i + 1];
        array[i + 1] = current;
        sorted = false;
      }
    }
  }
  return array;
};

// TEST:
let sortedArr = [1,4,5,6,7,8,9];
let unsortedArr = [3,8,5,9,1,7,2,6,4];

console.log("Sorted Test: ", bubbleSort(sortedArr)); // Expect [1,4,5,6,7,8,9]
console.log("Unsorted Test: ", bubbleSort(unsortedArr)); // Expect [1,2,3,4,5,6,7,8,9]
