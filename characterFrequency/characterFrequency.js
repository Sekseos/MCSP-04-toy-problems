// Write a function that takes as its input a string
// and returns an array of arrays as shown below
// sorted in descending order by frequency
// and then by ascending order by character.

// "aaabbc" => [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// "mississippi" => [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// "" => [ ]

function characterFrequency(string) {
  if (string === "") {
    return [];
  };
  var newArr = string.split('');
  var final = [];
  for (var i = 0; i < newArr.length; i++) {
    var curChar = newArr[i];
    var count = 0;
    var newArr2 = [];
    for (var j = 0; j < newArr.length; j++) {
      if (curChar === newArr[j] && curChar !== null) {
        count++;
        newArr[j] = null;
      }
    };
    if (curChar !== null) {
      newArr2.push(curChar);
      newArr2.push(count);
      final.push(newArr2);
    }
  };
  return final;
}

// Unfortunately I couldnt sort the array by descending order yet.
/**
* TODO: Create two seperate placeholder arrays
* (one for count and one for curChar) in order to 
* sort by descending order before pushed into final array
*/

console.log(characterFrequency("aaabbc")); //=> [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
console.log(characterFrequency("mississippi")); //=> [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
console.log(characterFrequency("")); //=> [];
