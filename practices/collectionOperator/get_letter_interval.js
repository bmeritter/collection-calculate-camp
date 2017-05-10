'use strict';

const increase = (number_a, number_b) => {
  let result = [];
  for (let i = number_a + 96; i <= number_b + 96; ++i) {
    result.push(String.fromCharCode(i));
  }
  return result;
};

const decrease = (number_a, number_b) => {
  let result = [];
  for (let i = number_a + 96; i >= number_b + 96; --i) {
    result.push(String.fromCharCode(i));
  }
  return result;
};

function get_letter_interval(number_a, number_b) {
  if (number_a <= number_b) {
    return increase(number_a, number_b);
  }
  return decrease(number_a, number_b);
}

module.exports = get_letter_interval;
