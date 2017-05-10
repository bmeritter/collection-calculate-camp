'use strict';

function amount_even(collection) {
  return collection.filter(item => item % 2 === 0).reduce((a, b) => a + b, 0);
}

module.exports = amount_even;
