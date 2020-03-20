// Consider an array of sheep where some sheep may be missing from their place.
//We need a function that counts the number of sheep present in the array(true means present).

// For example,

//     [true, true, true, false,
//         true, true, true, true,
//         true, false, true, false,
//         true, false, false, true,
//         true, true, true, true,
//         false, false, true, true]
// The correct answer would be 17.

//I: An array of sheepo (Booleans)
//O: a number (Number of sheepo present)

var countingSheep = function(array){
  let present = 0;
  let notPresent = 0;
  for (var i = 0; i < array.length; i++) {
    notPresent++;
    array[i] === true ? present++ : console.log(`Sheepo Number: ${notPresent} = Not Present`);
  }
  return present;
};

var myArr = [true, true, true, false,
        true, true, true, true,
        true, false, true, false,
        true, false, false, true,
        true, true, true, true,
        false, false, true, true];

console.log("# of Sheepo currently in class is ", countingSheep(myArr));
