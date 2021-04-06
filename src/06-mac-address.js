/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (n.length !== 17) {
    return false;
  }
  if (n[2] !== '-' || n[5] !== '-' || n[8] !== '-' || n[11] !== '-' || n[14] !== '-') {
    return false;
  }
  const str = '09AF';
  for (let i = 0; i < n.length; i++) {
    if (i !== 2 && i !== 5 && i !== 8 && i !== 11 && i !== 14) {
      if (
        n.charCodeAt(i) < str.charCodeAt(0) || n.charCodeAt(i) > str.charCodeAt(3)
      ) {
        return false;
      }
      if (
        n.charCodeAt(i) > str.charCodeAt(1)
        && n.charCodeAt(i) < str.charCodeAt(2)
      ) {
        return false;
      }
    }
  }
  return true;
}

module.exports = isMAC48Address;
