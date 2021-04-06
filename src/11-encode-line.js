/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const arr2 = [];
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (String(arr[i]) === String(arr[i + 1])) {
      count++;
    } else {
      if (count === 1) {
        arr2.push(arr[i]);
      } else {
        arr2.push(String(count) + arr[i]);
      }
      count = 1;
    }
  }
  return arr2.join('');
}

module.exports = encodeLine;
