'use strict';

function compute_chain_median(collection) {
  collection = collection.split('->').sort((a, b) => a - b).map(item => parseInt(item));
  if (collection.length % 2 !== 0) {
    return collection[parseInt(collection.length / 2)];
  }
  let len = collection.length / 2;
  let mid = parseInt((len + len + 1) / 2);
  return (collection[mid - 1] + collection[mid]) / 2;
}

module.exports = compute_chain_median;
