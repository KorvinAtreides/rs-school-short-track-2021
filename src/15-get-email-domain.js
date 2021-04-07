/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = email.split('').reverse();
  const pos = arr.findIndex((el) => el === '@');
  return arr.slice(0, pos).reverse().join('');
}

module.exports = getEmailDomain;
