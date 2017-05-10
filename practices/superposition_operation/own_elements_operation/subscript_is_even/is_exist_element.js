'use strict';
var is_exist_element = function (collection, element) {
  let index = collection.indexOf((element));
  if (index % 2 !== 0) {
    return false;
  }
  return true;

};
module.exports = is_exist_element;
