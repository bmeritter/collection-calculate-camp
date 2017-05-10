'use strict';

function hybrid_operation(collection) {
  return collection.map(item => item * 3 + 2).reduce((a, b) => a + b, 0);
}

module.exports = hybrid_operation;

