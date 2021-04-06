/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2[i] = '';
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        arr2[i] += String(arr[j]);
      }
    }
  }
  let max = 0;
  for (let j = 0; j < arr2.length; j++) {
    if (arr2[j] > max) {
      max = arr2[j];
    }
  }
  return Number(max);
}

module.exports = deleteDigit;
