/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
    // given: TWO STRINGS
    // output: ONE STRING showing EACH CHAR USED IN ORDER
    // Constraints: NO SPACES / NO DUPLICATES
    //vars
    var stringD1 = string1.split('');
    var stringD2 = string2.split('');
    var output = [];
    // Iterate Twice
    for (var i = 0; i < stringD1.length; i++) {
        // Convert the each of the first string-chars to a char-value and test it on string 2
        var curChar = stringD1[i];
        for (var j = 0; j < stringD2.length; j++) {
            if (curChar === stringD2[j] && curChar !== output[j]) {
                output.push(curChar);
            }
        }
    };
    output = output.toString();
    return output;
};

commonCharacters('acexivou', 'aegihobu');
// Returns: 'aeiou'