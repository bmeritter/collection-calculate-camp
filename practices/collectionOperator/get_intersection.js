'use strict';

function get_intersection(collection_a, collection_b) {
  let result = [];
  collection_b.forEach(item => {
    let exit = collection_a.find(a => a === item);
    if (exit) {
      result.push(exit);
    }
  });
  return result;
}

module.exports = get_intersection;
