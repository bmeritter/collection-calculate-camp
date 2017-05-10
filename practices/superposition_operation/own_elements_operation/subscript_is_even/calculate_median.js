'use strict';
var calculate_median = function (collection) {
  collection = collection.filter(item => item % 2 === 0);
  if (collection.length % 2 === 0) {
    return (collection[parseInt(collection.length / 2) - 1] + collection[parseInt(collection.length / 2)] ) / 2;
  } else {
    return collection[parseInt(collection.length / 2)];
  }
};

module.exports = calculate_median;
