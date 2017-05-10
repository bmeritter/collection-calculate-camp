'use strict';

function average_uneven(collection) {
  let unevens = collection.filter(item => item % 2 !== 0);
  return unevens.reduce((a, b) => a + b, 0) / unevens.length;
}

module.exports = average_uneven;
