'use strict';
var single_element = function (collection) {
  collection = collection.filter((item, index) => (index + 1) % 2 === 0);
  let result = [];
  collection.forEach(item => {
    if (result.indexOf(item) !== -1) {
      result.splice(result.indexOf(item), 1);
    } else {
      result.push(item);
    }
  });
  return result;
};
module.exports = single_element;
