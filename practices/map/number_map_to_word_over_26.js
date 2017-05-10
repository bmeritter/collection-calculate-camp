'use strict';
var number_map_to_word_over_26 = function (collection) {
  let cols = [], rows = [''];
  for (let i = 97; i < 123; ++i) {
    rows.push(String.fromCharCode(i));
    cols.push(String.fromCharCode(i));
  }
  return collection.map(item => {
    let row = parseInt((item - 1) / 26);
    let col = parseInt((item - 1) % 26);
    return (rows[row] + cols[col]);
  });
};

module.exports = number_map_to_word_over_26;
