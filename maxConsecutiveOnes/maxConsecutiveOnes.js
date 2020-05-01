// Write a function that takes in an array of numbers and returns the maximum number of consecutive 1s

//maxConsecutiveOnes([1,1,2,0,3,1,1,1,1,5,6,3]) returns 4

function maxConsecutiveOnes(array) {
  //Main counter that holds our end-game info
  let count = 0;
  //current count
  let curCount = 0;
  //iterate the array
  for (let i = 0; i < array.length; i++) {
    // Increase the count if the number is 1 otherwise set the main count to the highest achieved number and reset current count to 0
    if (array[i] !== 1) {
      if (curCount > count) {
          count = curCount;
      };
      curCount = 0;
    } else {
      curCount++;
    }
  }
  return count;
}

maxConsecutiveOnes([1,1,2,0,3,1,1,1,1,5,6,3])