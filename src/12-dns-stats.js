/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  for (let i = 0; i < domains.length; i++) {
    const arr = domains[i].split('.').reverse();
    arr.forEach((el, k) => {
      arr[k] = String('.') + String(el);
    });
    for (let l = 1; l < arr.length; l++) {
      arr[l] = String(arr[l - 1]) + String(arr[l]);
    }
    for (let j = 0; j < arr.length; j++) {
      if (obj[arr[j]]) {
        obj[arr[j]] += 1;
      } else {
        obj[arr[j]] = 1;
      }
    }
  }
  return obj;
}

module.exports = getDNSStats;
