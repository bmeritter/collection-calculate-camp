'use strict';

const increase = (number_a, number_b) => {
  let result = [];
  for (let i = number_a; i <= number_b; ++i) {
    result.push(i);
  }
  return result;
};

const decrease = (number_a, number_b) => {
  let result = [];
  for (let i = number_a; i >= number_b; --i) {
    result.push(i);
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
