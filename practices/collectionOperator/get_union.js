'use strict';

function get_union(collection_a, collection_b) {
  let result = collection_a;
  collection_b.forEach(b => {
    let exit = result.find(item => item === b);
    if (!exit) {
      result.push(b);
    }
  });
  return result;

}

module.exports = get_union;

