'use strict';

function compute_median(collection) {
  collection = collection.sort((a, b) => a - b);
  if (collection.length % 2 === 0) {
    return (collection[parseInt(collection.length / 2) - 1] + collection[parseInt(collection.length / 2)] ) / 2;
  } else {
    return collection[parseInt(collection.length / 2)];
  }
}

module.exports = compute_median;


