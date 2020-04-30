// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false
// str: "[{]}"                    |   false
function balancedBrackets(str) {
  // Create a boolean
  let boolean = true;
  //Create a boolean checker
  let bBrackets = {
    par: 0,
    curly: 0,
    square: 0
  }
  // iterate the str
  // check each char for a bracket
  // check the bracket object for even numbers
  // return if there are any odd numbers
  for (let i = 0; i < str.kength; i++) {
    if (str[i] === "(" || str[i] === ")") {
      bBrackets[par] += 1;
    };
    if (str[i] === "{" || str[i] === "}") {
      bBrackets[curly] += 1;
    };
    if (str[i] === "[" || str[i] === "]") {
      bBrackets[square] += 1;
    };
  }
  for (key in bBrackets) {
    if (bBrackets[key] % 2 !== 0) {
      boolean = false;
    }
  }
  return boolean;
}

// Test

let str1 = "(23 + 22)";
let str2 = ")46";
let str3 = "{}";
let str4 = "{ 432 ( }";
let str5 = "[]";

console.log("This is str1: ", balancedBrackets(str1));
console.log("This is str2: ", balancedBrackets(str2));
console.log("This is str3: ", balancedBrackets(str3));
console.log("This is str4: ", balancedBrackets(str4));
console.log("This is str5: ", balancedBrackets(str5));

// Attempt 2
function bb(str) {
  obj = {};
  if (str.fromCharCode(40) || str.fromCharCode(41)) {
      obj.par = obj.par + 1 || 1;
  };
  

}
