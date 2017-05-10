'use strict';

function get_letter_interval(number_a, number_b) {
  let result = [];
  if (number_a <= number_b) {
    for (let i = number_a + 96; i <= number_b + 96; ++i) {
      result.push(String.fromCharCode(i));
    }
    return result;
  } else {
    for (let i = number_a + 96; i >= number_b + 96; --i) {
      result.push(String.fromCharCode(i));
    }
    return result;
  }
}

module.exports = get_letter_interval;
