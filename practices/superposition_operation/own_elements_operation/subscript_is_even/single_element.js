'use strict';
var single_element = function (collection) {
  collection = collection.filter((item, index) => (index + 1) % 2 === 0);
  let result = [];
  collection.forEach(item => {
    let exit = result.find(r => r.key === item);
    if (exit) {
      exit.count++;
    } else {
      result.push({key: item, count: 1});
    }
  });
  return result.filter(item => item.count === 1).map(item => item.key);
};
module.exports = single_element;
