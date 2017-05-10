'use strict';

function even_to_letter(collection) {
  return collection.filter(item => item % 2 === 0).map(item => String.fromCharCode(96 + item));
}

module.exports = even_to_letter;
