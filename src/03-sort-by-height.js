/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const barr = arr;
  for (let i = 0; i < barr.length; i++) {
    const ari = barr[i];
    if (ari !== -1) {
      for (let j = i; j < barr.length; j++) {
        const arj = arr[j];
        if (barr[i] > barr[j] && barr[j] !== -1) {
          barr[i] = arj;
          barr[j] = ari;
          i = 0;
          break;
        }
      }
    }
  }
  return barr;
}

module.exports = sortByHeight;
