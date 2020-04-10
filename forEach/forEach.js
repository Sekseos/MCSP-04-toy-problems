// Your task is to reimplement the function forEach.

// As input, forEach takes two parameters.

// An array
// A function
// As output, forEach returns nothing.

// forEach should call its input function on each element contained in the input array.
// Observe these two examples. PLEASE NOTE both do the same thing.

// forEach([1,2,3],console.log); --> logs 1, 2, 3
// forEach(['a','b','c'],function logger(element){console.log(element)}); --> logs 'a', 'b', 'c'

function forEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

forEach([1,2,3],console.log); // --> logs 1, 2, 3
forEach(['a','b','c'],function logger(element){console.log(element)}); // --> logs 'a', 'b', 'c'