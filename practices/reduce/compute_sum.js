'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((a, b) => a + b, 0);
}

module.exports = calculate_elements_sum;

