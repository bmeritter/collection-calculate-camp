'use strict';

function choose_no_repeat_number(collection) {
  let result = [];
  collection.filter(item => {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  });
  return result;
}

module.exports = choose_no_repeat_number;
