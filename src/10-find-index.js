/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let curr = [0, Math.round(array.length / 2), array.length];
  let i = 0;
  while (array[curr[1]] !== value && i < 1000) {
    if (array[curr[1]] > value) {
      curr = [curr[0], Math.floor((curr[0] + curr[1]) / 2), curr[1]];
    } else {
      curr = [curr[1], Math.round((curr[2] + curr[1]) / 2), curr[2]];
    }
    i++;
  }
  return curr[1];
}

module.exports = findIndex;
