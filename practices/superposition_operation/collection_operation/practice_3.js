'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter(item => item % 2 !== 0).map(item => item * 3 + 5).reduce((a, b) => a + b, 0);
}

module.exports = hybrid_operation_to_uneven;

