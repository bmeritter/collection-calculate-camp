'use strict';

function double_to_one(collection) {

  let result = [];
  collection.reduce((a, b) => a.concat(b), []).forEach(item => {
    let exit = result.find(r => r === item);
    if (!exit) {
      result.push(item);
    }
  });
  return result;
}

module.exports = double_to_one;
