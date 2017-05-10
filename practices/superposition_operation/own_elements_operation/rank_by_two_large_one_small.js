'use strict';

const splicArray = (collection) => {
  let result = [];
  for (let i = 0; i < collection.length; i + 2) {
    result.push(collection.splice(0, 3));
  }
  return result;
};

function rank_by_two_large_one_small(collection) {
  let result = splicArray(collection.sort((a, b) => a - b));
  for (let i = 0; i < result.length; ++i) {
    if (result[i].length === 3) {
      let first = result[i].shift();
      result[i].push(first);
    }
  }
  return result.reduce((a, b) => a.concat(b), []);
}
module.exports = rank_by_two_large_one_small;
