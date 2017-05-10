'use strict';

function median_to_letter(collection) {
  let rows = [''], cols = [];
  for (let i = 97; i < 123; ++i) {
    rows.push(String.fromCharCode(i));
    cols.push(String.fromCharCode(i));
  }
  let mid = collection[parseInt(collection.length / 2)];

  return rows[parseInt((mid - 1) / 26)] + cols[parseInt((mid - 1) % 26)];
}

module.exports = median_to_letter;
