/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  const mymap1 = new Map();
  const mymap2 = new Map();
  for (let i = 0; i < arr1.length; i++) {
    if (!mymap1.get(String(arr1[i]))) {
      mymap1.set(String(arr1[i]), 1);
    } else {
      mymap1.set(String(arr1[i]), 1 + mymap1.get(String(arr1[i])));
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!mymap2.get(String(arr2[i]))) {
      mymap2.set(String(arr2[i]), 1);
    } else {
      mymap2.set(String(arr2[i]), 1 + mymap2.get(String(arr2[i])));
    }
  }
  mymap1.forEach((value, key) => {
    if (mymap2.get(key)) {
      sum += Math.min(value, mymap2.get(key));
    }
  });
  return sum;
}

module.exports = getCommonCharacterCount;
