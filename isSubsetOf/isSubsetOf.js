/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
 */

Array.prototype.isSubsetOf = function(arr) {
  namedArr = new Object;
  Array.forEach((val) => {
    namedArr.val = Array[val]; 
  });
  console.log(namedArr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (this[i] === arr[j]) {
        return true;
      } 
    }
  }
  return false;
};

//TEST // FAILS AFTER FIRST ELEMENT IS CHECKED
var b = ['merge','reset','reset']
var c = ['done', 'none', 'this']

console.log(b.isSubsetOf(['reset','merge','add','commit'])); // true
console.log(c.isSubsetOf(['reset', 'merge', 'add', 'commit'])); // false
