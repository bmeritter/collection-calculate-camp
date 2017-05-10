'use strict';

function get_letter_interval_2(number_a, number_b) {
  let rows = [''], cols = [], result = [];
  for (let i = 97; i < 123; ++i) {
    rows.push(String.fromCharCode(i));
    cols.push(String.fromCharCode(i));
  }

  if (number_a <= number_b) {
    for (let i = number_a - 1; i < number_b; ++i) {
      let row = parseInt(i / 26);
      let col = parseInt(i % 26);
      result.push(rows[row] + cols[col]);
    }
    return result;
  } else {
    for (let i = number_a - 1; i > number_b - 2; --i) {
      let row = parseInt(i / 26);
      let col = parseInt(i % 26);
      // console.log(i, col)
      // console.log(String.fromCharCode(col+96))
      // console.log(rows[row] + cols[col])
      result.push(rows[row] + cols[col]);
    }
    return result;
  }
}

console.log(get_letter_interval_2(53, 20))
module.exports = get_letter_interval_2;

