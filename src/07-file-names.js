/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const names2 = names;
  for (let i = 0; i < names2.length; i++) {
    for (let j = 0; j < i; j++) {
      if (names2[j] === names2[i]) {
        let l = 1;
        for (let k = 0; k < i; k++) {
          if (names2[k] === `${names2[i]}(${l})`) {
            l++;
            k = 0;
          }
        }
        names2[i] = `${names2[i]}(${l})`;
      }
    }
  }
  return names2;
}

module.exports = renameFiles;
