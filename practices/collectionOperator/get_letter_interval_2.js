'use strict';

const getLetters = () => {
  let rows = [''], cols = [];
  for (let i = 97; i < 123; ++i) {
    rows.push(String.fromCharCode(i));
    cols.push(String.fromCharCode(i));
  }
  return {cols, rows};
};

const increase = (number_a, number_b) => {
  let result = [];
  let {cols, rows} = getLetters();
  for (let i = number_a - 1; i < number_b; ++i) {
    let row = parseInt(i / 26);
    let col = parseInt(i % 26);
    result.push(rows[row] + cols[col]);
  }
  return result;
};

const decrease = (number_a, number_b) => {
  let result = [];
  let {cols, rows} = getLetters();
  for (let i = number_a - 1; i > number_b - 2; --i) {
    let row = parseInt(i / 26);
    let col = parseInt(i % 26);
    result.push(rows[row] + cols[col]);
  }
  return result;
};

function get_letter_interval_2(number_a, number_b) {


  if (number_a <= number_b) {
    return increase(number_a, number_b);
  }
  return decrease(number_a, number_b);
}

module.exports = get_letter_interval_2;

