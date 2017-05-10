'use strict';

function compute_average(collection) {
  return collection.reduce((a, b) => a + b, 0) / collection.length;
}

module.exports = compute_average;

