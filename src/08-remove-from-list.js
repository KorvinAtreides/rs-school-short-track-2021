/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let arr = l;
  const arr2 = [];
  arr2.push(arr);
  while (arr.next) {
    arr = arr.next;
    arr2.push(arr);
  }
  arr = l;
  let i = arr2.length;
  while (i > 0) {
    if (arr2[i - 1].value === k) {
      if (!arr2[i - 2]) {
        arr2[i - 1] = arr2[i - 1].next;
      } else {
        arr2[i - 2].next = arr2[i - 1].next;
      }
    }
    i--;
  }
  return arr2[0];
}

module.exports = removeKFromList;
