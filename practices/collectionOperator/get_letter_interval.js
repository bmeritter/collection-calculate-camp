'use strict';

const decrease = (number_a, number_b) => {
  let result = [];
  for (let i = number_a; i <= number_b; ++i) {
    result.push(i);
  }
  return result;
};

function get_letter_interval(number_a, number_b) {
  let result = [];
  if (number_a <= number_b) {
    return decrease(number_a, number_b);
  } else {
    for (let i = number_a; i >= number_b; --i) {
      result.push(i);
    }
    return result;
  }
}

module.exports = get_letter_interval;
