//Create a function that takes in an array with array elements
//Your function should return a single array with non-array elements
// Example:
// flatten([1,['a', 2, [8, true], 7]]) returns [1, 'a', 2, 8, true, 7]

function flatten(array) {
  //I: An array of an array of an array
  //O: A single array
    // Return a reducer that takes in the array, a function that checks if the element is an array and sets it to a recursion or continues the reducer.
    // Finally return the reduced array.
  return array.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
};

var array1 = [1,['a', 2, [8, true], 7]];
console.log(flatten(array1));
