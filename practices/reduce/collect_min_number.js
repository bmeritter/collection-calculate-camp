'use strict';

function collect_min_number(collection) {
  return collection.reduce((a, b) => a < b ? a : b, collection[0]);
}

module.exports = collect_min_number;

